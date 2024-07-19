import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Components/Auth/userAuth";
import Home from "./Pages/Home";
import Personal from "./Components/Resume/Personal";
import Builder from "./Components/Resume/builder";
import Template from "./Components/Resume/Template";
import Template1 from "./Components/templates/template1/template1/Template1"
import Template2 from "./Components/templates/template2/template2";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
  },
  {
    path: "/builder",
    element: <Builder />,
  },
  {
    path: "/template1",
    element: <Template1 />,
  },
  {
    path: "/template2",
    element: <Template2 />,
  },
  {
    path: "/auth",
    element: <Auth />,
  }
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
