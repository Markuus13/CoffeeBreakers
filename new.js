(function() {
  const database = firebase.database();
  const eventRef = database.ref('/event');

  function createCoffeeBreak() {
    eventRef.push(getInputData());
  }

  function getInputData() {
    const inputs = document.querySelectorAll('.form-input');
    return getCoffeeBreakObject(inputs);
  }

  function getCoffeeBreakObject(arr) {
    const coffeeBreakObject = {};
    for (let i = 0; i < arr.length; i++) {
      const key = arr[i].getAttribute('id');
      const value = arr[i].getAttribute('value');
      coffeeBreakObject[key] = value;
    }
    return coffeeBreakObject;
  }

  (function activeListeners() {
    const createButton = document.querySelector('.createCB');
    createButton.addEventListener('click', createCoffeeBreak);
  })();

}());
