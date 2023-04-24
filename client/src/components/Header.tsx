import React, {useState} from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";
import {Form} from "./form";
import {useGetTodos} from "../hooks";
import Button from "./Button";

export type HeaderProps = {
    children: React.ReactNode;
    handleAddItem: (title: string) => void;
};

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.olive6};
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => {
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (title: string) => {
        setShowForm(false);
        handleAddItem(title);
    }

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {showForm
                ? <Form
                    handleSubmit={handleSubmit}
                    handleCancel={() => setShowForm(false)}
                    initialValue="Add new item."
                />
                : (
                    <Button
                        variant="rounded"
                        color="submit"
                        onClick={() => setShowForm(prev => !prev)}
                    >
                        <PlusIcon />
                    </Button>
            )}
        </StyledDiv>
    );
}
