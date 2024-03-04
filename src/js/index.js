console.log('Holaaaaa')
const add = document.getElementById('add')
const minious = document.getElementById('minious')
const container = document.querySelectorAll('ul')
const checked = document.getElementById('checkbox')

add.addEventListener('click', () => {
    const input = document.createElement('input')
    const listItem = document.createElement('li')
    const checkbox = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'input-text')
    input.setAttribute('placeholder', 'Enter Task')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', 'checkbox')
    listItem.appendChild(input)
    listItem.appendChild(checkbox)
    
    container[0].appendChild(listItem)
    checkbox.addEventListener('click', () => {
         if(checkbox.checked) {
            input.formTarget = input.style.textDecoration = 'line-through'
         }
         else {
            input.formTarget = input.style.textDecoration= 'none'
         }
    })
   
})

minious.addEventListener('click', () => {
    container[0].removeChild(container[0].lastChild)
})
