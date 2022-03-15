
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./ShareModules/Layout/Header/Header";
import Footer from "./ShareModules/Layout/Footer/Footer";
import Index from "./Components/Home/Index";
// import PrivateOutlet from "./ShareModules/RouterWraper/PrivateOutlet";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/**************  Start public Route *********************/}
        <Route path="/" element={<Index />} />

        {/***************  End public Route  **********************/}

        {/**************** Start Private Route *********************/}
        {/* <Route path="/*" element={<PrivateOutlet />}>
              <Route path="demo" element={<Demo />} />
            </Route> */}
        {/****************** End Private Route  *********************/}
      </Routes>
      <Footer />
    </>
  );
}

export default App;