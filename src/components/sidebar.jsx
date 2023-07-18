import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

const Sidebar = () => {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        style={{ height: "100vh" }}
      >
        <div className="position-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                href="#"
                className="list-group-item border-end-0"
                data-bs-parent="#sidebar"
                             >
                <i className="bi bi-bootstrap"></i>
                <Link to="/skincare" className="navbar-brand" href="#">
                  <img
                    src="https://img.icons8.com/?size=512&id=PpdHW0TYXWj4&format=png"
                    width="30"
                    height="24"
                    style={{paddingRight:'5px'}}
                  />Skincare
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="list-group-item border-end-0"
                data-bs-parent="#sidebar"
                           >
                <Link to="/make-up" className="navbar-brand" href="#">
                  <img
                    src="https://img.icons8.com/?size=512&id=xmAgqIOdFnUz&format=png"
                    width="30"
                    height="24"
                    style={{paddingRight:'5px'}}
                  />
                  Make Up
                </Link>
                <i className="bi bi-film"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="list-group-item border-end-0"
                data-bs-parent="#sidebar"
                            >
                <Link to="/fashion" className="navbar-brand" href="#">
                  <img
                    src="https://img.icons8.com/?size=512&id=tkHwvJqQ0nTn&format=png"
                    width="30"
                    height="24"
                    style={{paddingRight:'5px'}}
                  />
                  Fashion
                </Link>
                <i className="bi bi-heart"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="list-group-item border-end-0"
                data-bs-parent="#sidebar"
                        >
                <Link to="/bag" className="navbar-brand" href="#">
                  <img
                    src="https://img.icons8.com/?size=512&id=21823&format=png"
                    width="30"
                    height="24"
                    style={{paddingRight:'5px'}}
                  />
                  bag
                </Link>
                <i className="bi bi-bricks"></i>
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className="list-group-item border-end-0"
                data-bs-parent="#sidebar"
                          >
                <Link to="/shoes" className="navbar-brand" href="#">
                  <img
                    src="https://img.icons8.com/?size=512&id=aAjSjhBzPPsp&format=png"
                    width="30"
                    height="24"
                    style={{paddingRight:'5px'}}
                  />
                  Shoes
                </Link>
                <i className="bi bi-clock"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
