import React from 'react'

export default function CAL_Interest() {
    function call(e) { 
        // alert("clicked");
        let a=parseInt(e.target.amount.value);
        alert("p= "+a+"\n rate = 10% \n time= 1 \n SI="+a*10*1/100); 
    }
    return (
        <div>CAL_Interest
            <form onSubmit={call}>
                <input type="text" name="amount" placeholder="enter year"/>
                <input type="submit" value="Submit" />
        </form>
  
            </div>)
}
