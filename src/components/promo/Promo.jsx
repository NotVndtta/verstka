import './promo.css'
import promoImg from './../../img/images/header-img.jpg'
const Promo = () => {
    return (<section className = "promo">
        <div className="container">
            <div className="promo_content">
                <div className="promo_text">
                    <div className="promo_title">
                        <span class="highlighter">
                        <span> LET’S </span>
                        </span>
                    EXPLORE 
                    <span class="highlighter highlighter--yellow">
                        <span> UNIQUE </span>
                        </span>
                     CLOTHES.
                    </div>
                    <div className="promo_description">
                    Live for Influential and Innovative fashion!
                    </div>
                    <div className="promo_button_wrapper">
                    <a href="#!" className="promo_button">
                    Shop Now
                    </a>
                    </div>
                </div>
                <div className="promo_img" >
                    <img src={promoImg} alt="Promo" />
                </div>
            </div>
        </div>
    </section>);
}
 
export default Promo;