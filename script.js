const buttons = document.getElementsByClassName('calculator-buttons')
const inputbar=document.getElementById('input-tab')
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
            console.log(eval(inputbar.value) )
        })
       
        continue;
    }
    
    buttons[i].addEventListener('click',()=>{
        if(inputbar.value.length==1 && inputbar.value[0]=='0')
        {
            inputbar.value = buttons[i].innerText;
            
        }
       else  inputbar.value += buttons[i].innerText;
    })
}