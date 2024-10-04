
function validate(){
    event.preventDefault();
    let fname = document.forms['myform']['name'].value;
    let dob=document.forms['myform']['dob'].value; 
    let num = document.forms['myform']['mobile'].value;
    let gender = document.forms['myform']['male'].checked;
    console.log(num);

    var nameflag = true
    for(let i=0;i<fname.length;i++){
        let c=fname.codePointAt(i);
        if(c<65 || c>122 || (c>=91 && c<=96)){
            nameflag=false
        }
    }


    //validate number
    var numberflag = true
    if(num.length < 10 || num.length>10){
        numberflag = false;
    }
    for(let i=0;i<num.length;i++){
        if(num.codePointAt(i)<48 || num.codePointAt(i)>57){
            numberflag=false;
        }
    }
    if(numberflag && nameflag){
        var data = "Entered Details:\nName: "+fname+"\nDOB: "+dob+"\nGender: "+gender+"\nNumber: "+num;
        console.log(data);
        window.alert(data);

        //highlight fields
        document.forms['myform']['name'].style.borderColor = "green";
        document.forms['myform']['mobile'].style.borderColor = "green";
        document.forms['myform']['dob'].style.borderColor = "green";
        
    }
    else if(nameflag==false && numberflag ==false){
        alert("Invalid name\nInvalid number");
        document.forms['myform']['mobile'].style.borderColor = "red";
        document.forms['myform']['name'].style.borderColor = "red";
    }
    else if(numberflag == false){
        alert("Invalid mobile number");
        document.forms['myform']['mobile'].style.borderColor = "red";
    }
    else if(nameflag == false){
        alert("Invalid name");
        document.forms['myform']['name'].style.borderColor = "red";
    }
}
// "\nDOB: ",dob,"\ngender: ",gender,"\nNumber: ",number
