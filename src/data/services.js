import { 
  FaChartBar, 
  FaDatabase, 
  FaCloud, 
  FaCogs, 
  FaRobot, 
  FaUsers, 
  FaRegLightbulb 
} from "react-icons/fa";
import { 
  MdDashboard, 
  MdOutlineApi, 
  MdOutlineAutoGraph, 
  MdOutlineSecurity 
} from "react-icons/md";
import { RiLineChartLine, RiStackFill, RiFlowChart } from "react-icons/ri";
import { HiOutlineDatabase } from "react-icons/hi";
import { BiGitMerge } from "react-icons/bi";

import BarGraph from "@/assets/Charts/Bar Graph.png";
import Distribution from "@/assets/Charts/Distribution.png";
import Donught from "@/assets/Charts/Donught.png";
import GG from "@/assets/Charts/GG.png";
import Graph1 from "@/assets/Charts/Graph 1.png";
import Hierarchy from "@/assets/Charts/Hierarchy.png";

const services = [
  {
    title: "Data Analytics & Visualization",
    description: "Convert raw, scattered business data into clear, interactive dashboards that empower teams to make faster, smarter decisions. We deliver Power BI, Tableau, and Looker Studio solutions with automated reporting and real-time insights.",
    deliverableTitle: "What We Deliver",
    deliverables: [
      { name: "Interactive dashboards with automated daily/weekly/monthly reporting", icon: MdDashboard },
      { name: "KPI trackers for sales, marketing, finance, and operations", icon: MdOutlineAutoGraph },
      { name: "Excel to BI migration with custom visualization frameworks", icon: RiStackFill },
      { name: "Real-time dashboards enabled by API and cloud integration", icon: MdOutlineApi }
    ],
    logo: BarGraph,
    logoAlt: "Data Analytics Logo",
    isShownOnHome: true
  },
  {
    title: "Business Intelligence (BI) Systems",
    description: "Complete BI infrastructure: data collection → storage → transformation → dashboards → automation.",
    deliverableTitle: "What We Deliver",
    deliverables: [
      { name: "BI architecture planning", icon: RiFlowChart },
      { name: "Data warehouse setup", icon: FaDatabase },
      { name: "Data lake creation", icon: HiOutlineDatabase },
      { name: "Role-based dashboards & reporting", icon: MdDashboard }
    ],
    logo: Distribution,
    logoAlt: "BI Systems Logo",
    isShownOnHome: true
  },
  {
    title: "Data Engineering & ETL Pipelines",
    description: "Reliable, scalable pipelines that clean, transform, and prepare data for analytics or ML.",
    deliverableTitle: "What We Deliver",
    deliverables: [
      { name: "ETL/ELT pipeline development", icon: BiGitMerge },
      { name: "API-based data extraction", icon: MdOutlineApi },
      { name: "Data cleaning & wrangling frameworks", icon: FaCogs },
      { name: "Batch & real-time ingestion", icon: RiStackFill },
      { name: "Database design and optimization", icon: FaDatabase },
      { name: "Migration to cloud platforms", icon: FaCloud }
    ],
    logo: Donught,
    logoAlt: "Data Engineering Logo",
    isShownOnHome: true
  },
  {
    title: "Machine Learning & AI Solutions",
    description: "Predictive models and automation tools that help organizations forecast, optimize, and innovate.",
    deliverableTitle: "What We Deliver",
    deliverables: [
      { name: "Forecasting (sales, inventory, finance, demand)", icon: RiLineChartLine },
      { name: "Customer churn prediction", icon: FaUsers },
      { name: "Recommendation engines", icon: FaRegLightbulb },
      { name: "Customer segmentation", icon: FaUsers },
      { name: "Fraud detection & anomaly analysis", icon: MdOutlineSecurity },
      { name: "NLP solutions (chatbots, sentiment analysis)", icon: FaRobot },
      { name: "Predictive maintenance models", icon: FaCogs }
    ],
    logo: GG,
    logoAlt: "Machine Learning Logo",
    isShownOnHome: false
  },
  {
    title: "Consulting & Strategic Advisory",
    description: "Expert guidance to help businesses define the right analytics strategy and execute it effectively.",
    deliverableTitle: "What We Deliver",
    deliverables: [
      { name: "Data maturity assessment", icon: MdOutlineAutoGraph },
      { name: "Analytics roadmap", icon: RiFlowChart },
      { name: "BI strategy formulation", icon: FaRegLightbulb },
      { name: "Cost optimization", icon: FaChartBar },
      { name: "Process automation strategy", icon: FaCogs },
      { name: "Analytics team training & upskilling", icon: FaUsers }
    ],
    logo: Graph1,
    logoAlt: "Consulting Logo",
    isShownOnHome: false
  },
  {
    title: "Custom Software & Tooling",
    description: "Internal tools and analytics-driven apps tailored to your business needs.",
    deliverableTitle: "Deliverables",
    deliverables: [
      { name: "Custom dashboards", icon: MdDashboard },
      { name: "Internal workflow apps", icon: FaCogs },
      { name: "Recommendation widgets", icon: FaRegLightbulb },
      { name: "Automated scripts & bots", icon: FaRobot }
    ],
    logo: Hierarchy,
    logoAlt: "Custom Software Logo",
    isShownOnHome: false
  }
];

export default services;