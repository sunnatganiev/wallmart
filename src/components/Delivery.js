import ReactDOM from "react-dom"
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from '@hassanmojab/react-modern-calendar-datepicker';
import DeliveryItem from "./DeliveryItem";

const Delivery = (props) => {


    const Delivery = (props) => {

        const deliveryDays = [
            {
                date: '10 October',
                duration: '8:00 AM - 9:00 AM'
            },
            {
                date: '10 October',
                duration: '9:00 AM - 10:00 AM'
            },
            {
                date: '10 October',
                duration: '10:00 AM - 11:00 AM'
            },
            {
                date: '10 October',
                duration: '11:00 AM - 12:00 AM'
            },
            {
                date: '10 October',
                duration: '12:00 AM - 13:00 AM'
            },
            {
                date: '10 October',
                duration: '13:00 AM - 14:00 AM'
            },
            {
                date: '10 October',
                duration: '14:00 AM - 15:00 AM'
            },
            {
                date: '10 October',
                duration: '15:00 AM - 16:00 AM'
            },
            {
                date: '10 October',
                duration: '16:00 AM - 17:00 AM'
            }
        ]

        const deliveryList = deliveryDays.map((day, i) => <DeliveryItem key={i} day={day} />)

        return <>
            {props.show ? <div>
                <div className="delivery active">
                    <h1 className="delivery__title">Delivery time</h1>
                    <button className="delivery__close" onClick={() => props.delivery(false)}>x</button>
                    <Calendar
                        colorPrimary="#45A524"
                        calendarTodayClassName="today"
                        calendarClassName="delivery__calendar"
                    />
                    <ul className="delivery__list">
                        {deliveryList}
                    </ul>
                </div>
                <div className="overlay" onClick={() => props.delivery(false)}></div>
            </div> : ''}
        </>
    }

    return (
        <>
            {ReactDOM.createPortal(<Delivery delivery={props.delivery} show={props.show} />, document.getElementById('delivery'))}
        </>
    )
}

export default Delivery