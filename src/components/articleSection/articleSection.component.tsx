// Import necessary React and Tailwind CSS modules
import React, { useRef, useState, useEffect } from "react";
import "./article.css"; // Keep any custom styles
import Article from "./components/article.component";
import FloatingMenu from "../floatingMenu/floating-menu.component";
import { useTranslation } from "react-i18next";

const ArticleSection: React.FC = () => {
  const {t} = useTranslation()
  const ArticleContainerRef = useRef<HTMLDivElement>(null);
  const [visibleArticleIndex, setVisibleArticleIndex] = useState<number | null>(
    null
  );

  interface ArticleData {
    title: string;
    content: string;
    graphicColor: string;
  }

  const articles: ArticleData[] = [
    {
      title: "Why Choose NIOUS GmbH",
      content: `
        ${t('Expertise: Our team comprises skilled engineers and data analysts who bring years of experience to the table, ensuring top-notch solutions.')}
        ${t('Tailored Solutions: We understand that every project is unique. Our solutions are customized to address your specific challenges and goals.')}
        ${t('Innovation: Embracing the latest advancements in simulations and data analysis, we help you stay ahead in a rapidly evolving technological landscape.')}
        ${t('Reliability: Count on us for accurate results, on-time delivery, and transparent communication at every stage of the project.')}
        ${t('Collaborative Approach: We believe in fostering strong partnerships. Your insights combined with our expertise lead to exceptional outcomes.')}
        ${t("At NIOUS GmbH, we're not just service providers; we're your dedicated allies in achieving success through simulations and data analysis. Join hands with us to redefine what's possible in your industry. Contact us today to explore how we can elevate your projects to new heights.")}
      `,
      graphicColor: "green",
    },
    {
      title: "Unleash the Power of Simulations to Redefine Possibilities",
      content: `
        ${t("From Fluid Dynamics to Structural Analysis, Explore Our Expertise in DEM, CFD, FEM, and MBS Simulations")}
        ${t("Embark on a transformative journey with us, as we seamlessly bridge the chasm between imagination and reality. Our unwavering commitment to excellence shines through in every facet of our services, encompassing the realms of Discrete Element Method (DEM), Computational Fluid Dynamics (CFD), Finite Element Analysis (FEM), and Multi-Body Simulation (MBS). With this comprehensive suite of tools at your disposal, you gain the power to navigate intricate systems with unparalleled precision")}
      `,
      graphicColor: "green",
    },
    {
      title: "Particle Simulations (DEM - Discrete Element Method)",
      content: `
      ${t("Experience the power of particle simulations like never before with NIOUS GmbH. Our expertise in the field of Discrete Element Method (DEM) empowers you to understand and predict the behavior of granular materials, powders, and complex particle systems. Whether it's optimizing manufacturing processes, enhancing material design, or studying the intricate dynamics of particle interactions, we provide simulations that offer insights that matter.")}
      `,
      graphicColor: "green",
    },
    {
      title: "Computational Fluid Dynamics (CFD)",
      content: `
      ${t("Unlock the fluid dynamics of your designs and processes with NIOUS GmbH's advanced Computational Fluid Dynamics (CFD) simulations. From analyzing fluid flow patterns, heat transfer, and aerodynamics to optimizing ventilation systems and energy efficiency, our CFD simulations ensure your engineering decisions are based on data-driven insights, ultimately leading to improved performance and cost-effectiveness.")}
      `,
      graphicColor: "green",
    },
    {
      title: t("Finite Element Analysis (FEM)"),
      content: `
      ${t("Dive into the realm of structural integrity and design precision with NIOUS GmbH's advanced Finite Element Analysis (FEM) simulations. Our expertise empowers you to dissect intricate components, foresee responses, and optimize designs. Whether it's scrutinizing the durability of materials, predicting deformations, or evaluating stress distribution, our FEM simulations equip you with insights that drive confident decision-making.")}
      `,
      graphicColor: "green",
    },
    {
      title: "Multibody Simulation (MBS)",
      content: `
      ${t("NIOS GmbH's Multibody Simulation (MBS) solutions allow you to comprehensively explore and optimize the mechanical behavior of complex systems. Whether it's analyzing vehicle dynamics, robotics, machinery, or any mechanical system with interconnected components, our MBS simulations provide the accurate predictive tools you need to make informed design choices and ensure structural integrity.")}
      `,
      graphicColor: "green",
    },
    {
      title: "Data Analysis using Power BI and SQL",
      content: `
      ${t("Beyond simulations, NIOUS GmbH excels in data analysis using industry-leading tools like Power BI and SQL. Our data experts transform raw information into meaningful insights, enabling you to make informed business decisions. Whether it's visualizing complex data trends, creating interactive dashboards, or generating actionable reports, our data analysis services empower you to harness the power of your data for strategic growth.")}
      `,
      graphicColor: "green",
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleArticleIndex(index);
          }
        });
      },
      {
        root: ArticleContainerRef.current,
        threshold: 0.5,
      }
    );

    const articlesElements = ArticleContainerRef.current?.children;
    articlesElements &&
      Array.from(articlesElements).forEach((article, index) => {
        article.setAttribute("data-index", index.toString());
        observer.observe(article);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="solutions" className="section min-h-screen flex flex-col">
      <FloatingMenu />
      <div className="blur-overlay-top"></div>
      <div className="blur-overlay-bottom"></div>

      <div
        id="disable-scroll"
        ref={ArticleContainerRef}
        className="overflow-y-scroll p-6 md:p-4 lg:p-4 max-h-[800px]"
      >
        {articles.map((article, index) => (
          <div className="article-container" key={index}>
            <Article
              title={t(article.title)}
              content={t(article.content)}
              graphicColor={index === visibleArticleIndex ? "green" : "darker"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
