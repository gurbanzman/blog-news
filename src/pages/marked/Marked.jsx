import { Link, useParams } from "react-router-dom";
import MainLayout from "../../layout/mainLayout/Index";
import backProfile from "../../assets/images/profil-back.png";
import avatar from "../../assets/images/avatar.png";
import sportGirl from "../../assets/images/sport-girl.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Marked() {
  const { id } = useParams();
  const [find, setFind] = useState({});
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.put(`http://localhost:3000/user/${id}`);
        setFind(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000`);
        const filter = await response.data.filter((item) => item.userID == id);
        setPost(filter);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <MainLayout>
      <div className="page-name mt-20">
        <div className="page-name_container container-mega">
          <ul className="page-name_lists">
            <li className="page-name-lists_option">
              <Link to="index.html" className="page-name-link">
                Home
              </Link>
            </li>
            <li className="page-name-lists_option">
              <Link className="page-name-link" aria-disabled="true">
                Profile marked
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <header className="inner-header mt-4 profile-main">
        <section className="inner-header_section container-mega sidebar">
          <div className="col-lg-12 back-profil-logo">
            <img
              src={find.photoURL ? find.photoURL : backProfile}
              alt="profil-back.png"
              className="b-12"
            />
          </div>
          <div className="inner-header_info position-relative">
            <div className="inner-header-info_media">
              <div className="post-user_logo">
                <img
                  src={find.logo ? find.logo : avatar}
                  alt="avatar.png"
                  className="b-12"
                />
              </div>
              <ul className="post-user_desc" id="user-marked">
                <li className="post-user_name">
                  {find.fname + ` ` + find.lname}
                </li>
              </ul>
            </div>
            <ul className="inner-main_info" id="main-info-marked">
              <li className="post-main_head inner-main-info_list">
                <Link to={`/home/${find.fname}/${find.id}`}>Marked</Link>
              </li>
              <li className="inner-main-info_list">
                <Link to={`/${find.fname}/create/${find.id}`}>Send Post</Link>
              </li>
              <li className="inner-main-info_list">
                <Link to={`/${find.fname}/posts`}>Posts</Link>
              </li>
            </ul>
            <div className="inner-header_btn">
              <Link
                to={`/${find.fname}/edit/${find.id}`}
                className="btn btn-small-row reply-btn btn-light edit-btn"
              >
                <span>Edit Profile</span>
              </Link>
            </div>
          </div>
        </section>
      </header>

      <main className="main">
        <section className="main-section">
          <div className="main-section_window container-mega mt-4">
            <div className="post-main_title">
              <div className="post-main_head">
                <h1 className="post-title_text">Latest Posts</h1>
              </div>
            </div>
            <div className="post-main_body">
              <div className="post-main_carts">
                {post
                  ? post.map((item, index) => {
                      if (currentPage < index < itemsPerPage) {
                        return (
                          <>
                            <div
                              key={index}
                              className="post-main_cart col-lg-3"
                            >
                              <div
                                className="post-cart_logo"
                                style={{ height: "240px" }}
                              >
                                <img
                                  src={
                                    item.imageURL
                                      ? item.imageURL.url
                                      : sportGirl
                                  }
                                  alt="sport-girl.png"
                                  className="b-12"
                                />
                              </div>
                              <div className="post-cart_body">
                                <div className="post-cart_text">
                                  <Link className="post-cart_title">
                                    {item.title
                                      ? item.title
                                      : `Opening Day of Boating Season, Seattle WA`}
                                  </Link>
                                  <p className="post-cart_subtitle">
                                    {item.desc
                                      ? item.desc
                                      : `Of course the Puget Sound is very watery, and
                                  where there is water, there are boats. Today
                                  is the Grand Opening of Boating Season when
                                  traffic gets stalled in the University
                                  District (UW) while the Montlake Bridge`}
                                  </p>
                                </div>
                                <div className="post-cart_user">
                                  <div className="post-user_info">
                                    <div className="post-user_logo">
                                      <img
                                        src={find.logo ? find.logo : avatar}
                                        alt="avatar.png"
                                        className="b-12"
                                      />
                                    </div>
                                    <ul className="post-user_desc marked--desc">
                                      <li className="post-user_name">
                                        {find.fname ? find.fname : "James"}
                                      </li>
                                      <li className="post-user_date">
                                        {item.updatedAt
                                          ? item.updatedAt.toLocaleString()
                                          : ""}
                                      </li>
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
                          </>
                        );
                      }
                    })
                  : ""}
              </div>
              <div className="post-cart_pagi section">
                <div className="post-cart-pagi_btn">
                  <button
                    type="button"
                    className="btn reply-btn btn-small-row pagi-prev"
                    onClick={() =>
                      setCurrentPage((currentPage) => currentPage - 5) 
                    }
                  >
                    Prev
                  </button>
                </div>
                <ul className="post-cart-pagi_list">
                  {post
                    ? post.map((item, index) => {
                        return (
                          <li key={item.id} className="post-cart-pagi_option">
                            <Link
                              to="#"
                              className="post-cart-pagi_link"
                              onClick={() =>
                                setCurrentPage((currentPage) => currentPage + 5)
                              }
                            >
                              {index + 1}
                            </Link>
                          </li>
                        );
                      })
                    : ""}
                </ul>
                <div className="post-cart-pagi_btn">
                  <button
                    type="button"
                    className="btn reply-btn btn-small-row pagi-next"
                    onClick={() =>
                      setCurrentPage((currentPage) => currentPage + 5)
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
