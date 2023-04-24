import { Meta, StoryObj } from "@storybook/react";

import Button from "../Button";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";

const meta = {
    title: "Button",
    component: Button,
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        color: "warning",
        variant: "rounded",
        children: <PlusIcon />,
    },
};
