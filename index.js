let var2=document.querySelector("#npwd")


var2.addEventListener("blur",call1)

function call1()
{
    let var3=document.querySelector("#npwd")
    return var3.value
}

let var1=document.querySelector("#cpwd")

var1.addEventListener("input",check)

function check()
{
    const ans=call1()
    let val=document.querySelector("#cpwd")
    if(val.value=="")
    {
        clear()

    }
    if(ans!=val.value)
    {
        let msg1=document.querySelector(".msg")
        msg1.innerText="Password Doesn't Match"
        msg1.style.color="red"
    }
    else
    {
        let msg1=document.querySelector(".msg")
        msg1.innerText="Password Matched"
        msg1.style.color="green"

        let nb=document.createElement("button")
        nb.innerText="Submit Now"

        let nba=document.querySelector(".conbtn")
        nba.appendChild(nb)

    }
}

let var3=document.querySelector("#cpwd")
var3.addEventListener("blur",clear)

function clear()
{
    let msg1=document.querySelector(".msg")
    msg1.innerText=""
    try
    {
    let btn1=document.querySelector("button")
    btn1.parentNode.removeChild(btn1)
    }
    catch(err)
    {
        console.log("")
    }
}
