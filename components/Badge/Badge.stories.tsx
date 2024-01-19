import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Elements/Badge",
  tags: ["autodocs"],
  args: {
    children: "Badge",
    corners: Badge.corners.rounded,
    size: Badge.size.md,
    variant: Badge.variant.primary,
    type: Badge.type.solid,
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (props) => <Badge {...props}>{props.children}</Badge>,
};

export const BadgeCorners: Story = {
  name: "Group - Corners",
  render: () => (
    <section className="flex">
      <div className="me-3">
        <Badge corners={Badge.corners.rounded}>Rounded</Badge>
      </div>
      <div className="me-3">
        <Badge corners={Badge.corners.square}>Square</Badge>
      </div>
    </section>
  ),
};

export const BadgeSizes: Story = {
  name: "Group - Sizes",
  render: () => (
    <section className="flex">
      <div className="me-3">
        <Badge size={Badge.size.sm}>Small</Badge>
      </div>
      <div className="me-3">
        <Badge size={Badge.size.md}>Medium</Badge>
      </div>
      <div className="me-3">
        <Badge size={Badge.size.lg}>Large</Badge>
      </div>
    </section>
  ),
};

export const BadgeVariants: Story = {
  name: "Group - Variants",
  render: () => (
    <section className="flex">
      <div className="me-3">
        <Badge variant={Badge.variant.primary}>Primary</Badge>
      </div>
      <div className="me-3">
        <Badge variant={Badge.variant.secondary}>Secondary</Badge>
      </div>
      <div className="me-3">
        <Badge variant={Badge.variant.brand}>Brand</Badge>
      </div>
      <div className="me-3">
        <Badge variant={Badge.variant.success}>Success</Badge>
      </div>
      <div className="me-3">
        <Badge variant={Badge.variant.info}>Info</Badge>
      </div>
      <div className="me-3">
        <Badge variant={Badge.variant.warning}>Warning</Badge>
      </div>
      <div className="me-3">
        <Badge variant={Badge.variant.danger}>Danger</Badge>
      </div>
    </section>
  ),
};

export const BadgeTypesOutline: Story = {
  name: "Group - Types - Outline",
  args: {
    type: Badge.type.outline,
  },
  render: ({ type }) => (
    <section className="flex">
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.primary}>
          Primary
        </Badge>
      </div>
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.secondary}>
          Secondary
        </Badge>
      </div>
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.brand}>
          Brand
        </Badge>
      </div>
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.success}>
          Success
        </Badge>
      </div>
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.info}>
          Info
        </Badge>
      </div>
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.warning}>
          Warning
        </Badge>
      </div>
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.danger}>
          Danger
        </Badge>
      </div>
    </section>
  ),
};

export const BadgeTypesGhost: Story = {
  name: "Group - Types - Ghost",
  args: {
    type: Badge.type.ghost,
  },
  render: ({ type }) => (
    <section className="flex">
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.primary}>
          Primary
        </Badge>
      </div>
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.secondary}>
          Secondary
        </Badge>
      </div>
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.brand}>
          Brand
        </Badge>
      </div>
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.success}>
          Success
        </Badge>
      </div>
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.info}>
          Info
        </Badge>
      </div>
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.warning}>
          Warning
        </Badge>
      </div>
      <div className="me-3">
        <Badge type={type} variant={Badge.variant.danger}>
          Danger
        </Badge>
      </div>
    </section>
  ),
};
