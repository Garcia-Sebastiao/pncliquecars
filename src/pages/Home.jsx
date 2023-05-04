import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";
// ----------------- CSS  ------------------- //
import "swiper/css";

// ----------- React Components ----------- //
import Brand from "../components/UI/Brand/Brand";
import Title from "../components/UI/Title/Title";
import Button from "../components/UI/Button/Button";
import Service from "../components/UI/ServiceCard/Service";
import Product from "../components/UI/Car/Product/Product";
import Gallery from "../components/CarsGallery/Gallery";
import Map from "../components/Map/Map";

// -------------- icons -------------- //
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineCopyright,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";
import { HiMenuAlt2, HiOutlineX } from "react-icons/hi";
import hoursIcon from "../assets/images/icons/24hours.svg";
import payment from "../assets/images/icons/payment.svg";
import payment1 from "../assets/images/icons/payment1.svg";
import verycars from "../assets/images/icons/verycars.svg";
import Vector from "../assets/images/icons/Vector.svg";
import ArrowRight from "../assets/images/icons/ArrowRight.svg";
import emailIcon from "../assets/images/icons/emailIcon.svg";
import phoneIcon from "../assets/images/icons/phoneIcon.svg";
import gpsIcon from "../assets/images/icons/gpsIcon.svg";

// -------------- Images --------------- //
import events from "../assets/images/events.svg";
import buy from "../assets/images/buy.svg";
import filming from "../assets/images/filming.svg";
import transfer from "../assets/images/transfer.svg";
import carImage1 from "../assets/images/audi2.svg";
import carImage2 from "../assets/images/audi3.svg";
import aboutUs from "../assets/images/about-us.svg";
import bannercar from "../assets/images/CADILAC1.svg";
import logoImage from "../assets/images/parceiro1.svg";
import audiBrand from "../assets/images/audiBrand.svg";
import mercedesBrand from "../assets/images/mercedesBrand.svg";
import porscheBrand from "../assets/images/porscheBrand.svg";
import cadilacBrand from "../assets/images/cadilacBrand.svg";
import bmwBrand from "../assets/images/bmwBrand.svg";
import pnstreaming from "../assets/images/pnstreaming.svg";
import aprendaaq from "../assets/images/aprendaaq.svg";
import pncliquecars from "../assets/images/pncliquecars.svg";
import footerLogo from "../assets/images/LOGO.svg";

// ------- JSX Component ------ //

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [menu, openMenu] = useState(false);
  const [newCars, setNewCars] = useState(true);
  const [oldCars, setOldCars] = useState(false);
  const [openModal, setIsOpen] = useState(false);

  function showNewCars() {
    if (!oldCars) {
      setNewCars(true);
    } else {
      setOldCars(false);
      setNewCars(true);
    }
  }

  function showOldCars() {
    if (!newCars) {
      setOldCars(true);
    } else {
      setNewCars(false);
      setOldCars(true);
    }
  }

  // ------ Set Navbar Shadow ------ //
  window.addEventListener("scroll", () => {
    scrollY > 10 ? setShowMenu(true) : setShowMenu(false);
  });

  useEffect(() => {
    const navLinks = document.querySelectorAll("ul li a");

    navLinks.forEach((links) => {
      links.addEventListener("click", () => {
        for (let index = 0; index < navLinks.length; index++) {
          const element = navLinks[index];
          element.classList.remove("active");
        }
        links.classList.add("active");
      });
    });
  }, []);

  // ------- Close Menu after link click config ------ //
  if (menu) {
    const navLinks = document.querySelectorAll("ul li a");

    navLinks.forEach((links) => {
      links.addEventListener("click", () => {
        openMenu(false);
        links.classList.add("active");
      });
    });
  }

  return (
    <div id="home">
      {/* --------- Banner Section --------- */}

      <section className="min-h-screen w-full relative">
        <div className="object bg-mainColor mobile:hidden tablet:hidden"></div>

        {/* --------------- header ------------- */}

        <header
          className={`
          flex items-center 
          justify-between 
          py-2 
          px-24
          w-full
          tablet:py-0.5
          transition-all duration-200
          ${showMenu ? "shadow-md bg-white fixed top-0 left-0 z-[2000] w-full" : ""}
          
          mobile:px-6 
          tablet:px-10`}
        >
          <a href="/">
            <img className="w-full" src={logoImage} alt="pnclique cars" />
          </a>
          <nav
            className={`
            flex items-center 
            justify-between 
            py-2 
            px-24
            transition-all duration-500
            ease-in-out
            
            mobile:px-6 
            tablet:px-10
            tablet:${!menu ? "w-0 p-0 -translate-x-72" : "w-3/4 translate-x-0"}
            tablet:fixed tablet:top-0 tablet:left-0 tablet:items-start
            tablet:min-h-full tablet:shadow-lg tablet:bg-textColor

            
            `}
          >
            <ul
              className={`
              flex 
              flex-row
              items-center 
              gap-5
              relative
              transition duration-200
              bg-transparent

              tablet:w-full table:h-[full]
              tablet:flex tablet:flex-col 
              tablet:items-start
              tablet:pt-10
            `}
            >
              <li className="text-base">
                <a
                  className="hover:text-mainColor transition duration-200 focus:text-mainColor tablet:text-white"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="text-base">
                <a
                  className="hover:text-mainColor transition duration-200 focus:text-mainColor tablet:text-white"
                  href="#aboutUs"
                >
                  Sobre nós
                </a>
              </li>
              <li className="text-base">
                <a
                  className="hover:text-mainColor transition duration-200 focus:text-mainColor tablet:text-white"
                  href="#cars"
                >
                  Carros
                </a>
              </li>
              <li className="text-base">
                <a
                  className="hover:text-mainColor transition duration-200 focus:text-mainColor tablet:text-white"
                  href="#gallery"
                >
                  Galeria
                </a>
              </li>
              <li className="text-base">
                <a
                  className="hover:text-mainColor transition duration-200 focus:text-mainColor tablet:text-white"
                  href="#BuyAndSell"
                >
                  Compra & Venda
                </a>
              </li>
              <li className="text-base">
                <a
                  className="hover:text-mainColor transition duration-200 focus:text-mainColor tablet:text-white"
                  href="#contacts"
                >
                  Contacte-nos
                </a>
              </li>

              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`
                  px-8 
                  py-4 
                  text-center
                  font-poppinsMedium 
                  rounded-md 
                text-white 
                bg-mainColor
                  hover:brightness-90 
                  transition ease-in-out 
                  duration-200
                  hidden

                  mobile:block
                  tablet:block
            `}
                href=""
              >
                Reserve Agora
              </motion.a>
            </ul>
          </nav>

          {!menu ? (
            <button
              onClick={() => openMenu(true)}
              className="hidden mobile:block tablet:block"
            >
              <HiMenuAlt2 className="fill-gray-600 text-4xl hover:fill-mainColor hover:cursor-pointer transition duration-200" />
            </button>
          ) : (
            <button
              onClick={() => openMenu(false)}
              className="hidden mobile:block tablet:block"
            >
              <HiOutlineX className="fill-gray-600 text-4xl hover:fill-mainColor hover:cursor-pointer transition duration-200" />
            </button>
          )}

          <button
            className={`
              px-8 
              py-4 
              text-center
              font-poppinsMedium 
              rounded-md 
            text-mainColor 
              hover:brightness-90 
              transition ease-in-out 
              duration-200

              ${showMenu ? "bg-mainColor text-white" : " bg-white"}

              mobile:hidden
              tablet:hidden
            `}
            onClick={() => setIsOpen(true)}
            href=""
          >
            Reserve Agora
          </button>
        </header>

        {/* -------- banner content --------- */}

        <div className="mobile:px-6 px-24 tablet:px-10 ">
          <div className="flex mt-10 items-center justify-between mobile:mt-0 tablet:mt-12">
            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0.3,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                damping: 4,
                mass: 0.5,
                stiffness: 15,
              }}
              className="
                flex 
                items-start 
                flex-col
              "
            >
              <h2 className="text-6xl font-poppinsSemiBold pb-10 max-w-2xl leading-normal mobile:text-4xl mobile:leading-relaxed">
                NÓS FORNECEMOS OS{" "}
                <span className="text-mainColor font-poppinsSemiBold">
                  MELHORES CARROS
                </span>{" "}
                PARA ALUGUER
              </h2>

              <p className="text-base leading-8 max-w-lg pb-8">
                Se você está procurando um carro de aluguel confortável e
                econômico, você veio ao lugar certo. Seja para uma viagem de
                negócios, um passeio em família ou uma aventura solo, nós temos
                o carro ideal para você.
              </p>

              <button
                onClick={() => setIsOpen(true)}
                className="bg-mainColor px-8 py-5 rounded-lg text-white hover:bg-mainHover transition duration-200"
              >
                Compras & Vendas
              </button>
            </motion.div>

            <motion.div
              initial={{ scale: 0.5, x: 500 }}
              whileInView={{ scale: 1, x: 0 }}
              transition={{
                type: "spring",
                damping: 4,
                mass: 1,
                stiffness: 15,
              }}
              exit={{ scale: 1 }}
              className="mobile:hidden tablet:hidden"
            >
              <img src={bannercar} alt="" />
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0.2,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              type: "spring",
              damping: 4,
              mass: 1,
              stiffness: 20,
            }}
            className="flex items-center pt-5"
          >
            <AiFillFacebook className="text-6xl px-2" />
            <AiFillInstagram className="text-6xl px-2" />
            <AiFillTwitterCircle className="text-6xl px-2" />
          </motion.div>
        </div>
      </section>

      {/* ---------- abous us --------- */}

      <section className="py-24 flex justify-center" id="aboutUs">
        <div className="flex mt-10 justify-between w-5/6 gap-32 mobile:flex-wrap tablet:flex-wrap tablet:items-center">
          <div className="">
            <motion.img className="w-full" src={aboutUs} alt="sobre nós" />
          </div>

          <div className=" flex flex-col items-start">
            <motion.div
              initial={{
                opacity: 0.5,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <Title value="Sobre nós" />

              <p className="text-base py-5 ">PN Clique CAR</p>

              <div className="flex flex-col items-start gap-5">
                <p className="max-w-2xl text-justify ">
                  Fazemos parte da PN Clique, somos a área que administra e
                  gerencia frotas multimarcas de viaturas, tanto próprios quanto
                  de parceiros particulares. Somos uma marca comprometida com a
                  qualidade e a eficiência dos nossos serviços.
                </p>

                <p className="max-w-2xl text-justify ">
                  Além disso, oferecemos preços competitivos, atendimento
                  personalizado e facilidades de pagamento. Não perca tempo e
                  faça já a sua reserva conosco
                </p>

                <p className="max-w-2xl text-justify ">
                  A sua satisfação é a nosso motor, que nos impulsiona a prestar
                  o melhor serviço possível.
                </p>
              </div>
            </motion.div>

            <div className="w-full gap-5 mt-10 p-2 bg-mainColor flex items-center justify-center rounded-2xl flex-wrap mobile:py-10">
              <div className="flex flex-col items-center p-5">
                <motion.img
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  src={hoursIcon}
                  alt=""
                />
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-white text-base pt-2"
                >
                  Entregamos a horas.
                </motion.span>
              </div>
              <div className="flex flex-col items-center p-5">
                <motion.img
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1,
                  }}
                  src={hoursIcon}
                  alt=""
                />
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-white text-base pt-2"
                >
                  Entregamos a horas.
                </motion.span>
              </div>
              <div className="flex flex-col items-center p-5">
                <motion.img
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.5,
                  }}
                  src={hoursIcon}
                  alt=""
                />
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="text-white text-base pt-2"
                >
                  Entregamos a horas.
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------ */}

      <section className="px-24 py-32 bg-white justify-center items-center flex flex-col mobile:px-6 mobile:py-24">
        <Title value="Porque escolher-nos?" />

        <p className="p-10 max-w-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          doloremque, dolorem.
        </p>

        <div className="flex mt-10 justify-center items-center gap-10 tablet:flex-wrap">
          <motion.div
            initial={{
              y: 200,
              opacity: 0.5,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="px-10"
          >
            <div className="bg-mainColor flex justify-center p-10 px-20 py-16 rounded-xl">
              <img src={payment} alt="" />
            </div>

            <h4 className="font-poppinsSemiBold text-lg py-5">
              Motoristas Profissionais
            </h4>

            <p className=" text-left leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi
              maiores assumenda aut ullam impedit.
            </p>
          </motion.div>

          <motion.div
            initial={{
              y: 200,
              opacity: 0.5,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="px-10"
          >
            <div className="bg-textColor flex justify-center p-10 px-20 py-16 rounded-xl">
              <img src={payment1} alt="" />
            </div>

            <h4 className="font-poppinsSemiBold text-lg py-5">
              Pagamentos Online
            </h4>

            <p className=" text-left leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi
              maiores assumenda aut ullam impedit.
            </p>
          </motion.div>

          <motion.div
            initial={{
              y: 200,
              opacity: 0.5,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="px-10"
          >
            <div className="bg-mainColor flex justify-center p-10 px-20 py-16 rounded-xl">
              <img src={verycars} alt="" />
            </div>

            <h4 className="font-poppinsSemiBold text-lg py-5">
              Variedades de marcas de carros.
            </h4>

            <p className=" text-left leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi
              maiores assumenda aut ullam impedit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* -------------- Our Services ------------ */}
      <section className="px-24 py-32 justify-center items-center flex flex-col mobile:px-6 mobile:py-24">
        <Title value="Nossos serviços" />

        <p className="p-8 max-w-2xl text-center mobile:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          doloremque, dolorem.
        </p>

        <div className="flex flex-1 items-center flex-wrap justify-center gap-10 mt-10">
          <Service
            title="Eventos"
            image={events}
            delay={0.25}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            quidem sint eveniet deleniti."
          />

          <Service
            title="Transferências"
            image={transfer}
            delay={0.5}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            quidem sint eveniet deleniti."
          />

          <Service
            title="Filmagens"
            image={filming}
            delay={0.25}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            quidem sint eveniet deleniti."
          />

          <Service
            title="Compra & Venda"
            image={buy}
            delay={0.75}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            quidem sint eveniet deleniti."
          />
        </div>
      </section>

      {/* --------------- Our cars ------------ */}

      <section className="px-24 py-32 mobile:py-24 mobile:px-6" id="cars">
        <Title value="Nossa Frota" />

        <p className="p-8 max-w-2xl text-center m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          doloremque, dolorem.
        </p>

        <Gallery />
      </section>
      <div className="px-24"></div>

      {/* ---------- Our Gallery ---------- */}

      <section
        className="px-24 py-32 justify-center items-center flex flex-col mobile:py-24 mobile:px-6"
        id="gallery"
      >
        <Title value="Marcas da Nossa Galeria" />

        <p className="p-8 max-w-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          doloremque, dolorem.
        </p>

        <div className="flex pt-8 items-center justify-center gap-6 flex-wrap">
          <Brand
            image={audiBrand}
            name="AUDI"
            de
            scription="4 carros disponíveis"
          />

          <Brand
            image={cadilacBrand}
            name="CADILAC"
            description="1 carro disponíveis"
          />

          <Brand
            image={porscheBrand}
            name="PORSCHE"
            description="4 carros disponíveis"
          />

          <Brand
            image={mercedesBrand}
            name="MERCEDES"
            description="4 carros disponíveis"
          />

          <Brand
            image={bmwBrand}
            name="BMW"
            description="4 carros disponíveis"
          />

          <Brand
            image={audiBrand}
            name="AUDI"
            description="4 carros disponíveis"
          />
        </div>
      </section>

      {/* -------- Buy and Sold ------ */}

      <section
        className="px-24 py-32 justify-center items-center flex flex-col mobile:py-24 mobile:px-6"
        id="BuyAndSell"
      >
        <Title value="Compra & Venda" />

        <p className="p-8 max-w-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          doloremque, dolorem.
        </p>

        <div className="pt-5 flex flex-col justify-center items-center">
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
            className="flex items-center gap-5"
          >
            <Button
              className={newCars ? "bg-mainColor text-white" : " "}
              onClick={showNewCars}
              value="Novos"
            />
            <Button
              className={oldCars ? "bg-mainColor text-white" : " "}
              onClick={showOldCars}
              value="Usados"
            />
          </motion.div>

          {/* --------- New Cars ---------- */}

          <div
            className={`flex items-center justify-center flex-wrap gap-5 pt-16 ${
              !newCars ? "hidden" : " "
            }`}
          >
            <Product
              velocity="50,000"
              fuel="3,50L"
              model="AUDI MODEL"
              price="Preço inicial de 210,450 kz por dia"
              carImage={carImage2}
            />

            <Product
              velocity="50,000"
              fuel="3,50L"
              model="AUDI MODEL"
              price="Preço inicial de 210,450 kz por dia"
              carImage={carImage1}
            />

            <Product
              velocity="50,000"
              fuel="3,50L"
              model="AUDI MODEL"
              price="Preço inicial de 210,450 kz por dia"
              carImage={carImage2}
            />

            <Product
              velocity="50,000"
              fuel="3,50L"
              model="AUDI MODEL"
              price="Preço inicial de 210,450 kz por dia"
              carImage={carImage1}
            />
          </div>

          {/* ---------- Old Cars ----------- */}

          <div
            className={`flex items-center justify-center flex-wrap gap-5 pt-16 ${
              !oldCars ? "hidden" : " "
            }`}
          >
            <Product
              velocity="50,000"
              fuel="3,50L"
              model="AUDI MODEL"
              price="Preço inicial de 210,450 kz por dia"
              carImage={carImage2}
            />
            <Product
              velocity="50,000"
              fuel="3,50L"
              model="AUDI MODEL"
              price="Preço inicial de 210,450 kz por dia"
              carImage={carImage2}
            />
            <Product
              velocity="50,000"
              fuel="3,50L"
              model="AUDI MODEL"
              price="Preço inicial de 210,450 kz por dia"
              carImage={carImage2}
            />
            <Product
              velocity="50,000"
              fuel="3,50L"
              model="AUDI MODEL"
              price="Preço inicial de 210,450 kz por dia"
              carImage={carImage2}
            />
            \
          </div>
        </div>
      </section>

      {/* -------- Our Partners -------- */}

      <section className="px-24 py-32 justify-center items-center flex flex-col mobile:px-6 mobile:py-24">
        <Title value="Nossos Parceiros" />

        <p className="p-8 max-w-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          doloremque, dolorem.
        </p>

        <div className="flex items-center justify-center mt-10 gap-28 flex-wrap">
          <motion.div
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex items-center justify-center"
          >
            <img src={pncliquecars} alt="" />
          </motion.div>

          <motion.div
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex items-center justify-center"
          >
            <img src={pnstreaming} alt="" />
          </motion.div>

          <motion.div
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex items-center justify-center mobile:mt-10"
          >
            <img src={aprendaaq} alt="" />
          </motion.div>
        </div>
      </section>

      {/* ---------- Promotion ---------- */}

      <section className="px-24 bg-mainColor py-32 justify-center items-center flex flex-col mobile:py-24 mobile:px-6 tablet:px-10">
        <h3 className="text-white text-4xl font-poppinsSemiBold  text-center">
          Apenas hoje{" "}
          <span className="font-poppinsBold text-5xl">210,200kz</span>
          /dia
        </h3>

        <p className="text-center max-w-3xl py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat
          delectus ducimus ipsam possimus eos voluptate, fugit commodi,
          repellendus ea ipsa.
        </p>

        <div className="w-2/3 justify-between px-10 mt-4 flex relative py-20 rounded-xl bg-gray-200 mobile:w-auto tablet:w-full">
          <div>
            <h3 className="text-4xl font-poppinsSemiBold">Cadilac Escalade</h3>

            <div className="flex gap-5 items-start pt-10 justify-between pb-10 mobile:gap-10 mobile:flex-wrap">
              <ul>
                <li className="flex items-center py-2.5">
                  <img src={Vector} className="pr-4" alt="" />
                  <span className="font-poppinsMedium">
                    Para 4 passageiros.
                  </span>
                </li>
                <li className="flex items-center py-2.5">
                  <img src={Vector} className="pr-4" alt="" />
                  <span className="font-poppinsMedium">
                    Incrível sistema de som.
                  </span>
                </li>
                <li className="flex items-center py-2.5">
                  <img src={Vector} className="pr-4" alt="" />
                  <span className="font-poppinsMedium">
                    Divisória com estilo Premium.
                  </span>
                </li>
              </ul>

              <ul>
                <li className="flex items-center py-2.5">
                  <img src={Vector} className="pr-4" alt="" />
                  <span className="font-poppinsMedium">Janelas Coloridas.</span>
                </li>
                <li className="flex items-center py-2.5">
                  <img src={Vector} className="pr-4" alt="" />
                  <span className="font-poppinsMedium">
                    Luz de fibra ótica.
                  </span>
                </li>
                <li className="flex items-center py-2.5">
                  <img src={Vector} className="pr-4" alt="" />
                  <span className="font-poppinsMedium">Ar Condicionado.</span>
                </li>
              </ul>
            </div>

            <button
              href=""
              className="py-4 px-10 text-white bg-mainColor rounded-lg mobile:w-full"
            >
              ENTRAR
            </button>
          </div>

          <div className="absolute -top-16 -right-2 mobile:top-14 tablet:-right-7">
            <img
              className="w-625 mobile:hidden tablet:w-96"
              src={bannercar}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* ---------- Footer --------- */}

      <footer className=" bg-textColor" id="contacts">
        <div className="px-24 justify-center py-32 items-start flex gap-20 mobile:px-6 mobile:flex-wrap mobile:justify-start tablet:flex-wrap tablet:px-10 tablet:justify-start">
          <div className="flex flex-col items-start">
            <div>
              <img src={footerLogo} alt="" />
            </div>

            <div className="flex flex-col items-start mt-16">
              <span className="text-white py-5">
                Subscreve-te ao nosso Boletim Informativo
              </span>

              <form
                className="flex items-center gap-5 flex-wrap"
                action=""
                method="POST"
              >
                <input
                  className="border-none rounded-xl p-4 w-full focus:outline-none placeholder:text-mainColor"
                  type="email"
                  placeholder="Email"
                />
                <button className="bg-mainColor py-3 px-5 rounded-xl">
                  <img src={ArrowRight} alt="" />
                </button>
              </form>
            </div>
          </div>

          {/* --------- Localization ------- */}

          <div className="flex items-start gap-10 flex-col">
            <h3 className="text-white text-3xl font-poppinsSemiBold">
              Horários de trabalhos
            </h3>

            <div>
              <h5 className="text-white text-xl font-poppinsMedium">
                Luanda, Rua Principal do Patriota
              </h5>

              <span className=" text-white font-poppinsLight">
                Segundas e sextas-feiras das 8h00 - 16h00
              </span>
              <br />
              <span className="text-white font-poppinsLight">
                Sábados das 8h00 - 12h00
              </span>
            </div>

            <div>
              <h5 className="text-white text-xl font-poppinsMedium">
                Luanda, Aeroporto Internacional (Chegadas)
              </h5>

              <span className=" text-white font-poppinsLight">
                Segundas e sextas-feiras das 8h00
              </span>
              <br />
              <span className="text-white font-poppinsLight">
                16h00 Sábados das 8h00 - 12h00
              </span>
            </div>
          </div>

          {/* ------- Contacts ------- */}

          <div className="flex items-start gap-10 flex-col">
            <h3 className="text-white text-3xl font-poppinsSemiBold">
              Contacte-nos
            </h3>

            <div className="flex items-start flex-col gap-5">
              <div className="flex items-center">
                <img src={emailIcon} alt="" />
                <span className=" text-white font-poppinsLight pl-5">
                  geral@pnclique.com
                </span>
              </div>

              <div className="flex items-center">
                <AiOutlineWhatsApp className="text-xl fill-white" />
                <span className=" text-white font-poppinsLight pl-5">
                  916 140 019
                </span>
              </div>

              <div className="flex items-center">
                <img src={phoneIcon} alt="" />
                <span className=" text-white font-poppinsLight pl-5">
                  934 147 576
                </span>
              </div>

              <div className="flex items-center">
                <TfiLocationPin className="text-2xl fill-white" />
                <span className=" text-white font-poppinsLight pl-5">
                  Gamek a direita, Rua do <br /> condomínio múcua dourada.
                </span>
              </div>

              <div className="flex items-center gap-4">
                <AiFillFacebook className="text-4xl fill-white" />
                <AiFillInstagram className="text-4xl fill-white" />
                <AiFillTwitterCircle className="text-4xl fill-white" />
              </div>
            </div>
          </div>

          {/* ---------- Google Maps ------- */}

          <div className="flex items-start gap-10 flex-col">
            <h3 className="text-white text-3xl font-poppinsSemiBold">
              Encontre-nos aqui!
            </h3>

            <div className="w-96 h-72 flex justify-center mobile:w-72">
              <Map />
            </div>
          </div>
        </div>

        {/* ----------  --------- */}

        <div className="w-full flex items-center justify-between bg-footerBlack px-24 py-6 mobile:px-6 mobile:flex-wrap mobile:gap-2 mobile:justify-center">
          <div className="">
            <span className="text-white flex items-center gap-2">
              <span>
                <AiOutlineCopyright className="text-xl fill-white" />
              </span>{" "}
              2023
              <span className="text-white font-poppinsMedium"> PN CLIQUE</span>
            </span>
          </div>

          <div>
            <span className="text-white mobile:text-center">
              Feito com 🤍 pela{" "}
              <a
                href="pnclique.com"
                className="text-white font-poppinsSemiBold"
              >
                PN Clique
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* ------- Modal -------- */}

      <Modal isOpen={openModal} setOpenModal={() => setIsOpen(!openModal)} />
    </div>
  );
}
