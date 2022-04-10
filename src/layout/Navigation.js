import { useState } from "react"
import NavItem from "../components/NavItem"

const Navigation = () => {
    const [activeItem, setActiveItem] = useState('Stores')

    const pages = [
        'Stores',
        'Order history',
        'Saved stores',
        'Liked products',
        'Viewed Products',
        'Wallet history',
        'Profile setting'
    ]

    const pagesIcons = [
        './assets/store.svg',
        './assets/order.png',
        './assets/saved.png',
        './assets/like.png',
        './assets/view.png',
        './assets/wallet.png',
        './assets/profile.png'
    ]

    const handleActive = item => {
        setActiveItem(item)
    }

    const content = pages.map((item, i) => <NavItem activate={handleActive} active={activeItem} key={item} src={pagesIcons[i]} item={item} />)

    return (
        <ul className="navigation">
            {content}

            <div className="navigation__footer">
                <NavItem activate={handleActive} active={activeItem} src='./assets/call.png' item="Help center" drop />
                <NavItem activate={handleActive} active={activeItem} src='./assets/logout.png' item="Logout" drop />
            </div>
        </ul>
    )
}

export default Navigation