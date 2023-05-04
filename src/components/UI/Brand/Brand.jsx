import React from "react";
import { motion } from "framer-motion";

export default function Brand(props) {
  const Animations = {
    initial: { scale: 1 },
    whileHover: { scale: 1.02 },
  };

  return (
    <motion.div
      initial={Animations.initial}
      whileHover={Animations.whileHover}
      className="w-444 b-white p-10 flex items-center justify-center rounded-2xl hover:shadow-lg transition duration-500 mobile:w-auto"
    >
      <div>
        <img src={props.image} alt="Imagem da marca" />
      </div>

      <div className="pl-5">
        <h4 className="font-poppinsSemiBold text-xl">{props.name}</h4>
        <span className="text-gray-400 pt-3">{props.description}</span>
      </div>
    </motion.div>
  );
}
