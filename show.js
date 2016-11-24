(function() {
  const tbody = document.querySelector('.columns');

  const database = firebase.database();
  const eventRef = database.ref('/event');

  eventRef.once('value').then(function(snapshot) {
    const events = snapshot.val();
    for (const cb in events) {
      const tr = createTableRow(events[cb]);
      appendLinkTableData('Remove', tr);
      tbody.appendChild(tr);
    }
  });

  function appendLinkTableData(text, tr, url = '#') {
    const td = document.createElement('td');
    const link = document.createElement('a');
    link.setAttribute('href', url);
    //link.setAttribute('data-id', 1);
    const textNode = document.createTextNode(text);
    link.appendChild(textNode);
    td.appendChild(link);
    tr.appendChild(td);
  }

  function createTableRow(coffeBreak) {
    const tr = document.createElement('tr');
    for (const value in coffeBreak) {
      const td = document.createElement('td');
      const dataNode = document.createTextNode(coffeBreak[value]);
      td.appendChild(dataNode);
      tr.appendChild(td);
    }
    return tr;
  }

}());
