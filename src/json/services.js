import BarGraph from "@/assets/Charts/Bar Graph.png";
import Distribution from "@/assets/Charts/Distribution.png";
import Donught from "@/assets/Charts/Donught.png";
import GG from "@/assets/Charts/GG.png";
import Graph1 from "@/assets/Charts/Graph 1.png";
import GraphChart from "@/assets/Charts/Graph Chart.png";
import Hierarchy from "@/assets/Charts/Hierarchy.png";
import HorizontalBarChart from "@/assets/Charts/Horizontal BarChart.png";
import IceBerg from "@/assets/Charts/IceBerg.png";
import LineChart from "@/assets/Charts/Line Chart.png";
import Lines from "@/assets/Charts/Liness.png";
import PieChart from "@/assets/Charts/Pie Chart.png";
import ScatteredwithFiller from "@/assets/Charts/Scatter with filler.png";
import Scattered from "@/assets/Charts/Scattered.png";
import StackedBarChart from "@/assets/Charts/Stacked Bar Chart.png";
import TriangleChart from "@/assets/Charts/Traingle Chart.png";

const services = [
  {
    title: "Data Analytics & Visualization",
    description: "Convert raw, scattered business data into clear, interactive dashboards that empower teams to make faster, smarter decisions. We deliver Power BI, Tableau, and Looker Studio solutions with automated reporting and real-time insights.",
    deliverableTitle: "What We Deliver",
    deliverables: [
      "Interactive dashboards with automated daily/weekly/monthly reporting",
      "KPI trackers for sales, marketing, finance, and operations",
      "Excel to BI migration with custom visualization frameworks",
      "Real-time dashboards enabled by API and cloud integration"
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
      "BI architecture planning",
      "Data warehouse setup",
      "Data lake creation",
      "Role-based dashboards & reporting"
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
      "ETL/ELT pipeline development",
      "API-based data extraction",
      "Data cleaning & wrangling frameworks",
      "Batch & real-time ingestion",
      "Database design and optimization",
      "Migration to cloud platforms"
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
      "Forecasting (sales, inventory, finance, demand)",
      "Customer churn prediction",
      "Recommendation engines",
      "Customer segmentation",
      "Fraud detection & anomaly analysis",
      "NLP solutions (chatbots, sentiment analysis)",
      "Predictive maintenance models"
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
      "Data maturity assessment",
      "Analytics roadmap",
      "BI strategy formulation",
      "Cost optimization",
      "Process automation strategy",
      "Analytics team training & upskilling"
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
      "Custom dashboards",
      "Internal workflow apps",
      "Recommendation widgets",
      "Automated scripts & bots"
    ],
    logo: Hierarchy,
    logoAlt: "Custom Software Logo",
    isShownOnHome: false
  }
];

export default services;