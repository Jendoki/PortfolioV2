import Header from "../../Header";
import Footer from "../../Footer";
import Jenn from "../../../assets/jennifer.png"

function HomePage() {
    return (
        <>
            <Header />
            <img src={Jenn} alt="Logo" />
            <p>salut?</p>
            <Footer />
        </>
    )
}

export default HomePage;