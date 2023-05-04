import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "./carrousel.css";
import "swiper/css/navigation";

export default function Carrousel({ children, settings }) {
  const carrouselSettings = {
    spaceBetween: 50,
    navigation: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      390: {
        slidesPerView: 1,
      },
      820: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 2,
      },
    },
  };

  return (
    <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...carrouselSettings}>
      {children}
    </Swiper>
  );
}
