
import Container from "@/components/Container.jsx";
import Logo from "@/assets/Logo.png"
function TransformDataSection() {
  return (
        <Container>
            <div className="w-full flex justify-between items-center">
                <div className="flex flex-col  w-1/2 gap-4">
                    <div className="text-3xl font-bold">Transform Data from Decision</div>
                    <div className="text-md">Enterprise-grade analytics solutions designed for SMEs. Fast delivery, modern tech stack, and hands-on expertise to turn your data into actionable insights.</div>
                    
                    <div className="flex gap-4">
                        <div className="text-md px-4 py-2  bg-blue-800 hover:bg-blue-900 rounded-lg text-white  cursor-pointer">Explore Services</div>
                        <div className="text-md px-4 py-2 border-2 border-blue-800 hover:bg-blue-800  rounded-lg text-blue-800 hover:text-white cursor-pointer">Get Started</div>
                    </div>
                </div>
                                  <img src={Logo} alt="Webodle Logo"  width={100} height={100} className="rounded-full"/>


            </div>
        </Container>
  )
}

export default TransformDataSection