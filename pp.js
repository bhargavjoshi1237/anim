


(function(){
    const firebaseConfig = {
        apiKey: "AIzaSyA1XqjiRRaHoE5GEUOGeCDwSNZ4CxogYVY",
        authDomain: "anime-alley.firebaseapp.com",
        projectId: "anime-alley",
        storageBucket: "anime-alley.appspot.com",
        messagingSenderId: "147759246154",
        appId: "1:147759246154:web:20600dc4dc845e4a2e2fb3",
        measurementId: "G-K6MDJG6T8H"
      };


const sps = document.getElementById('log');
 sps.addEventListener('click' , e => {
    firebaseConfig.auth.signInAnonymously();



 })


}());
 