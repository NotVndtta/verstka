import Card from "../card/Card";
import "./favourite.css"
import FavImg1 from "./../../img/images/promo-01.jpg"
import FavImg2 from "./../../img/images/promo-02.jpg"
const Favourite = () => {
    return ( <section className="favourite">
    <div className="container">
        <div className="favourite__header"> </div>
            <h2 className="title-2">Young’s Favourite</h2> 
            <div className="favourite__img">
                <Card title="Trending on instagram" img={FavImg1}/>
                <Card title="All Under $40" img={FavImg2}/>
            </div>
            </div>
            </section>);
}
 
export default Favourite;