import {AccountsBadge, CoreProviders} from "vite-common";

export const App = () => {
  return (
      <>
          <CoreProviders>
              <AccountsBadge text="dcwef"  size="s" $colorCode={"green"} />
              <div>dfwef</div>
          </CoreProviders>

      </>
  );
};
