import './Login.css'

function Login() {
  return (
    <div class="bg-[#DDE1FF]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet"></link>
      </head>
      <div class="px-5 mb-5 flex justify-center items-center">
        <img src="logo.svg" />
      </div>
      <div>
        <passage-auth app-id="tVgNjuNEpEwYaNeBqpnSQ17q"></passage-auth>
        <script src="https://psg.so/web.js"></script>
      </div>
    </div>
  );
}

export default Login;
