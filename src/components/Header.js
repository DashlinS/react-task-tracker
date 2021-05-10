//impt to get this line for prop-types
import PropTypes from 'prop-types'
//import button
import Button from "./Button"
//to call props, you put props as a parameter and then call props.title
//Can pass the argument as an object to call and destructure
const Header = ({ anotherTitle }) => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className="header">
      {/* inline styling */}
      {/* <h1 style={{color: 'red', backgroundColor: 'black'}}>{anotherTitle}</h1> */}
      <h1>{anotherTitle}</h1>
      <Button color="green" text="add" onClick={ onClick } />
      {/* <Button color="red" text="Hello 1" />
      <Button color="blue" text="Hello 2" /> */}
      {/* <h1>{props.title}</h1> */}
    </header>
  )
}

//If no props being passed in, you can put in a default as an object which will work for the props.title. But props put in as argument will override it
Header.defaultProps = {
  title: 'Task Tracker',
  anotherTitle: "Title Two"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//CSS IN JS
// const headingStyle = {
//   color: 'red', backgroundColor: 'black'
// }

export default Header


// Prop types - built in type system for properties