import React, { useState } from 'react'
const menuItems = [
    {
      title: "Home",
      url: "#",
      cName: "nav-links"
    },
    {
      title: "Services",
      url: "#",
      cName: "nav-links"
    },
    {
      title: "Products",
      url: "#",
      cName: "nav-links"
    },
    {
      title: "Contact",
      url: "#",
      cName: "nav-links"
    },
    {
      title: "Sign up",
      url: "#",
      cName: "nav-links-mobile"
    }
  ];


function NavResponsive() {
    const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
  };
  return (

    <nav className="navbar-responsive">
      <h1 className="navbar-logo">
        React <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        X
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default NavResponsive


  
  