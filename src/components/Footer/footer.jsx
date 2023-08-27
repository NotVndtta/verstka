import "./footer.css"
import FacebookImg from "./../../img/socials/fb.svg"
import InstagramImg from "./../../img/socials/inst.svg"
import TwitterImg from "./../../img/socials/tw.svg"
import InImg from "./../../img/socials/in.svg"
const Footer = () => {
    return ( <section className="footer">
        <div className="container">
            <div className="footer_content">
                <div className="footer_first_column">
                <div className="footer_fashion">
                     FASHION
                     </div>
                    <div className="footer_description">
                    Complete your style with awesome
                    <br />
                     clothes from us.
                    </div>
                    <div className="footer_icons">
                        <img src={FacebookImg} alt="Facebook"></img>
                        <img src={InstagramImg} alt="Intagram"></img>
                        <img src={TwitterImg} alt="Twitter"></img>
                        <img src={InImg} alt="In"></img>
                    </div>
                </div>
                <div className="footer_links">
                    <div className="footer_company">
                    Company
                    <div className="company_links">
                    <a href="#!">About</a>
                    <br />
                     <a href="#!">Contact us</a> 
                     <br />
                     <a href="#!">Support</a>
                     <br /> 
                     <a href="#!">Careers</a> 
                    </div>
                    </div>
                    <div className="footer_quick_link">
                        Quick Link
                        <div className="quick_links">
                    <a href="#!">Share Location</a>
                    <br />
                     <a href="#!">Orders Tracking</a> 
                     <br />
                     <a href="#!">Size Guide</a>
                     <br /> 
                     <a href="#!">FAQs</a> 
                    </div>
                    </div>
                    <div className="footer_legal">
                        Legal
                        <div className="legal_links">
                    <a href="#!">Terms & conditions</a>
                    <br />
                     <a href="#!">Privacy Policy</a> 
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section> );
}
 
export default Footer;