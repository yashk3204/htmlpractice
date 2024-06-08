// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

/*

const ul = document.querySelector('.items');
ul.remove();                                         removes all entries
ul.lastElementChild.remove();                        removes last entry
ul.firstElementChild.textContent = 'Hello';          changes content of first entry to Hello
ul.children[1].innerText = 'abc'                     changes content of second entry to abc
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';    changes last element to Hello in h1 HTML style

const btn = document.querySelector('.btn');
btn.style.background = 'red';                        changes bg color of button to red
btn.addEventListener('click', (e) => {
    e.preventDefault();                              this statement ensures that the 'click' printed doesn't disappear immediately
    console.log('click'); });                        prints 'click' when the button is presses
similarly console.log(e.target) in the above code prints <input class="btn" type="submit" value="Submit">.
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc'; });    changes the background color to dark grey when Submit is clicked
Instead of 'click' as addActionListener parameter, if we use 'mouseover', the action is performed when the mouse hovers over the 
container.

*/