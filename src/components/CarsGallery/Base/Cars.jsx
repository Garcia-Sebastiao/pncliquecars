import Cars from "../../UI/Car/Cars";
import { SwiperSlide } from "swiper/react";
import Carrousel from "../../Carrousel/Carrousel";
// ------------ Executivo Cars ------------ //
import hyundayI10 from "../../../assets/images/cars/base/hyundai-i10.png";
import kiaMorning from "../../../assets/images/cars/base/kia-morning.jpg";
import renaultSandero from "../../../assets/images/cars/base/sandero.jpg";
import suzukiSwift from "../../../assets/images/cars/base/suzuki-swift.png";
import carImage from "../../../assets/images/audi3.svg";

export default function BaseCars() {
  return (
    <div>
      <Carrousel>
        <SwiperSlide>
          <Cars
            carImage={hyundayI10}
            velocity="50,000"
            fuel="3,50L"
            model="HYUNDAI i10"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={renaultSandero}
            velocity="50,000"
            fuel="3,50L"
            model="RENAULT SANDERO"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={carImage}
            velocity="50,000"
            fuel="3,50L"
            model="KIA MORNING"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={suzukiSwift}
            velocity="50,000"
            fuel="3,50L"
            model="SUZUKI SWIFT"
            price="210,450 / dia"
          />
        </SwiperSlide>
      </Carrousel>
    </div>
  );
}
