// scripts.js

    // Toggle mobile menu
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            document.querySelector('.nav-menu').classList.remove('active');
        });
    });
    
    // Modal functionality
    function openModal(course) {
        const modal = document.getElementById('modal');
        const content = document.getElementById('modal-content');
    
        if (course === 'beginner') {
            content.innerHTML = '<h3>Beginner Level Course</h3><p>This course will cover the basics of chess including piece movements, rules, and basic strategies.</p>';
        } else if (course === 'intermediate') {
            content.innerHTML = '<h3>Intermediate Level Course</h3><p>Enhance your tactical skills and start exploring advanced strategies in this course.</p>';
        } else if (course === 'advanced') {
            content.innerHTML = '<h3>Advanced Level Course</h3><p>Master complex strategies, openings, and endgames in this advanced course.</p>';
        }
    
        modal.style.display = 'block';
    }
    
    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }
    
    // Close modal when clicking outside of it
    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
    });
    
    // Subscription form validation and alert
    document.getElementById('subscribeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('subscribe-email').value;
    
        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            alert('Thank you for subscribing to Elite Chess Academy!');
        } else {
            alert('Please enter a valid email address.');
        }
    });    

    
    // function emailSend(){
    //     Email.send({
    //         Host : "smtp.elasticemail.com",
    //         Username : "saswinkumar2004@gmail.com",
    //         Password : "A320B1694984D9A3ED28846AB98CA9269748",
    //         To : 'ashwin.code5fixer@gmail.com',
    //         From : "saswinkumar2004@gmail.com",
    //         Subject : "This is the subject",
    //         Body : "And this is the body"
    //     }).then(
    //       message => alert(message)
    //     );
    // }  

    //  onsubmit="emailSend(); reset(); return false;"



    