const notifications = document.getElementById('notifications');
const notification = document.querySelectorAll('.notification');
const noteNumber = document.getElementById('notification-number')

notifications.addEventListener('click', () => {
    noteNumber.innerHTML = "0"
    notification.forEach((element) => {
        element.classList.remove('unread');
    })
})