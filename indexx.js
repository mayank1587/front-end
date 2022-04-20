var displayingValue = document.getElementById("display")

function isOperator(buttonValue){
    if(buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/' || buttonValue === '%'){
        return true
    }
    else{
        return false
    }
}

function selectedButton(buttonValue){
    
    if(displayingValue.innerText.length >= 20){
      return
    }

    if(buttonValue ==="CLR"){
        displayingValue.innerText = '0'
    }
    
    else if(buttonValue === 'b'){
        displayingValue.innerText = displayingValue.innerText.slice(0,-1)
    }
    
    else if(buttonValue === '='){
            try{
                displayingValue.innerText = eval(displayingValue.innerText)
            }
            catch(error){
                displayingValue.innerText = 0
            }
            
    }
    else{
        if(displayingValue.innerText === '0'){
            if(buttonValue != '00'){
                if(buttonValue === '.' || isOperator(buttonValue)){
                    displayingValue.innerText = displayingValue.innerText + buttonValue
                }
                else{
                    displayingValue.innerText = buttonValue
                }                
            }
        }
        else{
            let i = displayingValue.innerText.length
            if(isOperator(displayingValue.innerText[i-1]) && isOperator(buttonValue)){
                displayingValue.innerText = displayingValue.innerText.slice(0,-1) + buttonValue
            }
            else{
                displayingValue.innerText = displayingValue.innerText + buttonValue
            }            
        }
    }    
}