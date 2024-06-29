import React from "react";

import classnames from "classnames";
import {

  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("navcolors");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container style={{display:'flex' , flexDirection:'row'}}>
      <div style={{ height: '50px' }}> </div>
        <div className="navbar-translate">
           <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title=""
            style={{}}
          >

            <img 
                  alt='...'
                  src={require("../../assets/img/logo.png")}
                  style={{
                    width: '50px',
                    paddingTop: '8px',
                    margin: '0',
                    
                  }}
                />
              <img 
                  alt='...'
                  src={require("../../assets/img/DBIT.png")}
                  style={{
                    width: '50px',
                    paddingTop: '8px',
                    marginLeft: '20px',
                    
                  }}
                />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          <NavItem>
          <NavLink
                data-placement="bottom"
                href="/index"
                title=""
              >
                <b>
                  <h5
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      color: 'white',
                    }}
                  >
                    Home
                  </h5>
                </b>
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/annualreport"
                title=""
              >
                <b>
                  <h5
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      color: 'white',
                    }}
                  >
                    Reports
                  </h5>
                </b>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink data-placement="bottom" href="/event" title="">
                <b>
                  <h5
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      color: 'white',
                    }}
                  >
                    Events
                  </h5>
                </b>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/dbit_litsoc/"
                target="_blank"
                title=""
              >
                <b>
                  <h5
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      color: 'white',
                    }}
                  >
                    Blog
                  </h5>
                </b>
              </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
