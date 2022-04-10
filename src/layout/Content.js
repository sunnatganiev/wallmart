import Card from "../Card/Card"
import OfferCard from "../components/OfferCard"
import ProductCard from "../components/ProductCard"

const Content = () => {
    const offers = [
        {
            title: 'Sale Orange',
            text: 'Promocode down',
            promo: 'orange20',
            color: '#FF7F10',
            img: './assets/mandarin.png'
        },
        {
            title: 'Tomato',
            text: 'Buy at affordable price',
            color: '#CE3459',
            img: './assets/pomidor.png'
        },
        {
            title: 'Sale 40%',
            text: 'Very tasty pasta',
            promo: 'food40',
            color: '#79f307',
            img: './assets/lagmon.png'
        },
        {
            title: 'Collection',
            text: 'Sale full Pack',
            promo: 'collect',
            color: '#2F8CF6',
            img: './assets/pomidor.png'
        },
        {
            title: 'Sale 40%',
            text: 'Very tasty pasta',
            promo: 'food40',
            color: '#7753F6',
            img: './assets/lagmon.png'
        },
    ]

    const products = [
        {
            title: 'Calavo Hass Avocados',
            price: '$5.99',
            img: './assets/avocado.png'
        },
        {
            title: 'Lemons (Large) 8',
            price: '$3.89',
            img: './assets/lemon.png'
        },
        {
            title: 'Jumbo Cantaloupe',
            price: '$10.5',
            img: './assets/watermelon.png'
        },
        {
            title: 'Zespri Kiwifruit 2lb',
            price: '$4.90',
            img: './assets/avocado.png'
        },
        {
            title: 'Hass Large Avocados',
            price: '$4.90',
            img: './assets/largeAvocado.png'
        },
    ]

    const offersContent = offers.map((offer, i) => <OfferCard key={i} offer={offer} />)

    const productsContent = products.map((product, i) => <ProductCard key={i} product={product} />)

    return (
        <div className="content">
            <div className="content__head">
                <Card className="content__store">
                    <div className="content__store-img">
                        <img src="./assets/apelsin.png" alt="Wallpaper" />
                    </div>
                    <div className="content__store-footer">
                        <Card className="content__store-logo">
                            <img src="./assets/logo.png" alt="Wallmart" />
                        </Card>
                        <h1 className="content__store-heading">Wallmart store</h1>
                        <ul className="content__store-list">
                            <li className="content__store-item">
                                <span className="dot"></span>
                                <img src="./assets/info.png" alt="Info" />
                                <p>Store info</p>
                            </li>
                            <li className="content__store-item">
                                <span className="dot"></span>
                                <img src="./assets/track.png" alt="Store delivery time" />
                                <p>Store delivery time</p>
                            </li>
                            <li className="content__store-item">
                                <span className="dot"></span>
                                <img src="./assets/saved.png" alt="Bookmarked" />
                                <p>Saved</p>
                            </li>
                        </ul>
                        <div className="content__store-ratings">
                            <img src="./assets/star.png" alt="Rating" />
                            <span>4.5</span>
                        </div>
                    </div>
                </Card>
                <Card className="content__shop">
                    <Card className="content__shop-btn">
                        <img src="./assets/storeg.png" alt="Store" />
                        <p>Shop</p>
                    </Card>
                    <div className="content__shop-recipes">
                        <img src="./assets/fork.png" alt="Recipes" />
                        <p>Recipes</p>
                    </div>
                </Card>
            </div>
            <div className="content__offers">
                {offersContent}
            </div>
            <div className="content__tags">
                <Card className="active">
                    <img src="./assets/options.png" alt="Options" />
                </Card>
                <Card>Pantrys</Card>
                <Card>Fruits and Vegetables</Card>
                <Card>Eggs and Dairys</Card>
                <Card>Frozens</Card>
                <Card>Beverange</Card>
                <Card>Snacks</Card>
                <Card>Households</Card>
                <Card><span>More</span> <img src="./assets/chevron-bottom.png" alt="More" /></Card>
            </div>
            <div className="content__products">
                <div className="content__products-head">
                    <h2>Fresh Fruit</h2>
                    <h2>See all <span><img src="./assets/chevron-right-black.png" alt="See all" /></span></h2>
                </div>
                <Card className="content__products-product active">
                    {productsContent}
                </Card>
            </div>

        </div>
    )
}

export default Content