export default function About() {
    return (
      <main className="px-36 py-10 space-y-14 ">
        <div className="w-full flex justify-between lg:flex-row flex-col">
          <div className=" h-2/4 lg:w-5/12 w-full flex flex-col gap-4 justify-center ">
            <div className="w-full h-1/5">
              <h1 className=" text-4xl font-bold mb-6 ">Who am I?</h1>
            </div>
            <div className="me w-full h-3/5"></div>
          </div>
          <div className=" h-2/4 lg:w-6/12 w-full flex flex-col gap-4 justify-center">
            <p className="text-lg text-left font-normal">
              I’m Flo, a UX/UI designer based in Italy.
            </p>
            <p>
              I’ve always been passionate about all aspects of design and I have
              10 years of experience in user interfaces, graphic design and front
              end development.
            </p>
  
            <p>
              I have a natural curiosity that always pushes me to explore,
              investigate and learn what I don’t know. This is also reflected in
              my personality as a designer: I consider myself a perfectionist.
              However, I love looking into new corners of design. As a
              consequence, my design approach has always been guided by an eternal
              dichotomy between divergent and convergent thinking, artistic
              attitude and scientific method, creative mess and obsession with
              details.
            </p>
            <p>
              I lived and worked in London for 4 years where I gained experiences
              in managing UI components libraries, building responsive websites,
              from the layout and structure to the creation of UI assets. In the
              meantime, I’ve completed UX Academy course at DesignLab, where I
              upskilled my UX design practice by working on several projects: iOS
              application, web app, responsive website, adding features to
              existing platforms
            </p>
            <p>
              I’m currently working as Senior Product Designer and I’ve been
              focusing on SaaS platforms. I’m also getting more and more
              passionate about new AI tools and how to include them in my workflow
              in order to improve and speed up the delivery.{" "}
            </p>
            <p>
              I have been trained to be proficient when working remotely, while
              dealing with complex projects and strict deadlines. During my
              career, I learned how to collaborate well with cross-functional
              partners including product managers and engineers. As well as, I am
              used to combining my versatile experience with my ability to connect
              with people in order to create the best work environment with my
              team.
            </p>
            <button
              className=" py-3 px-4 w-36 font-medium text-medium border border-gray-300 rounded-sm hover:bg-red-600 hover:border-red-600  hover:shadow-none  hover:text-white cursor-pointer shadow-[4px_4px_0px_-1px_rgba(0,0,0,1)]
  "
            >
              View My CV
            </button>
          </div>
        </div>
  
        <div className="w-full flex justify-between">
          <div className=" h-2/4 w-6/12  flex flex-col gap-4 justify-center">
            <h1 className=" text-4xl font-bold mb-2"> Additional skills</h1>
  
            <p>
              In my 10-years experience as designer, I’ve been employed by
              different companies and worked together with various clients.
              Therefore, I’ve had the opportunity to explore more than one branch
              of design and built up a series of additional skills that I am now
              able to bring with me in a UX/UI role:
            </p>
  
            <li>Corporate identity</li>
            <li> Brand design</li>
            <li>Illustration</li>
            <li>Motion graphic design</li>
            <li>Taam Work </li>
  
            <button
              className=" py-3 px-4 w-48 font-medium text-medium border border-gray-300 rounded-sm hover:bg-red-600 hover:border-red-600  hover:shadow-none  hover:text-white cursor-pointer shadow-[4px_4px_0px_-1px_rgba(0,0,0,1)]
  "
            >
              View Past works
            </button>
          </div>
          <div className=" h-2/4 w-5/12 flex flex-col gap-4 justify-center ">
            <div className="w-full h-1/5"></div>
            <div div className="bg-blue-300 h-full w-full profile">
              {" "}
            </div>
          </div>
        </div>
  
      </main>
    );
  }
  