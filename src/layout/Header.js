import Card from "../Card/Card"

const Header = ({ delivery }) => {
    return (
        <div className="header">

            <Card className="header__menu">
                <img src="./assets/Vector.png" alt="Hamburger" /> <h1>GMarket</h1>
            </Card>

            <Card className="header__back" >
                <img src="./assets/arrow-left.png" alt="Back" />
            </Card>

            <Card className="header__location">
                <img src="./assets/pin.png" alt="Location" className="header__location-pin" />
                <p>2972 Westheimer Rd. Santa Ana</p>
                <img src="./assets/chevron-bottom.png" alt="Bottom" className="chevron-bottom" />
            </Card>

            <Card className="header__search">
                <img src="./assets/search.png" alt="Search" />
                <input type="text" placeholder="Search products in Wallmart" className="header__search-input" />
                <img src="./assets/options.png" alt="Options" />
            </Card>

            <Card className="header__time">
                <div className="time" onClick={() => delivery(true)}>
                    <img src="./assets/alert.png" alt="Alert" />
                    <p>By 09:00 - 23:00</p>
                </div>
            </Card>

            <Card className="header__cost">
                <div className="header__cost-icon">
                    <img src="./assets/bag.png" alt="Bag" />
                </div>
                <p>$230.08</p>
            </Card>

        </div>
    )
}

export default Header