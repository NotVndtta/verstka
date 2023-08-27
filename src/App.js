import Footer from './components/Footer/footer.jsx';
import Header from './components/Header/Header.jsx';
import Application from './components/application/Application.jsx';
import Arrivals from './components/arrivals/Arrivals.jsx';
import Banner from './components/banner/Banner.jsx';
import Brands from './components/brands/Brands.jsx';
import Community from './components/community/Community.jsx';
import Favourite from './components/favourites/Favourite.jsx';
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
      <Favourite />
      <Application />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
