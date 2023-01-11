import Footer from "@/components/Footer"
import Header from "@/components/header"
import { Outlet } from 'react-router'

type Props = {}

function BasicLayout({ }: Props) {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default BasicLayout