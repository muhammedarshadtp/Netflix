import { Provider } from "react-redux"
import Body from "./Components/Body"
import appStore from "./utils/appStore"
import ErrorBoundary from "./Components/errorBoundary"



function App() {

  return (
    <>
      <Provider store={appStore}>
        <ErrorBoundary>
          <Body />
        </ErrorBoundary>
      </Provider>

    </>
  )
}

export default App
