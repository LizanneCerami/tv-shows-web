import { useState } from "react";

export default function SignUp({ setUser}) {
  const [ email, setEmail ] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    fetch("https://tv-shows-api-lc.web.app/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password })

    })
    .then(resp => resp.json())
    .then(data => {
      if(data.message) {
        alert(data.message)
        return
      }
      setUser(data)
    })
    .catch(alert)
  }

  return(
    <section className="signup-form">
        <h2 className="signup-h2" >Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <label className="signup-label" htmlFor="email"> Email
            <input
              type="email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </label>

          <br />

          <label className="signup-label" htmlFor="password"> Password
            <input 
              type="password"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </label>
          <br />

        <input className="signup-input" type="submit" value="Sign Up" />
        </form>
      
    </section>

  )
}