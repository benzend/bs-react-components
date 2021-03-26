import { Story, Meta } from "@storybook/react/types-6-0";

import { NormalButton, INormalButtonProps } from "./NormalButton";

export default {
  title: "NormalButton",
  component: NormalButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<INormalButtonProps> = (args) => (
  <NormalButton {...args} />
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
