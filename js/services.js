function calcservices(){
    var courses_name=[];
    var courses_costs=[];
    var finalcost=0;

    var c_num=parseInt(window.prompt("Enter number of programmes"));

    if(Number.isNaN(c_num)==false){
        for(let i=0;i<c_num;i++){
            var c_num2= window.prompt("Please enter course number");
            if(c_num2==1){
                courses_name[i]=("Management of Information Systems").toUpperCase();
                courses_costs[i]=193000;
                finalcost=finalcost + courses_costs[i];
            }
            if(c_num2==2){
                courses_name[i]=("Information Technology").toUpperCase();
                courses_costs[i]=155000;
                finalcost=finalcost + courses_costs[i];
            }
            if(c_num2==3){
                courses_name[i]=("Hospitality and Tourism").toUpperCase();
                courses_costs[i]=197500;
                finalcost=finalcost + courses_costs[i];
            }
            if(c_num2==4){
                courses_name[i]=("CAPE - Sciences").toUpperCase();
                courses_costs[i]=201000;
                finalcost=finalcost + courses_costs[i];
            }
        }
        alert("The programmes that you have selected are:\n"+courses_name.join("\n")+"");
        alert("The individual costs for these programmes are: "+courses_costs.join("\n")+"");
        alert("The final cost is \n $"+finalcost.toFixed(2)+"JMD");
        alert(courses_name.concat(courses_costs))
    }
    else{
        alert("Only numbers can be entered");
    }
}

function logoutt(){
    var confirm_mess=window.confirm(("Are you sure you want to exit?").toLowerCase());

    if(confirm_mess==true){
        window.open("index.html");
        close();
    }
}
