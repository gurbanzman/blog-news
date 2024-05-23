import MainLayout from "../../layout/mainLayout/Index";
import backProfile from "../../assets/images/profil-back.png";
import avatar from "../../assets/images/avatar.png";
import sportGirl from "../../assets/images/sport-girl.png";
import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <MainLayout>
      <div className="page-name mt-20">
      <div className="page-name_container container-mega">
         <ul className="page-name_lists">
            <li className="page-name-lists_option">
               <Link to="/" className="page-name-link">Home</Link>
            </li>
            <li className="page-name-lists_option">
               <Link className="page-name-link" aria-disabled="true">Profile Posts</Link>
            </li>
         </ul>
      </div>
   </div>

   <header className="inner-header mt-4 profile-main">
      <section className="inner-header_section container-mega sidebar">
         <div className="col-lg-12 back-profil-logo">
            <img src={backProfile} alt="profile-back.png" className="b-12" />
         </div>
         <div className="inner-header_info position-relative">
            <div className="inner-header-info_media">
               <div className="post-user_logo">
                  <img src={avatar} alt="avatar.png" className="b-12" />
               </div>
               <ul className="post-user_desc" id="user-marked">
                  <li className="post-user_name">James</li>
               </ul>
            </div>
            <ul className="inner-main_info" id="main-info-marked">
               <li className="inner-main-info_list">
                  <Link to="profile-marked.html">Marked</Link>
               </li>
               <li className="inner-main-info_list">
                  <Link to="profile-send-post.html">Send Post</Link>
               </li>
               <li className="post-main_head inner-main-info_list">
                  <Link to="profile-posts.html">Posts</Link>
               </li>
            </ul>
            <div className="inner-header_btn">
               <Link to="#" className="btn btn-small-row reply-btn btn-light edit-btn"><span>Edit Profile</span></Link>
            </div>
         </div>
      </section>
   </header>

   <main className="main mt-4 res-section">
      <section className="main-section post-section">
         <div className="container-mega post-section_window" id="window-post">
            <div className="post-view">
               <div className="col-lg-7 post-view_container">
                  <div className="post-main_title">
                     <div className="post-main_head">
                        <h1 className="post-title_text">View posts</h1>
                     </div>
                  </div>
                  <div className="post-view_degree post-canvas mt-4  sidebar send-post-form-body_section">
                     <canvas id="myChart"></canvas>
                  </div>
               </div>
               <div className="col-lg-2 post-emoji">
                  <div className="post-main_title">
                     <div className="post-main_head">
                        <h1 className="post-title_text">Satisfaction of posts</h1>
                     </div>
                  </div>
                  <ul className="post-satisfaction post-view_degree mt-4  sidebar  send-post-form-body_section">
                     <li className="post-satisfaction_list sidebar">
                        <p className="post-satisfaction-list_date">August 2022</p>
                        <span className="inner-emoji">&#128545;</span>
                        <p className="post-satisfaction-list_count">20 points</p>
                     </li>
                     <li className="post-satisfaction_list sidebar">
                        <p className="post-satisfaction-list_date">August 2022</p>
                        <span className="inner-emoji">&#128545;</span>
                        <p className="post-satisfaction-list_count">20 points</p>
                     </li>
                     <li className="post-satisfaction_list sidebar">
                        <p className="post-satisfaction-list_date">August 2022</p>
                        <span className="inner-emoji">&#128545;</span>
                        <p className="post-satisfaction-list_count">20 points</p>
                     </li>
                     <li className="post-satisfaction_list sidebar">
                        <p className="post-satisfaction-list_date">August 2022</p>
                        <span className="inner-emoji">&#128545;</span>
                        <p className="post-satisfaction-list_count">20 points</p>
                     </li>
                     <li className="post-satisfaction_list sidebar">
                        <p className="post-satisfaction-list_date">August 2022</p>
                        <span className="inner-emoji">&#128545;</span>
                        <p className="post-satisfaction-list_count">20 points</p>
                     </li>
                     <li className="post-satisfaction_list sidebar">
                        <p className="post-satisfaction-list_date">August 2022</p>
                        <span className="inner-emoji">&#128545;</span>
                        <p className="post-satisfaction-list_count">20 points</p>
                     </li>
                     <li className="post-satisfaction_list sidebar">
                        <p className="post-satisfaction-list_date">August 2022</p>
                        <span className="inner-emoji">&#128545;</span>
                        <p className="post-satisfaction-list_count">20 points</p>
                     </li>
                     <li className="post-satisfaction_list sidebar">
                        <p className="post-satisfaction-list_date">August 2022</p>
                        <span className="inner-emoji">&#128545;</span>
                        <p className="post-satisfaction-list_count">20 points</p>
                     </li>
                     <li className="post-satisfaction_list sidebar">
                        <p className="post-satisfaction-list_date">August 2022</p>
                        <span className="inner-emoji">&#128545;</span>
                        <p className="post-satisfaction-list_count">20 points</p>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="post-main_section mt-4">
               <div className="post-main-user">
                  <div className="post-main_title">
                     <div className="post-main_head">
                        <h1 className="post-title_text">Your Posts</h1>
                     </div>
                     <div className="post-title_btn" data-btn-slick="sliders2">
                        <button type="button" className="prev-btn"> </button>
                        <button type="button" className="next-btn"> </button>
                     </div>
                  </div>
                  <div className="post-main_body">
                     <div className="post-main_carts slider-block " data-slick="sliders2" data-slick-show="4"
                        data-slick-auto="false" data-slick-dots="false" data-slick-infinite="false">
                        <div className="post-main_cart col-lg-3">
                           <div className="post-cart_logo">
                              <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                           </div>
                           <div className="post-cart_body">
                              <div className="post-cart_text">
                                 <input className="post-cart_title col-lg-12 btn edit-input" value="Opening Day of Boating Season, Seattle WA" disabled />
                              </div>
                              <div className="post-cart_user"> 
                                 <ul className="post-user_info edit-rating_list">
                                    <li className="sidebar-option edit-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn"> 15k
                                       </button>
                                    </li>
                                    <li className="sidebar-option edit-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">1.5
                                       </button>
                                    </li>
                                 </ul>
                                 <ul className="inner-sidebar_lists">
                                    <li className="sidebar-option sidebar-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">
                                       </button>
                                    </li>
                                    <li className="sidebar-option sidebar-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">
                                       </button>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="post-main_cart col-lg-3">
                           <div className="post-cart_logo">
                              <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                           </div>
                           <div className="post-cart_body">
                              <div className="post-cart_text">
                                 <input className="post-cart_title col-lg-12 btn edit-input" value="Opening Day of Boating Season, Seattle WA" disabled />
                              </div>
                              <div className="post-cart_user"> 
                                 <ul className="post-user_info edit-rating_list">
                                    <li className="sidebar-option edit-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn"> 15k
                                       </button>
                                    </li>
                                    <li className="sidebar-option edit-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">1.5
                                       </button>
                                    </li>
                                 </ul>
                                 <ul className="inner-sidebar_lists">
                                    <li className="sidebar-option sidebar-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">
                                       </button>
                                    </li>
                                    <li className="sidebar-option sidebar-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">
                                       </button>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="post-main_cart col-lg-3">
                           <div className="post-cart_logo">
                              <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                           </div>
                           <div className="post-cart_body">
                              <div className="post-cart_text">
                                 <input className="post-cart_title col-lg-12 btn edit-input" value="Opening Day of Boating Season, Seattle WA" disabled />
                              </div>
                              <div className="post-cart_user"> 
                                 <ul className="post-user_info edit-rating_list">
                                    <li className="sidebar-option edit-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn"> 15k
                                       </button>
                                    </li>
                                    <li className="sidebar-option edit-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">1.5
                                       </button>
                                    </li>
                                 </ul>
                                 <ul className="inner-sidebar_lists">
                                    <li className="sidebar-option sidebar-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">
                                       </button>
                                    </li>
                                    <li className="sidebar-option sidebar-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">
                                       </button>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="post-main_cart col-lg-3">
                           <div className="post-cart_logo">
                              <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                           </div>
                           <div className="post-cart_body">
                              <div className="post-cart_text">
                                 <input className="post-cart_title col-lg-12 btn edit-input" value="Opening Day of Boating Season, Seattle WA" disabled />
                              </div>
                              <div className="post-cart_user"> 
                                 <ul className="post-user_info edit-rating_list">
                                    <li className="sidebar-option edit-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn"> 15k
                                       </button>
                                    </li>
                                    <li className="sidebar-option edit-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">1.5
                                       </button>
                                    </li>
                                 </ul>
                                 <ul className="inner-sidebar_lists">
                                    <li className="sidebar-option sidebar-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">
                                       </button>
                                    </li>
                                    <li className="sidebar-option sidebar-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">
                                       </button>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="post-main_cart col-lg-3">
                           <div className="post-cart_logo">
                              <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                           </div>
                           <div className="post-cart_body">
                              <div className="post-cart_text">
                                 <input className="post-cart_title col-lg-12 btn edit-input" value="Opening Day of Boating Season, Seattle WA" disabled />
                              </div>
                              <div className="post-cart_user"> 
                                 <ul className="post-user_info edit-rating_list">
                                    <li className="sidebar-option edit-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn"> 15k
                                       </button>
                                    </li>
                                    <li className="sidebar-option edit-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">1.5
                                       </button>
                                    </li>
                                 </ul>
                                 <ul className="inner-sidebar_lists">
                                    <li className="sidebar-option sidebar-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">
                                       </button>
                                    </li>
                                    <li className="sidebar-option sidebar-rating">
                                       <button type="button" className="btn btn-small-row reply-btn side-option_btn profile-btn">
                                       </button>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </main>
    </MainLayout>
  )
}
