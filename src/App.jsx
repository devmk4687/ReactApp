// import react from 'react'
// import { Header } from './components/Header'
// import { Tabs } from './components/Tabs'
// import { TodoList } from './components/Todolist'
// import { TodoInput } from './components/TodoInput'
import Objectrender from "./Objectrender"
//  import Event from "./Event";
//  import Changechr from "./Changechr"
// import Ternaryuse from "./Ternaryuse"
import Counter from "./Counter"

import Arrayrendering from "./Arrayrendering";

// import Emptable from './Emptable';

//prop import start
//import React, { useState } from "react";
import A1 from './A1';

//prop import end

//Context import start
  // import  { createContext, useState } from 'react'
import A2 from './A2'
//Context import end

//Website import start
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Home from './Home'
  import Aboutus from './Aboutus'
  import Contactus from './Contactus'
  import Navbar from './Navbar'
  import UserList from './UserList'
 // import Help from './Help'
  import UserDetails from './UserDetails'
  import UserData from "./UserData";
  // import Grid1 from "./components/gridlayout/Grid1"
  import Dashboard from "./components/pages/Dashboard"
  //import Carousel from './Carousel'
//Website import end
  //import ProcessSteps from "./ProcessSteps";
//Marketx App component start


//Marketx App component end
// const data = createContext()
// const data1 = createContext()

//calculator app start
  import Calculator from './Calculator'
//calculator app end

//text utility app start
  import Textutility from "./Textutility";
//text utility app end

import FormValidation from "./FormValidation";

import GetApi from "./GetApi";
import WeatherApi from "./WeatherApi";
import ProductApi from "./ProductApi";
import WeatherByCity from "./weatherbycity";
import ProcessTabs from "./components/processtabs/ProcessTabs";
function App() {
  //  var age =23
  //   const user={
  //   id:1,
  //   city:'Pune'
    

  // const [userName, setUserName] = useState("Mahesh");

  return (
   <div>
    <h1>React Components</h1>
    {/* prop code start */}
      {/* <div>
          <h1>Prop Drilling Example</h1>
          <A1 userName={userName} />
          <button onClick={() => setUserName("Kangale")}>Change Name</button>
      </div> */}
    {/* prop code end */}

    {/* usecontext code start */}
       {/* <data.Provider value={userName}>
          
              <h1><A2 userName={userName} ></A2> </h1>
              <button onClick={() => setUserName("Kangale")}>Change Name</button>
        </data.Provider>  */}
    {/* usecontext code end */}

    <BrowserRouter>
    <Navbar></Navbar>
    {/* <Carousel></Carousel> */}
    <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
        <Route path="/contactus" element={<Contactus></Contactus>}></Route>
        <Route path="/user" element={<UserList></UserList>}></Route>
        <Route path="/user/:id" element={<UserDetails></UserDetails>}></Route>
        <Route path="/userdata/:id" element={<UserData></UserData>}></Route> 
        {/* <Route path="/help" element={<Help></Help>}></Route> */}
        {/* <Route path="/process" element={<ProcessSteps></ProcessSteps>}></Route> */}
        <Route path="/calculator" element={<Calculator></Calculator>}></Route>
        <Route path="/txtutility" element={<Textutility></Textutility>}></Route>
        <Route path="/formvalidation" element={<FormValidation></FormValidation>}></Route>
        <Route path="/getapi" element={<GetApi></GetApi>}></Route>
        <Route path="/getweather" element={<WeatherApi></WeatherApi>}></Route>
        <Route path="/products" element={<ProductApi></ProductApi>}></Route>
        <Route path="/weatherbycity" element={<WeatherByCity></WeatherByCity>}></Route>
        <Route path="/components/processtabs/processtabs" element={<ProcessTabs></ProcessTabs>}></Route>
        <Route path="/components/pages/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/arrarendering" element={<Arrayrendering></Arrayrendering>}></Route>
        <Route path="/objectdering" element={<Objectrender></Objectrender>}></Route>
        <Route path="/counter" element={<Counter></Counter>}></Route>
        <Route path="/propdrill" element={<A1 userName="AdminUser121"></A1>}></Route>
        <Route path="/contexthook" element={<A2></A2>}></Route>

    </Routes>
    </BrowserRouter>

     {/*<Objectrender></Objectrender>*/}
     {/*<Arrayrendering></Arrayrendering>*/}
    {/*<Event></Event>*/}
    {/*<Changechr></Changechr>*/}
    {/*<Counter></Counter>*/}
    {/*<Ternaryuse></Ternaryuse>*/}
    {/* <h1>App Component</h1>
   
    {/* <ProductList onAddToCart={handleAddToCart} />; */}
    {/* <A1></A1> */}
    {/* <Emptable></Emptable> */}
    
   </div>
  )
}

export default App;
// export {data}
