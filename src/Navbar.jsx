import './App.css'


let Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top"> {/* Add 'fixed-top' class */}
          <div className="container-fluid">
            <a className="realme navbar-brand" href="#">realme</a>
            <div className="navbar1 collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">realme smartphone</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">narzo smartphone</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Audio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Accessories</a>
                </li>
              </ul>
            </div>
            <div className="navbar2 collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Brand</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Support</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Community</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  

export default Navbar