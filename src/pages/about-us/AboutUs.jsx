import { Link } from "react-router-dom";
import MainLayout from "../../layout/mainLayout/Index";
import bmw from "../../assets/images/bmw.png";
import sportGirl from "../../assets/images/sport-girl.png";

export default function AboutUs() {
  return (
    <MainLayout>
      <div className="page-name mt-20">
      <div className="page-name_container container-mega">
         <ul className="page-name_lists">
            <li className="page-name-lists_option">
               <Link to="index.html" className="page-name-link">Home</Link>
            </li>
            <li className="page-name-lists_option">
               <Link to="about-us.html" className="page-name-link" aria-disabled="true">About Us</Link>
            </li>
         </ul>
      </div>
   </div>

   <header className="about-header mt-4">
      <section className="about-header_section container-mega">
         <div className="about-container sidebar">
            <h1 className="about-header_title">We pay attention to your needs and do the best design.</h1>
            <ul className="about-header_lists mt-25">
               <li className="about-header-lists_desc col-lg-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl
                  nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet
                  sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh
                  tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.
                  Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur
                  lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra
                  suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna.
                  Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas
                  volutpat. Ornare lectus sit amet est placerat in egestas erat.
               </li>
               <li className="about-header-lists_media col-lg-6">
                  <div className="about-header_media col-lg-12">
                     <img src={bmw} alt="" className="b-12" />
                  </div>
               </li>
            </ul>
         </div>
      </section>
      <section className="section about-mega">
         <div className="about-mega_location sidebar col-lg-6">
            <div className="mega-location">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97233.99660689059!2d49.8466816!3d40.3963904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d40a035a6bd%3A0xa8c2cbf267a83fbd!2zSGV5ZMmZciDGj2xpeWV2IE3JmXJryZl6aQ!5e0!3m2!1str!2saz!4v1715872373420!5m2!1str!2saz" style={{border: "0px"}}  loading="lazy" className="col-lg-12 b-12"></iframe>
            </div>
         </div>   
         <div className="mega-news col-lg-6 about-mega_location">
            <div className="mega-news_section">
               <div className="post-main_title">
                  <div className="post-main_head">
                     <h1 className="post-title_text">Mega news information</h1>
                  </div>
               </div>
               <div className="mega-news_body mt-4">
                  <div className="mega-news_wall"></div>
                  <ul className="mega-news_info">
                     <li className="mega-news-info_list d-9">email : Management@mega.news</li>
                     <li className="mega-news-info_list d-9">Phone number : +1(234) 567-8910</li>
                     <li className="mega-news-info_list d-9">fax : +1(234) 567-8910</li>
                     <li className="mega-news-info_list d-9">Address : 1234 Foxrun St.New Lenox, IL 123456</li>
                  </ul>
               </div>
               <p className="mega-news_notifi mt-4 sidebar d-9">Responding 24 hours a day, 7 days a week</p>
            </div>
         </div>
      </section>
   </header>

   <main className="res-section">
      <section className="post-main_section section-top">
         <div className="post-main-user container-mega">
            <div className="post-main_title">
               <div className="post-main_head">
                  <h1 className="post-title_text">Mega News team</h1>
               </div>
               <div className="post-title_btn mt-20" data-btn-slick="sliders8">
                  <button type="button" className="prev-btn"> </button>
                  <button type="button" className="next-btn"> </button>
               </div>
            </div>
            <div className="post-main_body">
               <div className="post-main_carts slider-block " data-slick="sliders8" data-slick-show="4"
                  data-slick-auto="true" data-slick-auto-speed="1" data-slick-dots="false" data-slick-infinite="false">

                  <div className="post-main_cart col-lg-3 users-container">
                     <div className="post-cart_logo">
                        <img src={bmw} alt="sport-girl.png" className="b-12" />
                     </div>
                     <div className="post-cart_body">
                        <div className="post-cart_text users-container_category center">
                           <Link className="post-cart_title">designer</Link>
                        </div>
                        <div className="post-cart_user users-container_body mt-20">
                           <p className="users-container_name">behzad pashaei</p>
                        </div>
                     </div>
                  </div>
                  <div className="post-main_cart col-lg-3 users-container">
                     <div className="post-cart_logo">
                        <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                     </div>
                     <div className="post-cart_body">
                        <div className="post-cart_text users-container_category center">
                           <Link className="post-cart_title">designer</Link>
                        </div>
                        <div className="post-cart_user users-container_body mt-20">
                           <p className="users-container_name">behzad pashaei</p>
                        </div>
                     </div>
                  </div>
                  <div className="post-main_cart col-lg-3 users-container">
                     <div className="post-cart_logo">
                        <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                     </div>
                     <div className="post-cart_body">
                        <div className="post-cart_text users-container_category center">
                           <Link className="post-cart_title">designer</Link>
                        </div>
                        <div className="post-cart_user users-container_body mt-20">
                           <p className="users-container_name">behzad pashaei</p>
                        </div>
                     </div>
                  </div>
                  <div className="post-main_cart col-lg-3 users-container">
                     <div className="post-cart_logo">
                        <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                     </div>
                     <div className="post-cart_body">
                        <div className="post-cart_text users-container_category center">
                           <Link className="post-cart_title">designer</Link>
                        </div>
                        <div className="post-cart_user users-container_body mt-20">
                           <p className="users-container_name">behzad pashaei</p>
                        </div>
                     </div>
                  </div>
                  <div className="post-main_cart col-lg-3 users-container">
                     <div className="post-cart_logo">
                        <img src={sportGirl} alt="sport-girl.png" className="b-12" />
                     </div>
                     <div className="post-cart_body">
                        <div className="post-cart_text users-container_category center">
                           <Link className="post-cart_title">designer</Link>
                        </div>
                        <div className="post-cart_user users-container_body mt-20">
                           <p className="users-container_name">behzad pashaei</p>
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
