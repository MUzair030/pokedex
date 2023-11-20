import {GiHamburgerMenu} from "react-icons/gi";
import {Link} from "react-router-dom"
import pokeballIcon from "../assets/pokeball-icon.png"
import {useEffect, useState} from "react";

const navRoutes = [
    {
        name: "Search",
        route: "/search"
    },
    {
        name: "Compare",
        route: "/compare"
    },
    {
        name: "Pokemon",
        route: "/pokemon"
    },
    {
        name: "My List",
        route: "/list"
    },
    {
        name: "About",
        route: "/about"
    },
];


export const Navbar = () => {

    const [tab, setTab] = useState<any>("pokemon")

    useEffect(()=>{
        // eslint-disable-next-line no-restricted-globals
        const path = location.pathname.split("/")[1]
        console.log(path)
        setTab(path)
    },[])

    return(
        <nav className="nav">
            <div className="block">
                <img alt="pokeball_icon" src={pokeballIcon} />
            </div>

            <div className="nav-pokedex-text">
                POKEDEX
            </div>

            <div className="nav-menu">
                <ul className="ul">
                    {
                        navRoutes.map(({name, route}, index)=>(
                            <Link to={route} id={name} onClick={()=>{
                                console.log(name)
                                setTab(route.split("/")[1])
                            }}>
                                <li>
                                    {name}
                                </li>
                            </Link>
                        ))
                    }
                </ul>

                <div className="menu-underline-row">
                    <div className={tab === "search"? "underline": "underline-trans"}></div>
                    <div className={tab === "compare"? "underline": "underline-trans"}></div>
                    <div className={tab === "pokemon"? "underline": "underline-trans"}></div>
                    <div className={tab === "list"? "underline": "underline-trans"}></div>
                    <div className={tab === "about"? "underline": "underline-trans"}></div>
                </div>

            </div>

            <div className="block">
                <GiHamburgerMenu/>
            </div>
        </nav>
    );
}

