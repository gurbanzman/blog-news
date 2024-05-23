import { Link } from "react-router-dom";

export default function BreadCrumb({ bread }) {
  return (
    <ul className="page-name_lists">
      {bread.map((item, index) => {
        return (
          <li className="page-name-lists_option" key={index}>
            <Link to={item.link} className="page-name-link">
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
