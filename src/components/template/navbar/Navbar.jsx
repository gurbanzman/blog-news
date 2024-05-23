import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState([
    {
      id: "1",
      name: "Categories",
      to: "/",
      arrow: true,
      subMenu: [
        {
          id: "1",
          link: "/category/:name",
          name: "sport",
        },
        {
          id: "2",
          link: "/category/:name",
          name: "food",
        },
        {
          id: "3",
          link: "/category/:name",
          name: "animal",
        },
        {
          id: "4",
          link: "/category/:name",
          name: "car",
        },
        {
          id: "5",
          link: "/category/:name",
          name: "music",
        },
        {
          id: "6",
          link: "/category/:name",
          name: "technology",
        },
        {
          id: "7",
          link: "/category/:name",
          name: "abstract",
        },
      ],
    },
    {
      id: "2",
      name: "Contact us",
      to: "/contact-us",
      arrow: false,
    },
    {
      id: "3",
      name: "about us",
      to: "/about-us",
      arrow: false,
    },
  ]);
  return (
    <nav>
      <div className="navbar-section container-mega">
        <ul className="navbar-res_menu">
          <li className="navbar-res-menu_list user-lists">
            <Link to="index.html" className="navbar-title icon-home"></Link>
          </li>
          <li className="navbar-res-menu_list user-lists">
            <Link
              to="profile-marked.html"
              className="account-title icon-user"
            ></Link>
          </li>
          <li className="navbar-res-menu_list user-lists">
            <Link to="#" className="icon-bookmark"></Link>
          </li>
          <li className="navbar-res-menu_list user-lists">
            <Link to="#navbar" className="icon-chevron-thin-up"></Link>
          </li>
        </ul>
        <div className="navbar-title_section gap-64">
          <Link to="/" className="navbar-title web-blog-logo">
            MEGA.news
          </Link>
          <div className="bar">
            <input type="checkbox" name="check" className="bar-line" />
            <input type="checkbox" name="check" className="bar-close" />
            <ul className="navbar-pages">
              {menu.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="navbar-pages_list position-relative"
                  >
                    <Link to={item.to} className="navbar-pages_name btn">
                      {item.name}{" "}
                      {item.arrow ? (
                        <span className="icon-chevron-down1"></span>
                      ) : (
                        ""
                      )}
                    </Link>
                    {item.subMenu && (
                      <ul className="categories-pages_list sidebar">
                        {item.subMenu.map((sub, subIndex) => {
                          return (
                            <li key={subIndex} className="categories-pages_block">
                              <Link
                                to={sub.link}
                                className="categories-pages"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="navbar-pages position-relative" id="pages">
            <li className="navbar-pages_list">
              <Link to="#" className="navbar-pages_name btn">
                Categories <span className="icon-chevron-down1"></span>
              </Link>
              <ul className="categories-pages_list sidebar">
                <li className="categories-pages_block">
                  <Link to="/category/:sport" className="categories-pages">
                    Sport
                  </Link>
                </li>
                <li className="categories-pages_block">
                  <Link to="/category/:food" className="categories-pages">
                    Food
                  </Link>
                </li>
                <li className="categories-pages_block">
                  <Link to="/category/:animal" className="categories-pages">
                    Animal
                  </Link>
                </li>
                <li className="categories-pages_block">
                  <Link to="/category/:car" className="categories-pages">
                    Car
                  </Link>
                </li>
                <li className="categories-pages_block">
                  <Link to="/category/:music" className="categories-pages">
                    Music
                  </Link>
                </li>
                <li className="categories-pages_block">
                  <Link to="/category/:technology" className="categories-pages">
                    Technology
                  </Link>
                </li>
                <li className="categories-pages_block">
                  <Link to="/category/:abstract" className="categories-pages">
                    Abstract
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbar-pages_list">
              <Link to="/contact-us" className="navbar-pages_name">
                Contact Us
              </Link>
            </li>
            <li className="navbar-pages_list">
              <Link to="/about-us" className="navbar-pages_name">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-section_user gap-50">
          <input
            type="checkbox"
            name="check"
            className="form-checked sidebar position-relative"
          />
          <form className="section-search sidebar">
            <label htmlFor="text" className="section-search_title">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search Anything"
                className="search-input"
              />
            </label>
          </form>
          <div className="section-user blog-user">
            <div className="section-account cursor-pointer">
              <Link to="#" className="account-title icon-user"></Link>
            </div>
            <p className="section-mark cursor-pointer">
              <Link to="#" className="icon-bookmark-o"></Link>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
