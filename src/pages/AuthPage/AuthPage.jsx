import './AuthPage.css';
import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
     <div className='authPage'>
        <div >
          
        <h1 className='auth-h1'>Welcome</h1>
        <h2 className='auth-h2'>Turn moments into memories <br></br>you can experience. </h2>
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
      {showLogin ?
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
        }
        </div>
      </div>
    </main>
  );
}