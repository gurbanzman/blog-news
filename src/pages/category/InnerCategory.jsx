import { Link } from "react-router-dom";
import MainLayout from "../../layout/mainLayout/Index";
import avatar from "../../assets/images/avatar.png";
import sportGirl from "../../assets/images/sport-girl.png";

export default function InnerCategory() {
  return (
    <MainLayout>
      <div className="page-name mt-20">
      <div className="page-name_container container-mega">
         <ul className="page-name_lists">
            <li className="page-name-lists_option">
               <Link to="#" className="page-name-link">Home</Link>
            </li>
            <li className="page-name-lists_option">
               <Link to="#" className="page-name-link">Sport</Link>
            </li>
         </ul>
      </div>
   </div>
   <header className="category-header mt-4">
      <section className="category-header_section">
         <div className="category-header_window container-mega sidebar">
            <ul className="category-header_lists">
               <li className="category_option">
                  <Link to="#" className="category-option_link">
                     New
                  </Link>
               </li>
               <li className="category_option">
                  <Link to="#" className="category-option_link">
                     Popular
                  </Link>
               </li>
               <li className="category_option">
                  <Link to="#" className="category-option_link">
                     Latest
                  </Link>
               </li>
            </ul>
            <ul className="category-order">
               <li className="category-order_straight order cursor-pointer">
                  <ul className="category-order-straight_list">
                     <li className="order-straight_list">
                        <button type="button" className="order-straight btn">
                           <span className="order-circle"></span>
                           <span className="order-rectangle"></span>
                        </button>
                     </li>
                     <li className="order-straight_list">
                        <button type="button" className="order-straight btn">
                           <span className="order-circle"></span>
                           <span className="order-rectangle"></span>
                        </button>
                     </li>
                     <li className="order-straight_list">
                        <button type="button" className="order-straight btn">
                           <span className="order-circle"></span>
                           <span className="order-rectangle"></span>
                        </button>
                     </li>
                  </ul>
               </li>
               <li className="category-order_rings order cursor-pointer">
                  <ul className="category-order-rings_list">
                     <li className="order-rings_list">
                        <button type="button" className="order-rings btn">
                           <span className="order-circle"></span>
                           <span className="order-circle"></span>
                           <span className="order-circle"></span>
                        </button>
                     </li>
                     <li className="order-rings_list">
                        <button type="button" className="order-rings btn">
                           <span className="order-circle"></span>
                           <span className="order-circle"></span>
                           <span className="order-circle"></span>
                        </button>
                     </li>
                     <li className="order-rings_list">
                        <button type="button" className="order-rings btn">
                           <span className="order-circle"></span>
                           <span className="order-circle"></span>
                           <span className="order-circle"></span>
                        </button>
                     </li>
                  </ul>
               </li>
            </ul>
         </div>
      </section>
   </header>

   <main className="main">
      <section className="main-section">
         <div className="main-section_window container-mega mt-4">
            <div className="post-main_title">
               <div className="post-main_head">
                  <h1 className="post-title_text">Category : sport</h1>
               </div>
            </div>
            <div className="post-main_body">
               <div className="post-main_carts order-posts">
                  <div className="post-main_cart col-lg-3 order-post">
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
                  <div className="post-main_cart col-lg-3 order-post">
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
                                 <img src={avatar} alt="avatar.png" />
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
                  <div className="post-main_cart col-lg-3 order-post">
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
                                 <img src={avatar} alt="avatar.png" />
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
                  <div className="post-main_cart col-lg-3 order-post">
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
                                 <img src={avatar} alt="avatar.png" />
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
                  <div className="post-main_cart col-lg-3 order-post">
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
                                 <img src={avatar} alt="avatar.png" />
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
                  <div className="post-main_cart col-lg-3 order-post">
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
                                 <img src={avatar} alt="avatar.png" />
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
