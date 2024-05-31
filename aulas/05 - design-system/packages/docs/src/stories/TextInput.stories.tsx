import { StoryObj, Meta } from "@storybook/react"
import { Box, Text, TextInput, TextInputProps } from "@murilo-nsantos-ui/react"


export default {
    title: 'Typograph/Text Input',
    component: TextInput,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box as={'label'} css={{display:'flex', flexDirection: 'column', gap: '$2'}}>
                    <Text size={'sm'}>E-mail address</Text>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeHolder: 'Type your name'
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'calc.com/'
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    }
}