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
      /*Firebase config verileri buraya eklenecek*/
    };
  
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    let database1;
 
    



      
             firebase.database().ref("Messages").on("child_added",(snapshot)=>
            {
                let html="";
                let Myname=logininput.value;
                    
                if(Myname==snapshot.val().sender)
                    {
                              html+='<li class="Mymessagemessage">';
                              html+='<span class="Mymessage1">'+snapshot.val().sender+'</span>';
                              html+='<p class="Mmessage">'+snapshot.val().Message+'</p>';
                              html+='  <span class="date">Gönderilen saat <span class="datevalue">'+Tarihformat(snapshot.val().time)+'</span></span>';
                              html+=' </li>';   
                    }

                    else 
                    {
                        html+='<li class="Incomingmessagemessage">';
                        html+='<span class="Mymessage1">'+snapshot.val().sender+'</span>';
                        html+='<p class="Mmessage">'+snapshot.val().Message+'</p>';
                        html+='  <span class="date">Gönderilen saat <span class="datevalue">'+Tarihformat(snapshot.val().time)+'</span></span>';
                        html+='</li>';  
                    }

                    messagelist.innerHTML+=html;
                    messagelist.scroll({behavior:"smooth", top:99999999999999999999999999999999});
            });
  
}
                const Tarihformat=(stamp)=>
                {
                         const dt=new Date(stamp);
                         const saat= "0" +dt.getHours();
                         const dakika=""+dt.getMinutes();
                         const format= saat.substr(-2)+":"+ dakika.substr(-2);
                         return format; 
                }
  
const LoginF = () => {
  let username = logininput.value;

  if (username.length > 0) {
    loginerror.textContent = "";
    login.remove();
    
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



       const mesajgonder=(e)=>
        {
        username=logininput.value;
        let msj=messageinput.value;
        firebase.database().ref("Messages").push().set({
        sender:username,
        Message:msj,
        time:firebase.database.ServerValue.TIMESTAMP,
        });
        }
        
        

messagepush.addEventListener("click",mesajgonder);
messageinput.addEventListener("submit",mesajgonder)
loginbutton.addEventListener("click", LoginF);
