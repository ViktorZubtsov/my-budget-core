import {DeviceThemeProvider} from "@salutejs/plasma-ui";
import {CoreStyle} from "../style";
import {FC, ReactNode} from "react";
import {background, gradient, text} from '@salutejs/plasma-tokens';
import {createGlobalStyle} from 'styled-components';
import {plasma_b2c__dark} from "@salutejs/plasma-tokens/themes";

interface ICoreProviders {
    children: ReactNode;
}

function currentTheme() {
    return plasma_b2c__dark;
}

export const ThemeStyle = createGlobalStyle(currentTheme());
export const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
    }
`;

export const CoreProviders: FC<ICoreProviders> = ({children}) => {
  return (
      <>
          <DeviceThemeProvider responsiveTypo>
              {children}
              <DocumentStyle />
              <ThemeStyle />
          </DeviceThemeProvider>
          <CoreStyle />
      </>
  )
}
export default  CoreProviders;