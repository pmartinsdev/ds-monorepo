import { StoryObj, Meta, moduleMetadata } from "@storybook/angular"
import { ButtonModule, ButtonComponent } from "@monorepo/angular"

export default {
  title: "Form/Button",
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule]
    })
  ],
} as Meta<ButtonComponent>

export const Default: StoryObj<ButtonComponent> = {
  args: {
    label: 'Button',

  }
}
