import Cars from "../../UI/Car/Cars";
import { SwiperSlide } from "swiper/react";
import Carrousel from "../../Carrousel/Carrousel";
// ------------ Executivo Cars ------------ //
import bmwSerie7 from "../../../assets/images/cars/executivo/bmw-serie7.png";
import crisley300 from "../../../assets/images/cars/executivo/crisley-300.jpg";
import jaguarXJ from "../../../assets/images/cars/executivo/jaguar-xj.webp";
import mercedes550 from "../../../assets/images/cars/executivo/mercedes-550.webp";

export default function ExecutiveCars() {
  return (
    <div>
      <Carrousel>
        <SwiperSlide>
          <Cars
            carImage={jaguarXJ}
            velocity="50,000"
            fuel="3,50L"
            model="JAGUAR XJ"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={crisley300}
            velocity="50,000"
            fuel="3,50L"
            model="CRISLEY 300"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={bmwSerie7}
            velocity="50,000"
            fuel="3,50L"
            model="BMW SERIE-7"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={mercedes550}
            velocity="50,000"
            fuel="3,50L"
            model="MERCEDES 550"
            price="210,450 / dia"
          />
        </SwiperSlide>
      </Carrousel>
    </div>
  );
}
