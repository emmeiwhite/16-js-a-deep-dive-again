const grandParent = document.querySelector('.grand-parent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

grandParent.addEventListener('click', function () {
  console.log('grand parent clicked!')
})

// Event Capturing enabled
parent.addEventListener(
  'click',
  function () {
    console.log('parent clicked!')
  },
  true
)

child.addEventListener('click', function () {
  console.log('child clicked!')
})

// Capturing triggers first always! Khalaas

/** ---  Let's do the event delegation by setting up one event handler to a parent element, so that we do not have to setup event on each list-items --- */

const listItems = document.querySelector('.list-items')

listItems.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    console.log(`You clicked on : ${e.target.textContent}`)
  }
})

const itemAddBtn = document.querySelector('.add-item-btn')

function addNewItem() {
  itemAddBtn.disabled = true

  const listItem = document.createElement('LI')
  listItem.textContent = 'New Item Added'

  listItems.appendChild(listItem)

  // Disable the button

  setTimeout(() => {
    itemAddBtn.disabled = false
  }, 1000)
}
itemAddBtn.addEventListener('click', addNewItem)
