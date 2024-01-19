import type { Meta, StoryObj } from "@storybook/react";
import ButtonOld from "./ButtonOld";
import { ButtonActions, ButtonSizes, ButtonVariants, ButtonsSquared, ButtonsFullWidth } from "./buttons";

/* Settings */

const meta: Meta<typeof ButtonOld> = {
  component: ButtonOld,
  title: "Old/ButtonOld",
  tags: ["autodocs"],
  args: {
    squared: false,
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "brand", "success", "info", "warning", "danger"],
      },
    },
    hasIcon: {
      control: {
        type: "boolean",
      },
    },
    iconName: {
      control: {
        type: "text",
      },
    },
    iconPosition: {
      control: {
        type: "radio",
        options: ["left", "right"],
      },
    },
    iconSize: {
      control: {
        type: "number",
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg", "xl"],
      },
    },
    type: {
      control: {
        type: "radio",
        options: ["solid", "outline", "ghost"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* Stories */

export const Default: Story = {
  args: {
    size: "md",
    type: "solid",
  },
  render: (props) => <ButtonOld {...props} />,
};

export const Primary: Story = {
  args: {
    ...Default.args,
    label: "Update Client",
    variant: "primary",
  },
  render: (props) => <ButtonOld {...props} />,
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    label: "Download PDF",
    variant: "secondary",
  },
  render: (props) => <ButtonOld {...props} />,
};

export const Brand: Story = {
  args: {
    ...Default.args,
    label: "Create Account",
    variant: "brand",
  },
  render: (props) => <ButtonOld {...props} />,
};

export const Full: Story = {
  name: "Full Width",
  args: {
    ...Default.args,
    children: <span>Full Width Button</span>,
    fullWidth: true,
  },
  render: (props) => <ButtonsFullWidth {...props} />,
};

export const Squared: Story = {
  name: "Squared",
  args: {
    ...Default.args,
    label: "Squared Button",
    squared: true,
  },
  render: (props) => <ButtonsSquared {...props} />,
};

export const IconLeft: Story = {
  name: "Icon - Left",
  args: {
    ...Default.args,
    label: "Icon Button",
    hasIcon: true,
    iconColor: "white",
    iconName: "LuCheck",
    iconPosition: "left",
    iconSize: 16,
    variant: "primary",
  },
  render: (props) => <ButtonOld {...props} />,
};

export const IconRight: Story = {
  name: "Icon - Right",
  args: {
    ...Default.args,
    label: "Icon Button",
    hasIcon: true,
    iconColor: "white",
    iconName: "LuCheck",
    iconPosition: "right",
    iconSize: 16,
    variant: "primary",
  },
  render: (props) => <ButtonOld {...props} />,
};

export const Sizes: Story = {
  name: "Group - Sizes",
  args: {},
  render: ({ label }) => <ButtonSizes label={label} />,
};

export const Variants: Story = {
  name: "Group - Variants",
  args: {},
  render: ({ label }) => <ButtonVariants label={label} />,
};

export const Actions: Story = {
  name: "Group - Actions",
  args: {},
  render: ({ label }) => <ButtonActions label={label} />,
};
