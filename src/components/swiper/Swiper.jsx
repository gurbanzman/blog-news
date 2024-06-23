import CategoryCart from "../ui/CategoryCart";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import Cart from "../ui/Cart";

export default function CustomSwiper({
  data,
  swiperController,
  setSwiperController,
  type,
  between,
  view,
  navigation,
}) {
  return (
    <Swiper
      modules={[Controller, Navigation]}
      onSwiper={setSwiperController}
      spaceBetween={between}
      slidesPerView={view}
      slidesPerGroup={1}
      navigation={navigation}
      controller={{ control: swiperController }}
      breakpoints={{
        1805: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 1,
        },
        425: {
          slidesPerView: 1,
        },
        335: {
          slidesPerView: 1,
        },
      }}
    >
      {type === "category"
        ? data?.map((item, index) => (
            <SwiperSlide key={index}>
              <CategoryCart
                link={item.link}
                text={item.text}
                imgUrl={item.imgUrl}
              />
            </SwiperSlide>
          ))
        : type === "post"
        ? data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Cart
                key={index}
                imgUrl={item.imgUrl}
                link={item.link}
                header={item.header}
                desc={item.desc}
                userImg={item.userImg}
                date={item.date}
                userName={item.name}
                col={item.col}
              />
            </SwiperSlide>
          ))
        : type === "newPost"
        ? data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Cart
                key={index}
                imgUrl={item.imgUrl}
                link={item.link}
                header={item.header}
                desc={item.desc}
                userImg={item.userImg}
                date={item.date}
                userName={item.name}
                col={item.col}
              />
            </SwiperSlide>
          ))
        : type === "relatedPost"
        ? data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Cart
                key={index}
                imgUrl={item.imgUrl}
                link={item.link}
                header={item.header}
                desc={item.desc}
                userImg={item.userImg}
                date={item.date}
                userName={item.userName}
                col={item.col}
              />
            </SwiperSlide>
          ))
        : ""}
    </Swiper>
  );
}
