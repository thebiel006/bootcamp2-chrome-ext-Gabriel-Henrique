const noteInput = document.getElementById('note-input');
const saveBtn = document.getElementById('save-btn');

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['quickNote'], (result) => {
    if (result.quickNote) {
      noteInput.value = result.quickNote;
    }
  });
});
saveBtn.addEventListener('click', () => {
  const note = noteInput.value;
  chrome.storage.local.set({ 'quickNote': note }, () => {
    alert('Nota salva!');
  });
});