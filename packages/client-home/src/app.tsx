import { Button, Links, ITest } from "vite-common";

const test: ITest ={label: 'aaaaa', href: 'https://www.google.com'};

function App() {

  return (
    <>
        <div>
          <Button label={'wdw'}/>
          <Links links={[test, {label: 'wsdw', href: 'https://www.google.com'}]}/>
        </div>
    </>
  )
}

export default App