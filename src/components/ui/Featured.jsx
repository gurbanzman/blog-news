import { Link } from "react-router-dom";

export default function Featured({link,header,desc,imgUrl}) {
  return (
    <div className="col-lg-3 section-cart_head">
      <div className="header-section_cart position-relative">
        <div className="header-cart position-absolute">
          <Link to={link} className="header-cart_title">{header}</Link>
          <p className="header-cart_subtitle">
            {desc}
          </p>
        </div>
        <div className="header-section_logo">
          <img src={imgUrl} alt="bmw.png" className="b-12" />
        </div>
      </div>
    </div>
  );
}
