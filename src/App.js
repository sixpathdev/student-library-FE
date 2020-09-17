import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Login from "./pages/Login"
import Register from "./pages/Register"
import Forgotpassword from "./pages/Forgotpassword"
import Resetpassword from "./pages/Resetpassword"
import Home from "./pages/user/Home"
import Profile from "./pages/user/Profile"
import Error from "./pages/Error"

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgotpassword" component={Forgotpassword} />
      <Route path="/resetpassword" component={Resetpassword} />
      <Route path="/user/home" component={Home} />
      <Route path="/user/profile" component={Profile} />
      <Route component={Error} />
    </Switch>
  )
}

export default App
