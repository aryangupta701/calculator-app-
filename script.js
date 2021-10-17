const buttons = document.getElementsByClassName('calculator-buttons')
const inputbar=document.getElementById('input-tab')
let flag=0;
for(let i=0;i<18;i++)
{
    if(buttons[i].innerText=='Del'){
        buttons[i].addEventListener('click',()=>{
            console.log(inputbar.value.length)
            inputbar.value=inputbar.value.substr(0,inputbar.value.length-1)
        })
        continue;
    }

    if( buttons[i].innerText=='Reset'){
        buttons[i].addEventListener('click',()=>{
            inputbar.value = '0';
        })
        
        continue;
    }
    if(buttons[i].innerText=='='){
        buttons[i].addEventListener('click',()=>{
            inputbar.value=eval(inputbar.value)
            flag=1; 
        })
       
        continue;
    }
    
    buttons[i].addEventListener('click',()=>{
        if(buttons[i].innerText=='+' || buttons[i].innerText=='-' || 
        buttons[i].innerText=='*' || buttons[i].innerText=='/')
        {
            if(inputbar.value[inputbar.value.length-1]=='+' ||
            inputbar.value[inputbar.value.length-1]=='*' ||
            inputbar.value[inputbar.value.length-1]=='/' ||
            inputbar.value[inputbar.value.length-1]=='-')
            inputbar.value=inputbar.value.substr(0,inputbar.value.length-1)

            inputbar.value += buttons[i].innerText

        }
        else if(flag==1)
        {
            inputbar.value = buttons[i].innerText;
            flag=0;
        }
        else if(inputbar.value.length==1 && inputbar.value[0]=='0')
        {
            inputbar.value = buttons[i].innerText;
            
        }
       else  inputbar.value += buttons[i].innerText;
    })
}