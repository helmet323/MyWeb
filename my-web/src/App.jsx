import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

const state = {
    projects: [
        {
            title: "Overwatch Tierlist",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Overwatch_cover_art.jpg/220px-Overwatch_cover_art.jpg",
            link: ""
        },
        {
            title: "Grapple Ballkour",
            img: "https://play-lh.googleusercontent.com/V9kVWRHoZ9Wq6bFMsvoxZ4PIx4aey1Cdeytk5jpXtJHyd6jjF49cQVQrSpgC-uL6gek=rw-w250",
        },
        {
            title: "Hip Hip Zoo-Ray",
            img: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/736/134/datas/gallery.jpg",
        },
        { title: "test" },
    ],
};

function App() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Portfolio projects={state.projects} />
            <Contact />
        </div>
    );
}

export default App;
