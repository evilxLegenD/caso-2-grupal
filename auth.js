$(document).ready(function() {
    $('#login-form').on('submit', function(event) {
        event.preventDefault();
        let username = $('#username').val();
        let password = $('#password').val();

        // Validate credentials (here you can add real validation or API call)
        if(username === 'user' && password === 'password') {
            sessionStorage.setItem('loggedIn', 'true');
            alert('Login successful!');
            window.location.href = 'index.html';
        } else {
            alert('Invalid credentials.');
        }
    });

    // Check login status
    if(sessionStorage.getItem('loggedIn') !== 'true') {
        $('body').html('<p>You must be logged in to view this page.</p>');
    }
});
