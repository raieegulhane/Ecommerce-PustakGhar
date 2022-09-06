import "./styles/styles.css";
import { ToastContainer } from "react-toastify";
import { SiteRoutes } from "./routes"
import { Footer, Navbar } from "./components";
import { useAuth } from "./contexts";


function App() {
  const { authState } = useAuth();
  // console.log(authState.userData.firstName)

  return (
    <div className="App">
      <ToastContainer
        className="toast-box"
				theme="colored"
        position="bottom-left"
        autoClose={1500}
        newestOnTop={true}
        pauseOnFocusLoss
        pauseOnHover
      />
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
