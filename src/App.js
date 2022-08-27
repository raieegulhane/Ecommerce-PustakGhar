import "./styles/styles.css";
import { SiteRoutes } from "./routes"
import { Footer, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SiteRoutes />
      <Footer />

      <a className="link-noDecoration btn btn-floating btn-rd btn-primary flex flex_justify-center flex_align-middle" href="#"> 
        <i className="fa-solid fa-arrow-up"></i>
      </a> 
    </div>
  );
}

export default App;
