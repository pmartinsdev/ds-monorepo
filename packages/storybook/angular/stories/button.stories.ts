import { StoryObj, Meta } from "@storybook/angular"
import { ButtonComponent } from "@monorepo/angular"


export default {
  title: "Form/Button",
  component: ButtonComponent,
} as Meta<ButtonComponent>

export const Default: StoryObj<ButtonComponent> = {
  args: {
    label: 'Button',
  }
} 
