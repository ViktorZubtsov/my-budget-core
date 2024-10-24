import {Badge, textS} from '@salutejs/plasma-ui';
import {BadgeProps} from '@salutejs/plasma-ui/components/Badge/Badge';
import styled from 'styled-components';
import {colors} from '@salutejs/plasma-tokens';

export const ACCOUNTS_COLORS = {
    critical: colors.buttonCritical,
    dark: colors.dark03,
    green: colors.success,
    warning: colors.warning,
    whiteSecondary: colors.whiteSecondary,
    whiteTertiary: colors.whiteTertiary,
};

export type TAccountsColors = keyof typeof ACCOUNTS_COLORS;

interface IAccountsBadgeProps extends BadgeProps {
    $colorCode: TAccountsColors;
    $isDone?: boolean;
}

export const AccountsBadge = styled(Badge)<IAccountsBadgeProps>`
    // @ts-ignore
    background: ${({$colorCode}) => ACCOUNTS_COLORS[$colorCode as keyof typeof ACCOUNTS_COLORS] ?? ACCOUNTS_COLORS.critical};
    text-decoration: ${({$isDone}) => ($isDone ? 'line-through' : 'none')};
    ${textS}
`;

export default  AccountsBadge;