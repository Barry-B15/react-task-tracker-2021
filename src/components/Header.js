import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {

        return ( 
            <header className = 'header'>
            <h1> { title } </h1> 
                <Button color={showAdd ? 'red' : 'green'}
            text = {showAdd ? 'Close' : 'Add'}
            onClick = { onAdd }
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
    
export default Header