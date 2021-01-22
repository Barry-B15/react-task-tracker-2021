import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return ( 
        <header >
            <h1>{title}</h1>
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