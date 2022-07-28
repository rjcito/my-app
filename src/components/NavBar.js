const NavBar = () => {
    return ( 
        <nav className = "navbar">
            <h1>Roberto's Cleaning Business</h1>
            <div className="links">
                <a href="/"style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '6px'
                }}>Home</a>
                <a href="/"style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '6px'
                }}>GetQuote</a>

            </div>
        </nav>
    );
}
 
export default NavBar;