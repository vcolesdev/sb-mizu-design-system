import type { Meta, StoryObj } from "@storybook/react";
import IconOld from "./IconOld";

/* Settings */

const meta: Meta<typeof IconOld> = {
  component: IconOld,
  title: "Old/IconOld",
  args: {
    color: "#000000",
    name: "LuBeer",
    size: 24,
    type: "Lucide",
  },
  argTypes: {
    color: {
      control: {
        type: "color",
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "number",
      },
    },
    type: {
      control: {
        type: "select",
        options: ["Ion", "Lucide"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* Stories */

export const LucidIcon: Story = {
  args: {
    color: "#000000",
    name: "LuBeer",
    size: 24,
  },
  render: (props) => <IconOld {...props} />,
};
