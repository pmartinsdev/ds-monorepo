import { StoryObj, Meta } from "@storybook/angular"
import { ButtonComponent } from "@monorepo/angular"

import { resolveResourcesDecorator } from "../.storybook/resolve-resources.decorator"

export default {
  title: "Form/Button",
  component: ButtonComponent,
  decorators: [resolveResourcesDecorator]
} as Meta<ButtonComponent>

export const Default: StoryObj<ButtonComponent> = {
  args: {
    label: 'Button',
  }
} 
