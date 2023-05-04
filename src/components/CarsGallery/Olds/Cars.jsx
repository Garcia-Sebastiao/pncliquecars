import Cars from "../../UI/Car/Cars";
import { SwiperSlide } from "swiper/react";
import Carrousel from "../../Carrousel/Carrousel";

import buick from "../../../assets/images/cars/reliquia/buick-1950.jpg";
import cadilac1949 from "../../../assets/images/cars/reliquia/cadilac-1949.jpg";

export default function OldsCars() {
  return (
    <div>
      <Carrousel>
        <SwiperSlide>
          <Cars
            carImage={buick}
            velocity="50,000"
            fuel="3,50L"
            model="BUICK 1950"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={cadilac1949}
            velocity="50,000"
            fuel="3,50L"
            model="CADILAC 1949"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={buick}
            velocity="50,000"
            fuel="3,50L"
            model="BUICK 1950"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={cadilac1949}
            velocity="50,000"
            fuel="3,50L"
            model="CADILAC 1949"
            price="210,450 / dia"
          />
        </SwiperSlide>
      </Carrousel>
    </div>
  );
}
