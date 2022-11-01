import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@design-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/eduardowinter.png',
    alt: 'Eduado Winter',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
