import AppImg from "./../../img/images/vouchers-img.png"
import AppStoreImg from "./../../img/icons/app-store.png"
import GooglePlayImg from "./../../img/icons/google-play.png"
import "./application.css"
const Application = () => {
    return (<section className="application">
    <div className="container">
        <div className="application_content">
            <div className="application_text">
                <div className="application_main_text">
                     DOWNLOAD APP & 
                     <br/>
                     GET THE VOUCHER!
                </div>
                    <div className="application_description">
                        Get 30% off for first transaction using
                        <br/>
                         Rondovision mobile app for now.
                    </div>
                    <div className="application_logos">
                        <img src={AppStoreImg} alt="AppStoreLogo"></img>
                        <img src={GooglePlayImg} alt="GooglePlayLogo"></img>
                    </div>
            </div>
            <div className="application_voucher">
                <img src={AppImg} alt="Voucher"></img>
            </div>
        </div>
    </div>
    </section>
    );
}
export default Application;