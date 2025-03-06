import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "@/assets/image1.png";
import img2 from "@/assets/image2.png";
import img3 from "@/assets/image3.png";
import img5 from "@/assets/image5.png";
import img6 from "@/assets/image6.png";
import img7 from "@/assets/image7.png";
import img8 from "@/assets/image8.png";
import img9 from "@/assets/image9.png";

import catimg1 from "@/assets/hikingCategory.png";
import catimg2 from "@/assets/toursCategory.png";
import catimg3 from "@/assets/trekkingCategory.png";
import CategoryTile from "../../tiles/CategoryTile";

export default function Parallax() {
  const { scrollY } = useScroll();

  // Define max scroll limit (stop movement after this)
  const maxScroll = 1000;
  const scrollThreshold = 300;

  const scrollYAdjusted = useTransform(
    scrollY,
    [scrollThreshold, maxScroll + scrollThreshold],
    [0, maxScroll]
  );

  // Define vertical transformations
  const y1 = useTransform(scrollYAdjusted, [0, maxScroll], [0, 0]);
  const y2 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -150]);
  const y3 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -50]);
  const y5 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -100]);
  const y6 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -20]);
  const y7 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -150]);
  const y8 = useTransform(scrollYAdjusted, [0, maxScroll], [0, 50]);
  const y9 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -50]);

  // Define horizontal transformations
  const x1 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -20]);
  const x2 = useTransform(scrollYAdjusted, [0, maxScroll], [0, 20]);
  const x3 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -20]);
  const x5 = useTransform(scrollYAdjusted, [0, maxScroll], [0, 20]);
  const x6 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -20]);
  const x7 = useTransform(scrollYAdjusted, [0, maxScroll], [0, 20]);
  const x8 = useTransform(scrollYAdjusted, [0, maxScroll], [0, -20]);
  const x9 = useTransform(scrollYAdjusted, [0, maxScroll], [0, 20]);

  const categories = [
    { img: catimg1, name: "Trek" },
    { img: catimg2, name: "Adventure" },
    { img: catimg3, name: "Camping" },
  ];

  return (
    <div className="relative m-0 p-0 w-screen h-[150vh] overflow-hidden">
      <div className="w-screen overflow-hidden">
        <motion.img
          src={img1}
          alt=""
          className="absolute z-50 min-w-[102vw]"
          style={{ y: y1, x: x1, top: `350px`, left: `0px` }}
        />
      </div>

      <div className="w-screen overflow-hidden">
        {" "}
        <motion.img
          src={img2}
          alt=""
          className="absolute z-40 min-w-[102vw]"
          style={{ y: y2, x: x2, top: `550px`, right: `0px` }}
        />
      </div>

      <div className="w-screen overflow-hidden">
        <motion.img
          src={img3}
          alt=""
          className="absolute z-30 min-w-[102vw]"
          style={{ y: y3, x: x3, top: `250px`, left: `0px` }}
        />
      </div>

      <div className="w-screen overflow-hidden">
        <motion.img
          src={img5}
          alt=""
          className="absolute z-20 min-w-[102vw]"
          style={{ y: y5, x: x5, top: `250px`, right: `0px` }}
        />
      </div>

      <div className="w-screen overflow-hidden">
        {" "}
        <motion.img
          src={img6}
          alt=""
          className="absolute z-10 min-w-[102vw]"
          style={{ y: y6, x: x6, top: `300px`, left: `0px` }}
        />
      </div>

      <div className="w-screen overflow-hidden">
        <motion.img
          src={img7}
          alt=""
          className="absolute z-0 min-w-[102vw]"
          style={{ y: y7, x: x7, top: `200px`, right: `0px` }}
        />
      </div>

      <div className="w-screen overflow-hidden">
        <motion.img
          src={img8}
          alt=""
          className="absolute -z-10 min-w-[102vw]"
          style={{ y: y8, x: x8, top: `150px`, left: `0px` }}
        />
      </div>

      <div className="w-screen overflow-hidden">
        <motion.img
          src={img9}
          alt=""
          className="absolute -z-20 min-w-[102vw]"
          style={{ y: y9, x: x9, top: `150px`, right: `0px` }}
        />
      </div>
      <div className="absolute w-screen top-[90vh] z-50 flex flex-col gap-10 flex-grow-0 justify-center items-center">
        <div className="bg-white py-2 px-5 text-blue-500   w-fit font-base text-2xl  rounded-lg">
          Your <span className="font-bold">PREFERENCE</span> is our{" "}
          <span className="font-bold">PRIORITY</span>
        </div>

        <div className="flex gap-5 justify-center">
          {categories.map((category, index) => (
            <CategoryTile key={index} img={category.img} name={category.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
