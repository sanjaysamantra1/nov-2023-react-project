import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      {/* <Categories /> */}
      {/* <Carousel /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
