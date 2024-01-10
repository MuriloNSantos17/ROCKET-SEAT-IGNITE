import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number()
      .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
      .max(60, 'O ciclo precisa ser de no máximo 60 minutos')
  })
  
  
  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function NewCycleForm() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
          task: '',
          minutesAmount: 0,
        }
      });

    return (
        <FormContainer>
            <label htmlFor="task">Vou Trabalhar em</label>
            <TaskInput
                placeholder="Dê um nome para o seu projeto"
                list={"task-suggestions"}
                disabled={!!activeCycle}
                {...register('task')}
                type="text"
                id="task"
            />
            <datalist id="task-suggestions">
                <option value={"Projeto 1"} />
                <option value={"Projeto 2"} />
                <option value={"Projeto 3"} />
            </datalist>
            <label htmlFor="">durante</label>
            <MinutesAmountInput
                {...register('minutesAmount', { valueAsNumber: true })}
                disabled={!!activeCycle}
                id="minutesAmount"
                placeholder="00"
                type="number"
                max={60}
                step={5}
                min={5}
            />

            <span>minutos.</span>
        </FormContainer>
    )
}