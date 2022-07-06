import "./styles/styles.css";
import { SiteRoutes } from "./routes"
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SiteRoutes />
    </div>
  );
}

export default App;
