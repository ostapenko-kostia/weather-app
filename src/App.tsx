import Aside from "./components/Aside";
import Header from "./components/Header";
import MainInfo from "./components/MainInfo";

function App() {
    return (
        <>
            <div className="container">
                <Header />
                <MainInfo />
            </div>
            <Aside />
        </>
    );
}

export default App;
