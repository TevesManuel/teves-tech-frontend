import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Footer from "./components/Footer/Footer";

export function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <WhyChooseUs />
            <Footer />
        </>
    );
}
