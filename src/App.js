import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Content from "./components/content";
import Cards from "./components/cards";
//newsapi.org/v2/everything?q=apple&from=2025-01-22&to=2025-01-22&sortBy=popularity&apiKey=d1d46c96e2f34eceb9104e5ec8c8a501

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
