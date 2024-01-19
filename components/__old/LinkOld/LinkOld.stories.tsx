import type { Meta, StoryObj } from "@storybook/react";
import LinkOld from "./LinkOld";

/* Settings */

const meta: Meta<typeof LinkOld> = {
  component: LinkOld,
  title: "Old/LinkOld",
  tags: ["autodocs"],
  args: {
    external: false,
  },
};

/* Exports */

export default meta;
type Story = StoryObj<typeof meta>;

/* Stories */

export const LinkDefault: Story = {
  name: "Default",
  args: {
    children: "Default Link",
    href: "#",
    underline: false,
  },
};

export const LinkUnderline: Story = {
  name: "Underline",
  args: {
    ...LinkDefault.args,
    children: "Underline Link",
    underline: true,
  },
};
