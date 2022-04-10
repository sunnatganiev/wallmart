
const Card = props => {
    const className = `card ${props.className}`
    return (
        <div className={className} style={props.style}>{props.children}</div>
    )
}

export default Card