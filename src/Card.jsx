import PropTypes from 'prop-types'

function Card (props)
{
    return(
        <div className="card">
            <img className="cardImg" alt="Profile Picture" src={props.src} height={200} width={200}></img>
            <h2 className="cardTitle">{props.title}</h2>
            <p  className="cardText">{props.text}</p>
        </div>

    );

}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    src: PropTypes.string,
}
Card.defaultProps = {
    title: "Guest",
    text: "I am a guest",
    src: "https://logowik.com/content/uploads/images/be-my-guest1720783103.logowik.com.webp",
}


export default Card