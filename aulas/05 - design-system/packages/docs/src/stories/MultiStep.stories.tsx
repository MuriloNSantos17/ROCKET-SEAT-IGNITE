import { StoryObj, Meta } from "@storybook/react"
import { Box, MultiStep, MultiStepProps } from "@murilo-nsantos-ui/react"


export default {
    title: 'Form/Multi Step',
    component: MultiStep,
    args: {
        currentStep: 1,
        size: 4    
    },
    decorators: [
        (Story) => {
            return (
                <Box as={'label'} css={{display:'flex', flexDirection: 'column', gap: '$2'}}>                    
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta

export const Primary: StoryObj<MultiStepProps> = {
    args:{}
}

export const Full: StoryObj<MultiStepProps> = {
    args:{
        currentStep: 4,
    }
}