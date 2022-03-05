import Home from "./components/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/utils/DashboardLayout";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import Register from "./components/pages/Users/Register";
import Login from "./components/pages/Users/Login";
import AuthLayout from "./components/utils/UserLayout/AuthLayout";
import ForgotPassword from "./components/pages/Users/ForgotPassword";
import RecoverPassword from "./components/pages/Users/RecoverPassword";
import ProfileProvider from "./context/profileContext";
// import StudentProvider from "./context/studentContext";
// import AddPersonal from "./components/pages/PersonalData/AddPersonal";
// import ViewPersonalDtls from "./components/pages/PersonalData/ViewPersonalDtls";
import Date from "./components/pages/Date/Date"
import TimeList from "./components/pages/List/VotersList";
import CandidateList from "./components/pages/List/CandidateList";
import CandidateAdd from "../src/components/pages/Candidate/CandidateAdd";
import VotersList from "./components/pages/List/VotersList";
// import AddTurfDetails from "../src/components/pages/TurfDetails/AddTurfDetails";
// import ViewTurf from "../src/components/pages/TurfDetails/ViewTurf";

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
        {/* User profile provider */}
        <ProfileProvider>
          <Routes>
            {/* Home routes (Dashboard) */}
            <Route path="/app" element={<DashboardLayout />}>
              <Route path="/app" element={<Navigate to="/app/home" />} />
              <Route path="home" element={<Home />} />
              
              <Route path="date" element={<Date />} />
              <Route path="voterslist" element={<VotersList />} />
              <Route path="candidateadd" element={<CandidateAdd/>}/>
              {/* <Route path="candidateadd" element={<CandidateAdd/>} /> */}
              <Route path="candidatelist" element={<CandidateList />}
                />
                


              

              {/* route for personal view */}
              {/* <Route path="personaldata">
                <Route
                  path="/app/date"
                  element={<Navigate to="/app/date/view" />}
                />
                <Route path="" element={<Date />} />
                <Route path="addDetails" element={<AddPersonal />} />
              </Route> */}

               {/* route for spots view */}
               {/* <Route path="spots"> */}
                
                {/* <Route path="turflist" element={<TurfList />} /> */}
                {/* <Route path="addDetails" element={<AddTurfDetails />} /> */}
                {/* <Route path="view" element={<ViewTurf />} /> */}
                {/* <Route path="view" element={<TimeList />} /> */}
              </Route>

              {/* route for time view */}
              
                <Route
                  path="/app/candidatelist"
                  element={<CandidateList />}
                />
                {/* <Route path="list" element={<TimeList />} />
                <Route path="candidatelist" element={<CandidateList />} /> */}
              

            {/* </Route> */}

            {/* user routes */}
            <Route path="/user" element={<AuthLayout />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot" element={<ForgotPassword />} />
              <Route path="recover" element={<RecoverPassword />} />
            </Route>


          </Routes>
        </ProfileProvider>
    </ThemeConfig>
  );
}

export default App;
