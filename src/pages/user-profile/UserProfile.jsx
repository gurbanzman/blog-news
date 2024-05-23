import { Link } from "react-router-dom";
import MainLayout from "../../layout/mainLayout/Index";
import backProfile from "../../assets/images/profil-back.png";
import avatar from "../../assets/images/avatar.png";
import sportGirl from "../../assets/images/sport-girl.png";
import BreadCrumb from "../../components/BreadCrumb";


export default function UserProfile() {
  return (
    <MainLayout>
       <div className="page-name mt-20">
      <div className="page-name_container container-mega">
         <BreadCrumb bread={[
            {
               id:"1",
               link:"/",
               name:"Home"
            },
            {
               id:"2",
               link:"/",
               name:"Inner"
            }
         ]}/>
      </div>
   </div>

   <header className="inner-header mt-4">
      <section className="inner-header_section container-mega sidebar">
         <div className="col-lg-12 back-profil-logo">
            <img src={backProfile} alt="profil-back.png" className="b-12" />
         </div>
         <div className="inner-header_info position-relative">
            <div className="inner-header-info_media">
               <div className="post-user_logo">
                  <img src={avatar} alt="avatar.png" className="b-12" />
               </div>
               <ul className="post-user_desc" id="profil-user-name">
                  <li className="post-user_name">James</li>
               </ul>
            </div>
            <ul className="inner-main_info" id="main-info-writer">
               <li className="inner-main-info_list">
                  <pre>Rate : 4.2 </pre>
               </li>
               <li className="inner-main-info_list">
                  <pre>Follower :  1.2 K</pre>
               </li>
               <li className="inner-main-info_list">
                  <pre>Post:  29</pre>
               </li>
            </ul>
            <div className="inner-header_btn">
               <button type="button" className="btn btn-small-row reply-btn btn--red inner-sidebar_btn"><span>Follow</span></button>
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
                  <div className="post-main_cart col-lg-3">
                     <div className="post-cart_logo">
                        <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                     </div>
                     <div className="post-cart_body">
                        <div className="post-cart_text">
                           <Link className="post-cart_title">Opening Day of Boating Season, Seattle WA</Link>
                           <p className="post-cart_subtitle">Of course the Puget Sound is very watery, and where there is
                              water, there are boats. Today is the Grand Opening of Boating Season when traffic gets
                              stalled in the University District (UW) while the Montlake Bridge</p>
                        </div>
                        <div className="post-cart_user">
                           <div className="post-user_info">
                              <div className="post-user_logo">
                                 <img src={avatar} alt="avatar.png" className="b-12" />
                              </div>
                              <ul className="post-user_desc">
                                 <li className="post-user_name">James</li>
                                 <li className="post-user_date">August 18 , 2022</li>
                              </ul>
                           </div>
                           <p className="post-user_book">
                              <input type="checkbox" name="check" className="post-user-book_check" />
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="post-main_cart col-lg-3">
                     <div className="post-cart_logo">
                        <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                     </div>
                     <div className="post-cart_body">
                        <div className="post-cart_text">
                           <Link className="post-cart_title">Opening Day of Boating Season, Seattle WA</Link>
                           <p className="post-cart_subtitle">Of course the Puget Sound is very watery, and where there is
                              water, there are boats. Today is the Grand Opening of Boating Season when traffic gets
                              stalled in the University District (UW) while the Montlake Bridge</p>
                        </div>
                        <div className="post-cart_user">
                           <div className="post-user_info">
                              <div className="post-user_logo">
                                 <img src={avatar} alt="avatar.png" className="b-12" />
                              </div>
                              <ul className="post-user_desc">
                                 <li className="post-user_name">James</li>
                                 <li className="post-user_date">August 18 , 2022</li>
                              </ul>
                           </div>
                           <p className="post-user_book">
                              <input type="checkbox" name="check" className="post-user-book_check" />
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="post-main_cart col-lg-3">
                     <div className="post-cart_logo">
                        <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                     </div>
                     <div className="post-cart_body">
                        <div className="post-cart_text">
                           <Link className="post-cart_title">Opening Day of Boating Season, Seattle WA</Link>
                           <p className="post-cart_subtitle">Of course the Puget Sound is very watery, and where there is
                              water, there are boats. Today is the Grand Opening of Boating Season when traffic gets
                              stalled in the University District (UW) while the Montlake Bridge</p>
                        </div>
                        <div className="post-cart_user">
                           <div className="post-user_info">
                              <div className="post-user_logo">
                                 <img src={avatar} alt="avatar.png" className="b-12" />
                              </div>
                              <ul className="post-user_desc">
                                 <li className="post-user_name">James</li>
                                 <li className="post-user_date">August 18 , 2022</li>
                              </ul>
                           </div>
                           <p className="post-user_book">
                              <input type="checkbox" name="check" className="post-user-book_check" />
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="post-main_cart col-lg-3">
                     <div className="post-cart_logo">
                        <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                     </div>
                     <div className="post-cart_body">
                        <div className="post-cart_text">
                           <Link className="post-cart_title">Opening Day of Boating Season, Seattle WA</Link>
                           <p className="post-cart_subtitle">Of course the Puget Sound is very watery, and where there is
                              water, there are boats. Today is the Grand Opening of Boating Season when traffic gets
                              stalled in the University District (UW) while the Montlake Bridge</p>
                        </div>
                        <div className="post-cart_user">
                           <div className="post-user_info">
                              <div className="post-user_logo">
                                 <img src={avatar} alt="avatar.png" className="b-12" />
                              </div>
                              <ul className="post-user_desc">
                                 <li className="post-user_name">James</li>
                                 <li className="post-user_date">August 18 , 2022</li>
                              </ul>
                           </div>
                           <p className="post-user_book">
                              <input type="checkbox" name="check" className="post-user-book_check" />
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="post-main_cart col-lg-3">
                     <div className="post-cart_logo">
                        <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                     </div>
                     <div className="post-cart_body">
                        <div className="post-cart_text">
                           <Link className="post-cart_title">Opening Day of Boating Season, Seattle WA</Link>
                           <p className="post-cart_subtitle">Of course the Puget Sound is very watery, and where there is
                              water, there are boats. Today is the Grand Opening of Boating Season when traffic gets
                              stalled in the University District (UW) while the Montlake Bridge</p>
                        </div>
                        <div className="post-cart_user">
                           <div className="post-user_info">
                              <div className="post-user_logo">
                                 <img src={avatar} alt="avatar.png" className="b-12" />
                              </div>
                              <ul className="post-user_desc">
                                 <li className="post-user_name">James</li>
                                 <li className="post-user_date">August 18 , 2022</li>
                              </ul>
                           </div>
                           <p className="post-user_book">
                              <input type="checkbox" name="check" className="post-user-book_check" />
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="post-main_cart col-lg-3">
                     <div className="post-cart_logo">
                        <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                     </div>
                     <div className="post-cart_body">
                        <div className="post-cart_text">
                           <Link className="post-cart_title">Opening Day of Boating Season, Seattle WA</Link>
                           <p className="post-cart_subtitle">Of course the Puget Sound is very watery, and where there is
                              water, there are boats. Today is the Grand Opening of Boating Season when traffic gets
                              stalled in the University District (UW) while the Montlake Bridge</p>
                        </div>
                        <div className="post-cart_user">
                           <div className="post-user_info">
                              <div className="post-user_logo">
                                 <img src={avatar} alt="avatar.png" className="b-12" />
                              </div>
                              <ul className="post-user_desc">
                                 <li className="post-user_name">James</li>
                                 <li className="post-user_date">August 18 , 2022</li>
                              </ul>
                           </div>
                           <p className="post-user_book">
                              <input type="checkbox" name="check" className="post-user-book_check" />
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="post-cart_pagi section">
                  <div className="post-cart-pagi_btn">
                     <button type="button" className="btn reply-btn btn-small-row pagi-prev">Prev</button>
                  </div>
                  <ul className="post-cart-pagi_list">
                     <li className="post-cart-pagi_option">
                        <Link to="#" className="post-cart-pagi_link">1</Link>
                     </li>
                     <li className="post-cart-pagi_option">
                        <Link to="#" className="post-cart-pagi_link">...</Link>
                     </li>
                     <li className="post-cart-pagi_option">
                        <Link to="#" className="post-cart-pagi_link">3</Link>
                     </li>
                  </ul>
                  <div className="post-cart-pagi_btn">
                     <button type="button" className="btn reply-btn btn-small-row pagi-next">Next</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </main>
    </MainLayout>
  )
}
