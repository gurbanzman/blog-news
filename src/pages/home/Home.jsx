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
  import Featured from "../../components/ui/Featured";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Controller, Navigation, EffectFade, Autoplay } from "swiper/modules";
  import { next, prev } from "../../components/swiper/SwiperButton";
  export default function Home() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   axios.get('http://localhost:3000')
    //     .then(res => setData(res.data))
    //     .catch(error => console.error(error));
    // }, []);

    const [popularPost, setPopularPost] = useState([
      {
        id: "1",
        imgUrl: sportGirl,
        link: "/",
        header: "Opening Day of Boating Season, Seattle WA",
        desc: "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
        userImg: avatar,
        name: "James",
        date: "August 18 , 2022",
        col: "col-lg-12",
      },
      {
        id: "2",
        imgUrl: tech,
        link: "/",
        header: "How to choose the right laptop for programming",
        desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        userImg: avatar,
        name: "James",
        date: "July 25 , 2022",
        col: "col-lg-12",
      },
      {
        id: "3",
        imgUrl: tech,
        link: "/",
        header: "How to choose the right laptop for programming",
        desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        userImg: avatar,
        name: "James",
        date: "July 25 , 2022",
        col: "col-lg-12",
      },
      {
        id: "4",
        imgUrl: tech,
        link: "/",
        header: "How to choose the right laptop for programming",
        desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        userImg: avatar,
        name: "James",
        date: "July 25 , 2022",
        col: "col-lg-12",
      },
      {
        id: "5",
        imgUrl: tech,
        link: "/",
        header: "How to choose the right laptop for programming",
        desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        userImg: avatar,
        name: "James",
        date: "July 25 , 2022",
        col: "col-lg-12",
      },
      {
        id: "6",
        imgUrl: tech,
        link: "/",
        header: "How to choose the right laptop for programming",
        desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        userImg: avatar,
        name: "James",
        date: "July 25 , 2022",
        col: "col-lg-12",
      },
      {
        id: "7",
        imgUrl: tech,
        link: "/",
        header: "How to choose the right laptop for programming",
        desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        userImg: avatar,
        name: "James",
        date: "July 25 , 2022",
        col: "col-lg-12",
      },
    ]);
    const [allPost, setAllPost] = useState([
      {
        id: "1",
        imgUrl: sportGirl,
        link: "/",
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
        link: "/category/sport",
        text: "sport",
        imgUrl: food,
      },
      {
        id: "2",
        link: "/category/food",
        text: "food",
        imgUrl: food,
      },
      {
        id: "3",
        link: "/category/sport",
        text: "sport",
        imgUrl: food,
      },
      {
        id: "4",
        link: "/category/sport",
        text: "sport",
        imgUrl: food,
      },
      {
        id: "5",
        link: "/category/sport",
        text: "sport",
        imgUrl: food,
      },
    ]);
    const [newPost, setNewPost] = useState([
      {
        id: "1",
        imgUrl: sportGirl,
        link: "/",
        header: "Opening Day of Boating Season, Seattle WA",
        desc: "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
        userImg: avatar,
        name: "James",
        date: "August 18 , 2022",
        col: "col-lg-12",
      },
      {
        id: "2",
        imgUrl: tech,
        link: "/",
        header: "How to choose the right laptop for programming",
        desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        userImg: avatar,
        name: "James",
        date: "July 25 , 2022",
        col: "col-lg-12",
      },
      {
        id: "3",
        imgUrl: tech,
        link: "/",
        header: "How to choose the right laptop for programming",
        desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        userImg: avatar,
        name: "James",
        date: "July 25 , 2022",
        col: "col-lg-12",
      },
      {
        id: "4",
        imgUrl: tech,
        link: "/",
        header: "How to choose the right laptop for programming",
        desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        userImg: avatar,
        name: "James",
        date: "July 25 , 2022",
        col: "col-lg-12",
      },
      {
        id: "5",
        imgUrl: tech,
        link: "/",
        header: "How to choose the right laptop for programming",
        desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        userImg: avatar,
        name: "James",
        date: "July 25 , 2022",
        col: "col-lg-12",
      },
      {
        id: "6",
        imgUrl: tech,
        link: "/",
        header: "How to choose the right laptop for programming",
        desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        userImg: avatar,
        name: "James",
        date: "July 25 , 2022",
        col: "col-lg-12",
      },
      {
        id: "7",
        imgUrl: tech,
        link: "/",
        header: "How to choose the right laptop for programming",
        desc: "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
        userImg: avatar,
        name: "James",
        date: "July 25 , 2022",
        col: "col-lg-12",
      },
    ]);
    const [featured, setFeatured] = useState([
      {
        id: "1",
        link: "/",
        imgUrl: computer,
        header: "Why I Stopped Using Multiple Monitor",
        desc: "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
      },
      {
        id: "2",
        link: "/",
        imgUrl: bmwPng,
        header: "Why I Stopped Using Multiple Monitor",
        desc: "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
      },
      {
        id: "3",
        link: "/",
        imgUrl: computer,
        header: "Why I Stopped Using Multiple Monitor",
        desc: "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
      },
      {
        id: "4",
        link: "/",
        imgUrl: computer,
        header: "Why I Stopped Using Multiple Monitor",
        desc: "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
      },
    ]);
    const [categorySwiper, setCategorySwiper] = useState(null);
    const [postSwiper, setPostSwiper] = useState(null);
    const [newPostSwiper, setNewPostSwiper] = useState(null);
    // let [isPrevDisabled, setIsPrevDisabled] = useState(true);
    // let [isNextDisabled, setIsNextDisabled] = useState(false);
    // function next(state) {
    //   state.slideNext();
    //   setButtonStates(state);
    // }
    // function prev(state) {
    //   state.slidePrev();
    //   setButtonStates(state);
    // }
    // function setButtonStates(swiper) {
    //   setIsPrevDisabled(swiper.isBeginning);
    //   setIsNextDisabled(swiper.isEnd);
    // }
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
            <Featured
              link={`/`}
              header={`How to Drive a Car Safely`}
              desc={`Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them. `}
              imgUrl={bmwPng}
            />
            <Featured
              link={`/`}
              header={`How to Make Dance Music`}
              desc={`Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. `}
              imgUrl={girlPng}
            />
            <div className="col-lg-6 section-cart_head">
              <div className="section-cart_block position-relative">
                <div className="carts-block slider-block">
                  <Swiper
                    modules={[Controller, Navigation, EffectFade, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    navigation={false}
                    controller={{ control: true }}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={2000}
                    autoplay={{
                      delay: 3000, // 3000ms (3 saniye) beklemeden sonra otomatik geçiş
                      disableOnInteraction: true,
                    }}
                  >
                    {featured.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="header-section_cart position-relative">
                            <div className="header-cart position-absolute width-97">
                              <Link to={item.link} className="header-cart_title">
                                {item.header}
                              </Link>
                              <p className="header-cart_subtitle">{item.desc}</p>
                            </div>
                            <div className="header-section_logo">
                              <img
                                src={item.imgUrl}
                                alt="girl.png"
                                className="b-12"
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
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
                    onClick={() => prev(postSwiper)}
                  >
                    {" "}
                  </button>
                  <button
                    type="button"
                    className="next-btn btn sidebar btn--slick"
                    onClick={() => next(postSwiper)}
                  >
                    {" "}
                  </button>
                </div>
              </div>
              <div className="post-main_body">
                <div className="post-main_carts post-main--carts slider-block">
                  <CustomSwiper
                    data={popularPost}
                    type="post"
                    swiperController={postSwiper}
                    setSwiperController={setPostSwiper}
                    between={30}
                    view={4}
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
                    onClick={() => prev(newPostSwiper)}
                  >
                    {" "}
                  </button>
                  <button
                    type="button"
                    className="next-btn btn sidebar btn--slick"
                    onClick={() => next(newPostSwiper)}
                  >
                    {" "}
                  </button>
                </div>
              </div>
              <div className="post-main_body">
                <div className="post-main_carts  post-main--carts slider-block ">
                  <CustomSwiper
                    data={newPost}
                    type="newPost"
                    swiperController={newPostSwiper}
                    setSwiperController={setNewPostSwiper}
                    between={30}
                    view={4}
                    navigation={false}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </MainLayout>
    );
  }
