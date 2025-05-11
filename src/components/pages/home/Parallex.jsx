"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "@/assets/image1.svg";
import img2 from "@/assets/image2.svg";
import img3 from "@/assets/image3.svg";
import img5 from "@/assets/image5.svg";
import img6 from "@/assets/image6.svg";
import img7 from "@/assets/image7.svg";
import img8 from "@/assets/image8.svg";
import img9 from "@/assets/image9.svg";
import img10 from "@/assets/image10.svg";

export default function Parallax() {
  const { scrollY } = useScroll();

  const maxScroll = 1000;
  const scrollThreshold = 1100;
  const scrollYAdjusted = useTransform(
    scrollY,
    [scrollThreshold, maxScroll + scrollThreshold],
    [0, maxScroll]
  );

  const y1 = useTransform(scrollYAdjusted, [0, maxScroll], [0, 0]);
  const y2 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -250]);
  const y3 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -150]);
  const y5 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -200]);
  const y6 = useTransform(scrollYAdjusted, [0, maxScroll], [0, 20]);
  const y7 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -150]);
  const y8 = useTransform(scrollYAdjusted, [0, maxScroll], [0, 50]);
  const y9 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -50]);

  return (
    <>
      <div className="relative m-0 p-0 w-full ">
        <div className="relative hidden  md:block w-full md:h-[100vh]  overflow-hidden ">
          <motion.img
            src={img9}
            alt=""
            className="absolute w-full"
            style={{ y: y9, top: "170px" }}
          />
          <motion.img
            src={img7}
            alt=""
            className="absolute  w-full"
            style={{ y: y7, top: "150px" }}
          />
          <motion.img
            src={img8}
            alt=""
            className="absolute  w-full"
            style={{ y: y8, top: "200px" }}
          />

          <motion.img
            src={img6}
            alt=""
            className="absolute  w-full"
            style={{ y: y6, top: "300px" }}
          />
          <motion.img
            src={img5}
            alt=""
            className="absolute  w-full"
            style={{ y: y5, top: "250px" }}
          />
          <motion.img
            src={img3}
            alt=""
            className="absolute  w-full"
            style={{ y: y3, top: "250px" }}
          />
          <motion.img
            src={img2}
            alt=""
            className="absolute  w-full"
            style={{ y: y2, top: "550px" }}
          />
          <motion.img
            src={img1}
            alt=""
            className="absolute  w-full"
            style={{ y: y1, top: "350px" }}
          />
        </div>

        <div className="relative md:hidden  w-full p-0 m-0">
          <img
            src={img10}
            alt=""
            className="w-full mt-40"
          />
        </div>
      </div>
    </>
  );
}
