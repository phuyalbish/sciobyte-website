import { useEffect, useState } from "react";
import axios from "axios";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "@/assets/image1.png";
import img2 from "@/assets/image2.png";
import img3 from "@/assets/image3.png";
import img5 from "@/assets/image5.png";
import img6 from "@/assets/image6.png";
import img7 from "@/assets/image7.png";
import img8 from "@/assets/image8.png";
import img9 from "@/assets/image9.png";

export default function Parallax() {
  const { scrollY } = useScroll();

  const maxScroll = 1000;
  const scrollThreshold = 1000;
  const scrollYAdjusted = useTransform(
    scrollY,
    [scrollThreshold, maxScroll + scrollThreshold],
    [0, maxScroll]
  );

  const y1 = useTransform(scrollYAdjusted, [0, maxScroll], [0, 0]);
  const y2 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -150]);
  const y3 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -50]);
  const y5 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -100]);
  const y6 = useTransform(scrollYAdjusted, [0, maxScroll], [0, 20]);
  const y7 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -150]);
  const y4 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -80]);
  const y8 = useTransform(scrollYAdjusted, [0, maxScroll], [0, 50]);
  const y9 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -50]);

  return (
    <>
      <div className="relative m-0 p-0 w-[100vw] ">
        <div className="relative hidden  md:block w-[100vw] h-[100vh] xl:[20vh] overflow-hidden ">
          <motion.img
            src={img9}
            alt=""
            className="absolute w-full"
            style={{ y: y9, top: "200px" }}
          />
          <motion.img
            src={img7}
            alt=""
            className="absolute  w-full"
            style={{ y: y7, top: "250px" }}
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

        <div className="relative md:hidden w-[100vw] h-[50vh] overflow-hidden ">
          <motion.img
            src={img9}
            alt=""
            className="absolute  w-full"
            style={{ y: y5, top: "140px" }}
          />
          <motion.img
            src={img7}
            alt=""
            className="absolute  w-full"
            style={{ y: y5, top: "140px" }}
          />
          <motion.img
            src={img8}
            alt=""
            className="absolute  w-full"
            style={{ y: y3, top: "140px" }}
          />

          <motion.img
            src={img6}
            alt=""
            className="absolute  w-full"
            style={{ y: y5, top: "190px" }}
          />
          <motion.img
            src={img5}
            alt=""
            className="absolute  w-full"
            style={{ y: y5, top: "140px" }}
          />
          <motion.img
            src={img3}
            alt=""
            className="absolute  w-full"
            style={{ y: y3, top: "140px" }}
          />
          <motion.img
            src={img2}
            alt=""
            className="absolute  w-full"
            style={{ y: y3, top: "290px" }}
          />
          <motion.img
            src={img1}
            alt=""
            className="absolute  w-full"
            style={{ y: y1, top: "240px" }}
          />
        </div>
      </div>
    </>
  );
}
