import { useState } from "react";
import Arrays from "./components/Arrays";
import Classes from "./components/Classes";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import Table from "./components/Table";
import TestProps from "./props/TestProps";
import UseState from "./hooks/UseState";
import Effect from "./hooks/Effect";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { ItemContext } from "./context/ItemContext";
import Ref from "./hooks/Ref";


const App = () => {
  // const [text, setText] = useState('')
  // const [showClasses, setShowClasses] = useState(true);

  // const toggleClasses = () => {
  //   setShowClasses((prevShowClasses) => !prevShowClasses);
  // };

  return (
    <div>
      <Effect />
    </div>
    // <ItemContext.Provider value={{text,setText}}>
    // <Ref />
    // <UseState />
    // </ItemContext.Provider>
    // <BrowserRouter>
    // <Navbar />
    // <Routes>
    //   <Route path="/"element={<Header />} />
    //   <Route path="/arrays"element={<Arrays />} />
    //   <Route path="/table"element={<Table />} />
    //   <Route path="/effect"element={<Effect />} />
    // </Routes>
    //  <Footer />
    // </BrowserRouter>
  );
};

export default App;
