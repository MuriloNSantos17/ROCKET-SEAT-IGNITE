import { StoryObj, Meta } from "@storybook/react"
import { Text, CheckBox, CheckBoxProps, Box } from "@murilo-nsantos-ui/react"


export default {
    title: 'Typograph/Check Box',
    component: CheckBox,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box as={'label'} css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
                    {Story()}
                    <Text size={'sm'}>Accept terms of use</Text>
                </Box>
            )
        }
    ]
} as Meta

export const Primary: StoryObj<CheckBoxProps> = {
    args: {
    }
}

