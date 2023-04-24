import React, {useState} from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import {Form} from "./form";
import Button from "./Button";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Label = styled.label`
    margin-left: 15px;
`;

const Buttons = styled.div `
    display: ${({ show }) => show ? "flex" : "none" };
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const LabelArea = styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
    padding: 10px;
`;

export type LiteItemProp = CheckboxProps & {
    label: string;
    itemId: number;
    handleEdit: (itemId: number, title: string) => void;
    handleRemoval: () => void;
};

/**
 * The todo item.
 * @param label - the name of the todo
 * @param handleRemoval - remove handler
 * @param handleEdit - edit handler
 * @param itemId - id of the todo item
 * @param checkboxProps
 * @constructor
 */
export const ListItem: React.FC<LiteItemProp> = ({ label, handleRemoval, handleEdit, itemId, ...checkboxProps }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    const editTodo = (title: string) => {
        handleEdit(itemId, title);
        setShowEdit(false);
    };

    return (
        <StyledDiv onMouseEnter={() => setShowButtons(true)} onMouseLeave={() => setShowButtons(false)}>
            <LabelArea>
                <Checkbox {...checkboxProps} />
                <Label>{label}</Label>
            </LabelArea>
            <Buttons show={showButtons}>
                {showEdit
                    ? (<Form
                        initialValue={label}
                        handleSubmit={editTodo}
                        handleCancel={() => setShowEdit(false)}
                        />)
                    : (
                    <>
                        <Button color="warning" onClick={() => handleRemoval()}>
                            <TrashIcon />
                        </Button>
                        <Button onClick={() => setShowEdit(prev => !prev)}>
                            <Pencil1Icon />
                        </Button>
                    </>
                    )}

            </Buttons>
        </StyledDiv>
    );
};
