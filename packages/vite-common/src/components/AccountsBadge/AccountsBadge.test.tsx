import {render} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import {AccountsBadge, TAccountsColors} from "./index.ts";
import {TEST_ID_TASK} from "../../constant/dataTest.ts";
import {MOCK_ACCOUNT} from "../../mock";

describe('AccountsBadge', () => {
    const {getByTestId} = render(
        <AccountsBadge
            data-testid={TEST_ID_TASK.TASK_ITEM_BADGE}
            text={MOCK_ACCOUNT.name}
            size="l"
            $isDone={false}
            $colorCode={MOCK_ACCOUNT?.colorCode as TAccountsColors}
        />
    );

    test('Check name', () => {
        expect(getByTestId(TEST_ID_TASK.TASK_ITEM_BADGE).textContent).toBe(MOCK_ACCOUNT.name);
    });
});
