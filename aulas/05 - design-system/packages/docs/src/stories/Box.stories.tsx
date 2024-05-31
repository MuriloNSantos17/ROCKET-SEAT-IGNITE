import { StoryObj, Meta } from "@storybook/react"
import { Box, BoxProps, Text } from "@murilo-nsantos-ui/react"


export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
    }
} as Meta

export const Primary: StoryObj<BoxProps> = {
    args: {
        children: (
            <Text>Testando o elemento Box</Text>
        )
    },
    argTypes: {
        children: {
            control: {
                disable: true
            }
        }
    }
}

