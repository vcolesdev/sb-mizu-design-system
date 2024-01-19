import type { Meta, StoryObj } from "@storybook/react";
import HeadingOld from "./HeadingOld";

/* Settings */

const meta: Meta<typeof HeadingOld> = {
  component: HeadingOld,
  title: "Old/HeadingOld",
  tags: ["autodocs"],
  args: {
    children: "This is a HeadingOld",
    element: "h1",
    size: "h1",
    uppercase: false,
  },
  argTypes: {
    element: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
        default: "h1",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
        default: "h1",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* Stories */

export const Heading1: Story = {
  name: "Heading 1",
  args: {
    element: "h1",
    size: "h1",
  },
  render: (props) => <HeadingOld {...props}>{props.children}</HeadingOld>,
};

export const Heading2: Story = {
  name: "Heading 2",
  args: {
    element: "h2",
    size: "h2",
  },
  render: (props) => <HeadingOld {...props}>{props.children}</HeadingOld>,
};

export const Heading3: Story = {
  name: "Heading 3",
  args: {
    element: "h3",
    size: "h3",
  },
  render: (props) => <HeadingOld {...props}>{props.children}</HeadingOld>,
};

export const Heading4: Story = {
  name: "Heading 4",
  args: {
    element: "h4",
    size: "h4",
  },
  render: (props) => <HeadingOld {...props}>{props.children}</HeadingOld>,
};

export const Heading5: Story = {
  name: "Heading 5",
  args: {
    element: "h5",
    size: "h5",
  },
  render: (props) => <HeadingOld {...props}>{props.children}</HeadingOld>,
};

export const Heading6: Story = {
  name: "Heading 6",
  args: {
    element: "h6",
    size: "h6",
  },
  render: (props) => <HeadingOld {...props}>{props.children}</HeadingOld>,
};
