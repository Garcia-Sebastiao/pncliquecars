import React from "react";
import { motion } from "framer-motion";

// * ---------- Images -------- * //
import velocimetro from "../../../assets/images/velocimetro.svg";
import fuelImage from "../../../assets/images/fuel.svg";

export default function Cars(props) {
  const Animations = {
    initial: { scale: 1 },
    whileHover: { scale: 1.03 },
  };

  return (
    <motion.div
      initial={(Animations.initial, { y: 100, opacity: 0.2 })}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={Animations.whileHover}
      className="flex flex-none flex-col items-center p-10 hover:shadow-xl transition duration-500 hover:cursor-pointer rounded-3xl"
    >
      <div className="flex items-center">
        <div className="px-8 flex items-center">
          <img className="w-10" src={velocimetro} alt="" />
          <span className="text-gray-300 px-4 font-poppinsMedium">
            {props.velocity}
          </span>
        </div>

        <div className="px-1 flex items-center">
          <img className="w-10" src={fuelImage} alt="" />
          <span className="text-gray-300 px-4 font-poppinsMedium">
            {props.fuel}
          </span>
        </div>
      </div>

      <div className="pt-10">
        <img className="w-52" src={props.carImage} alt="Imagem Audi" />
      </div>

      <div className="flex flex-col items-center pt-8">
        <span className="text-3xl text-center font-poppinsMedium">{props.model}</span>
        <span className="text-lg pt-2 font-poppinsMedium">{props.price}</span>
      </div>
    </motion.div>
  );
}
