import "./banner.css"
import bannerImg from "./../../img/images/promo-img.jpg"
const Banner = () => {
    return (<section className="banner">
        <div className="container">
            <div className="banner_content">
            <div className="banner_img" >
                    <img src={bannerImg} alt="Promo" />
                </div>
                <div className="banner_text">
                <div className="banner_title">
                <span class="highlight">
                        <span> PAYDAY </span>
                        SALE NOW
                        </span>
                    </div>
                    <div className="banner_description">
                        Spend minimal $100 get 30% off voucher code for your next purchase
                    </div>
                    <div className="banner_add_description">
                     1 June - 10 June 2021
                    </div>
                    <div className="banner_star_description">
                    *Terms & Conditions apply
                    <div className="banner_button_wrapper">
                    <a href="#!" className="banner_button">
                    Shop Now
                    </a>
                    </div>
                    </div>
                
                    </div>
                    </div>
                    </div>
                    </section> );
}
 
export default Banner;