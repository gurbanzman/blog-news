import { Link } from "react-router-dom";
import MainLayout from "../../layout/mainLayout/Index";
import swimGirl from "../../assets/images/swim-girl.png";
import boat from "../../assets/images/boat.png";
import avatar from "../../assets/images/avatar.png";
import sportGirl from "../../assets/images/sport-girl.png";
import { useState } from "react";
import CustomSwiper from "../../components/swiper/Swiper";
import { next, prev } from "../../components/swiper/SwiperButton";

export default function InnerPost() {
  const [relatedPost, setRelatedPost] = useState([
    {
      id: "1",
      imgUrl: sportGirl,
      header: "House boating on Lake Shasta",
      link: "/",
      desc: "The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires",
      userImg: avatar,
      userName: "James",
      date: "July 14 , 2022",
    },
    {
      id: "2",
      imgUrl: sportGirl,
      header: "House boating on Lake Shasta",
      link: "/",
      desc: "The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires",
      userImg: avatar,
      userName: "James",
      date: "July 14 , 2022",
    },
    {
      id: "3",
      imgUrl: sportGirl,
      header: "House boating on Lake Shasta",
      link: "/",
      desc: "The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires",
      userImg: avatar,
      userName: "James",
      date: "July 14 , 2022",
    },
    {
      id: "4",
      imgUrl: sportGirl,
      header: "House boating on Lake Shasta",
      link: "/",
      desc: "The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires",
      userImg: avatar,
      userName: "James",
      date: "July 14 , 2022",
    },
    {
      id: "5",
      imgUrl: sportGirl,
      header: "House boating on Lake Shasta",
      link: "/",
      desc: "The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires",
      userImg: avatar,
      userName: "James",
      date: "July 14 , 2022",
    },
    {
      id: "6",
      imgUrl: sportGirl,
      header: "House boating on Lake Shasta",
      link: "/",
      desc: "The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires",
      userImg: avatar,
      userName: "James",
      date: "July 14 , 2022",
    },
  ]);
  const [related, setRelated] = useState(null);
  return (
    <MainLayout>
      <div className="page-name mt-20">
        <div className="page-name_container container-mega">
          <ul className="page-name_lists">
            <li className="page-name-lists_option">
              <Link href="index.html" className="page-name-link">
                Home
              </Link>
            </li>
            <li className="page-name-lists_option">
              <Link className="page-name-link">InnerNews </Link>
            </li>
          </ul>
        </div>
      </div>
      <main className="d-flex container-mega inner-main section res-section">
        <section className="col-lg-7 inner-main_section">
          <div className="inner-main_container">
            <div className="inner-main_head">
              <h1 className="inner-head_title">
                How to Spend the Perfect Day on Croatia’s Most Magical Island
              </h1>
              <div className="inner-main_media">
                <img src={swimGirl} alt="swim-girl.png" className="b-12" />
              </div>
            </div>
            <ul className="inner-main_info" id="main-info-inner">
              <li className="inner-main-info_list">
                <pre className="inner-main-info_text">July 14 , 2022</pre>
              </li>
              <li className="inner-main-info_list">
                <pre className="inner-main-info_text">
                  <span>comments</span> : 35
                </pre>
              </li>
              <li className="inner-main-info_list">
                <pre className="inner-main-info_text">
                  <span>Category</span>: Sport
                </pre>
              </li>
            </ul>
          </div>
          <div className="inner-cart_about section container">
            <div className="inner-cart-about_title">
              <h4 className="inner-about_title">
                Don’t wait. The purpose of our lives is to be happy!
              </h4>
              <p className="inner-about_subtitle">
                Upon arrival, your senses will be rewarded with the pleasant
                scent of lemongrass oil used to clean the natural wood found
                throughout the room, creating a relaxing atmosphere within the
                space. A wonderful serenity has taken possession of my entire
                soul, like these sweet mornings of spring which I enjoy with my
                whole heart. I am alone, and feel the charm of existence in this
                spot, which was created for the bliss of souls like mine. I am
                so happy, my dear friend, so absorbed in the exquisite.
              </p>
            </div>
            <div className="inner-about_media">
              <div className="inner-about-media_logo">
                <img src={boat} alt="boat.png" className="b-12" />
              </div>
            </div>
            <div className="inner-cart-about_title">
              <h4 className="inner-about_title">
                Not how long, but how well you have lived is the main thing.
              </h4>
              <p className="inner-about_subtitle">
                When you are ready to indulge your sense of excitement, check
                out the range of water- sports opportunities at the resort’s
                on-site water-sports center. Want to leave your stress on the
                water? The resort has kayaks, paddleboards, or the low-key pedal
                boats. Snorkeling equipment is available as well, so you can
                experience the ever-changing undersea environment. Not only do
                visitors to a bed and breakfast get a unique perspective on the
                place they are visiting, they have options for special packages
                not available in other hotel settings. Bed and breakfasts can
                partner easily with local businesses for a smoothly organized
                and highly personalized vacation experience. The Fife and Drum
                Inn offers options such as the Historic Triangle Package that
                includes three nights at the Inn, breakfasts, and admissions to
                historic Williamsburg, Jamestown, and Yorktown. Bed and
                breakfasts also lend themselves to romance. Part of the charm of
                a bed and breakfast is the uniqueness; art, décor, and food are
                integrated to create a complete experience. For example, the
                Fife and Drum retains the colonial feel of the area in all its
                guest rooms. Special features include antique furnishings,
                elegant four poster beds in some guest rooms, as well folk art
                and artifacts from the restoration period of the historic area
                available for guests to enjoy.
              </p>
            </div>
          </div>
          <div className="inner-cart--info container section">
            <div className="inner-cart--sidebar col-lg-6">
              <ul className="inner-sidebar_lists">
                <li className="sidebar-option">
                  <button
                    type="button"
                    className="btn btn-small-row reply-btn side-option_btn"
                  >
                    <span className="side-option-btn_text">Share</span>
                  </button>
                </li>
                <li className="sidebar-option">
                  <button
                    type="button"
                    className="btn btn-small-row reply-btn side-option_btn"
                  >
                    <span className="side-option-btn_text">Marking</span>
                  </button>
                </li>
                <li className="sidebar-option">
                  <Link
                    to="#form"
                    className="btn btn-small-row reply-btn side-option_btn"
                  >
                    <span className="side-option-btn_text">Comment</span>
                  </Link>
                </li>
              </ul>
              <div className="inner-sidebar_user mt-25">
                <div className="post-user_info position-relative">
                  <div className="post-user_logo">
                    <img src={avatar} alt="avatar.png" className="b-12" />
                  </div>
                  <ul className="post-user_desc">
                    <li className="post-user_name post-sidebar">
                      <span className="post-sidebar_name">James</span>
                      <span className="post-sidebar_count">27 post</span>
                    </li>
                    <li className="post-user_date">
                      <button
                        type="button"
                        className="btn btn-small-row reply-btn btn--red inner-sidebar_btn"
                      >
                        Follow
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-25 inner-sidebar_tags sidebar col-lg-6">
              <div className="post-main_title">
                <div className="post-main_head">
                  <h1 className="post-title_text">Tags</h1>
                </div>
              </div>
              <ul className="sidebar-tags mt-20">
                <li className="sidebar-tags_title">Montenegro</li>
                <li className="sidebar-tags_title">Visit Croatia</li>
                <li className="sidebar-tags_title">Luxury Travel</li>
                <li className="sidebar-tags_title">Travel Log</li>
                <li className="sidebar-tags_title">Paradise Island</li>
                <li className="sidebar-tags_title">Travel Info</li>
              </ul>
            </div>
          </div>
          <div className="inner-cart_comments section">
            <div className="post-main_title">
              <div className="post-main_head">
                <h1 className="post-title_text">Comments</h1>
              </div>
            </div>
            <ol className="inner-comments_window mt-4">
              <li className="inner-comment_cart sidebar">
                <div className="inner-comment_user">
                  <div className="post-user_info">
                    <div className="post-user_logo">
                      <img src={avatar} alt="avatar.png" className="b-12" />
                    </div>
                    <ul className="post-user_desc">
                      <li className="post-user_name">James</li>
                      <li className="post-user_date">2022 04 July</li>
                    </ul>
                  </div>
                  <div className="inner-comment_btn">
                    <button
                      type="button"
                      className="btn btn-small-row reply-btn"
                    >
                      Reply
                    </button>
                  </div>
                </div>
                <p className="inner-comment">
                  When you are ready to indulge your sense of excitement, check
                  out the range of water- sports opportunities at the resort’s
                  on-site water-sports center. Want to leave your stress on the
                  water? The resort has kayaks, paddleboards, or the low-key
                  pedal boats.
                </p>
                <ol className="inner-comment-reply_window">
                  <li className="inner-comment-reply">
                    <div className="comment-reply_user">
                      <div className="post-user_info">
                        <div className="post-user_logo">
                          <img src={avatar} alt="avatar.png" className="b-12" />
                        </div>
                        <ul className="post-user_desc">
                          <li className="post-user_name">James</li>
                          <li className="post-user_date">August 18 , 2022</li>
                        </ul>
                      </div>
                      <p className="comment-reply-user_desc inner-comment">
                        a river or a lake island may be called an eyot or ait,
                        and a small island off the coast may be called a holm.
                        Sedimentary islands in the Ganges delta are called
                        chars. A grouping of geographically or geologically
                        related islands, such as the Philippines, is referred to
                        as an archipelago.{" "}
                      </p>
                    </div>
                  </li>
                </ol>
              </li>
              <li className="inner-comment_cart sidebar">
                <div className="inner-comment_user">
                  <div className="post-user_info">
                    <div className="post-user_logo">
                      <img src={avatar} alt="avatar.png" className="b-12" />
                    </div>
                    <ul className="post-user_desc">
                      <li className="post-user_name">James</li>
                      <li className="post-user_date">2022 04 July</li>
                    </ul>
                  </div>
                  <div className="inner-comment_btn">
                    <button
                      type="button"
                      className="btn btn-small-row reply-btn"
                    >
                      Reply
                    </button>
                  </div>
                </div>
                <p className="inner-comment">
                  When you are ready to indulge your sense of excitement, check
                  out the range of water- sports opportunities at the resort’s
                  on-site water-sports center. Want to leave your stress on the
                  water? The resort has kayaks, paddleboards, or the low-key
                  pedal boats.
                </p>
              </li>
            </ol>
          </div>
          <div className="section inner-cart-comment_react">
            <div className="post-main_title">
              <div className="post-main_head">
                <h1 className="post-title_text">Add a comment</h1>
              </div>
            </div>
            <form className="inner-cart_form mt-4" id="form">
              <div className="inner-cart-form_section">
                <div className="col-lg-6 inner-cart-form_window">
                  <div className="inner-form_section">
                    <label htmlFor="text" className="inner-form_block">
                      Name{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="write name"
                      className="inner-form_input sidebar"
                    />
                  </div>
                  <div className="inner-form_section">
                    <label htmlFor="text" className="inner-form_block">
                      Website{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="write website"
                      className="inner-form_input sidebar"
                    />
                  </div>
                  <div className="inner-form_section">
                    <label htmlFor="text" className="inner-form_block">
                      Email{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="write email"
                      className="inner-form_input sidebar"
                    />
                  </div>
                </div>
                <div className="col-lg-6 inner-form_section">
                  <label htmlFor="text" className="inner-form_block">
                    Comment
                  </label>
                  <textarea
                    name="text"
                    placeholder="write anything"
                    className="inner-form_input input--comment sidebar"
                  ></textarea>
                </div>
              </div>
              <div className="mt-20 inner-cart-footer">
                <div className="inner-cart_rate col-lg-12 sidebar">
                  <h1 className="inner-cart-rate_title">
                    Rate the usefulness of the article
                  </h1>
                  <div className="inner-cart-rate_reaction">
                    <button
                      type="button"
                      className="inner-rate-reaction btn btn-small-row"
                    >
                      <span className="inner-emoji">&#128545;</span>
                      <span className="inner-reaction">Bad</span>
                    </button>
                    <button
                      type="button"
                      className="inner-rate-reaction btn btn-small-row"
                    >
                      <span className="inner-emoji">&#128533;</span>
                      <span className="inner-reaction">Not Bad</span>
                    </button>
                    <button
                      type="button"
                      className="inner-rate-reaction btn btn-small-row"
                    >
                      <span className="inner-emoji">&#128539;</span>
                      <span className="inner-reaction">Woow</span>
                    </button>
                    <button
                      type="button"
                      className="inner-rate-reaction btn btn-small-row"
                    >
                      <span className="inner-emoji">&#128525;</span>
                      <span className="inner-reaction">i loved</span>
                    </button>
                    <button
                      type="button"
                      className="inner-rate-reaction btn btn-small-row"
                    >
                      <span className="inner-emoji">&#129321;</span>
                      <span className="inner-reaction">Perfect</span>
                    </button>
                  </div>
                </div>
                <div className="inner-cart_btn">
                  <button
                    type="submit"
                    className="btn btn-small-row btn-red send-btn"
                  >
                    Send Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
          <section className="post-main_section section-top">
            <div className="post-main-user">
              <div className="post-main_title">
                <div className="post-main_head">
                  <h1 className="post-title_text">Related Posts</h1>
                </div>
                <div className="post-title_btn mt-20" data-btn-slick="sliders4">
                  <button
                    type="button"
                    className="prev-btn btn sidebar btn--slick"
                    onClick={() => prev(related)}
                  >
                    {" "}
                  </button>
                  <button type="button" className="next-btn btn sidebar btn--slick"
                  onClick={() => next(related)}>
                    {" "}
                  </button>
                </div>
              </div>
              <div className="post-main_body">
                <div className="post-main_carts slider-block">
                  <CustomSwiper
                    data={relatedPost}
                    type="post"
                    swiperController={related}
                    setSwiperController={setRelated}
                    between={30}
                    view={4}
                    navigation={false}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="col-lg-2 inner-main_sidebar">
          <div className="inner-sidebar">
            <ul className="inner-sidebar_lists">
              <li className="sidebar-option">
                <button
                  type="button"
                  className="btn btn-small-row reply-btn side-option_btn"
                >
                  <span className="side-option-btn_text">Share</span>
                </button>
              </li>
              <li className="sidebar-option">
                <button
                  type="button"
                  className="btn btn-small-row reply-btn side-option_btn"
                >
                  <span className="side-option-btn_text">Marking</span>
                </button>
              </li>
              <li className="sidebar-option">
                <Link
                  to="#form"
                  className="btn btn-small-row reply-btn side-option_btn"
                >
                  <span className="side-option-btn_text">Comment</span>
                </Link>
              </li>
            </ul>
            <div className="inner-sidebar_user mt-25">
              <div className="post-user_info position-relative">
                <div className="post-user_logo">
                  <img src={avatar} alt="avatar.png" className="b-12" />
                </div>
                <ul className="post-user_desc">
                  <li className="post-user_name post-sidebar">
                    <span className="post-sidebar_name">James</span>
                    <span className="post-sidebar_count">27 post</span>
                  </li>
                  <li className="post-user_date">
                    <button
                      type="button"
                      className="btn btn-small-row reply-btn btn--red inner-sidebar_btn"
                    >
                      Follow
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-25 inner-sidebar_tags sidebar">
              <div className="post-main_title">
                <div className="post-main_head">
                  <h1 className="post-title_text">Tags</h1>
                </div>
              </div>
              <ul className="sidebar-tags mt-20">
                <li className="sidebar-tags_title">Montenegro</li>
                <li className="sidebar-tags_title">Visit Croatia</li>
                <li className="sidebar-tags_title">Luxury Travel</li>
                <li className="sidebar-tags_title">Travel Log</li>
                <li className="sidebar-tags_title">Paradise Island</li>
                <li className="sidebar-tags_title">Travel Info</li>
              </ul>
            </div>
            <div className="mt-25 sidebar inner-sidebar-tags_section">
              <div className="post-main_title">
                <div className="post-main_head">
                  <h1 className="post-title_text">Top Post</h1>
                </div>
              </div>
              <ul className="sidebar-tags_lists mt-20">
                <li className="sidebar-tags_option">
                  <div className="post-user_logo">
                    <img src={avatar} alt="avatar.png" className="b-12" />
                  </div>
                  <ul className="post-user_desc">
                    <li className="post-user_name">
                      How to Spend the Perfect Day on Croatia’s Most Magical
                      Island
                    </li>
                    <li className="post-user_date">Subhead</li>
                  </ul>
                </li>
                <li className="sidebar-tags_option">
                  <div className="post-user_logo">
                    <img src={avatar} alt="avatar.png" className="b-12" />
                  </div>
                  <ul className="post-user_desc">
                    <li className="post-user_name">
                      How to Spend the Perfect Day on Croatia’s Most Magical
                      Island
                    </li>
                    <li className="post-user_date">Subhead</li>
                  </ul>
                </li>
                <li className="sidebar-tags_option">
                  <div className="post-user_logo">
                    <img src={avatar} alt="avatar.png" className="b-12" />
                  </div>
                  <ul className="post-user_desc">
                    <li className="post-user_name">
                      How to Spend the Perfect Day on Croatia’s Most Magical
                      Island
                    </li>
                    <li className="post-user_date">Subhead</li>
                  </ul>
                </li>
                <li className="sidebar-tags_option">
                  <div className="post-user_logo">
                    <img src={avatar} alt="avatar.png" className="b-12" />
                  </div>
                  <ul className="post-user_desc">
                    <li className="post-user_name">
                      How to Spend the Perfect Day on Croatia’s Most Magical
                      Island
                    </li>
                    <li className="post-user_date">Subhead</li>
                  </ul>
                </li>
                <li className="sidebar-tags_option">
                  <div className="post-user_logo">
                    <img src={avatar} alt="avatar.png" className="b-12" />
                  </div>
                  <ul className="post-user_desc">
                    <li className="post-user_name">
                      How to Spend the Perfect Day on Croatia’s Most Magical
                      Island
                    </li>
                    <li className="post-user_date">Subhead</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
