import { NavLink } from "react-router-dom";

export default function About() {
    return (
      <main className="lg:px-36 px-6 py-10 space-y-14 ">
        <div className="w-full  flex justify-between lg:flex-row flex-col">
          <div className=" lg:h-2/4 h-full lg:w-5/12 w-full flex flex-col gap-4 justify-center">
            <div className="w-full h-1/5">
              <h1 className=" lg:text-4xl text-2xl font-bold lg:mb-6 mb-3 ">Who am I?</h1>
            </div>
            <div className="bg-[url('/image/cropped.jpg')] bg-contain bg-center bg-no-repeat w-full h-4/5">
            <img
              src="/image/cropped.jpg"
              alt="solution"
              className="h-full w-full object-cover"
            /></div>
          </div>
          <div className=" lg:h-2/4 h:full lg:w-6/12 w-full flex flex-col gap-4 justify-center">
            <p className="text-lg text-left font-normal">
              I’m Adekunle Micheak, a Software Engineer based in Nigeria.
            </p>
            <p>
            I have always been deeply interested in technology and problem-solving,
             which naturally led me to pursue a career in backend development.
              My passion for coding and building efficient systems drives me to continuously learn and improve.
            </p>
  
            <p>
            My curiosity pushes me to explore and understand the intricacies of backend systems,
             from database management to API development. This trait is reflected in my approach as a developer:
              I am detail-oriented and committed to writing clean, maintainable code. At the same time, I enjoy
               experimenting with new tools and methodologies to enhance my skills and deliver better solutions.
            </p>
            <p>
            Based in Nigeria, I have been working on various projects where I’ve gained hands-on
             experience in developing and managing backend services. This includes implementing authentication systems,
              designing RESTful APIs, and integrating with cloud services.
            </p>
            <p>
            Currently, I am focusing on building scalable and secure systems while 
            also exploring new technologies, including AI tools, to improve my workflow and deliver high-quality
             code more efficiently.{" "}
            </p>
            <p>
            I have adapted to working remotely, managing tight deadlines, and collaborating with
             cross-functional teams, including frontend developers and product managers. My goal is to continue growing 
             as a backend developer, contributing to impactful projects, and consistently delivering high-performance solutions.
            </p>
            <button
              className=" py-3 px-4 w-36 font-medium text-medium border border-gray-300 rounded-sm hover:bg-red-600 hover:border-red-600  hover:shadow-none  hover:text-white cursor-pointer shadow-[4px_4px_0px_-1px_rgba(0,0,0,1)]
  "
            >
              View My CV
            </button>
          </div>
        </div>
  
        <div className="w-full lg:flex-row flex-col flex justify-between">
          <div className=" lg:h-full h-2/4 lg:w-6/12 w-full  flex flex-col gap-4 justify-center">
            <h1 className=" text-4xl font-bold mb-2"> Additional skills</h1>
  
            <p>
            With my expertise as a backend engineer, I have honed a diverse set of skills 
            through working with various technologies and collaborating with cross-functional teams.
             My experience allows me to approach complex systems with a focus on efficiency, scalability, 
             and security.
            </p>
  
            <li>Database management and optimization</li>
            <li> API design and development</li>
            <li>Cloud infrastructure and deployment</li>
            <li>System architecture</li>
            <li>Performance tuning and debugging </li>
            <NavLink to = "/projects">
            <button
              className=" py-3 px-4 w-48 font-medium text-medium border border-gray-300 rounded-sm hover:bg-red-600 hover:border-red-600  hover:shadow-none  hover:text-white cursor-pointer shadow-[4px_4px_0px_-1px_rgba(0,0,0,1)]"
            >
              View Past works
            </button>

            </NavLink>

          </div>
          <div className=" lg:h-full bg-red-200 h-2/4 lg:w-6/12 w-full ">
            {/* <div className="w-full h-1/5"></div> */}

            <img
              src="/image/additionalSkill.png"
              alt="solution"
              className="h-full w-full object-cover"
            />
              {" "}
            
          </div>
        </div>
  
      </main>
    );
  }
  