import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../src/Login";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";
import Dashboard from "./Dashboard";

const code = new URLSearchParams(window.location.search).get("code");

function App() {

  if (code) {
    return (
      <div className="App">
        <Router>
          <NavBar code={code} />
          <Routes>
          <Route path="/" element={<Dashboard code={code} />} /> 
           <Route path="/" element={<Home  />} />
          <Route path="/songs" element={<Index />} />
         <Route path="/songs/new" element={<New />} />
         <Route exact path="/songs/:id" element={<Show />} />
         <Route path="/songs/:id/edit" element={<Edit />} />
         <Route path="*" element={<FourOFour />} />

       
          </Routes>
        </Router>
      </div>
    );

    // return <Dashboard code={code} />;
    //can go to /login
  } else {

    return (
      <div className="App">
        <Router>
          <NavBar/>
          <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/songs" element={<Index />} />
         <Route path="/songs/new" element={<New />} />
         <Route exact path="/songs/:id" element={<Show />} />
         <Route path="/songs/:id/edit" element={<Edit />} />
         <Route path="*" element={<FourOFour />} />
         <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  }

  //  code ?  :

  //   return (
  //     <div className="App">
  //       <Login />

  // {/*
  //        <UserProvider>
  //        <Router>
  //         <NavBar />
  //         <main>
  //           <Routes>
  //             <Route path="/" element={<Home />} />
  //             <Route path="/snacks" element={<Index />} />
  //             <Route path="/snacks/new" element={<New />} />
  //             <Route exact path="/snacks/:id" element={<Show />} />
  //             <Route path="/snacks/:id/edit" element={<Edit />} />
  //             <Route path="*" element={<FourOFour />} />
  //           </Routes>
  //         </main>
  //       </Router>
  //        </UserProvider> */}
  //     </div>
  //   );
}

export default App;
