import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RentSimulator from "./components/RentSimulator";
import Home from "./pages/Home";
import FirstApplicationForm from "./components/ApplicationForm/FirstApplicationForm";
import SecondApplicationForm from "./components/ApplicationForm/SecondApplicationForm";
import ThirdApplicationForm from "./components/ApplicationForm/ThirdApplicationForm";
import ApplicationFormAnalyze from "./components/ApplicationForm/ApplicationFormAnalyze";
import ApplicationFormCongrat from "./components/ApplicationForm/ApplicationFormCongrat";
import ApplicationFormDocsUpload from "./components/ApplicationForm/ApplicationFormDocsUpload";
import HomeFinder from "./pages/HomeFinder";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [data, setData] = useState({});

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};

function App() {
  const [data, setData] = useState({});
  return (
    <MyProvider value={{ data, setData }}>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/rentsimulator" Component={RentSimulator} />
          <Route
            path="/firstapplicationform"
            Component={FirstApplicationForm}
          />
          <Route
            path="/secondapplicationform"
            Component={SecondApplicationForm}
          />
          <Route
            path="/thirdapplicationform"
            Component={ThirdApplicationForm}
          />
          <Route
            path="/applicationformanalyze"
            Component={ApplicationFormAnalyze}
          />
          <Route
            path="/applicationformcongrat"
            Component={ApplicationFormCongrat}
          />
          <Route
            path="/applicationformdocsupload"
            Component={ApplicationFormDocsUpload}
          />
          <Route path="/homefinder" Component={HomeFinder} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
