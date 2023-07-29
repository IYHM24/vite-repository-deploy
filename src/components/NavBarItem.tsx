import { Link } from 'react-router-dom';

interface Props {
    active: boolean,
    link: string,
    title: string
}

import React from 'react'

const NavBarItem: React.FunctionComponent<Props> = (props: Props) =>
{

    let anchor = <Link to={props.link} className='text-primary'><p>{props.title}</p></Link>;
    let classParameters = "NavBar-Item active-navItem"

    if (!props.active) {
        classParameters = "NavBar-Item inactive-navItem";
        anchor = <Link to={props.link.toString()} className='text-primary'><p className={classParameters}>{props.title}</p></Link>;
    }

    return (
        <>
            <li className={classParameters}> {anchor} </li>
        </>
    )

}

export default NavBarItem;