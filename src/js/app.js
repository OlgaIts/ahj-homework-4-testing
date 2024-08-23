import { luhnCheck } from './luhnCheck'
import { checkCardSystem } from './checkCardSystem'

const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const result = document.querySelector('.result')
const images = document.querySelectorAll('.img')

const validateCard = () => {
 const cardNum = input.value.trim()
 const system = checkCardSystem(cardNum)
 const isValid = luhnCheck(cardNum)
 const activeImg = document.getElementById(system)

 images.forEach((img) => {
  img.classList.remove('active')
 })
 input.classList.remove('input_valid')
 input.classList.remove('input_not_valid')

 if (input.value === '') {
  result.innerHTML = 'Введите номер карты'
  return
 }

 if (!/^\d+$/.test(cardNum)) {
  result.textContent = 'Карта невалидна: номер содержит буквы'
  input.classList.add('input_not_valid')
  input.classList.remove('input_valid')
  return
 }

 if (isValid && system !== 'not a card') {
  result.textContent = `Карта валидна. Ваша платёжная система: ${system}`
  console.log(`Active image element found for system: ${system}`)
  activeImg.classList.add('active')
    // if (activeImg) {
    //   console.log(`Active image element found for system: ${system}`)
    //  activeImg.classList.add('active')
    // }
  input.classList.add('input_valid')
 } else if (isValid && system === 'not a card') {
  result.textContent = 'Неопределенная платёжная система'
  input.classList.add('input_not_valid')
 } else {
  result.textContent = 'Номер невалиден'
  input.classList.add('input_not_valid')
 }
}

btn.addEventListener('click', validateCard)

input.addEventListener('keyup', () => {
 if (input.value.trim() == '') {
  images.forEach((img) => {
   img.classList.remove('active')
  })
  input.classList.remove('input_valid')
  input.classList.remove('input_not_valid')
  result.innerHTML = ''
 }
})
