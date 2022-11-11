

document.getElementById("Proses").addEventListener('click',function(e){

    let UserName = document.getElementById("InputUserName").value
    let Password = document.getElementById("InputPassword").value
    
    document.getElementById("TampilUserName").innerHTML=UserName;
    document.getElementById("TampilPassword").innerHTML=Password;

})
