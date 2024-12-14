import Roots from "./roots";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Websites from "./component/websites/websites";
import WebAplications from "./component/web-aplications/web-aplication";
import Technologies from "./component/technologies/technologies";

function App() {
  const router = createBrowserRouter([
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
    {
      path: "technologies",
      element: <Technologies />,
    },
  ]);

  return (
    <div id="oben" className="app-div">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
