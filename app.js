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

/* --- 2) Remove Child --- */
// Old method to remove a child: message.parentElement.removeChild(message)
// Modern method (with good Browser Support as well) delete()

const btn = document.querySelector('.btn')
btn.addEventListener('click', e => {
  setTimeout(() => {
    // e.target.remove()
    btn.remove()
  }, 3000)
})

/** --- Event Propagation: Event Capturing and Event Bubbling --- */

const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

// parent.addEventListener(
//   'click',
//   () => {
//     console.log('Parent is clicked!')
//   },
//   true // true makes it a capture phase
// )

child.addEventListener('click', event => {
  console.log('Child clicked!')
  //   event.stopPropagation()
})

parent.addEventListener('click', () => {
  console.log('Parent clicked in the bubbling phase')
})
