import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./app/Home";
import Error from "./components/Error";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
