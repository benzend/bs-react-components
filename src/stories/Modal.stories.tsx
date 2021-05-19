import { Story, Meta } from "@storybook/react/types-6-0";

import { Modal, IModalProps } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<IModalProps> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  backgroundColor: "#0004",
};
