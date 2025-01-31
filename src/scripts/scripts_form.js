const form = document.querySelector('.registration-form')

form.addEventListener('submit',(event)=>{
event.preventDefault()
const inputValues = Array.from(document.querySelectorAll('.registration-form__input')).map((input)=>{
    return input.value
 })

 console.log(inputValues)
 form.reset()

})