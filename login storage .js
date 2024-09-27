const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('textinput')

if(storageInput)
{
    text.textContent = storedInput
}

storageInput.addEventListener('input',name =>
{
    text.textContent = name.target.value
})

storageInput.addEventListener('input',phoneNumber =>
{
    text.textContent = phoneNumber.target.value
}
)

const saveToLocalStorage = () => {
    localStorage.setItem('textinput', text.textContent)
}

button.addEventListener('click', saveToLocalStorage)

