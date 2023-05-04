import Cars from "../../UI/Car/Cars";
import { SwiperSlide } from "swiper/react";
import Carrousel from "../../Carrousel/Carrousel";

// ------------ Cars images ------------ //
import minivanH1 from "../../../assets/images/cars/outros/minivan-h1.jpg";
import nissanUrVan from "../../../assets/images/cars/outros/nissan-urvan.jpg";
import hyundaiCoaster from "../../../assets/images/cars/outros/hyundai-coaster-van.jpg";

export default function OthersCars() {
  return (
    <div>
      <Carrousel>
        <SwiperSlide>
          <Cars
            carImage={nissanUrVan}
            velocity="50,000"
            fuel="3,50L"
            model="MINI-VAN NISSAN URVAN"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={minivanH1}
            velocity="50,000"
            fuel="3,50L"
            model="MINIVAN HYUNDAY H1"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={nissanUrVan}
            velocity="50,000"
            fuel="3,50L"
            model="MINI-VAN NISSAN URVAN"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={hyundaiCoaster}
            velocity="50,000"
            fuel="3,50L"
            model="HYUNDAI COASTER VAN"
            price="210,450 / dia"
          />
        </SwiperSlide>
      </Carrousel>
    </div>
  );
};
