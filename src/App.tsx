import Roots from "./roots";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Websites from "./component/websites/websites";
import WebAplications from "./component/web-aplications/web-aplication";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Roots />,
      },
      {
        path: "websites",
        element: <Websites />,
      },
      {
        path: "web-aplications",
        element: <WebAplications />,
      },
    ],
    {
      basename: "/Richter-Softwarewebsite/",
    }
  );

  return (
    <div id="oben" className="app-div">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
