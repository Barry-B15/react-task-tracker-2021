import PropTypes from 'prop-types'

const Button = ( { color, text, onClick }) => {

    //def the onclick
    // const onClick = (e) => {
    //     console.log(e)
    // }
    return ( 
         <button 
         onClick={onClick}
         style={{ backgroundColor: color }}
         className='btn'>{text}</button>
    )
}
// set defaultprops
Button.defaultProps = {
    color: 'steelblue',
}

// add the propTypes below the defaultProps
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button