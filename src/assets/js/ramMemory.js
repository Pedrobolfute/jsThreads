function addRamElement(){
const ram = document.querySelector('footer .ram')
ram.style.display = 'flex'

  for(i = 0; i <= 15; i++){
    const ramContent = document.createElement('span')
    ramContent.textContent = 'M'
    
    const newBlock = document.createElement('div')
    newBlock.style.border = 'solid 5px aliceblue'
    newBlock.appendChild(ramContent)

    ram.appendChild(newBlock)
  }
}

addRamElement()