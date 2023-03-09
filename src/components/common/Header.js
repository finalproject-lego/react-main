import { useNavigate } from "react-router-dom";
import HeaderCSS from "./Header.module.css";


function Header() {

    const navigate = useNavigate();

    const onClickLogoHandler = () => {
        
        navigate("/", {replace: true})
    }

    return (
        
        <>
            <div className={ HeaderCSS.HeaderDiv }>
                <button
                    
                    className={ HeaderCSS.LogoBtn }
                    onClick={ onClickLogoHandler }
                >
                    <img src="/images/main_logo.png" alt="" width="100"/>
                </button>
            </div>
        </>
    );
}

export default Header;