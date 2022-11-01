import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@design-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem, maiores similique repellat veritatis deserunt blanditiis eligendi. Omnis reiciendis tempore sapiente cupiditate consectetur dolor ipsa? Nobis perferendis mollitia obcaecati ipsa!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
