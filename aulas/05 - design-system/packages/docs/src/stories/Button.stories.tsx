import { StoryObj, Meta } from "@storybook/react"
import { Button, ButtonProps } from "@murilo-nsantos-ui/react"


export default {
    title: 'Button',
    component: Button,
    args: {
        children: 'Enviar'
    }
} as Meta

export const Primary: StoryObj<ButtonProps> = {
}

export const Big: StoryObj<ButtonProps> = {
    args: {
        size: "big",
    }
}