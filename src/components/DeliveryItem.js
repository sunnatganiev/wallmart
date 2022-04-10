
const DeliveryItem = ({ day }) => {
    return (
        <li className="delivery__item">
            <div className="day">
                <span className="dot">&nbsp;</span>
                <p>{day.date}</p>
            </div>
            <p className="delivery__time">{day.duration}</p>
        </li>
    )
}

export default DeliveryItem