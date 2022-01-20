function studvalid(){
    var stud_name=$("#txtname").val();
    var stud_uname=$("#txt-uname").val();
    var stud_password=$("#txtpassword").val();

    if(stud_name!=""){
        document.getElementById("error1").innerText=" ";
        if(stud_uname!=""){
            document.getElementById("error2").innerText=" ";
            if(stud_password!=""){
                return true;
            }
            else{
                document.getElementById("error3").innerText="Required";
                return false;
            }
        }
        else{
            document.getElementById("error2").innerText="Required";
            return false;
        }
    }
    else{
        document.getElementById("error1").innerText="Required";
        return false;
    }
}

function inputtxta(){
    var name_stud=$("#txtname").val();
    var name_stud2=name_stud.substring(0,1);

    if(name_stud!=""){
        document.getElementById("txtao").innerText="Welcome "+name_stud2+"";
    }
}

function loginuser(){
    var student_uname=$("#txt-uname").val();
    var student_pass=$("#txtpassword").val();

    if(student_uname=="student" && student_pass=="student"){
        window.open("services.html");
        close();
    }
    else{
        alert("Incorrect login credentials");
        return false;
    }
}