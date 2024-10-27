import { CoreProviders, AccountsBadge  } from "vite-common";

function App() {

  return (
    <CoreProviders>
        <AccountsBadge
            text={"MOCK_ACCOUNT.name"}
            size="l"
            $isDone={false}
            $colorCode={"green"}
        />
    </CoreProviders>
  )
}

export default App