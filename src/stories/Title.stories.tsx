import { Story, Meta } from "@storybook/react/types-6-0";

import { Title, ITitleProps } from "./Title";

export default {
  title: "Title",
  component: Title,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ITitleProps> = (args) => <Title {...args} />;

export const Element = Template.bind({});
Element.args = {
  element: "div",
  label: "Title",
};

export const Shadow = Template.bind({});
Shadow.args = {
  textShadow: true,
  label: "Title",
};
