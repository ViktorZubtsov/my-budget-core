import {ACCOUNTS_COLORS} from '../constant';

export type TAccountsColors = keyof typeof ACCOUNTS_COLORS;

export interface IAccount {
    colorCode: TAccountsColors;
    id: string;
    name: string;
}
