
document.getElementById("Proses").addEventListener('click',function(e){

    let UserName = document.getElementById("InputUserName").value
    let Password = document.getElementById("InputPassword").value
  

    if (UserName =='' && Password == ''){
      document.getElementById("TampilUserName").innerHTML="Data Tidak Ada";
      document.getElementById("TampilPassword").innerHTML=null;
    }else
    {

    document.getElementById("TampilUserName").innerHTML="User Name Anda"+"  "+UserName;
   document.getElementById("TampilPassword").innerHTML="Password Anda"+"  "+Password;
   document.getElementById("InputUserName").value=null;
   document.getElementById("InputPassword").value=null;

    }
})


