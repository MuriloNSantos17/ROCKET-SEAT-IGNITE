import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";
import { useContext } from "react";

export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext();

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