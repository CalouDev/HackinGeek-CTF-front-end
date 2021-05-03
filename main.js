user = document.getElementById("username");
passwd = document.getElementById("password");    
connection = document.getElementById("connection");

user.addEventListener('input', () => {
    if (user.value.length > 4 && passwd.value.length > 7) {
        connection.removeAttribute('disabled');
        connection.style.backgroundColor = '#FF0019';
    } else {
        connection.setAttribute('disabled', 'disabled');
        connection.style.backgroundColor = '#FF808C';
    }
});

passwd.addEventListener('input', () => {
    if (user.value.length > 4 && passwd.value.length > 7) {
        connection.removeAttribute('disabled');
        connection.style.backgroundColor = '#FF0019';
    } else {
        connection.setAttribute('disabled', 'disabled');
        connection.style.backgroundColor = '#FF808C';
    }
});