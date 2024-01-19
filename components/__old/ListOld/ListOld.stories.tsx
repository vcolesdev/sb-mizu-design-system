import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ListOld from "./ListOld";
import ListItem from "../ListItemOld";

/* Settings */

const meta: Meta<typeof ListOld> = {
  component: ListOld,
  title: "Old/ListOld",
  tags: ["autodocs"],
  args: {
    items: [{ content: "Item 1" }, { content: "Item 2" }, { content: "Item 3" }],
    titles: false,
    type: "unordered",
  },
  argTypes: {
    items: {
      control: {
        type: "array",
      },
    },
    type: {
      control: {
        type: "select",
        options: ["ordered", "unordered"],
        default: "unordered",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* Stories */

// Default

export const DefaultList: Story = {
  args: {
    items: [{ content: "Item 1" }, { content: "Item 2" }, { content: "Item 3" }],
    type: "none",
  },
  render: (props) => (
    <ListOld {...props}>
      {props.items &&
        props.items.map((item, index) => {
          return <ListItem key={index} content={item.content} />;
        })}
    </ListOld>
  ),
};

export const DefaultNested: Story = {
  name: "Default - Nested",
  args: {
    items: [
      {
        content: "Item 1",
        items: [{ content: "Item 1.1" }, { content: "Item 1.2" }, { content: "Item 1.3" }],
      },
      {
        content: "Item 2",
        items: [{ content: "Item 2.1" }, { content: "Item 2.2" }, { content: "Item 2.3" }],
      },
      {
        content: "Item 3",
        items: [{ content: "Item 3.1" }, { content: "Item 3.2" }, { content: "Item 3.3" }],
      },
    ],
    type: "none",
  },
  render: (props) => (
    <ListOld {...props}>
      {props.items &&
        props.items.map((item, index) => {
          return (
            <ListItem key={index} content={item.content}>
              {item.items && (
                <ListOld nested items={item.items} type="none">
                  {
                    // @ts-ignore
                    item.items.map((item, index) => {
                      return <ListItem key={index} content={item.content} />;
                    })
                  }
                </ListOld>
              )}
            </ListItem>
          );
        })}
    </ListOld>
  ),
};

export const DefaultTitles: Story = {
  name: "Default - Titles",
  args: {
    items: [
      {
        content: "This is a list item.",
        title: "First Title",
      },
      {
        content: "Another list item.",
        title: "Second Title",
      },
      {
        content: "Unordered list content.",
        title: "Third Title",
      },
    ],
    titles: true,
    type: "none",
  },
  render: (props) => (
    <ListOld {...props}>
      {props.items &&
        props.items.map((item, index) => {
          return <ListItem key={index} content={item.content} title={item.title} />;
        })}
    </ListOld>
  ),
};

export const DefaultNestedTitles: Story = {
  name: "Default - Nested - Titles",
  args: {
    items: [
      {
        content: "This is a list item.",
        title: "First Title",
        items: [
          { content: "This is a list item.", title: "First Title" },
          { content: "Another list item.", title: "Second Title" },
          { content: "Unordered list content.", title: "Third Title" },
        ],
      },
      {
        content: "Another list item.",
        title: "Second Title",
        items: [
          { content: "This is a list item.", title: "First Title" },
          { content: "Another list item.", title: "Second Title" },
          { content: "Unordered list content.", title: "Third Title" },
        ],
      },
      {
        content: "Unordered list content.",
        title: "Third Title",
        items: [
          { content: "This is a list item.", title: "First Title" },
          { content: "Another list item.", title: "Second Title" },
          { content: "Unordered list content.", title: "Third Title" },
        ],
      },
    ],
    titles: true,
    type: "none",
  },
  render: (props) => (
    <ListOld {...props}>
      {props.items &&
        props.items.map((item, index) => {
          return (
            <ListItem key={index} content={item.content} title={item.title}>
              {item.items && (
                <ListOld nested titles items={item.items} type="none">
                  {
                    // @ts-ignore
                    item.items.map((item, index) => {
                      return <ListItem key={index} content={item.content} title={item.title} />;
                    })
                  }
                </ListOld>
              )}
            </ListItem>
          );
        })}
    </ListOld>
  ),
};

// Unordered

export const UnorderedList: Story = {
  name: "Unordered",
  args: {
    items: [{ content: "Item 1" }, { content: "Item 2" }, { content: "Item 3" }],
    type: "unordered",
  },
  render: (props) => (
    <ListOld {...props}>
      {props.items &&
        props.items.map((item, index) => {
          return <ListItem key={index} content={item.content} />;
        })}
    </ListOld>
  ),
};

export const UnorderedNested: Story = {
  name: "Unordered - Nested",
  args: {
    items: [
      {
        content: "Item 1",
        items: [{ content: "Item 1.1" }, { content: "Item 1.2" }, { content: "Item 1.3" }],
      },
      {
        content: "Item 2",
        items: [{ content: "Item 2.1" }, { content: "Item 2.2" }, { content: "Item 2.3" }],
      },
      {
        content: "Item 3",
        items: [{ content: "Item 3.1" }, { content: "Item 3.2" }, { content: "Item 3.3" }],
      },
    ],
    type: "unordered",
  },
  render: (props) => (
    <ListOld {...props}>
      {props.items &&
        props.items.map((item, index) => {
          return (
            <ListItem key={index} content={item.content}>
              {item.items && (
                <ListOld nested items={item.items} type="unordered">
                  {
                    // @ts-ignore
                    item.items.map((item, index) => {
                      return <ListItem key={index} content={item.content} />;
                    })
                  }
                </ListOld>
              )}
            </ListItem>
          );
        })}
    </ListOld>
  ),
};

export const UnorderedTitles: Story = {
  name: "Unordered - Titles",
  args: {
    items: [
      {
        content: "This is a list item.",
        title: "First Title",
      },
      {
        content: "Another list item.",
        title: "Second Title",
      },
      {
        content: "Unordered list content.",
        title: "Third Title",
      },
    ],
    titles: true,
    type: "unordered",
  },
  render: (props) => (
    <ListOld {...props}>
      {props.items &&
        props.items.map((item, index) => {
          return <ListItem key={index} content={item.content} title={item.title} />;
        })}
    </ListOld>
  ),
};

export const UnorderedNestedTitles: Story = {
  name: "Unordered - Nested - Titles",
  args: {
    items: [
      {
        content: "This is a list item.",
        title: "First Title",
        items: [
          { content: "This is a list item.", title: "First Title" },
          { content: "Another list item.", title: "Second Title" },
          { content: "Unordered list content.", title: "Third Title" },
        ],
      },
      {
        content: "Another list item.",
        title: "Second Title",
        items: [
          { content: "This is a list item.", title: "First Title" },
          { content: "Another list item.", title: "Second Title" },
          { content: "Unordered list content.", title: "Third Title" },
        ],
      },
      {
        content: "Unordered list content.",
        title: "Third Title",
        items: [
          { content: "This is a list item.", title: "First Title" },
          { content: "Another list item.", title: "Second Title" },
          { content: "Unordered list content.", title: "Third Title" },
        ],
      },
    ],
    titles: true,
    type: "unordered",
  },
  render: (props) => (
    <ListOld {...props}>
      {props.items &&
        props.items.map((item, index) => {
          return (
            <ListItem key={index} content={item.content} title={item.title}>
              {item.items && (
                <ListOld nested titles items={item.items} type="unordered">
                  {
                    // @ts-ignore
                    item.items.map((item, index) => {
                      return <ListItem key={index} content={item.content} title={item.title} />;
                    })
                  }
                </ListOld>
              )}
            </ListItem>
          );
        })}
    </ListOld>
  ),
};

// Ordered

export const OrderedList: Story = {
  name: "Ordered",
  args: {
    items: [{ content: "Item 1" }, { content: "Item 2" }, { content: "Item 3" }],
    type: "ordered",
  },
  render: (props) => (
    <ListOld {...props}>
      {props.items &&
        props.items.map((item, index) => {
          return <ListItem key={index} content={item.content} />;
        })}
    </ListOld>
  ),
};

export const OrderedNested: Story = {
  name: "Ordered - Nested",
  args: {
    items: [
      {
        content: "Item 1",
        items: [{ content: "Item 1.1" }, { content: "Item 1.2" }, { content: "Item 1.3" }],
      },
      {
        content: "Item 2",
        items: [{ content: "Item 2.1" }, { content: "Item 2.2" }, { content: "Item 2.3" }],
      },
      {
        content: "Item 3",
        items: [{ content: "Item 3.1" }, { content: "Item 3.2" }, { content: "Item 3.3" }],
      },
    ],
    type: "ordered",
  },
  render: (props) => (
    <ListOld {...props}>
      {props.items &&
        props.items.map((item, index) => {
          return (
            <ListItem key={index} content={item.content}>
              {item.items && (
                <ListOld nested type="ordered">
                  {
                    // @ts-ignore
                    item.items.map((item, index) => {
                      return <ListItem key={index} content={item.content} />;
                    })
                  }
                </ListOld>
              )}
            </ListItem>
          );
        })}
    </ListOld>
  ),
};

export const OrderedTitles: Story = {
  name: "Ordered - Titles",
  args: {
    items: [
      {
        content: "This is a list item.",
        title: "First Title",
      },
      {
        content: "Another list item.",
        title: "Second Title",
      },
      {
        content: "Unordered list content.",
        title: "Third Title",
      },
    ],
    titles: true,
    type: "ordered",
  },
  render: (props) => (
    <ListOld {...props}>
      {props.items &&
        props.items.map((item, index) => {
          return <ListItem key={index} content={item.content} title={item.title} />;
        })}
    </ListOld>
  ),
};

export const OrderedNestedTitles: Story = {
  name: "Ordered - Nested - Titles",
  args: {
    items: [
      {
        content: "This is a list item.",
        title: "First Title",
        items: [
          { content: "This is a list item.", title: "First Title" },
          { content: "Another list item.", title: "Second Title" },
          { content: "Unordered list content.", title: "Third Title" },
        ],
      },
      {
        content: "Another list item.",
        title: "Second Title",
        items: [
          { content: "This is a list item.", title: "First Title" },
          { content: "Another list item.", title: "Second Title" },
          { content: "Unordered list content.", title: "Third Title" },
        ],
      },
      {
        content: "Unordered list content.",
        title: "Third Title",
        items: [
          { content: "This is a list item.", title: "First Title" },
          { content: "Another list item.", title: "Second Title" },
          { content: "Unordered list content.", title: "Third Title" },
        ],
      },
    ],
    titles: true,
    type: "ordered",
  },
  render: (props) => (
    <ListOld {...props}>
      {props.items &&
        props.items.map((item, index) => {
          return (
            <ListItem key={index} content={item.content} title={item.title}>
              {item.items && (
                <ListOld nested titles type="ordered">
                  {
                    // @ts-ignore
                    item.items.map((item, index) => {
                      return <ListItem key={index} content={item.content} title={item.title} />;
                    })
                  }
                </ListOld>
              )}
            </ListItem>
          );
        })}
    </ListOld>
  ),
};
