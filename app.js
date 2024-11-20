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

const grandParent = document.querySelector('.grand-parent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

/** --- 2) Let's figure out Event Bubbling! --- */

child.addEventListener('click', e => {
  console.log('Child Clicked!')
})

/** --- 1) Let's figure out Event Capture --- */
parent.addEventListener(
  'click',
  function (e) {
    console.log('Parent is clicked!')
  },
  true // true makes it a capture phase
)

// Here, we notice that though we'll click within the parent element in Chrome, which is set to the capturing mode:true.

/**
 * We expect this output:
 * Grand Parent Clicked!
 * Parent is clicked!
 * due to capturing which happens from the top of the document to the target element.
 */
grandParent.addEventListener('click', function (e) {
  console.log('Grand Parent Clicked!')
})
