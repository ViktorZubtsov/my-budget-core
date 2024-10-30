import {AccountsBadge, CoreProviders} from "vite-common";
import bridge from '@vkontakte/vk-bridge';
import {useEffect} from "react";

export const App = () => {

    useEffect(() => {
        const x =  async () => {
            const userData = await bridge.send('VKWebAppGetUserInfo', {})

            console.log(userData)
        }
        x()
    }, []);

  return (
      <>
          <CoreProviders>
              <AccountsBadge text="dcwef"  size="s" $colorCode={"green"} />
              <div>Test</div>
          </CoreProviders>

      </>
  );
};
