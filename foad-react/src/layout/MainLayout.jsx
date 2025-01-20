import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <WhatsApp />
        </>
    );
};

export default MainLayout;