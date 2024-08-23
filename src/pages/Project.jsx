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
    {
      id: 7,
      name: "Form data",
      description: "A simple form data that save input and then takes you to the next page",
      imageUrl: "/image/formData.png",
      logo: "MR",
      link : "https://form-data-psi.vercel.app/"
    },
]
  

export default function Project(){
    return (
      <div className="lg:p-36 p-4 bg-gray-100 space-y-10">
      <h1 className="text-black font-bold text-[56px] ">Featured projects</h1>
      <p className="text-black font-medium text-xl lg:w-2/4 w-full">
      Explore My Work: Dive into my projects, review detailed case studies, and
       explore the APIs and services I’ve built.
      </p>
      <div className="text-black w-full flex justify-between flex-wrap gap-4">
      {Projects.map((projects) => 
       <div key={projects.id} className="h-[50rem] lg:w-[48%] w-full  border border-gray-700 rounded-lg flex-wrap">
       <div className="h-2/5 w-full flex flex-col gap-6 p-10">
         <div className="h-24 w-24 rounded-full flex justify-center items-center">
           {projects.logo}
         </div>
         <h1 className="text-2xl font-bold">{projects.name} </h1>
         <p className="">
         {projects.description}
         </p>
         <div className="flex text-base font-semibold gap-4 flex-col">

           {/* <div className="flex gap-2">
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
           </div> */}


          
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

    )
}