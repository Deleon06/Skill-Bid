import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from "./views/Home/Home"
import SignUp from "./views/SignUp/SignUp"
import SignIn from './views/SignIn/SignIn';
import { verify } from './services/users';
import NewJob from "./views/NewJob/NewJob"
import ContactUs from './views/ContactUs/ContactUs';

function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify())
    }
    verifyUser()
  }, [])

  return (
    <div className="App">
      <Route exact path="/">
        <Home user={user} setUser={setUser}/>
      </Route>
      <Route path="/sign-in">
        <SignIn setUser={setUser} user={user} />
      </Route>
      <Route path="/sign-up">
        <SignUp setUser={setUser} user={user} />
      </Route>
      <Route path="/NewJob">
        <NewJob />
      </Route>
      <Route path="/ContactUs">
        <ContactUs />
      </Route>
    </div>
  );
}

export default App;
