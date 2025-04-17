import React from "react";
import Hero from "@/components/pages/company/Hero.jsx";
import Team from "@/components/pages/company/Team.jsx";
import HomeStay from "@/components/pages/company/HomeStay.jsx";
import CSR from "@/components/pages/company/CSR.jsx";
import FooterVector from "@/assets/footer/FooterAbout.svg"

function CompanyPage() {
  return (
    <>
      <div className="container">
        <div className="px-10 md:px-[4rem] flex flex-col gap-[2rem] text-left mb-[2rem]">
          <Hero />
          <div className="flex flex-col gap-[0.8rem] pt-[5rem]">
            <h3 className="text-lg font-semibold">Hello Trekkers Pvt. Ltd.</h3>
            <p>
              We call ourselves Accidental Entrepreneurs. We started as a
              homestay family in 2016, and hosting more than 200 friends from
              all over the world opened the door to new knowledge and
              possibilities.
            </p>
            <p>But it was not that simple to jump into trek</p>
            <p>
              I am a lecturer, an MBA and a rural development graduate. I have
              been lecturing hospitality management students for almost 14 years
              now, and it’s not that I dislike my job. It’s a noble profession,
              and I love my students. However, the urge to be independent always
              triggered me. The constant struggle between money and freedom,
              having one foot in two different boats, being my own boss, making
              choices—this versus that, doing what truly makes me happy; these
              thoughts have occupied my mind 24/7. On top of that, I have a deep
              desire to travel and passion to make short films and
              documentaries.
            </p>
            <p>
              While our homestay is a small, family-run business, trekking was a
              completely different ballgame. However, when monotony reaches its
              peak, something beautiful is often born. And when you have your
              family as a pillar of strength, along with brother-like guides,
              porters, and developers supporting you, nothing seems impossible.
            </p>
            <p>
              With substantial experience and knowledge in the hospitality and
              tourism sectors, a strong network built over time, and, most
              importantly, the hunger to be independent, empower those around
              us, and follow our dreams with courage, joy, and hope, we said:
              Hello, Trekkers! Let’s create your tales from our trails.
            </p>
            <br />
            <h3 className="text-lg font-semibold">WHY HELLO TREKKERS?</h3>
            <p>
              In this modern age, connections is what matters most, and never in
              the history of mankind, have sustainable relationships been built
              over marketing gimmicks. We do not want to put fancy marketing
              terms and glamorize what we do. I care, my mother cares, my wife
              cares, my guides and porter care about you, genuinely. You are
              coming from far off to our motherland itself is a big deal for us.
              And not in any way would we want to disappoint you. This is a
              family-owned entrepreneurial venture, and we take huge pride in
              what we do. The sense of spirituality and accountability towards
              you will always be there.
            </p>
            <p>
              You do have the choice of making decisions out of thousands of
              trek agencies. And many like us, too, deserve business. We
              probably will be in the queue far behind, waiting for you to type
              into hellotrekkers.com and come over to this section and see us
              waiting for you because you too care, for self-made small
              businesses.
            </p>
          </div>
          <Team />
          <HomeStay />
          <CSR />
        </div>
      </div>

        <img src={FooterVector} alt="" className="w-full" />
    </>
  );
}

export default CompanyPage;
