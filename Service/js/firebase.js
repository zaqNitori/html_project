$(document).ready(function () {

    // Initialize Firebase
    firebase.initializeApp({
        apiKey: "AIzaSyAOFdqHrfe5vnX1YhccxCR019hzVMiipT0",
        authDomain: "web-dev-108.firebaseapp.com",
        databaseURL: "https://web-dev-108.firebaseio.com",
        projectId: "web-dev-108",
        storageBucket: "web-dev-108.appspot.com",
        messagingSenderId: "886124288265",
        appId: "1:886124288265:web:070134d447f5f00b095bd8",
        measurementId: "G-YWEPQL55DG"
    });
    // REFERENCE TO FIREBASE AUTH
    const auth = firebase.auth();
    var database = firebase.database();


    const $cat = $('#cat');
    const $des = $('#des');
    const $btnreset = $('#reset');
    const $btnsubmit = $('#submit');
    $btnsubmit.click(function (e) {
        writeUserData($cat.val(), $des.val())
        /*.then(function (e) {
            $btnSignIn.html(`Sign In`);
            window.location.href = "./profile.html";
        })
        .catch(function (e) {
            $btnSignIn.html(`Sign In`);
            console.log(e.message);
            $signInfo.html(e.message);
        });*/
    });

    function writeUserData(cate, des) {
        firebase.database().ref(report).set({
          cat: cate,
          des: des,
        });
      }
      
});
