import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home/Home';
import About from './views/About/About';
import Project from './pages/Project';
import Contact from './pages/contact';


const App = () => {
  return (
    <>
     <Header/>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/contact" element={<Contact />} />



        {/* <Route element = {<Layout/>}> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        
       
      {/* </Route> */}
     
        
        </Routes>
        <Footer/>
       
    </>
  );
};

export default App;
















// //Import the home page
// import Home from "./pages/Home"
// import Footer from "./static/Footer"
// import Hero from "./components/Hero"

// const App =() => {

//   const num1 = 2
//   const num2 = 7
//   const addNum = num1 + num2
//   return(
//     <div>
//     <h1>This is the sum of my total numbers, {addNum}</h1>
//     <Hero />
//     <Home myName = "Sammy"/>
//     <Footer/>

//   </div>

//   )

//   }

//   export default App

// import styled from "styled-components";

// const Container = styled.section`
//   height: 100vh;
//   width: 100vw;
//   background-color: whitesmoke;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Input = styled.input`
//   margin: 10px 0;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const App = () => {
//   return (
//     <Container>
//       <Form>
//         <Input placeholder="Enter your name" type="text" />
//         <Button>Submit</Button>
//       </Form>
//     </Container>
//   );
// };

// export default App;