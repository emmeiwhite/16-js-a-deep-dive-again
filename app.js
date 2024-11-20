/** 1) Creating & inserting Elements .insertAdjacentHTML & createElement */

const container = document.querySelector('.container')
const message = document.createElement('div')
message.textContent = 'In a test match sometimes we only need to buy time but never give up'

container.appendChild(message)

message.classList.add('cookie-message')

// container.prepend(message)
const button = document.createElement('button')
button.classList.add('btn')
button.textContent = 'Got it!'

container.insertAdjacentElement('beforeend', button)
