import Container from '@/components/Container.jsx';
import WholePage from '@/lottie/WholePage.json';
import Adi from '@/lottie/Avatar/Adi.json';
import Amitesh from '@/lottie/Avatar/Amitesh.json';
import AvatarFemale from '@/lottie/Avatar/AvatarFemale.json';
import AvatarYoungBoy from '@/lottie/Avatar/AvatarYoungBoy.json';
import Female from '@/lottie/Avatar/Female.json';
import WomanAvatar from '@/lottie/Avatar/WomanAvatar.json';
import Lottie from 'lottie-react';
import useIntersectionVisible from "@/hooks/useIntersectionVisible";

const AboutUs = () => {
  // Use the hook for different sections to trigger animations independently
  const heroReveal = useIntersectionVisible({ threshold: 0.1 });
  const missionReveal = useIntersectionVisible({ threshold: 0.2 });
  const valuesReveal = useIntersectionVisible({ threshold: 0.2 });
  const teamReveal = useIntersectionVisible({ threshold: 0.2 });

  const values = [
    { title: "Data Integrity", description: "We believe in clean, honest, and actionable data that forms the bedrock of every decision." },
    { title: "Strategic Vision", description: "We don't just provide numbers; we provide the roadmap to scale your business efficiently." },
    { title: "Innovation", description: "Leveraging cutting-edge Machine Learning and AI to keep you ahead of the market curve." }
  ];

  const team = [
    { name: "Alex Rivers", role: "Chief Data Architect", img: AvatarYoungBoy },
    { name: "Sarah Chen", role: "Head of AI & ML", img: AvatarFemale },
    { name: "Marcus Thorne", role: "Lead BI Engineer", img: WomanAvatar },
    { name: "Elena Voss", role: "Strategic Advisory", img: Female }
  ];

  return (
    <div className="bg-white text-black min-h-screen">

      {/* Hero Section */}
      <section 
        ref={heroReveal.ref}
        className={`border-b border-gray-100 min-h-screen flex items-center transition-all duration-1000 ease-out ${
          heroReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <Container>
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
            <Lottie animationData={WholePage} className="w-full md:w-2/3" loop={true} />
            <div className="max-w-3xl">
              <h1 className="text-xl md:text-3xl font-bold  mb-8">
                WE TURN DATA <br /> 
                <span className="text-gray-400">INTO DIRECTION.</span>
              </h1>
              <p className="text-base md:text-md text-gray-600 leading-relaxed">
                ScioByte was founded on a simple premise: in a world drowning in information, 
                clarity is the ultimate competitive advantage. We bridge the gap between 
                complex data engineering and executive decision-making.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section 
        ref={missionReveal.ref}
        className={`py-24 bg-black min-h-[70vh] flex justify-center items-center text-white transition-all duration-1000 ease-out ${
          missionReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-200 ${missionReveal.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-400 text-base md:text-md leading-relaxed">
                To empower businesses with custom-built BI systems and ETL pipelines that 
                transform raw, fragmented data into a unified source of truth. We make 
                your data work for you, not the other way around.
              </p>
            </div>
            <div className={`border-l border-gray-800 pl-8 transition-all duration-1000 delay-400 ${missionReveal.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              <div className="text-8xl font-bold mb-2">99%</div>
              <p className="text-gray-500 uppercase tracking-widest text-sm">Data Accuracy Focused</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section ref={valuesReveal.ref} className="py-24">
        <Container>
          <h2 className={`text-md uppercase tracking-[0.3em] text-gray-400 mb-12 text-center font-semibold transition-all duration-700 ${valuesReveal.isVisible ? "opacity-100" : "opacity-0"}`}>
            The ScioByte Way
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div 
                key={index} 
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                className={`group p-8 border border-gray-100 hover:border-black transition-all rounded-md cursor-pointer  ${
                  valuesReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <span className="text-xs font-mono text-gray-400 mb-4 block">0{index + 1}</span>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section ref={teamReveal.ref} className="py-24 bg-white border-t border-gray-100">
        <Container>
          <h2 className={`text-md uppercase tracking-[0.3em] text-gray-400 mb-16 text-center font-semibold transition-all duration-700 ${teamReveal.isVisible ? "opacity-100" : "opacity-0"}`}>
            Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                className={`group flex flex-col items-center text-center transition-all duration-700 ${
                  teamReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Lottie animationData={member.img} className="w-32 h-32 md:w-48 md:h-48 bg-gray-100 transition-all grayscale hover:grayscale-0 " loop={true} />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section (Stays as is) */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-lg md:text-2xl font-bold mb-6">Ready to start your journey?</h2>
            <p className="text-gray-600 mb-10 max-w-xl">
              Our robot is waiting to guide you through our data-driven onboarding process.
            </p>
            <a 
              href="/started" 
              className="px-10 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all rounded-xl"
            >
              Get Started
            </a>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default AboutUs;