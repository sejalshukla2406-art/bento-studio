const tray = document.getElementById('tray');
const emptyMsg = document.getElementById('empty-msg');
const buttons = document.querySelectorAll('.ingredient-btn');
const resetBtn = document.getElementById('reset-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if(emptyMsg) emptyMsg.style.display = 'none';

    const item = document.createElement('span');
    item.textContent = button.getAttribute('data-item');
    item.className = 'packed-item';
    tray.appendChild(item);
    });
});

resetBtn.addEventListener('click', () => {
    tray.innerHTML = '<p id="empty-msg" class="empty-msg">Your bento is empty... start packing!</p>';
});