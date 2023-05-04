import React from "react";
import { motion } from "framer-motion";

export default function Button(props) {
  return (
    <motion.button
      onClick={props.onClick}
      className={`border-mainColor outline-none border-solid py-3  px-8 flex-none text-mainColor rounded-20 border-1 hover:bg-mainColor hover:text-white transition duration-200 hover:cursor-pointer focus:bg-mainColor focus:text-white ${props.className}`}
    >
      {props.value}
    </motion.button>
  );
}
