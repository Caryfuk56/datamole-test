import React, { PropsWithChildren } from "react";
import { olive, grass, blackA, tomato } from "@radix-ui/colors";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { GlobalStyle } from "./Global";

const theme = {
    colors: {
        ...olive,
        ...grass,
        ...blackA,
        ...tomato,
    },
};

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => (
    <ThemeProviderStyled theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProviderStyled>
);
