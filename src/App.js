import "./styles/styles.css";
import { SiteRoutes } from "./routes"
import { Footer, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SiteRoutes />
      <Footer />
    </div>
  );
}

export default App;
