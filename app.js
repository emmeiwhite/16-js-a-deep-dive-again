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
