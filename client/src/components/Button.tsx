import React from "react";
import styled from "styled-components";

/**
 Props for a Button component.
 @typedef {Object} ButtonProps
 @property {"rounded" | "squared"} [variant] - The shape of the button. Defaults to "squared".
 @property {"submit" | "warning"} [color] - The color of the button. Defaults to "submit".
 @property {React.ReactNode} [children] - The child elements of the button.
 @property {Function} onClick - The function to be called when the button is clicked.
 */
type ButtonProps = {
  variant?: "rounded" | "squared";
  color?: "submit" | "warning";
  children?: React.ReactNode;
  onClick: () => void;
};


const getColor = (color: string | undefined, theme: any) => {
    switch (color) {
        case "submit":
            return theme.colors.grass9;
        case "warning":
            return theme.colors.tomato9;
        default:
            return theme.colors.olive9;
    }
};

const StyledButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color, theme }) => getColor(color, theme)};
  color: #fff;
  border-radius: ${({ variant }) => variant === "rounded" && "50%"};
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

/**
 * A button. Just a button.
 * @param variant - variant of the  button.
 * @param color - color of button.
 * @param children - content of button.
 * @param onClick - on click function.
 * @constructor
 */
const Button: React.FC<ButtonProps> = ({children, ...buttonProps}) => (
        <StyledButton {...buttonProps}>{children}</StyledButton>
);

export default Button;
