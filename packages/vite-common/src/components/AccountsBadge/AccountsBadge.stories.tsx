import { StoryFn, Meta } from "@storybook/react";
import {AccountsBadge, TAccountsColors} from ".";
import {MOCK_ACCOUNT} from "../../mock";
import CoreProviders from "../../providers";

const decorators = [
  (Story: any) => (
      <CoreProviders>
          <Story />
      </CoreProviders>
  ),
];

export default {
  title: "UI/AccountsBadge",
  component: AccountsBadge,
  decorators
} as Meta<typeof AccountsBadge>;

const Template: StoryFn<typeof AccountsBadge> = ({...args}) =>
    <AccountsBadge {...args}/>;

export const IsDone = Template.bind({});
IsDone.args = {
    $colorCode: MOCK_ACCOUNT?.colorCode as TAccountsColors,
    $isDone: true,
    size: 'l',
    text: MOCK_ACCOUNT.name,
}
export const notDone = Template.bind({});
notDone.args = {
    $colorCode: MOCK_ACCOUNT?.colorCode as TAccountsColors,
    $isDone: false,
    size: 'l',
    text: MOCK_ACCOUNT.name,
}