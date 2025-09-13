document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('strength-bar');
    const termsCheckbox = document.getElementById('terms');
    const customCheckbox = document.querySelector('.custom-checkbox');
    const checkIcon = document.getElementById('check-icon');

    // Custom Animated Cursor
    const animatedCursor = document.querySelector('.animated-cursor');
    const interactiveElements = document.querySelectorAll('button, a, input');

    document.addEventListener('mousemove', (e) => {
        gsap.to(animatedCursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: "power2.out"
        });
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            animatedCursor.classList.add('hovered');
        });
        el.addEventListener('mouseleave', () => {
            animatedCursor.classList.remove('hovered');
        });
    });

    // GSAP Animations
    gsap.fromTo(card, 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    );

    gsap.fromTo('.input-group', 
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)", delay: 0.5 }
    );

    gsap.fromTo('.btn-primary', 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)", delay: 1.2 }
    );

    // Password strength indicator
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        let strength = 0;
        if (password.length > 5) strength += 25;
        if (password.length > 8) strength += 25;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;

        strengthBar.style.width = `${strength}%`;

        if (strength <= 25) {
            strengthBar.style.backgroundColor = '#ef4444'; // red
        } else if (strength <= 50) {
            strengthBar.style.backgroundColor = '#fbbf24'; // yellow
        } else if (strength <= 75) {
            strengthBar.style.backgroundColor = '#3b82f6'; // blue
        } else {
            strengthBar.style.backgroundColor = '#22c55e'; // green
        }
    });

    // GSAP checkbox animation
    termsCheckbox.addEventListener('change', () => {
        if (termsCheckbox.checked) {
            gsap.to(customCheckbox, { 
                backgroundColor: '#2d3436', 
                borderColor: 'var(--primary-color)',
                duration: 0.3
            });
            gsap.fromTo(checkIcon, 
                { scale: 0, opacity: 0 }, 
                { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }
            );
            checkIcon.classList.remove('hidden');
        } else {
            gsap.to(customCheckbox, { 
                backgroundColor: 'transparent',
                borderColor: '#a0aec0',
                duration: 0.3
            });
            gsap.to(checkIcon, { 
                scale: 0, 
                opacity: 0, 
                duration: 0.4, 
                onComplete: () => checkIcon.classList.add('hidden')
            });
        }
    });
    
    // Form submission logic (for demonstration)
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Replace with actual registration logic
        const customMessage = document.createElement('div');
        customMessage.textContent = 'Account created successfully!';
        customMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #10B981;
            color: white;
            padding: 1.5rem;
            border-radius: 12px;
            z-index: 2000;
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
            font-family: 'Inter', sans-serif;
            text-align: center;
        `;
        document.body.appendChild(customMessage);
        setTimeout(() => customMessage.remove(), 2000);
    });
});