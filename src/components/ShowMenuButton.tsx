import { useState } from 'react';
import IconMore from "../assets/icons/expand-icon.tsx";

const ShowMenuButton = () => {

    const [Show, setShow] = useState(false);
    const NavMenu: HTMLDivElement | null = document.querySelector('#Nav-menu');    

    const ActionButton = () => 
    {
        
        
        if(Show)
        {

            NavMenu?.classList.remove("active-nav-bar-mobile");
            NavMenu?.classList.add("inactive-nav-bar-mobile");    
            setShow(false); 
        }

        else
        {
            NavMenu?.classList.add("active-nav-bar-mobile");
            NavMenu?.classList.remove("inactive-nav-bar-mobile"); 
            setShow(true);
        }
    }

    return (
        <a
            className="show-menu-button"
            onClick={ActionButton}
        > 
            <IconMore height="50" width="50" fill="#1A3474"/> 
        </a>
    )
}

export default ShowMenuButton;