import Header from './components/Header/Header.jsx';
import Arrivals from './components/arrivals/Arrivals.jsx';
import Banner from './components/banner/Banner.jsx';
import Brands from './components/brands/Brands.jsx';
import Promo from './components/promo/Promo.jsx';
function App() {
  return (
    <div className="App">
      <h1> powered by Dust </h1>
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
    </div>
  );
}

export default App;
