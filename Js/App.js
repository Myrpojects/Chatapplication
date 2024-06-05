const messagecontainer = document.querySelector(".messagecontainer");
const iconcontainer = document.querySelector(".iconcontainer");
const inputcontainer = document.querySelector(".inputcontainer");
const app1 = document.querySelector(".App");
const login = document.querySelector(".login");
const loginbutton = document.querySelector(".loginbutton");
const logininput = document.querySelector(".logininput");
const messagepush = document.querySelector(".messagepush");
const messageinput = document.querySelector(".messageinput");
const loginerror = document.querySelector(".loginerror");
const mymessageadd = document.querySelector(".mymessageadd");

// Ana containerler silindi
messagecontainer.remove();
iconcontainer.remove();
inputcontainer.remove();

// Login sayfası eklendi
app1.appendChild(login);



const LoginF = () => {
  let username = logininput.value;

  if (username.length > 0) {
    loginerror.textContent = "";
    login.remove();
    mymessageadd.textContent = username;
    app1.appendChild(messagecontainer);
    app1.appendChild(iconcontainer);
    app1.appendChild(inputcontainer);


    const sendmessageF = () => {

        document.querySelector(".Mmessage").innerHTML=messageinput.value;
    };

    messagepush.addEventListener("click", sendmessageF);
  } else {
    loginerror.textContent = "Giriş yapabilmek için bir isim giriniz";

    setTimeout(function() {
      loginerror.textContent = "";
    }, 1000);
  }
};

loginbutton.addEventListener("click", LoginF);
