import { Button, ButtonProps } from "@monorepo/react"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: 'Form/button',
  component: Button,
  args: {
    label: 'Button'
  },
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    label: "Button"
  }
}
