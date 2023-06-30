import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills"
import Work from "./components/Work";

/* To do

1) Links to social media
2) Link to view work
3) Projects and their or source code
4) Deploy on Netlify*/

function App() {
  return (
    <div>
      {/* <h1 className="text-2xl font-bold">Hello</h1> */}
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contacts />
    </div>
  );
}

export default App;
