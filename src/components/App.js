import React from "react"
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Switch } from "react-router-dom";


function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/signup" component={Signup} />
            </Switch>


            {/* at react-router-dom v6 switches changed to Routes but we are going to use v5.2.0 */}
            {/* to change version if react-router-dom installed uninstall with 'npm uninstall react-router-dom' */}
            {/* than install v5.2.0 with  'npm install react-router-dom@5.2.0' */}
            {/* <Routes> */}
              {/* <Route path="/signup" element={ <Signup /> } /> */}
              {/* <Route path="/homee" element={ <Home />} /> */}
            {/* </Routes> */}
          </AuthProvider>
        </Router>
        <Signup />
      </div>
    </Container>

  )
}

export default App;
