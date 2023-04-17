import React from "react";
import './asset/scss/main.scss';
import './App.css';

import {  
  Route,
  Routes
} from "react-router-dom";

import Header from './layout/header';
import Footer from './layout/footer';
import HomePage from './pages/home-page';
import ProductPage from './pages/product-page';
import ProductSingle from './pages/product-single';
import Search from "./pages/search";

// import AdLoader from './layout/components/ad-loader';


function App() {
  return (
    <div id="wrapper" className="App">
      <Header/>      
        <Routes>

          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/products" element={<ProductPage/>}/>
          <Route exact path="/product-single" element={<ProductSingle/>}/>
          <Route exact path="/product-single" element={<ProductSingle/>}/>
          <Route exact path="/search" element={<Search/>}/>
          
          {/* <Route exact path="/loader" element={<AdLoader/>}/> */}
          {/* <Route path="*" element={<NotFound/>}/> */}

        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
