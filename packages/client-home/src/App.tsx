import {AccountsBadge, xsxs} from 'vite-common';

export const App = () => {
    return (
        <>
            <CoreProviders>
                <AccountsBadge text="dcwef" size="s" $colorCode={'green'} />
                <div>Test</div>
            </CoreProviders>
        </>
    );
};
