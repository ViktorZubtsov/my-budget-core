import {AccountsBadge, CoreProviders} from "vite-common";
import bridge from '@vkontakte/vk-bridge';
import {useEffect} from "react";

export const App = () => {

    useEffect(() => {
        console.log('ss')
        bridge.send('VKWebAppGetEmail').then((data)=>{
            console.log(data, 'data')
        });
    }, []);

  return (
      <>
          <CoreProviders>
              <AccountsBadge text="dcwef"  size="s" $colorCode={"green"} />
              <div>de</div>
          </CoreProviders>

      </>
  );
};
