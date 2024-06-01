$(document).ready(function() {
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();

        // Save to LocalStorage
        let contactData = {
            name: name,
            email: email,
            message: message
        };

        localStorage.setItem('contactData', JSON.stringify(contactData));
        alert('Message sent!');
    });
});
