const input = document.getElementById('reminderInput');
const list = document.getElementById('reminderList');

// Load saved reminders
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem('reminders')) || [];
  saved.forEach(text => createReminder(text));
};

function addReminder() {
  const text = input.value.trim();
  if (text === '') return;

  createReminder(text);
  saveReminder(text);
  input.value = '';
}

function createReminder(text) {
  const li = document.createElement('li');
  li.innerHTML = `${text} <button onclick="deleteReminder(this)">Delete</button>`;
  list.appendChild(li);
}

function deleteReminder(btn) {
  const li = btn.parentElement;
  const text = li.firstChild.textContent.trim();
  li.remove();
  let reminders = JSON.parse(localStorage.getItem('reminders')) || [];
  reminders = reminders.filter(item => item !== text);
  localStorage.setItem('reminders', JSON.stringify(reminders));
}

function saveReminder(text) {
  const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
  reminders.push(text);
  localStorage.setItem('reminders', JSON.stringify(reminders));
}
