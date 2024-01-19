import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Elements/Button",
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (props) => <Button {...props}>{props.children}</Button>,
};

export const ButtonSizes: Story = {
  name: "Group - Sizes",
  render: () => (
    <section className="flex">
      <div className="me-3">
        <Button size={Button.size.sm}>Small</Button>
      </div>
      <div className="me-3">
        <Button size={Button.size.md}>Medium</Button>
      </div>
      <div className="me-3">
        <Button size={Button.size.lg}>Large</Button>
      </div>
      <div className="me-3">
        <Button size={Button.size.xl}>X-Large</Button>
      </div>
    </section>
  ),
};

export const ButtonCorner: Story = {
  name: "Group - Corners",
  args: {
    children: "Button",
    variant: Button.variant.primary,
  },
  render: ({ children }) => (
    <section className="flex">
      <div className="me-3">
        <Button corners={Button.corners.pill}>{children}</Button>
      </div>
      <div className="me-3">
        <Button corners={Button.corners.rounded}>{children}</Button>
      </div>
      <div className="me-3">
        <Button corners={Button.corners.square}>{children}</Button>
      </div>
    </section>
  ),
};

export const ButtonVariants: Story = {
  name: "Group - Variants",
  args: {
    children: "Button",
  },
  render: ({ children }) => (
    <section className="flex">
      <div className="me-3">
        <Button variant={Button.variant.primary}>{children}</Button>
      </div>
      <div className="me-3">
        <Button variant={Button.variant.secondary}>{children}</Button>
      </div>
      <div className="me-3">
        <Button variant={Button.variant.brand}>{children}</Button>
      </div>
      <div className="me-3">
        <Button variant={Button.variant.success}>{children}</Button>
      </div>
      <div className="me-3">
        <Button variant={Button.variant.info}>{children}</Button>
      </div>
      <div className="me-3">
        <Button variant={Button.variant.warning}>{children}</Button>
      </div>
      <div className="me-3">
        <Button variant={Button.variant.danger}>{children}</Button>
      </div>
    </section>
  ),
};

export const ButtonOutline: Story = {
  name: "Group - Outline",
  args: {
    children: "Button",
    type: Button.type.outline,
  },
  render: ({ children, type }) => (
    <section className="flex">
      <div className="me-3">
        <Button type={type} variant={Button.variant.primary}>
          {children}
        </Button>
      </div>
      <div className="me-3">
        <Button type={type} variant={Button.variant.secondary}>
          {children}
        </Button>
      </div>
      <div className="me-3">
        <Button type={type} variant={Button.variant.brand}>
          {children}
        </Button>
      </div>
      <div className="me-3">
        <Button type={type} variant={Button.variant.success}>
          {children}
        </Button>
      </div>
      <div className="me-3">
        <Button type={type} variant={Button.variant.info}>
          {children}
        </Button>
      </div>
      <div className="me-3">
        <Button type={type} variant={Button.variant.warning}>
          {children}
        </Button>
      </div>
      <div className="me-3">
        <Button type={type} variant={Button.variant.danger}>
          {children}
        </Button>
      </div>
    </section>
  ),
};

export const ButtonGhost: Story = {
  name: "Group - Ghost",
  args: {
    type: Button.type.ghost,
  },
  render: ({ children, type }) => (
    <section className="flex">
      <div className="me-3">
        <Button type={type} variant={Button.variant.primary}>
          {children}
        </Button>
      </div>
      <div className="me-3">
        <Button type={type} variant={Button.variant.secondary}>
          {children}
        </Button>
      </div>
      <div className="me-3">
        <Button type={type} variant={Button.variant.brand}>
          {children}
        </Button>
      </div>
      <div className="me-3">
        <Button type={type} variant={Button.variant.success}>
          {children}
        </Button>
      </div>
      <div className="me-3">
        <Button type={type} variant={Button.variant.info}>
          {children}
        </Button>
      </div>
      <div className="me-3">
        <Button type={type} variant={Button.variant.warning}>
          {children}
        </Button>
      </div>
      <div className="me-3">
        <Button type={type} variant={Button.variant.danger}>
          {children}
        </Button>
      </div>
    </section>
  ),
};
