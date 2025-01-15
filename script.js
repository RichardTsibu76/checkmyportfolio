const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
   
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');

} ))


// form handling 



    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form from submitting the traditional way
        
        let formData = new FormData(this);
        
        fetch('https://your-backend-url.com/submit-form', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Your message has been sent successfully!');
            } else {
                alert('Something went wrong. Please try again later.');
            }
        })
        .catch(error => {
            alert('Error: ' + error);
        });
    });


