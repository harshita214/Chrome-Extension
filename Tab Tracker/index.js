let myLeads = [];
let links = [];

try {
  links = [...links, ...JSON.parse(localStorage.getItem('links'))];
  console.log(JSON.parse(localStorage.getItem('links')));
} catch (e) {
  console.log(e); // Or whatever action you want here
}

for (let i = 0; i < links.length; i++) {
  let key1 = Math.random() * 100000;
  links[i].key = key1;
  var div = document.createElement('div');
  div.id = 'container' + key1;
  div.innerHTML = `<a href=${links[i].link} target="_blank" >
    <i class="fa fa-${links[i].name}" style="color: #fff"></i>
    </a>`;

  div.className = 'flexs';

  document.getElementById('myList').appendChild(div);

  (function () {
    let theContainer = document.querySelector('.modal-list-items');

    let itemNew = document.createElement('li');
    let nameDiv = document.createElement('div');
    let linkDiv = document.createElement('div');
    nameDiv.appendChild(
      document.createTextNode('Name: ' + links[links.length - 1].name)
    );

    let linkTag = document.createElement('a');
    linkTag.href = links[links.length - 1].link;
    linkTag.title = links[links.length - 1].link;
    linkTag.innerHTML = links[links.length - 1].link;

    linkDiv.appendChild(document.createTextNode('Link: '));
    linkDiv.appendChild(linkTag);
    itemNew.appendChild(nameDiv);
    itemNew.appendChild(linkDiv);
    itemNew.setAttribute('class', 'list-item');
    itemNew.setAttribute('key', key1);
    theContainer.appendChild(itemNew);

    itemNew.setAttribute('id', links.length);

    let destroyBtn = document.createElement('button');
    destroyBtn.setAttribute('class', 'primary-btn');
    destroyBtn.innerHTML = 'delete';
    destroyBtn.setAttribute('id', key1);
    itemNew.appendChild(destroyBtn);
    destroyBtn.addEventListener('click', handleDestroy);
  })();

  localStorage.setItem('links', JSON.stringify(links));
}

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
const tabBtn = document.getElementById('tab-btn');

// localstorage
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// social inputs

var inputSocial = document.getElementById('social-inp');

// ripple effect on buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.onclick = function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement('span');
    ripple.style.left = x + `px`;
    ripple.style.top = y + `px`;
    this.appendChild(ripple);
    setTimeout(function () {
      ripple.remove();
    }, 600);
  };
});

// saving tab

tabBtn.addEventListener('click', function () {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      myLeads.push(tabs[0].url);
      localStorage.setItem('myLeads', JSON.stringify(myLeads));
      render(myLeads);
    }
  );
});

// rendering all leads
function render(leads) {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

// deleting all leads
deleteBtn.addEventListener('click', function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

// input leads
inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  render(myLeads);
});

// social inputs in array
inputSocial.addEventListener('click', function () {
  var nameInp = document.getElementById('nameinp');
  var linkInp = document.getElementById('linkinp');
  let key1 = Math.random() * 100000;
  let social = {
    name: nameInp.value,
    link: linkInp.value,
    key: key1,
  };
  links.push(social);

  nameInp.value = '';
  linkInp.value = '';

  var div = document.createElement('div');
  div.id = 'container' + key1;
  div.innerHTML = `<a href=${links[links.length - 1].link} target="_blank" >
    <i class="fa fa-${links[links.length - 1].name}" style="color: #fff"></i>
    </a>`;

  div.className = 'flexs';

  document.getElementById('myList').appendChild(div);

  (function () {
    let theContainer = document.querySelector('.modal-list-items');

    let itemNew = document.createElement('li');
    let nameDiv = document.createElement('div');
    let linkDiv = document.createElement('div');
    nameDiv.appendChild(
      document.createTextNode('Name: ' + links[links.length - 1].name)
    );

    let linkTag = document.createElement('a');
    linkTag.href = links[links.length - 1].link;
    linkTag.title = links[links.length - 1].link;
    linkTag.innerHTML = links[links.length - 1].link;

    linkDiv.appendChild(document.createTextNode('Link: '));
    linkDiv.appendChild(linkTag);
    itemNew.appendChild(nameDiv);
    itemNew.appendChild(linkDiv);
    itemNew.setAttribute('class', 'list-item');
    itemNew.setAttribute('key', key1);
    theContainer.appendChild(itemNew);

    itemNew.setAttribute('id', links.length);

    let destroyBtn = document.createElement('button');
    destroyBtn.setAttribute('class', 'primary-btn');
    destroyBtn.innerHTML = 'delete';
    destroyBtn.setAttribute('id', key1);
    itemNew.appendChild(destroyBtn);
    destroyBtn.addEventListener('click', handleDestroy);
  })();

  localStorage.setItem('links', JSON.stringify(links));
});

function handleDestroy(e) {
  for (
    let i = 0;
    i < document.querySelector('.modal-list-items').children.length;
    i++
  ) {
    if (
      document
        .querySelector('.modal-list-items')
        .children[i].getAttribute('key') === e.target.id
    ) {
      let element = document.querySelector('.modal-list-items').children[i];
      element.remove();
    }
  }

  let element = document.getElementById('container' + e.target.id);
  element.remove();
  for (let i = 0; i < links.length; i++) {
    if (links[i].key == e.target.id) links.splice(i, 1);
    // links = [];
  }
  localStorage.setItem('links', JSON.stringify(links));
}

// function to remove values cancel button

var cancelBtn = document.getElementById('cancel-btn');

cancelBtn.addEventListener('click', function () {
  var nameInp = document.getElementById('nameinp');
  var linkInp = document.getElementById('linkinp');
  nameInp.value = '';
  linkInp.value = '';
});
