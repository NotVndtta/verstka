import './header.css'
import icon from './../../img/icons/logo.svg'
function Header () {
    return (
        <header className="header"> 
         <div className="container">
            <div className="header_row">
                <div className="header_logo"> 
                <img src = {icon} alt="Logo" />
                    <span> Fashion </span>
                 </div>
                <div className="header_nav"> NAV </div>
            </div>
         </div>
         </header> 
    )
}

export default Header;