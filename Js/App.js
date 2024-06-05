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
const messagelist=document.querySelector(".messagelist");
const myname=document.querySelector(".myname");


messagelist.textContent="";
// Ana containerler silindi
messagecontainer.remove();
iconcontainer.remove();
inputcontainer.remove();

// Login sayfası eklendi
app1.appendChild(login);

/*-------------------------------------------------------------------------------------*/



// Your web app's Firebase configuration

const init = () => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
/*Firebase uygulama verileri*/ 
    };
  
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);


    /*Veri tabanına veri gönderme alanı*/
  
   if(logininput.value==logininput.value)
    {
        let kullanici=logininput.value;
        firebase.database().ref("Messages").push().set({
               Giris:kullanici+" Giris yapti",
        });
         
                     
                     const kullanici1=()=>
                      {
                        let mesajgonderen=logininput.value;
                          let mesaj=document.querySelector(".messageinput").value;
                          firebase.database().ref("Messages").push().set({
                            sender: logininput.value,
                              Gonderilenmesaj: mesaj
                          });
                      }   
      
      
      
      document.querySelector(".messagepush").addEventListener("click",kullanici1);
    }
  }
  
  
const LoginF = () => {
  let username = logininput.value;

  if (username.length > 0) {
    loginerror.textContent = "";
    login.remove();
    myname.textContent = username;
    app1.appendChild(messagecontainer);
    app1.appendChild(iconcontainer);
    app1.appendChild(inputcontainer);
    init();

    const sendmessageF = () => {};

    messagepush.addEventListener("click", sendmessageF);
  } else {
    loginerror.textContent = "Giriş yapabilmek için bir isim giriniz";

    setTimeout(function() {
      loginerror.textContent = "";
    }, 1000);
  }
};

loginbutton.addEventListener("click", LoginF);
