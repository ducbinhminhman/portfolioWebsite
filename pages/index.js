import Head from "next/head";
import { AiFillMediumSquare, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";

import Link from "next/link"; 
import deved from "../public/minh.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import dataJob from "../public/dataJob.png";
import web2 from "../public/azureETL.png";
import web3 from "../public/stockPrediction.png";
import web4 from "../public/fitnessTracker.png";
import web5 from "../public/Portfolio.png";
import web6 from "../public/report.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Minh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900">
      <section className="min-h-screen relative">
        <video className="absolute top-0 left-0 w-full h-full object-cover z-0" src={require("../public/IntroVid.mp4")} autoPlay muted loop playsInline />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        <nav className="py-10 mb-12 flex justify-between text-white relative z-20 px-10 md:px-20 lg:px-40">
          <h1 className="font-burtons text-xl">Minh</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
              />
            </li>
            <li>
                <Link href="/resume">
                  <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a>
                </Link>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 relative z-20">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Minh</h2>
          <h3 className="text-2xl py-2 text-white md:text-3xl">Data Analyst and App Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl">
            Freelancer delivering high-quality programming and design services. Connect with me below to kickstart your project!
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
            <a href="https://medium.com/@bnhminh_38309" target="_blank" rel="noopener noreferrer">
              <AiFillMediumSquare />
            </a>
            <a href="https://www.linkedin.com/in/binhminhman/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/ducbinhminhman" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </section>


        <section className="px-10 md:px-20 lg:px-40">
          <div className="flex justify-center items-center min-h-screen">
              <div className="bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 md:w-96 md:h-96 relative overflow-hidden mt-10 md:mt-20">
                <Image src={deved} layout="fill" objectFit="cover" alt="Profile picture of Minh" />
              </div>
          </div>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">About me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Hi, I am Minh, a Data Scientist passionate about turning data into actionable decisions.
              <span className="text-teal-500"> Top of my class</span> in International Business,
              I also write on Medium about using analytics and cloud computing for impactful insights.
              Check out my work <span className="text-teal-500"><a href="https://medium.com/@bnhminh_38309">here</a></span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of services, including Data Analysis and Reporting,
              Application Development, and Data Engineering.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="Icon representing design" />
              <h3 className="text-lg font-medium pt-8 pb-2">Data Analysis and Reporting</h3>
              <p>
                Turn your data into valuable insights with custom dashboards and AI reports. Make better business decisions with clear and interactive reports.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Looker Studio</p>
              <p className="text-gray-800 py-1">Power BI</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="Icon representing coding" />
              <h3 className="text-lg font-medium pt-8 pb-2">Application Development</h3>
              <p>
                Simplify your work with custom applications. Whether it is managing your database or creating specific business tools, we build easy-to-use apps to boost your productivity.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Retool</p>
              <p className="text-gray-800 py-1">Streamlit</p>
              <p className="text-gray-800 py-1">Databutton</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="Icon representing consulting" />
              <h3 className="text-lg font-medium pt-8 pb-2">Data Engineering</h3>
              <p>
                Improve your data processes with our ETL pipeline and automation services. Ensure your data is clean and ready for analysis with our data engineering expertise.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Docker</p>
              <p className="text-gray-800 py-1">Mage AI</p>
              <p className="text-gray-800 py-1">Google Cloud</p>
              <p className="text-gray-800 py-1">Microsoft Azure</p>
            </div>
          </div>
        </section>
        <section className="py-10 px-10 md:px-20 lg:px-40">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Check out my projects in data analysis, app development, and data engineering. See how I turn data into insights, build easy-to-use tools, and improve data processes. Visit my portfolio to see my work.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a href="https://medium.com/@bnhminh_38309/decoding-data-job-salaries-a-simple-guide-to-whats-out-there-d578944d1a62">
                <Image
                  className="rounded-lg object-cover"
                  width={500}
                  height={300}
                  layout="responsive"
                  src={dataJob}
                  alt="Data job analysis"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://medium.com/@bnhminh_38309/azure-adventures-kickstart-your-journey-in-cloud-migration-data-engineering-part-1-c3d580042cc7">
                <Image src={web2} className="rounded-lg object-cover" width={500} height={300} layout="responsive" alt="Azure cloud migration" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://medium.com/dev-genius/a-beginners-guide-to-predicting-stock-prices-with-lstm-networks-278070252731">
                <Image src={web3} className="rounded-lg object-cover" width={500} height={300} layout="responsive" alt="Stock price prediction" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://medium.com/dev-genius/building-a-comprehensive-fitness-tracker-app-with-streamlit-and-bigquery-9edff8efc7cf">
                <Image src={web4} className="rounded-lg object-cover" width={500} height={300} layout="responsive" alt="Fitness tracker app development" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://medium.com/@bnhminh_38309/decoding-data-job-salaries-a-simple-guide-to-whats-out-there-d578944d1a62">
                <Image src={web5} className="rounded-lg object-cover" width={500} height={300} layout="responsive" alt="Portfolio project" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://medium.com/@bnhminh_38309/decoding-data-job-salaries-a-simple-guide-to-whats-out-there-d578944d1a62">
                <Image src={web6} className="rounded-lg object-cover" width={500} height={300} layout="responsive" alt="Report generation project" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
