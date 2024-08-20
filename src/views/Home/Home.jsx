import { NavLink } from "react-router-dom"

const Projects = [
  {
    id: 1,
    name: "DOCMATE",
    description:
      "An appointment management system",
    imageUrl: "/image/newDocmate.png",
    logo: "MR",
    link :"https://docmate-tau.vercel.app/"
  
  },
  {
    id: 2,
    name: "Furniro",
    description:"We are Funiro, your Trusted Furniture Store|partner. Helping you transform your living spaces with style and elegance.",
    imageUrl: "/image/newFurniro.png",
    logo: "MR",
    link : "https://furniro-iota-eight.vercel.app/"
  },
  {
    id: 3,
    name: "Avante Grande",
    description:
      "A sampled financial banking application",
    imageUrl: "/image/newAvante.png",
    logo: "MR",
    link : "https://bankapp-izc9.onrender.com/#/"
  },
  {
    id: 4,
    name: "Remote job",
    description:
      "Get your tem in sync, no matter your location. Streamline processes, creeate team ritualsand watch productivity soar.",
    imageUrl: "/image/newRemote.png",
    logo: "MR",
    link : "https://remote--nine.vercel.app/"
  },
  {
    id: 5,
    name: "Social Media Card",
    description:
      "A beautiful social media card design with dark and light theme mode",
    imageUrl: "/image/lightCard.png",
    logo: "MR",
    link: "https://socialmediacard-nine.vercel.app"
  },
  {
    id: 6,
    name: "Hero page",
    description: "A Simple Herp page",
    imageUrl: "/image/newHero.png",
    logo: "MR",
    link : "https://hero-page-kappa.vercel.app/"
  },
]

function Home() {
  return (
    <main className="flex flex-col">
      <div className="identity h-[39rem] w-full bg-black lg:px-36 p-2 py-4 flex justify-between lg:flex-row flex-col">
        <div
          className=" lg:w-3/6  w-full h-full lg:p-16 p-4
        "
        >
          <div div className="bg-blue-300 h-full w-full profile overflow-hidden">
          <img
              src="/image/dp.jpg"
              alt="Micheal's picture"
              className="h-full w-full object-cover"
            />
            {" "}
          </div>
        </div>
        <div className=" lg:w-3/6  w-full flex h-full items-center justify-center">
          <div className=" h-2/4 w-4/5 flex flex-col gap-4 justify-center text-white">
            <h1 className=" text-7xl font-bold ">Who am I?</h1>
            <p className="text-lg text-left font-normal">
            I'm Adekunle Micheal, a Software Developer based in Nigeria. I specialize in building robust backend systems that power innovative digital products.
             From designing efficient databases to implementing scalable APIs, I ensure your project has a solid 
             foundation. I can guide your project through every stage, from initial planning to deployment, 
             delivering secure and reliable solutions.
            </p>
            <button
              className=" py-3 px-4 w-36 font-medium text-red-500 text-lg border border-gray-300 rounded-sm hover:bg-red-600 hover:border-red-600  hover:shadow-none  hover:text-white cursor-pointer shadow-[4px_4px_0px_-1px_rgba(255,255,255,1)]
"
            >
              learn more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black py-8 text-white flex justify-center items-center">
        <svg
          className="w-12 h-24 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="28"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19V5m0 14-4-4m4 4 4-4"
          />
        </svg>
      </div>
      <div className="bg-[url('/image/intel.png')] bg-contain bg-center bg-no-repeat  w-full h-[30rem] w-full">
        
      </div>
      <div className="lg:p-36 p-4 bg-gray-100 space-y-10">
        <h1 className="text-black font-bold text-[56px] ">Featured projects</h1>
        <p className="text-black font-medium text-xl lg:w-2/4 w-full">
          Find out about my works: read through my case studies, have a look at
          final designs and try out prototypes I’ve built.
        </p>
        <div className="text-black w-full flex justify-between flex-wrap gap-4">
        {Projects.map((projects) => 
         <div key={projects.id} className="h-[50rem] w-[48%]  border border-gray-700 rounded-lg flex-wrap">
         <div className="h-2/5 w-full flex flex-col gap-6 p-10">
           <div className="h-24 w-24 rounded-full bg-red-400 flex justify-center items-center">
             {projects.logo}
           </div>
           <h1 className="text-2xl font-bold">{projects.name} </h1>
           <p className="">
           {projects.description}
           </p>
           <div className="flex text-base font-semibold gap-4 flex-col">

             <div className="flex gap-2">
             <h4> Read case study</h4>

             <svg
               className="w-6 h-6 text-gray-800 dark:text-white"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               fill="none"
               viewBox="0 0 24 24"
             >
               <path
                 stroke="currentColor"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2"
                 d="M19 12H5m14 0-4 4m4-4-4-4"
               />
             </svg>
             </div>


            
           </div>
         </div>
         <NavLink to = {projects.link}>

                   <div className="w-full h-3/5 bg-red-800 project "> 
           <img
           src={projects.imageUrl}
           alt="Micheal's picture"
           className="h-full w-full object-fit zoom-container"
         /></div> 

         </NavLink>

         
       </div>

        )}
         
          {/* <div className="h-[50rem] w-[48%]  border border-gray-700 rounded-lg flex-wrap">
            <div className="h-2/5 w-full flex flex-col gap-6 p-10">
              <div className="h-24 w-24 rounded-full bg-red-400 flex justify-center items-center">
                MR
              </div>
              <h1 className="text-2xl font-bold">Knowlex</h1>
              
              <p className="">
                End to end application for Edtech industry. Knowlex is a
                platform where to exchange knowledge for other knowledge.
              </p>
              <div className="flex text-base font-semibold gap-4 flex-col">
                <h4> Read case study</h4>

                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full h-3/5 projects"></div>
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default Home;
