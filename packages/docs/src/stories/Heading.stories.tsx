import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@design-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By design the heading will be a `h2`, but that can be altered with the  `as` property.',
      },
    },
  },
}
