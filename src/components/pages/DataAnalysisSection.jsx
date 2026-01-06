
import Container from "@/components/Container.jsx";
import Logo from "@/assets/Logo.png"
function TransformDataSection() {
  return (
        <Container>
            <div className="w-full flex justify-between items-center">
                <img src={Logo} alt="Webodle Logo"  width={100} height={100} className="rounded-full"/>
                <div className="flex flex-col  w-1/2 gap-4">
                    <div className="text-3xl font-bold">Data Analytics & Visualization</div>
                    <div className="text-md">Convert raw, scattered business data into clear, interactive dashboards that empower teams to make faster, smarter decisions. We deliver Power BI, Tableau, and Looker Studio solutions with automated reporting and real-time insights.</div>
                    <div className="text-md">What We Deliver</div>
                    <div className="ul pl-10">
                        <li>Interactive dashboards with automated daily/weekly/monthly reporting</li>
                        <li>KPI trackers for sales, marketing, finance, and operations</li>
                        <li>Excel to BI migration with custom visualization frameworks</li>
                        <li>Real-time dashboards enabled by API and cloud integration</li>
                    </div>
                </div>
                
            </div>
        </Container>
  )
}

export default TransformDataSection