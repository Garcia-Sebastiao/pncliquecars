import { useState } from "react";
import Cars from "../UI/Car/Cars";
import { motion } from "framer-motion";
import Button from "../UI/Button/Button";
import Carrousel from "../Carrousel/Carrousel";
import { Swiper, SwiperSlide } from "swiper/react";

// -------- cars Ccomponents ------- //
import SuvCars from "./Suv/Cars";
import BaseCars from "./Base/Cars";
import GamaCars from "./Gama/Cars";
import OldsCars from "./Olds/Cars";
import OthersCars from "./Others/Cars";
import ExecutiveCars from "./Executive/Cars";

// ------------ Base Cars ------------ //
import hyundayI10 from "../../assets/images/cars/base/hyundai-i10.png";
import renaultSandero from "../../assets/images/cars/base/sandero.jpg";
import suzukiSwift from "../../assets/images/cars/base/suzuki-swift.png";
import carImage from "../../assets/images/audi3.svg";

// ------------ Suv Cars ------------ //
import hyundaiTucson from "../../assets/images/cars/suv/hyundai-tucson.jpg";
import renaultDuster from "../../assets/images/cars/suv/renault-duster.jpg";
import hyundaiCreta from "../../assets/images/cars/suv/hyundai-creta.jpg";
import kiaSportag from "../../assets/images/cars/suv/kia-sportag.jpg";

// ------------ Executivo Cars ------------ //
import bmwSerie7 from "../../assets/images/cars/executivo/bmw-serie7.png";
import crisley300 from "../../assets/images/cars/executivo/crisley-300.jpg";
import jaguarXJ from "../../assets/images/cars/executivo/jaguar-xj.webp";
import mercedes550 from "../../assets/images/cars/executivo/mercedes-550.webp";
import buick from "../../assets/images/cars/reliquia/buick-1950.jpg";

// ------------ Gama Cars ------------ //
import mitsubishiPajero from "../../assets/images/cars/gama/mitsubishi-pajero.webp";
import nissanArmada from "../../assets/images/cars/gama/nissan-armada.jpg";
import toyotaFortuner from "../../assets/images/cars/gama/toyota-fortuner.png";
import toyotaPrado from "../../assets/images/cars/gama/toyota-prado.png";

// -------- Old Cars -------- //
import cadilac1949 from "../../assets/images/cars/reliquia/cadilac-1949.jpg";

// ------------ Others Cars ------------ //
import minivanH1 from "../../assets/images/cars/outros/minivan-h1.jpg";
import nissanUrVan from "../../assets/images/cars/outros/nissan-urvan.jpg";
import hyundaiCoaster from "../../assets/images/cars/outros/hyundai-coaster-van.jpg";

export default function Gallery() {
  const [all, showAll] = useState(true);
  const [base, showBase] = useState(false);
  const [suv, showSuv] = useState(false);
  const [reliquia, showReliquia] = useState(false);
  const [executivo, showExecutivo] = useState(false);
  const [gama, showGama] = useState(false);
  const [outros, showOutros] = useState(false);

  function handleShowBase() {
    if (!base) {
      showBase(true);
      showSuv(false);
      showReliquia(false);
      showExecutivo(false);
      showGama(false);
      showOutros(false);
      showAll(false);
    }
  }

  function handleShowSuv() {
    if (!suv) {
      showBase(false);
      showSuv(true);
      showReliquia(false);
      showExecutivo(false);
      showGama(false);
      showOutros(false);
      showAll(false);
    }
  }

  function handleShowReliquia() {
    if (!reliquia) {
      showBase(false);
      showSuv(false);
      showReliquia(true);
      showExecutivo(false);
      showGama(false);
      showOutros(false);
      showAll(false);
    }
  }

  function handleShowExecutivo() {
    if (!executivo) {
      showBase(false);
      showSuv(false);
      showReliquia(false);
      showExecutivo(true);
      showGama(false);
      showOutros(false);
      showAll(false);
    }
  }

  function handleShowGama() {
    if (!gama) {
      showBase(false);
      showSuv(false);
      showReliquia(false);
      showExecutivo(false);
      showGama(true);
      showOutros(false);
      showAll(false);
    }
  }

  function handleShowOutros() {
    if (!suv) {
      showBase(false);
      showSuv(false);
      showReliquia(false);
      showExecutivo(false);
      showGama(false);
      showOutros(true);
      showAll(false);
    }
  }

  function handleShowAll() {
    if (!all) {
      showAll(true);
      showBase(false);
      showSuv(false);
      showReliquia(false);
      showExecutivo(false);
      showGama(false);
      showOutros(false);
      showAll(true);
    }
  }

  return (
    <div>
      <motion.div
        initial={{
          opacity: 0.5,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex items-center flex-wrap justify-center gap-5 py-10"
      >
        <Button
          className={all ? "bg-mainColor text-white" : " "}
          onClick={handleShowAll}
          value="Todos"
        />
        <Button
          className={base ? "bg-mainColor text-white" : " "}
          onClick={handleShowBase}
          value="Base"
        />
        <Button
          className={suv ? "bg-mainColor text-white" : " "}
          onClick={handleShowSuv}
          value="SUV"
        />
        <Button
          className={gama ? "bg-mainColor text-white" : " "}
          onClick={handleShowGama}
          value="Gama Alta"
        />
        <Button
          className={reliquia ? "bg-mainColor text-white" : " "}
          onClick={handleShowReliquia}
          value="Relíquias"
        />
        <Button
          className={executivo ? "bg-mainColor text-white" : " "}
          onClick={handleShowExecutivo}
          value="Executivo"
        />
        <Button
          className={outros ? "bg-mainColor text-white" : " "}
          onClick={handleShowOutros}
          value="Outros"
        />
      </motion.div>

      {/*  ---------- All Cars ---------- */}
      <div className={!all ? "hidden" : " "}>
        <Carrousel>
          {/* ---- Base ---- */}
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

          {/* ---- Executivo ---- */}

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

          {/* --- Gama --- */}

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

          {/* ------ Relíquias ------ */}

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

          {/* ---- Outros ---- */}

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

          {/* ---- SUV ---- */}
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

      {/* ----------- Base cars ---------- */}
      <div className={!base ? "hidden" : " "}>
        <BaseCars />
      </div>

      {/* ----------- Suv cars ---------- */}
      <div className={!suv ? "hidden" : " "}>
        <SuvCars />
      </div>

      {/* ----------- Reliquia cars ---------- */}
      <div className={!reliquia ? "hidden" : " "}>
        <OldsCars />
      </div>

      {/* ----------- Executivo cars ---------- */}
      <div className={!executivo ? "hidden" : " "}>
        <ExecutiveCars />
      </div>

      {/* ----------- Gama cars ---------- */}
      <div className={!gama ? "hidden" : " "}>
        <GamaCars />
      </div>

      {/* ----------- Outros cars ---------- */}
      <div className={!outros ? "hidden" : " "}>
        <OthersCars />
      </div>
    </div>
  );
}
