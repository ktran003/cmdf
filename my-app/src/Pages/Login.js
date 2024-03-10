import './Login.css'
import { useNavigate } from "react-router-dom"
import "@passageidentity/passage-elements/passage-auth";
import { PassageAuth } from '@passageidentity/passage-react';

function Login() {
  const navigate = useNavigate()

  const onSuccess = (authResult) => {
    localStorage.setItem('psg_auth_token', authResult.auth_token)
    navigate("/home")
    console.log("here")
  }

  return (
    <div class="bg-[#DDE1FF]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"></link>
      </head>
      <div class="px-5 mb-5 flex justify-center items-center">
        <img src="logo.svg" />
      </div>
      <div>
        <PassageAuth />
      </div>
    </div>
  );
}

export default Login;
