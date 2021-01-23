import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return ( 
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color='green' 
            text='Add'
            onClick={onClick}
             />

        </header>
    )
}
// set the default props
Header.defaultProps = {
    title: 'Task Tracker',
}

// set prop types, notice Header. lowercase p in propTypes
Header.propTypes = {
    title: PropTypes.string,
}
// CSS in JS - def some style 
// const headingStyle = {
// color: 'red',
// backgroundColor: 'black'
// }
export default Header