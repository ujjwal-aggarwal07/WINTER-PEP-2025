var balnace=0;
var buytrans=0;
var selltrans=0;
function addMoney()
{
    var amt=parseInt(prompt("enter amount"));
    balnace=amt+balnace;
    alert("amt added :- "+amt);

}

function exchangeMoney()
{
    var amt=parseInt(prompt("enter amount"));
    balnace=amt+balnace;
    alert("amtw added :- "+amt);

}
function withdrawMoney()
{
    var amt=parseInt(prompt("enter amount"));
    if(amt>balnace)
    {
        alert("insufficent balance");
    }
    else
    balnace=balnace-amt;
}
function showBalance()
{
   console.log(balnace);
}
while(true)
{
    var ans=parseInt(prompt("enter value"));
    if(ans==1)
    {
        console.log("add money");
        addMoney();
    }
    else if(ans==2)
    {
        console.log("withdraw money");
        withdrawMoney();
    }
    else if(ans==3)
    {
        console.log("Show balance");
        showBalance();
    }
    else
    {
        break;
    }
    

}