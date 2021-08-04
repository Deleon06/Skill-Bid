import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from "./views/Home/Home"
import SignUp from "./views/SignUp/SignUp"
import SignIn from './views/SignIn/SignIn';
import { verify } from './services/users';
import NewJob from "./views/NewJob/NewJob"
import ContactUs from './views/ContactUs/ContactUs';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify())
    };
    verifyUser()
  }, [])

  return (
    <div className="App">
      <Route exact path = "/">
     <Home user={user} setUser={setUser} />
      </Route>
      {user && (
        <>
        <Route exact path="/NewJob">
          <NewJob />
          </Route>
          <Route exact path="/ContactUs">
        <ContactUs />
      </Route>
          </>
      )}
      {!user && (
        <>
      <Route exact path="/sign-in">
        <SignIn setUser={setUser} user={user} />
      </Route>
      <Route exact path="/sign-up">
        <SignUp setUser={setUser} user={user} />
          </Route>
          <Route exact path="/ContactUs">
        <ContactUs />
      </Route>
        </>
      )}
    </div>
  );
}

export default App;
