import { Story, Meta } from "@storybook/react/types-6-0";

import { ActionButton, IActionButtonProps } from "./ActionButton";

export default {
  title: "ActionButton",
  component: ActionButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<IActionButtonProps> = (args) => (
  <ActionButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};
