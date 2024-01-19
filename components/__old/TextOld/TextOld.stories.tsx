import type { Meta, StoryObj } from "@storybook/react";
import TextOld from "./TextOld";

/* Settings */

const meta: Meta<typeof TextOld> = {
  component: TextOld,
  title: "Old/TextOld",
  tags: ["autodocs"],
  args: {
    children: "This is some text.",
    last: false,
    mbSize: "3",
    size: "base",
    weight: "normal",
  },
  argTypes: {
    uppercase: {
      control: {
        type: "boolean",
        default: false,
      },
    },
    mbSize: {
      control: {
        type: "select",
        options: ["0", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7"],
        default: "3",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl"],
        default: "sm",
      },
    },
    weight: {
      control: {
        type: "select",
        options: ["light", "normal", "medium", "semibold", "bold", "extrabold"],
        default: "normal",
      },
    },
  },
  render: (args) => <TextOld {...args}>This is some default text.</TextOld>,
};

/* Exports */

export default meta;
type Story = StoryObj<typeof meta>;

/* Stories */

export const Default: Story = {
  args: {
    children: "This is some default text.",
  },
  render: (props) => <TextOld {...props}>{props.children}</TextOld>,
};

export const Paragraph: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum.`,
  },
  render: (props) => (
    <div className="flex max-w-2xl">
      <TextOld {...props}>{props.children}</TextOld>
    </div>
  ),
};

export const ParagraphSm: Story = {
  name: "Paragraph - Small",
  args: {
    size: "sm",
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum.`,
  },
  render: (props) => (
    <div className="flex max-w-2xl">
      <TextOld {...props}>{props.children}</TextOld>
    </div>
  ),
};

export const ParagraphLg: Story = {
  name: "Paragraph - Large",
  args: {
    size: "lg",
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum.`,
  },
  render: (props) => (
    <div className="flex max-w-2xl">
      <TextOld {...props}>{props.children}</TextOld>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div>
      <TextOld size="xs">This is some xs text.</TextOld>
      <TextOld size="sm">This is some small text.</TextOld>
      <TextOld size="base">This is some base text.</TextOld>
      <TextOld size="lg">This is some large text.</TextOld>
      <TextOld size="xl">This is some extra large text.</TextOld>
      <TextOld size="2xl">This is some extra extra large text.</TextOld>
      <TextOld size="3xl">This is some extra extra extra large text.</TextOld>
    </div>
  ),
};
