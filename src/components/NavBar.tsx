import LogoMd from '../assets/mdsolution_logo.png';
import NavBarItem from './NavBarItem';
import ShowMenuButton from './ShowMenuButton';

interface Props {
    active: string,
}

const NavBar: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <nav className="navbar bg-body-light">
        <div className="container navbar-container">
            <div className='img-container-nav-bar'>
                <img src={LogoMd} alt="Logo" height="140" className="d-inline-block align-text-top" />
            </div>
            <ul className="ul-navbar" id="Nav-menu">
                <NavBarItem link="/" active={ props.active == "menu" ? true : false } title={"Menu"} />
                <NavBarItem link="/Servicios" active={ props.active == "servicios" ? true : false } title={"Servicios"} /> 
                <NavBarItem link="/Nosotros" active={ props.active == "nosotros" ? true : false } title={"Nosotros"} />
            </ul>
            < ShowMenuButton/> 
        </div>
    </nav>
  )
}

export default NavBar;