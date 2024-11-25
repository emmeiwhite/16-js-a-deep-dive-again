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

grandParent.addEventListener('click', function (e) {
  console.log('Grand Parent Clicked!')
})

// Here, we notice that though we'll click within the parent element in Chrome, which is set to the capturing mode:true.

/**
 * We expect this output:
 * Grand Parent Clicked!
 * Parent is clicked!
 * due to capturing which happens from the top of the document to the target element.
 *
 * THIS IS NOT THE OUTPUT HOWEVER:
 *
 * 1) Capturing happens first since the click on child div is also a click on parent div and parent div is in capturing mode. So, capturing event is fired first.
 *
 * 2) Then both the grandParent and child are operating in regular bubbling mode.
 * So, the click event on child will first run its own event handler code,
 * Then the event will bubble to the parents, until it reaches grandparent and the respective callback will be executed!
 */

/* --- 
OUTPUT:
Parent is clicked!
Child Clicked!
Grand Parent Clicked!
--- */

/**  ---  Event Delegation - Practical Examples!  --- */

const listItems = document.querySelector('.list-items')
const addBtn = document.querySelector('.add-item-btn')

listItems.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    console.log(`You clicked on : ${e.target.textContent}`)
  }
})

addBtn.addEventListener('click', function (e) {
  addBtn.disabled = true

  /** --- Perform the required task of adding list-item --- */
  const li = document.createElement('li')
  li.textContent = 'new item'
  listItems.appendChild(li)

  setTimeout(function () {
    addBtn.disabled = false
  }, 1000)
})
