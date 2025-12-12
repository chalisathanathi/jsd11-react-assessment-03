import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./views/Home";
import Owner from "./views/Owner";

export default function App() {

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        errorElement: (
          <div className="min-h-screen flex justify-center items-center">
                    <h1 className="text-3xl font-bold">(っ °Д °;)っ 404 - Page Not Found (¬‿¬)</h1>
                </div>
        ),
        children: [
          { path: "/", element: <Home />  },
          { path: "/owner", element: <Owner />  },
        ],
      }
  ]);

  return(
    <RouterProvider router={router} />
  );
}