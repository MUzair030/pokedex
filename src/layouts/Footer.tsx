import {MdOutlinePowerSettingsNew} from "react-icons/md";
import pokeballIcon from "../assets/pokeball-icon.png"

export const Footer = () => {

    return(
        <footer>
            <div className="block">
                <img src={pokeballIcon} />
            </div>

            <div className="footer-menu">

            </div>

            <div className="block">
                <MdOutlinePowerSettingsNew/>
            </div>
        </footer>
    );
}

