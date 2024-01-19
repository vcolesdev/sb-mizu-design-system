import type { Meta, StoryObj } from "@storybook/react";
import LeadOld from "./LeadOld";

/* Settings */

const meta: Meta<typeof LeadOld> = {
  component: LeadOld,
  title: "Old/LeadOld",
  tags: ["autodocs"],
  args: {
    children: "This is some leadOld text.",
    textSize: "md",
  },
  render: (args) => <LeadOld {...args}>This is some lead text.</LeadOld>,
};

/* Exports */

export default meta;
type Story = StoryObj<typeof meta>;

/* Stories */

export const LeadDefault: Story = {
  name: "Default",
  args: {
    textSize: "md",
  },
  render: (props) => <LeadOld {...props}>{props.children}</LeadOld>,
};

export const LeadSmall: Story = {
  name: "Small",
  args: {
    textSize: "sm",
  },
  render: (props) => <LeadOld {...props}>{props.children}</LeadOld>,
};

export const LeadMedium: Story = {
  name: "Medium",
  args: {
    textSize: "md",
  },
  render: (props) => <LeadOld {...props}>{props.children}</LeadOld>,
};

export const LeadLarge: Story = {
  name: "Large",
  args: {
    textSize: "lg",
  },
  render: (props) => <LeadOld {...props}>{props.children}</LeadOld>,
};

export const LeadSizes: Story = {
  name: "Sizes",
  render: () => (
    <>
      <LeadOld textSize="sm">This is some lead text.</LeadOld>
      <LeadOld textSize="md">This is some lead text.</LeadOld>
      <LeadOld textSize="lg">This is some lead text.</LeadOld>
    </>
  ),
};
