import { Link } from "react-router-dom";

export default function CategoryCart({ link, text, imgUrl }) {
  return (
    <Link to={link} className="category-cart">
      <h1 className="category-cart_name"># {text}</h1>
      <div className="category-cart_logo">
        <img src={imgUrl} alt="food.png" className="b-12" />
      </div>
    </Link>
  );
}
