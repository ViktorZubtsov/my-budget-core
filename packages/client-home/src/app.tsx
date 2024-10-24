import { Button, Links, AccountsBadge, MainStyle } from "vite-common";
import { plasma_b2c__dark} from '@salutejs/plasma-tokens/themes';
import {createGlobalStyle} from 'styled-components';
import {background, gradient, text} from '@salutejs/plasma-tokens';

const test ={label: 'aaaaa', href: 'https://www.google.com'};
const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
    }
`;

const GlobalStyle = () => <DocumentStyle />;
import {DeviceThemeProvider} from '@salutejs/plasma-ui';
function currentTheme() {
    return plasma_b2c__dark;
}

const ThemeStyle = createGlobalStyle(currentTheme());

function App() {

  return (
    <>
        <DeviceThemeProvider responsiveTypo>
            <div>
                <AccountsBadge
                    text={"MOCK_ACCOUNT.name"}
                    size="l"
                    $isDone={false}
                    $colorCode={"green"}
                />
                <Button label={'wdw'}/>
                <Links links={[test, {label: 'wsdw', href: 'https://www.google.com'}]}/>
            </div>
            <GlobalStyle/>
            <ThemeStyle/>
        </DeviceThemeProvider>
        <MainStyle/>

    </>
  )
}

export default App