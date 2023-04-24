import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    
`;

/**
 Props for a List component.
 @typedef {Object} ListProps
 @property {boolean} isLoaded - Whether the data for the list is loaded.
 @property {boolean} isError - Whether an error occurred while loading the data.
 @property {React.ReactNode} children - The child elements of the list.
 */
type ListProps = {
    isLoaded: boolean,
    isError: boolean,
} & PropsWithChildren;

/**
 * The container with list of todos.
 * @param children - content
 * @param isLoaded - if the todos are fetched.
 * @param isError - if error occurred when fetched.
 * @constructor
 */
export const List: React.FC<ListProps> = ({ children, isLoaded = false, isError = false }) => {
    if (isLoaded) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error...</p>;
    }

    return <StyledDiv>{children}</StyledDiv>;
};
