import { StoryObj, Meta } from "@storybook/react"
import { Text, TextProps } from "@murilo-nsantos-ui/react"


export default {
    title: 'Typograph/Text',
    component: Text,
    args: {
        size: 'md',
        children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptates sint aliquam minus ad, nemo culpa iure asperiores praesentium, quam vitae, nesciunt odit. Non architecto praesentium distinctio enim doloremque ea?',
    },
    argTypes: {
        size: {
            options: [
                'xxs',
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                '2xl',
                '4xl',
                '5xl',
                '6xl',
                '7xl',
                '8xl',
                '9xl',
            ],
            control: {
                type: 'inline-radio'
            }
        },
    },
} as Meta

export const Primary: StoryObj<TextProps> = {
}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}
