import ReactModal from "react-modal";
import { motion } from "framer-motion";

// ---------- React Components --------- //
import Title from "../UI/Title/Title";

// -------- Imagews ------- //
import assistent from "../../assets/images/assistent.svg";

// ------ Icons -------- //
import { MdAlternateEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";

// ------ CSS ------ //
import "./modal.css";
import { useState } from "react";

// ------ Modal Root ------- //
ReactModal.setAppElement("#root");

// ------ JSX Component ------ //
export default function Modal({ isOpen, setOpenModal }) {
  const customStyles = {
    content: {
      maxWidth: "70rem",
      margin: "auto",
      borderRadius: "2rem",
    },
  };

  const animations = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
    transition: {
      duration: 0.7,
    },
  };
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Exemplo de modal"
      shouldCloseOnOverlayClick={true}
      overlayClassName="custom-overlay"
      shouldCloseOnEsc={true}
      style={{ ...customStyles }}
    >
      <button
        onClick={setOpenModal}
        className="absolute right-0 top-2 border-2 p-4 rounded-lg m-5 cursor-pointer hover:brightness-75 transition duration-150"
      >
        <HiOutlineX className="text-2xl cursor-pointer fill-mainColor" />
      </button>

      <motion.div
        initial={animations.initial}
        animate={animations.animate}
        transition={animations.transition}
      >
        <div className="mt-10 relative p-10">
          <Title value="Compra e Venda" />

          <p className="text-center text-base py-5 max-w-xl m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            distinctio consectetur vitae.
          </p>
        </div>

        <div className="flex items-start justify-center gap-32 tablet:flex-wrap tablet:py-5">
          <img
            className="w-64 mobile:hidden"
            src={assistent}
            alt="Assistente"
          />

          <div className="flex flex-col gap-10">
            <p className="max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium corporis odio facilis cum perferendis doloremque ex
              minus amet, enim dolorum repudiandae labore.
            </p>

            <div className="flex items-start flex-col gap-10">
              <div className="flex items-center">
                <MdAlternateEmail className="text-2xl" />
                <span className="pl-3">geral@pnclique.com</span>
              </div>

              <div className="flex items-center">
                <FiPhone className="text-2xl" />
                <span className="pl-3">934 183 591 - 932 616 039</span>
              </div>

              <div className="flex items-center">
                <HiOutlineLocationMarker className="text-2xl" />
                <span className="pl-3">
                  Gamek a direita, Rua do <br /> condomínio múcua dourada.
                </span>
              </div>

              <div className="flex items-center gap-4">
                <AiFillFacebook className="text-4xl" />
                <AiFillInstagram className="text-4xl" />
                <AiFillTwitterCircle className="text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </ReactModal>
  );
}
