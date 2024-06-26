
import ContactPage from "./pages/ContactPage";
import ExamplePage from "./pages/ExamplePage";
import HomePage from "./pages/HomePage";
import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import List from "./pages/Hotel/HotelList";
import HotelList from "./pages/Hotel/HotelList";
import Hotel from "./pages/Hotel/Hotel";
import Header from "./components/Header";




function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const refMern = useRef(null);
  const refReact = useRef(null);
  const refWordpress = useRef(null);
  const refHome = useRef(null);
  const refFlutter = useRef(null);


  const handleRefMernClick = () => {
    refMern.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRefReactClick = () => {
    refReact.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWordpressClick = () => {
    refWordpress.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    refHome.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFlutterClick = () => {
    refFlutter.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Router>
        <Navbar refHome={refHome} />
        <Header
          handleRefMernClick={handleRefMernClick}
          handleRefReactClick={handleRefReactClick}
          handleWordpressClick={handleWordpressClick}
          handleHomeClick={handleHomeClick}
          handleFlutterClick={handleFlutterClick}
        />
        <Routes>
          <Route exact path='/' element={<HomePage refMern={refMern} refReact={refReact} refWordpress={refWordpress} refFlutter={refFlutter} />}></Route>
          <Route exact path='/example' element={<ExamplePage />}></Route>
          <Route exact path='/contact' element={<ContactPage />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/hotels' element={<HotelList />}></Route>
          <Route exact path='/hotels/:id' element={<Hotel />}></Route>
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
