import Link from "next/link"

const Header = ({}) => {
    return (
        <nav className={"container-fluid"}>
            <ul>
                <li className={"upper"}>how code</li>
                <li></li>
                <li ><Link href={'/tags/'} ><a className={"secondary"}>Link</a></Link></li>
                <li ><Link href={'/tags/'} ><a className={"secondary"}>Link</a></Link></li>
            </ul>

        </nav>
    )};




export default Header