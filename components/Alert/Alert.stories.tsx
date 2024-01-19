import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";
import Icon, { IconType } from "../Icon/Icon";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "Elements/Alert",
  tags: ["autodocs"],
  args: {
    border: false,
    children: <p>This is a dismissable Alert message.</p>,
    hasClose: true,
    expanded: true,
    variant: Alert.defaultProps.variant,
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (props) => (
    <Alert {...props}>
      <Alert.Title>Alert Title</Alert.Title>
      {props.children}
      <Alert.Footer>Footer</Alert.Footer>
    </Alert>
  ),
};

export const AlertVariants: Story = {
  name: "Group - Variants",
  render: (props) => (
    <section>
      <div className="mb-3">
        <Alert variant={Alert.variant.primary}>{props.children}</Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.secondary}>{props.children}</Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.brand}>{props.children}</Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.success}>{props.children}</Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.info}>{props.children}</Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.warning}>{props.children}</Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.danger}>{props.children}</Alert>
      </div>
    </section>
  ),
};

export const AlertIcons: Story = {
  name: "Group - w/Icon",
  args: {
    children: (
      <>
        <Alert.Content>
          <span className="mb-3">
            <Icon color="currentColor" name="LuCrown" size={18} type={IconType.Lucide} />
          </span>
          <p>This is a dismissable Alert message with icon.</p>
        </Alert.Content>
      </>
    ),
  },
  render: (props) => (
    <section>
      <div className="mb-3">
        <Alert variant={Alert.variant.primary}>{props.children}</Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.secondary}>{props.children}</Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.brand}>{props.children}</Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.success}>{props.children}</Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.info}>{props.children}</Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.warning}>{props.children}</Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.danger}>{props.children}</Alert>
      </div>
    </section>
  ),
};

export const AlertBorders: Story = {
  name: "Group - w/Border",
  args: {
    border: true,
  },
  render: (props) => (
    <section>
      <div className="mb-3">
        <Alert border variant={Alert.variant.primary}>
          {props.children}
        </Alert>
      </div>
      <div className="mb-3">
        <Alert border variant={Alert.variant.secondary}>
          {props.children}
        </Alert>
      </div>
      <div className="mb-3">
        <Alert border variant={Alert.variant.brand}>
          {props.children}
        </Alert>
      </div>
      <div className="mb-3">
        <Alert border variant={Alert.variant.success}>
          {props.children}
        </Alert>
      </div>
      <div className="mb-3">
        <Alert border variant={Alert.variant.info}>
          {props.children}
        </Alert>
      </div>
      <div className="mb-3">
        <Alert border variant={Alert.variant.warning}>
          {props.children}
        </Alert>
      </div>
      <div className="mb-3">
        <Alert border variant={Alert.variant.danger}>
          {props.children}
        </Alert>
      </div>
    </section>
  ),
};

export const AlertTitles: Story = {
  name: "Group - w/Title",
  render: (props) => (
    <section>
      <div className="mb-3">
        <Alert variant={Alert.variant.primary}>
          <Alert.Title>Primary</Alert.Title>
          {props.children}
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.secondary}>
          <Alert.Title>Secondary</Alert.Title>
          {props.children}
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.brand}>
          <Alert.Title>Brand</Alert.Title>
          {props.children}
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.success}>
          <Alert.Title>Success</Alert.Title>
          {props.children}
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.info}>
          <Alert.Title>Info</Alert.Title>
          {props.children}
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.warning}>
          <Alert.Title>Warning</Alert.Title>
          {props.children}
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.danger}>
          <Alert.Title>Danger</Alert.Title>
          {props.children}
        </Alert>
      </div>
    </section>
  ),
};

export const AlertFooters: Story = {
  name: "Group - w/Footer",
  render: (props) => (
    <section>
      <div className="mb-3">
        <Alert variant={Alert.variant.primary}>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.secondary}>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.brand}>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.success}>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.info}>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.warning}>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.danger}>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
    </section>
  ),
};

export const AlertElements: Story = {
  name: "Group - w/Elements",
  render: (props) => (
    <section>
      <div className="mb-3">
        <Alert variant={Alert.variant.primary}>
          <Alert.Title>Primary</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.secondary}>
          <Alert.Title>Secondary</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.brand}>
          <Alert.Title>Brand</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.success}>
          <Alert.Title>Success</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.info}>
          <Alert.Title>Info</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.warning}>
          <Alert.Title>Warning</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert variant={Alert.variant.danger}>
          <Alert.Title>Danger</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
    </section>
  ),
};

export const AlertElementsBorder: Story = {
  name: "Group - w/Elements - Border",
  render: (props) => (
    <section>
      <div className="mb-3">
        <Alert border variant={Alert.variant.primary}>
          <Alert.Title>Primary</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert border variant={Alert.variant.secondary}>
          <Alert.Title>Secondary</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert border variant={Alert.variant.brand}>
          <Alert.Title>Brand</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert border variant={Alert.variant.success}>
          <Alert.Title>Success</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert border variant={Alert.variant.info}>
          <Alert.Title>Info</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert border variant={Alert.variant.warning}>
          <Alert.Title>Warning</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
      <div className="mb-3">
        <Alert border variant={Alert.variant.danger}>
          <Alert.Title>Danger</Alert.Title>
          {props.children}
          <Alert.Footer>Footer message here.</Alert.Footer>
        </Alert>
      </div>
    </section>
  ),
};
