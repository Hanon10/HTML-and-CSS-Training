const textArea = document.querySelector('#text-input')
const charCount = document.querySelector('#char-count')
const maxChar = textArea.getAttribute('maxlength')
// console.log(maxChar)

textArea.addEventListener('input', function() {
    // console.log(this.value.length)
    let currentLength = this.value.length;
    
    charCount.textContent = `Character Count: ${currentLength}/50`

    if(currentLength >= maxChar){
        charCount.style.color = 'red'
    }
    else{
        charCount.style.color = 'black'
    }

})