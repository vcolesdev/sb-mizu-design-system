import type { Meta, StoryObj } from "@storybook/react";
import AlertOld from "./AlertOld";

/* Settings */

const meta: Meta<typeof AlertOld> = {
  component: AlertOld,
  title: "Old/AlertOld",
  tags: ["autodocs"],
  args: {
    closeButton: true,
    hasBorder: false,
    hasTitle: false,
    hasIcon: false,
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* Stories */

export const Default: Story = {
  args: {
    children: "This is a default alert.",
  },
  render: (props) => <AlertOld {...props} />,
};

export const Title: Story = {
  args: {
    children: "This is a default alert.",
    hasTitle: true,
    variant: "primary",
  },
  render: (props) => <AlertOld {...props} />,
};

export const Primary: Story = {
  args: {
    children: "This is a primary alert.",
    variant: "primary",
  },
  render: (props) => <AlertOld {...props} />,
};

export const Secondary: Story = {
  args: {
    children: "This is a secondary alert.",
    variant: "secondary",
  },
  render: (props) => <AlertOld {...props} />,
};

export const Brand: Story = {
  args: {
    children: "This is a brand alert.",
    variant: "brand",
  },
  render: (props) => <AlertOld {...props} />,
};

export const Success: Story = {
  args: {
    children: "This is a success alert.",
    variant: "success",
  },
  render: (props) => <AlertOld {...props} />,
};

export const Info: Story = {
  args: {
    children: "This is an info alert.",
    variant: "info",
  },
  render: (props) => <AlertOld {...props} />,
};

export const Warning: Story = {
  args: {
    children: "This is a warning alert.",
    variant: "warning",
  },
  render: (props) => <AlertOld {...props} />,
};

export const Danger: Story = {
  args: {
    children: "This is a danger alert.",
    variant: "danger",
  },
  render: (props) => <AlertOld {...props} />,
};

export const DefaultIcon: Story = {
  name: "Icon - Default",
  args: {
    hasIcon: true,
    icon: "IoBuild",
    iconType: "Ion",
    children: "This is a default alert.",
  },
  render: (props) => <AlertOld {...props} />,
};

export const PrimaryIcon: Story = {
  name: "Icon - Primary",
  args: {
    hasIcon: true,
    icon: "IoBuild",
    iconType: "Ion",
    variant: "primary",
    children: "This is a primary alert.",
  },
  render: (props) => <AlertOld {...props} />,
};

export const SecondaryIcon: Story = {
  name: "Icon - Secondary",
  args: {
    hasIcon: true,
    icon: "IoBuild",
    iconType: "Ion",
    variant: "secondary",
    children: "This is a secondary alert.",
  },
  render: (props) => <AlertOld {...props} />,
};

export const BrandIcon: Story = {
  name: "Icon - Brand",
  args: {
    hasIcon: true,
    icon: "IoBuild",
    iconType: "Ion",
    variant: "brand",
    children: "This is a brand alert.",
  },
  render: (props) => <AlertOld {...props} />,
};

export const SuccessIcon: Story = {
  name: "Icon - Success",
  args: {
    hasIcon: true,
    icon: "IoBuild",
    iconType: "Ion",
    variant: "success",
    children: "This is a success alert.",
  },
  render: (props) => <AlertOld {...props} />,
};

export const InfoIcon: Story = {
  name: "Icon - Info",
  args: {
    hasIcon: true,
    icon: "IoBuild",
    iconType: "Ion",
    variant: "info",
    children: "This is an info alert.",
  },
  render: (props) => <AlertOld {...props} />,
};

export const WarningIcon: Story = {
  name: "Icon - Warning",
  args: {
    hasIcon: true,
    icon: "IoBuild",
    iconType: "Ion",
    variant: "warning",
    children: "This is a warning alert.",
  },
  render: (props) => <AlertOld {...props} />,
};

export const DangerIcon: Story = {
  name: "Icon - Danger",
  args: {
    hasIcon: true,
    icon: "IoBuild",
    iconType: "Ion",
    variant: "danger",
    children: "This is a danger alert.",
  },
  render: (props) => <AlertOld {...props} />,
};

export const Variants: Story = {
  render: (props) => {
    return (
      <>
        <div className="mb-2">
          <AlertOld variant="primary" {...props}>
            This is a primary alert.
          </AlertOld>
        </div>
        <div className="mb-2">
          <AlertOld variant="secondary" {...props}>
            This is a secondary alert.
          </AlertOld>
        </div>
        <div className="mb-2">
          <AlertOld variant="brand" {...props}>
            This is a brand alert.
          </AlertOld>
        </div>
        <div className="mb-2">
          <AlertOld variant="success" {...props}>
            This is a success alert.
          </AlertOld>
        </div>
        <div className="mb-2">
          <AlertOld variant="info" {...props}>
            This is an info alert.
          </AlertOld>
        </div>
        <div className="mb-2">
          <AlertOld variant="warning" {...props}>
            This is a warning alert.
          </AlertOld>
        </div>
        <div>
          <AlertOld variant="danger" {...props}>
            This is a danger alert.
          </AlertOld>
        </div>
      </>
    );
  },
};

export const Titles: Story = {
  args: {
    hasTitle: true,
  },
  render: (props) => (
    <>
      <div className="mb-2">
        <AlertOld variant="primary" {...props}>
          This is a primary alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="secondary" {...props}>
          This is a secondary alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="brand" {...props}>
          This is a brand alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="success" {...props}>
          This is a success alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="info" {...props}>
          This is an info alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="warning" {...props}>
          This is a warning alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="danger" {...props}>
          This is a danger alert.
        </AlertOld>
      </div>
    </>
  ),
};

export const VariantsBorder: Story = {
  name: "Border - Variants",
  args: {
    hasBorder: true,
  },
  render: (props) => {
    return (
      <>
        <div className="mb-2">
          <AlertOld variant="primary" {...props}>
            This is a primary alert.
          </AlertOld>
        </div>
        <div className="mb-2">
          <AlertOld variant="secondary" {...props}>
            This is a secondary alert.
          </AlertOld>
        </div>
        <div className="mb-2">
          <AlertOld variant="brand" {...props}>
            This is a brand alert.
          </AlertOld>
        </div>
        <div className="mb-2">
          <AlertOld variant="success" {...props}>
            This is a success alert.
          </AlertOld>
        </div>
        <div className="mb-2">
          <AlertOld variant="info" {...props}>
            This is an info alert.
          </AlertOld>
        </div>
        <div className="mb-2">
          <AlertOld variant="warning" {...props}>
            This is a warning alert.
          </AlertOld>
        </div>
        <div>
          <AlertOld variant="danger" {...props}>
            This is a danger alert.
          </AlertOld>
        </div>
      </>
    );
  },
};

export const TitlesBorder: Story = {
  name: "Border - Titles",
  args: {
    hasTitle: true,
    hasBorder: true,
  },
  render: (props) => (
    <>
      <div className="mb-2">
        <AlertOld variant="primary" {...props}>
          This is a primary alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="secondary" {...props}>
          This is a secondary alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="brand" {...props}>
          This is a brand alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="success" {...props}>
          This is a success alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="info" {...props}>
          This is an info alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="warning" {...props}>
          This is a warning alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="danger" {...props}>
          This is a danger alert.
        </AlertOld>
      </div>
    </>
  ),
};

export const VariantsIcons: Story = {
  name: "Variants - Icons",
  args: {
    hasIcon: true,
    icon: "IoNotifications",
    iconSize: 18,
    iconType: "Ion",
  },
  render: (props) => (
    <>
      <div className="mb-2">
        <AlertOld variant="primary" {...props}>
          This is a primary alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="secondary" {...props}>
          This is a secondary alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="brand" {...props}>
          This is a brand alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="success" {...props}>
          This is a success alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="info" {...props}>
          This is an info alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="warning" {...props}>
          This is a warning alert.
        </AlertOld>
      </div>
      <div>
        <AlertOld variant="danger" {...props}>
          This is a danger alert.
        </AlertOld>
      </div>
    </>
  ),
};

export const TitlesIcons: Story = {
  name: "Titles - Icons",
  args: {
    hasTitle: true,
    hasIcon: true,
    icon: "IoNotifications",
    iconSize: 18,
    iconType: "Ion",
  },
  render: (props) => (
    <>
      <div className="mb-2">
        <AlertOld variant="primary" {...props}>
          This is a primary alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="secondary" {...props}>
          This is a secondary alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="brand" {...props}>
          This is a brand alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="success" {...props}>
          This is a success alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="info" {...props}>
          This is an info alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="warning" {...props}>
          This is a warning alert.
        </AlertOld>
      </div>
      <div className="mb-2">
        <AlertOld variant="danger" {...props}>
          This is a danger alert.
        </AlertOld>
      </div>
    </>
  ),
};
