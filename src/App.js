import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/AppStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoPage from "./components/VideoPage";
import SearchResultsPage from "./components/SearchResultsPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/watch",
        element: <VideoPage />,
      },
      {
        path: "/results",
        element: <SearchResultsPage/>
      }
    ],
  },
]);
function App() {
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
