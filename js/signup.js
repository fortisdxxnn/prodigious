function checkfirstname() {
    try {
        var stud_fname = $("#fname").val();

        if (stud_fname != "") {
            document.getElementById("error1").innerText=" ";
            if (isNaN(stud_fname)) {
                document.getElementById("error2").innerHTML=" ";
                return true;
            }
            else if(isNaN(stud_fname)==false){
                document.getElementById("error2").innerHTML="Invalid";
                // alert("Please enter a valid First Name")
                return false;
            }
        }
        else{
            document.getElementById("error1").innerText="This field is required";
            // alert("This field is required");
            return false;
        }
    }
    catch (erro) {
        alert(erro);
    }
}

function checklastname() {
    try {
        var stud_lname=$("#lname").val();

        if (stud_lname != "") {
            document.getElementById("error4").innerText=" ";
            if (isNaN(stud_lname)) {
                document.getElementById("error5").innerHTML=" ";
                return true;
            }
            else if(isNaN(stud_lname)==false){
                document.getElementById("error5").innerHTML="Invalid";
                // alert("Please enter a valid First Name")
                return false;
            }
        }
        else{
            document.getElementById("error4").innerText="This field is required";
            // alert("This field is required");
            return false;
        }
    }
    catch (errss) {
        alert(errss);
    }
}

function checkddate() {
    try {
        var stud_date=$("#stud-date").val().split("-");
        var stud_date2=new Date(stud_date[0],stud_date[1]-1,stud_date[2]);
        var stud_now=new Date();
        var datedif=stud_now-stud_date2;
        var agee=new Date(datedif);

        var finalage=Math.abs(agee.getUTCFullYear()-1970);

        if(stud_date!=""){
            document.getElementById("error6").innerText=" ";
            if(stud_now>stud_date2){
                document.getElementById("error7").innerText=" ";
                if(finalage>=17){
                    document.getElementById("error0").innerText=" ";
                    return true;
                }
                else{
                    document.getElementById("error0").innerText="Must be at least 17";
                    return false;
                }
            }
            else{
                document.getElementById("error7").innerText="Invalid";
                return false;
            }
        }
        else{
            document.getElementById("error6").innerText="Required";
            return false;
        }

    }
    catch (ersr) {
        alert(ersr);
    }
}

function checkprog() {
    try {
        var stud_prog=$("#stud-prog").find(":selected").val();

        if(stud_prog=="0"){
            document.getElementById("error8").innerText="This field is required";
            return false;
        }
        else{
            document.getElementById("error8").innerText=" ";
            return true;
        }
    }
    catch (errrr) {
        alert(errrr);
    }
}


function checkcert() {
    try {
        var stud_cert=$("#stud-cert").find(":selected").val();

        if(stud_cert=="0"){
            document.getElementById("error9").innerText="This field is required";
            return false;
        }
        else{
            document.getElementById("error9").innerText=" ";
            return true;
        }
    }
    catch (errr) {
        alert(errr);
    }
}

function checktele(){
    try{
        var stud_tele=$("#stud-tele").val();

    if(stud_tele!=""){
        document.getElementById("error10").innerText=" ";
        if(isNaN(stud_tele)==false)
        {
            document.getElementById("error11").innerText=" ";
            return true;
        }
        else{
            document.getElementById("error11").innerText="Only Numbers";
            return false;
        }
    }
    else{
        document.getElementById("error10").innerText="Required";
        return false;
    }
    }
    catch(ers){
        alert(ers);
    }

}

function checkgender(){
    try{
        var stud_gender=$('input[name="gender"]:checked').val();

        if(stud_gender!=undefined){
            document.getElementById("error12").innerText=" ";
            return true;
        }
        else{
            document.getElementById("error12").innerText="Required";
            return false;
        }
    }
    catch(es){
        alert(es);
    }
}

function checkemail(){
    try{
        var stud_email=$("#stud-email").val();
        var mailformatt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(stud_email!=""){
            document.getElementById("error13").innerText=" ";
            if(stud_email.match(mailformatt)){
                document.getElementById("error14").innerText=" ";
                return true;
            }
            else{
                document.getElementById("error14").innerText="Invalid Email";
                return false;
            }
        }
        else{
            document.getElementById("error13").innerText="Required";
            return false;
        }
    }
    catch(eer)
    {
        alert(eer);
    }
}

function checkpassword(){
    try{
        var stud_password=$("#stud-pass").val();
        var pass_format= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(stud_password.match(pass_format)){
            return true;
        }
        else{
            document.getElementById("error15").innerText="At least one uppercase,lowercase,symbol,number";
            return false;
        }
    }
    catch(eeers){
        alert(eeers)
    }
}

function checkcheck(){
    try{
        var check_stud=$("input[name='cbxterms']:checked").val();

        if(check_stud!=undefined){
            alert("Username=student\n Password=student");
            return true;
        }
        else{
            document.getElementById("check-span").style.textDecoration="underline";
            return false;
        }
    }
    catch(els){
        alert(els);
    }
}
