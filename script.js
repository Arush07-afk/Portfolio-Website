const contactForm = document.getElementById('contactform');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Show the custom alert
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon!`);
        
        // Now actually submit the form to Formspree
        // We use fetch to send the data without page redirect
        const formData = new FormData(contactForm);
        
        fetch('https://formspree.io/f/mlgnkeab', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                contactForm.reset();
                console.log('Form submitted successfully to Formspree!');
            } else {
                alert('Oops! There was a problem submitting your form. Please try again.');
            }
        }).catch(error => {
            alert('Oops! There was a problem submitting your form. Please try again.');
            console.error('Error:', error);
        });
    });
}
