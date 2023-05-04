import Cars from "../../UI/Car/Cars";
import { SwiperSlide } from "swiper/react";
import Carrousel from "../../Carrousel/Carrousel";

// ------------ Gama Cars ------------ //
import mitsubishiPajero from "../../../assets/images/cars/gama/mitsubishi-pajero.webp";
import nissanArmada from "../../../assets/images/cars/gama/nissan-armada.jpg";
import toyotaFortuner from "../../../assets/images/cars/gama/toyota-fortuner.png";
import toyotaPrado from "../../../assets/images/cars/gama/toyota-prado.png";

export default function GamaCars() {
  return (
    <div>
      <Carrousel>
        <SwiperSlide>
          <Cars
            carImage={nissanArmada}
            velocity="50,000"
            fuel="3,50L"
            model="NISSAN ARMADA"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={toyotaFortuner}
            velocity="50,000"
            fuel="3,50L"
            model="TOYOTA FORTUNER"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={mitsubishiPajero}
            velocity="50,000"
            fuel="3,50L"
            model="MITSUBISHI PAJERO"
            price="210,450 / dia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cars
            carImage={toyotaPrado}
            velocity="50,000"
            fuel="3,50L"
            model="TOYOTA PRADO TXL"
            price="210,450 / dia"
          />
        </SwiperSlide>
      </Carrousel>
    </div>
  );
}
