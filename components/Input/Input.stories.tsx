import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

/* Settings */

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Forms/Input",
  tags: ["autodocs"],
  args: {
    disabled: false,
    label: "First Name",
    name: "firstName",
    placeholder: "Enter your first name",
    type: "text",
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "email", "password", "number", "tel", "url"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* Stories */

export const Default: Story = {
  args: {
    type: "text",
  },
  render: (props) => <Input {...props} />,
};
