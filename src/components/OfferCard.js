import Card from "../Card/Card"

const OfferCard = ({ offer }) => {
    return (
        <Card className="offer" style={{
            backgroundColor: offer.color,
            boxShadow: `0 .5rem 1rem ${offer.color}`,
        }}>
            <h1 className="offer__heading">{offer.title}</h1>
            <p className="offer__text">{offer.text}</p>
            {offer.promo ? <button className="offer__promo" style={{ color: offer.color }}>{offer.promo}</button> : ''}
            <img src={offer.img} alt={offer.title} />
        </Card>
    )
}

export default OfferCard