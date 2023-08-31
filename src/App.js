import logo from "./logo.svg";
import "./App.css";
// import Article from "./components/article/Article";
// import brand from "./components/brand/brand";
// import cta from "./components/cta/cta";
// import feature from "./components/feature/feature";
// import navbar from "./components/navbar/navbar";

import { Article, Brand, Cta, Navbar } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  Header,
  WhatGPT3,
  Features,
} from "./contrainers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
