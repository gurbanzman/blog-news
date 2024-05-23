import { Link } from "react-router-dom";

export default function Cart({imgUrl,header,desc,userImg,userName,date,col}) {
  return (
    <div className={`post-main_cart ${col}`}>
      <div className="post-cart_logo">
        <img src={imgUrl} alt="sport-girl.png" className="b-12" />
      </div>
      <div className="post-cart_body">
        <div className="post-cart_text">
          <Link className="post-cart_title">
            {header}
          </Link>
          <p className="post-cart_subtitle">
            {desc}
          </p>
        </div>
        <div className="post-cart_user">
          <div className="post-user_info">
            <div className="post-user_logo">
              <img src={userImg} alt="avatar.png" className="b-12" />
            </div>
            <ul className="post-user_desc">
              <li className="post-user_name">{userName}</li>
              <li className="post-user_date">{date}</li>
            </ul>
          </div>
          <p className="post-user_book">
            <input
              type="checkbox"
              name="check"
              className="post-user-book_check"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
