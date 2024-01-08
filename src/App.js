import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/AppStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
