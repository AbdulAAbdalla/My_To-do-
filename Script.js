// IIFE
(() => {
  // state variables
  let MyTaskScheduleArray = [];
  // variables
  const form = document.querySelector('.form');
  const input = document.querySelector('.form_input');
  const ul = document.querySelector('.MyTaskSchedule');

  // event listeners
  form.addEventListener('submit', (e) => {
    // prevent default behavior - Page reload
    e.preventDefault();
    // give item a unique ID
    let itemId = String(Date.now());
    // get/assign input value
    let MyTaskItem = input.value;
    // pass ID and item into functions
    addItemToDOM(itemId, MyTaskItem);
    addItemToArray(itemId, MyTaskItem);
    // clear the input box. (this is default behavior but we got rid of that)
    input.value = '';
  });

  ul.addEventListener('click', (e) => {
    let id = e.target.getAttribute('data-id');
    if (!id) return; // user clicked in something else
    // pass id through to functions
    removeItemFromDOM(id);
    removeItemFromArray(id);
  });

  function addItemToDOM(itemId, MyTaskItem) {
    // create an li
    const li = document.createElement('li');
    li.setAttribute('data-id', itemId);
    // add MyTaskItem text to li
    li.innerText = MyTaskItem;
    // add li to the DOM
    ul.appendChild(li);//a new list of an item being added to unordered list
  }

  function addItemToArray(itemId, MyTaskItem) {
    // add item to array as an object with an ID so we can find and delete it later
    MyTaskScheduleArray.push({ itemId, MyTaskItem });
    console.log(MyTaskScheduleArray);
  }

  function removeItemFromDOM(id) {
    // get the list item by data ID
    var li = document.querySelector('[data-id="' + id + '"]');
   //removes the li item from its parent ul element.
    ul.removeChild(li);
  }

  function removeItemFromArray(id) {
    // create a new MyTaskScheduleArray with all li's that don't match the ID
    MyTaskScheduleArray = MyTaskScheduleArray.filter((item) => item.itemId !== id);
    console.log(MyTaskScheduleArray);
  }
})();