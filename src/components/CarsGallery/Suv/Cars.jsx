import Cars from "../../UI/Car/Cars";
import { SwiperSlide } from "swiper/react";
import Carrousel from "../../Carrousel/Carrousel";

// ------------ Cars images ------------ //
import hyundaiTucson from "../../../assets/images/cars/suv/hyundai-tucson.jpg";
import renaultDuster from "../../../assets/images/cars/suv/renault-duster.jpg";
import hyundaiCreta from "../../../assets/images/cars/suv/hyundai-creta.jpg";
import kiaSportag from "../../../assets/images/cars/suv/kia-sportag.jpg";

export default function SuvCars() {
  return (
    <div>
      <Carrousel>
        <SwiperSlide>
          <Cars
            carImage={hyundaiTucson}
            velocity="50,000"
            fuel="3,50L"
            model="HYUNDAI TUCSON"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={hyundaiCreta}
            velocity="50,000"
            fuel="3,50L"
            model="HYUNDAI CRETA"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={kiaSportag}
            velocity="50,000"
            fuel="3,50L"
            model="KIA SPORTAG"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={renaultDuster}
            velocity="50,000"
            fuel="3,50L"
            model="RENAULT DUSTER"
            price="210,450 / dia"
          />
        </SwiperSlide>
      </Carrousel>
    </div>
  );
}
