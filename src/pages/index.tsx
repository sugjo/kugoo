import BasicLayout from "@/shared/layouts/BasicLayout"
import { createRoutesFromElements, Route } from "react-router"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Test from "./Test"

const Router = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route element={<BasicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
        </Route>
    ))

    return (
        <RouterProvider router={router} />
    )
}

export default Router