import React from "react";
import { motion } from "framer-motion";

export default function Service(props) {
  return (
    <motion.div
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0.5,
        opacity: 0.5,
      }}
      transition={{
        type: "spring",
        damping: 4,
        mass: 0.5,
        stiffness: 15,
        delay: props.delay,
      }}
      className="flex p-8 bg-gray-100 rounded-2xl mobile:flex-col mobile:item gap-5"
    >
      <div className="flex items-center w-64 justify-center mobile:w-full">
        <img className="object-cover w-full h-full" src={props.image} alt="" />
      </div>

      <div className="pl-8 mobile:pl-0">
        <h3 className="text-mainColor text-2xl font-poppinsSemiBold">
          {props.title}
        </h3>

        <p className="text-base py-5 max-w-72">{props.description}</p>

        <button
          className="bg-mainColor text-white py-3.5 w-full rounded-lg hover:bg-mainHover transition duration-200 hover:cursor-pointer"
          href=""
        >
          Saber mais
        </button>
      </div>
    </motion.div>
  );
}
