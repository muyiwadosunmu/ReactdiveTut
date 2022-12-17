const Header = ({ title }) => { 
                // We destructured props  
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}
 
export default Header;