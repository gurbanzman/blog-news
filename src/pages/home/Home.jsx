import MainLayout from "../../layout/mainLayout/Index";
import food from "../../assets/images/food.png";
import bmwPng from "../../assets/images/bmw.png";
import girlPng from "../../assets/images/girl.png";
import computer from "../../assets/images/computer.png";
import avatar from "../../assets/images/avatar.png";
import animal from "../../assets/images/animal2.png";
import sportGirl from "../../assets/images/sport-girl.png";
import Cart from "../../components/ui/Cart";
import tech from "../../assets/images/popular-technology.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomSwiper from "../../components/swiper/Swiper";

export default function Home() {
  // SwiperCore.use([Navigation,Pagination]);
  const [popularPost, setPopularPost] = useState([
    {
      id: "1",
      imgUrl: sportGirl,
      header: "Opening Day of Boating Season, Seattle WA",
      desc: "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
      userImg: avatar,
      date: "August 18 , 2022",
      col: "col-lg-12",
    },
    {
      id: "2",
      imgUrl: tech,
      header: "How to choose the right laptop for programming",
      desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
      userImg: avatar,
      date: "July 25 , 2022",
      col: "col-lg-12",
    },
    {
      id: "3",
      imgUrl: tech,
      header: "How to choose the right laptop for programming",
      desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
      userImg: avatar,
      date: "July 25 , 2022",
      col: "col-lg-12",
    },
  ]);
  const [allPost, setAllPost] = useState([
    {
      id: "1",
      imgUrl: sportGirl,
      header: "12 Mobile UX Design Trends For 2018",
      desc: "Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner",
      userImg: avatar,
      userName: "Jon Kantner",
      date: "July 14 , 2022",
      col: "post-all_cart col-lg-5",
    },
    {
      id: "2",
      imgUrl: animal,
      header: "What a Disabled Squirrel Taught Me About Life, Work, and Love",
      desc: "Why it helps to know what it’s like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
      userImg: avatar,
      userName: "James",
      date: "July 12 , 2022",
      col: "post-all_cart col-lg-5",
    },
    {
      id: "3",
      imgUrl: animal,
      header: "What a Disabled Squirrel Taught Me About Life, Work, and Love",
      desc: "Why it helps to know what it’s like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
      userImg: avatar,
      userName: "James",
      date: "July 12 , 2022",
      col: "post-all_cart col-lg-5",
    },
    {
      id: "4",
      imgUrl: animal,
      header: "What a Disabled Squirrel Taught Me About Life, Work, and Love",
      desc: "Why it helps to know what it’s like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
      userImg: avatar,
      userName: "James",
      date: "July 12 , 2022",
      col: "post-all_cart col-lg-5",
    },
    {
      id: "5",
      imgUrl: animal,
      header: "What a Disabled Squirrel Taught Me About Life, Work, and Love",
      desc: "Why it helps to know what it’s like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
      userImg: avatar,
      userName: "James",
      date: "July 12 , 2022",
      col: "post-all_cart col-lg-5",
    },
    {
      id: "6",
      imgUrl: animal,
      header: "What a Disabled Squirrel Taught Me About Life, Work, and Love",
      desc: "Why it helps to know what it’s like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
      userImg: avatar,
      userName: "James",
      date: "July 12 , 2022",
      col: "post-all_cart col-lg-5",
    },
  ]);
  const [category, setCategory] = useState([
    {
      id: "1",
      link: "/category/:sport",
      text: "sport",
      imgUrl: food,
    },
    {
      id: "2",
      link: "/category/:food",
      text: "food",
      imgUrl: food,
    },
    {
      id: "3",
      link: "/category/:sport",
      text: "sport",
      imgUrl: food,
    },
    {
      id: "4",
      link: "/category/:sport",
      text: "sport",
      imgUrl: food,
    },
    {
      id: "5",
      link: "/category/:sport",
      text: "sport",
      imgUrl: food,
    },
  ]);
  const [categorySwiper, setCategorySwiper] = useState(null);
  const [postSwiper, setPostSwiper] = useState(null);
  function next(){
    postSwiper.slideNext()
  }
  function prev(){
    postSwiper.slidePrev()
  }
  return (
    <MainLayout>
      <div className="section-category mt-4">
        <div className="category-container container-mega p-14">
          <div className="category-carts d-flex gap-5">
            <CustomSwiper
              data={category}
              type="category"
              swiperController={categorySwiper}
              setSwiperController={setCategorySwiper}
              between={30}
              view={4}
              navigation={true}
            />
          </div>
          {/* <button type="button" ref={prev} className="slick-btn prev" onClick={(e)=> onSlideChange(e)}>
            <i className="icon-chevron-left1"></i>
          </button>
          <button type="button" ref={next} className="slick-btn next cursor-pointer">
            <i className="icon-chevron-right1"></i>
          </button> */}
        </div>
      </div>

      <header className="header">
        <div className="header-section container-mega d-flex gap-4">
          <div className="col-lg-3 section-cart_head">
            <div className="header-section_cart position-relative">
              <div className="header-cart position-absolute">
                <Link className="header-cart_title">
                  How to Make Dance Music
                </Link>
                <p className="header-cart_subtitle">
                  Download torrents from verified or trusted uploaders. If
                  you're a BitTorrent user looking for safety tips, use this
                  method. Both of the big-name BitTorrent indexers (The Pirate
                  Bay and KickAssTorrents) use symbols to highlight torrents
                  uploaded by verified users.
                </p>
              </div>
              <div className="header-section_logo">
                <img src={bmwPng} alt="bmw.png" className="b-12" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 section-cart_head">
            <div className="header-section_cart position-relative">
              <div className="header-cart position-absolute">
                <Link className="header-cart_title">
                  How to Make Dance Music
                </Link>
                <p className="header-cart_subtitle">
                  Download torrents from verified or trusted uploaders. If
                  you're a BitTorrent user looking for safety tips, use this
                  method. Both of the big-name BitTorrent indexers (The Pirate
                  Bay and KickAssTorrents) use symbols to highlight torrents
                  uploaded by verified users.
                </p>
              </div>
              <div className="header-section_logo">
                <img src={girlPng} alt="girl.png" className="b-12" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 section-cart_head">
            <div className="section-cart_block position-relative">
              <div
                className="carts-block slider-block"
                data-slick="sliders1"
                data-slick-show="1"
                data-slick-auto="true"
                data-slick-auto-speed="1000"
                data-slick-dots="true"
                data-slick-infinite="false"
              >
                <div className="header-section_cart position-relative">
                  <div className="header-cart position-absolute width-97">
                    <Link className="header-cart_title">
                      How to Make Dance Music
                    </Link>
                    <p className="header-cart_subtitle">
                      Download torrents from verified or trusted uploaders. If
                      you are a BitTorrent user looking for safety tips, use
                      this method. Both of the big-name BitTorrent indexers (The
                      Pirate Bay and KickAssTorrents) use symbols to highlight
                      torrents uploaded by verified users.
                    </p>
                  </div>
                  <div className="header-section_logo">
                    <img src={computer} alt="girl.png" className="b-12" />
                  </div>
                </div>
              </div>

              <div className="header-section-btn" data-btn-slick="sliders1">
                <button className="prev-btn btn sidebar btn--slick"> </button>
                <button className="next-btn btn sidebar btn--slick"> </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="post-main">
        <section className="post-main_section section-top" id="popular">
          <div className="post-main-user container-mega">
            <div className="post-main_title">
              <div className="post-main_head">
                <h1 className="post-title_text">Popular Posts</h1>
              </div>
              <div className="post-title_btn">
                <button
                  type="button"
                  className="prev-btn btn sidebar btn--slick"
                  onClick={prev}
                >
                  {" "}
                </button>
                <button
                  type="button"
                  className="next-btn btn sidebar btn--slick"
                  onClick={next}
                >
                  {" "}
                </button>
              </div>
            </div>
            <div className="post-main_body">
              <div
                className="post-main_carts post-main--carts slider-block "
                data-slick="slidersR"
                data-slick-show="4"
                data-slick-auto="false"
                data-slick-dots="false"
                data-slick-infinite="false"
                data-responsive-slick-show="3"
                data-tablet="2"
                data-mobile="1"
                data-mobile-res="1"
              >
                <CustomSwiper
                  data={popularPost}
                  type="post"
                  swiperController={postSwiper}
                  setSwiperController={setPostSwiper}
                  between={30}
                  view={2}
                  navigation={false}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-all_post section-top">
          <div className="container-mega">
            <div className="post-main_title">
              <div className="post-main_head">
                <h1 className="post-title_text">All Posts</h1>
              </div>
              <div className="post-title_btn">
                <button type="button" className="post-show_btn btn">
                  <Link to="#" className="btn-small-reverse btn">
                    <span>Show All</span>
                    <span className="icon-chevron-thin-right"></span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="post-main_body">
              <div className="post-main_carts  post-main--carts wrap post-all_carts">
                {allPost.map((item, index) => {
                  return (
                    <Cart
                      key={index}
                      imgUrl={item.imgUrl}
                      header={item.header}
                      desc={item.desc}
                      userImg={item.userImg}
                      date={item.date}
                      col={item.col}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="post-main_section section-top">
          <div className="post-main-user container-mega">
            <div className="post-main_title">
              <div className="post-main_head">
                <h1 className="post-title_text">New Posts</h1>
              </div>
              <div className="post-title_btn mt-20" data-btn-slick="sliders3">
                <button
                  type="button"
                  className="prev-btn btn sidebar btn--slick"
                >
                  {" "}
                </button>
                <button
                  type="button"
                  className="next-btn btn sidebar btn--slick"
                >
                  {" "}
                </button>
              </div>
            </div>
            <div className="post-main_body">
              <div
                className="post-main_carts  post-main--carts slider-block "
                data-slick="sliders3"
                data-slick-show="4"
                data-slick-auto="true"
                data-slick-auto-speed="1"
                data-slick-dots="false"
                data-slick-infinite="false"
                data-responsive-slick-show="3"
                data-tablet="2"
                data-mobile="1"
              >
                <div className="post-main_cart col-lg-3">
                  <div className="post-cart_logo">
                    <img
                      src={sportGirl}
                      alt="sport-girl.png"
                      className="b-12"
                    />
                  </div>
                  <div className="post-cart_body">
                    <div className="post-cart_text">
                      <a className="post-cart_title">
                        Opening Day of Boating Season, Seattle WA
                      </a>
                      <p className="post-cart_subtitle">
                        Of course the Puget Sound is very watery, and where
                        there is water, there are boats. Today is the Grand
                        Opening of Boating Season when traffic gets stalled in
                        the University District (UW) while the Montlake Bridge
                      </p>
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
                        <input
                          type="checkbox"
                          name="check"
                          className="post-user-book_check"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="post-main_cart col-lg-3">
                  <div className="post-cart_logo">
                    <img
                      src={sportGirl}
                      alt="sport-girl.png"
                      className="b-12"
                    />
                  </div>
                  <div className="post-cart_body">
                    <div className="post-cart_text">
                      <a className="post-cart_title">
                        Opening Day of Boating Season, Seattle WA
                      </a>
                      <p className="post-cart_subtitle">
                        Of course the Puget Sound is very watery, and where
                        there is water, there are boats. Today is the Grand
                        Opening of Boating Season when traffic gets stalled in
                        the University District (UW) while the Montlake Bridge
                      </p>
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
                        <input
                          type="checkbox"
                          name="check"
                          className="post-user-book_check"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="post-main_cart col-lg-3">
                  <div className="post-cart_logo">
                    <img
                      src={sportGirl}
                      alt="sport-girl.png"
                      className="b-12"
                    />
                  </div>
                  <div className="post-cart_body">
                    <div className="post-cart_text">
                      <a className="post-cart_title">
                        Opening Day of Boating Season, Seattle WA
                      </a>
                      <p className="post-cart_subtitle">
                        Of course the Puget Sound is very watery, and where
                        there is water, there are boats. Today is the Grand
                        Opening of Boating Season when traffic gets stalled in
                        the University District (UW) while the Montlake Bridge
                      </p>
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
                        <input
                          type="checkbox"
                          name="check"
                          className="post-user-book_check"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
