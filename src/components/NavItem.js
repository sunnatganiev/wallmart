
const NavItem = ({ activate, active, src, item, drop }) => {
    const className = `navItem ${active === item ? 'active' : ''}`

    const handleClick = function (e) {
        activate(e.target.textContent)
    }

    return (
        <li className={className} onClick={handleClick}>
            <div>
                <img src={src} alt={item} />
                {item}
            </div>
            {drop ? <img src="./assets/chevron-right.png" alt={item} /> : ''}
        </li>
    )
}

export default NavItem