import Card from "../Card/Card"
import Navigation from "./Navigation"
import User from "../components/User"

const Sidebar = () => {
    return (
        <div className="sidebar">

            {/* <Card className="sidebar__menu">
                <img src="./assets/Vector.png" alt="Hamburger" /> <h1>GMarket</h1>
            </Card> */}

            <Card className="sidebar__content">
                <User />
                <Navigation />
            </Card>
        </div>
    )
}

export default Sidebar