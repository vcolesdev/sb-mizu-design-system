import type { Meta, StoryObj } from "@storybook/react";
import Icon, { IconType } from "./Icon";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Elements/Icon",
  args: {
    color: "#000000",
    size: 24,
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const LucidIcon: Story = {
  args: {
    name: "LuBeer",
    type: IconType.Lucide,
  },
  render: (props) => <Icon {...props} />,
};

export const IonIcon: Story = {
  args: {
    name: "IoAddCircleOutline",
    type: IconType.Ion,
  },
  render: (props) => <Icon {...props} />,
};
