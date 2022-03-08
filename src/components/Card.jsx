import { Gallery } from "./Gallery";

import image_01 from "../assets/images/image-01.jpg";
import image_02 from "../assets/images/image-02.jpg";
import image_03 from "../assets/images/image-03.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";


export const Card = (props) => {
  return (
    <div className="relative">
      <Gallery>
        <div className="flex justify-center">
          <div className="group w-1/6 mx-4">
            <AnimationOnScroll animateIn="animate__flipInX">
              <img
                src={image_01}
                alt="nft-presale"
                className="blur-sm group-hover:blur-0 group-hover:scale-110 transition duration-[1s]"
              />
            </AnimationOnScroll>
            <div className=" w-full text-center absolute left-0 opacity-0 translate-y-10 group-hover:opacity-100  group-hover:translate-y-10 transition  duration-[0.8s] ease-out">
              <h1 className="text-white text-[50px] font-semibold uppercase">King Solana</h1>
              <p className="text-white px-20 text-[30px] container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque, reprehenderit quod possimus asperiores quam harum officia fugiat rerum eveniet molestias ex assumenda modi adipisci laborum illum consectetur, facere ea?</p>
            </div>
          </div>
          <div className="group w-1/6 mx-4">
            <AnimationOnScroll animateIn="animate__flipInX animate__delay-1s">
              <img
                src={image_02}
                alt="nft-presale"
                className="blur-sm group-hover:blur-0 group-hover:scale-110 transition duration-[1s]"
              />
            </AnimationOnScroll>
            <div className=" w-full text-center absolute left-0 opacity-0 translate-y-10 group-hover:opacity-100  group-hover:translate-y-10 transition  duration-[0.8s] ease-out">
              <h1 className="text-white text-[50px] font-semibold uppercase">King Solana</h1>
              <p className="text-white px-20 text-[30px] container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque, reprehenderit quod possimus asperiores quam harum officia fugiat rerum eveniet molestias ex assumenda modi adipisci laborum illum consectetur, facere ea?</p>
            </div>
          </div>
          <div className="group w-1/6 mx-4">
            <AnimationOnScroll animateIn="animate__flipInX animate__delay-2s">
              <img
                src={image_03}
                alt="nft-presale"
                className="blur-sm group-hover:blur-0 group-hover:scale-110 transition duration-[1s]"
              />
            </AnimationOnScroll>
            <div className=" w-full text-center absolute left-0 opacity-0 translate-y-10 group-hover:opacity-100  group-hover:translate-y-10 transition  duration-[0.8s] ease-out">
              <h1 className="text-white text-[50px] font-semibold uppercase">King Solana</h1>
              <p className="text-white px-20 text-[30px] container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque, reprehenderit quod possimus asperiores quam harum officia fugiat rerum eveniet molestias ex assumenda modi adipisci laborum illum consectetur, facere ea?</p>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <button className="bg-red-800 py-5 px-7 uppercase cursor-pointer text-white rounded-md translate-y-20 text-[30px] hover:bg-red-900">view project</button>
        </div> */}
      </Gallery >
    </div >
  );
};
