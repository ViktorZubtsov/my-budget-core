import { StoryFn, Meta } from "@storybook/react";
import {AccountsBadge, TAccountsColors} from ".";
import {TEST_ID_TASK} from "../../constant/dataTest.ts";
import {MOCK_ACCOUNT} from "../../mock";
import { plasma_b2c__dark} from '@salutejs/plasma-tokens/themes';
import {createGlobalStyle} from 'styled-components';
import {MainStyle} from '../../style/index.ts';

import {background, gradient, text} from '@salutejs/plasma-tokens';
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
const decorators = [
  // eslint-disable-next-line @typescript-eslint/naming-convention
  (Story: any) => (
      <>
          <DeviceThemeProvider responsiveTypo>
                  <Story />
                  <GlobalStyle />
                  <ThemeStyle />
          </DeviceThemeProvider>
          <MainStyle />
      </>
  ),
];
export default {
  title: "UI/AccountsBadge",
  component: AccountsBadge,
    decorators,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof AccountsBadge>;

const Template: StoryFn<typeof AccountsBadge> = () =>
    <AccountsBadge
      data-testid={TEST_ID_TASK.TASK_ITEM_BADGE}
      text={MOCK_ACCOUNT.name}
      size="l"
      $isDone={false}
      $colorCode={MOCK_ACCOUNT?.colorCode as TAccountsColors}
/>;

export const RedButton = Template.bind({});
