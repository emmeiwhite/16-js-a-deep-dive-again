/**  ---  Event Delegation - Practical Examples!  --- */

const listItems = document.querySelector('.list-items')

listItems.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    console.log(`You clicked on : ${e.target.textContent}`)
  }
})
