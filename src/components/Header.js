import Logo from "../assets/logojenn.png"

function Header() {
    return (
        <div className="header">
            <img className="header-logo" src={Logo} alt="Logo" />
            coucou je suis le header
        </div>
    )
}

export default Header;