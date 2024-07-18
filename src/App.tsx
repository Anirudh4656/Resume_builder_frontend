import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Components/Auth/userAuth";
import Home from "./Pages/Home";
import Personal from "./Components/Resume/Personal";
import Builder from "./Components/Resume/builder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/builder",
    element: <Builder />,
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
