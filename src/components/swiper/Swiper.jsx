import CategoryCart from "../ui/CategoryCart";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import Cart from "../ui/Cart";



export default function CustomSwiper({ data,swiperController,setSwiperController,type,between,view,navigation}) {

  return (
    <Swiper
      modules={[Controller,Navigation]}
      onSwiper={setSwiperController}
      spaceBetween={between}
      slidesPerView={view}
      navigation={navigation}
      controller={{ control: swiperController }}
    >
      
          {type === 'category' ? (
            data?.map((item, index) => (
              <SwiperSlide key={index}>
                <CategoryCart link={item.link} text={item.text} imgUrl={item.imgUrl} />
              </SwiperSlide>
            ))
          ) : type === 'post' ? (
            data?.map((item, index) => (
              <SwiperSlide key={index}>
                <Cart
                      key={index}
                      imgUrl={item.imgUrl}
                      header={item.header}
                      desc={item.desc}
                      userImg={item.userImg}
                      date={item.date}
                      col={item.col}
                    />
              </SwiperSlide>
            ))
          ) : (
            ''
          )}
      
      
    </Swiper>
  );
}
