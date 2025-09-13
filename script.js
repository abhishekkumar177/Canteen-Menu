// ============= SCRIPT.JS =============
document.addEventListener('DOMContentLoaded', () => {
    // Galaxy Background Stars
    function createStars() {
        const galaxyBg = document.querySelector('.galaxy-bg');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            star.style.opacity = Math.random() * 0.8 + 0.2;
            galaxyBg.appendChild(star);
        }
    }

    // Splash Cursor
    function initSplashCursor() {
        const cursor = document.querySelector('.splash-cursor');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
        
        document.addEventListener('mousedown', () => {
            cursor.classList.add('active');
        });
        
        document.addEventListener('mouseup', () => {
            setTimeout(() => {
                cursor.classList.remove('active');
            }, 300);
        });
    }

    // Scroll Reveal Animation
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, observerOptions);
        
        revealElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Hero Carousel Animation
    function updateHeroCarousel() {
        const heroCards = document.querySelectorAll('.hero-card');
        
        // Auto-rotate hero cards every 4 seconds
        setInterval(() => {
            const centerCard = document.querySelector('.hero-card.center');
            const nextCard = centerCard.nextElementSibling || heroCards[0];
            
            centerCard.classList.remove('center');
            nextCard.classList.add('center');
        }, 4000);
    }

    // Add item to cart
    function addToCart(itemName, price, image, e) {
        const existingItem = cartItems.find(item => item.name === itemName);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                name: itemName,
                price: price,
                image: image,
                quantity: 1
            });
        }
        
        updateCart();
        
        // Create ripple effect on button
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.7);
            transform: scale(0);
            animation: ripple 0.6s linear;
        `;
        
        // Get button position
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        e.currentTarget.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Show confetti (simulated)
        showConfetti();
    }

    // Update cart UI
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        
        let totalPrice = 0;
        
        cartItems.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <span class="cart-item-price">₹${item.price}</span>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn plus">+</button>
                        <button class="remove-item">Remove</button>
                    </div>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        cartTotal.textContent = `₹${totalPrice}`;
        cartCount.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemIndex = Array.from(e.target.closest('.cart-item').parentElement.children).indexOf(e.target.closest('.cart-item'));
                if (cartItems[itemIndex].quantity > 1) {
                    cartItems[itemIndex].quantity--;
                } else {
                    cartItems.splice(itemIndex, 1);
                }
                updateCart();
            });
        });
        
        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemIndex = Array.from(e.target.closest('.cart-item').parentElement.children).indexOf(e.target.closest('.cart-item'));
                cartItems[itemIndex].quantity++;
                updateCart();
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemIndex = Array.from(e.target.closest('.cart-item').parentElement.children).indexOf(e.target.closest('.cart-item'));
                cartItems.splice(itemIndex, 1);
                updateCart();
            });
        });
    }

    // Show confetti animation
    function showConfetti() {
        const container = document.body;
        const colors = ['#ff4b2b', '#ffb347', '#10b981', '#ff416c'];
        
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.position = 'fixed';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.top = '-10px';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animation = `confetti ${1.5 + Math.random() * 2}s linear forwards`;
            confetti.style.zIndex = '1001';
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }

    // Specials Carousel
    function initSpecialsCarousel() {
        const slides = document.querySelectorAll('.special-slide');
        const totalSlides = slides.length;
        let currentSlide = 0;
        const specialsCarousel = document.querySelector('.specials-carousel');
        const indicators = document.querySelectorAll('.indicator');
        const nextBtn = document.querySelector('.carousel-nav.next');
        const prevBtn = document.querySelector('.carousel-nav.prev');
        
        // Set up indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateSpecialsCarousel();
            });
        });
        
        // Next button
        nextBtn.addEventListener('click', () => {
            currentSlide = Math.min(currentSlide + 1, totalSlides - 1);
            updateSpecialsCarousel();
        });
        
        // Prev button
        prevBtn.addEventListener('click', () => {
            currentSlide = Math.max(currentSlide - 1, 0);
            updateSpecialsCarousel();
        });
        
        function updateSpecialsCarousel() {
            specialsCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
            
            // Disable/Enable nav buttons
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === totalSlides - 1;
            
            // Hide/Show nav buttons
            prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
        }
        
        updateSpecialsCarousel();
    }  
     
    // Logo Loop Animation (already handled by CSS)

    // Card Nav Interactions
    function initCardNav() {
        const cardNavItems = document.querySelectorAll('.card-nav-item');
        
        cardNavItems.forEach(item => {
            item.addEventListener('click', () => {
                // Simple visual feedback
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 150);
                
                // In a real app, this would navigate to a category
                const customMessage = document.createElement('div');
                customMessage.textContent = `Navigating to ${item.textContent}`;
                customMessage.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: #ff4b2b;
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
    }

    // Loyalty Points Animation
    function animateLoyaltyPoints() {
        const pointsFill = document.querySelector('.points-fill');
        const targetWidth = 50; // 50% of bar
        
        setTimeout(() => {
            pointsFill.style.width = `${targetWidth}%`;
        }, 500);
    }

    // Initialize everything
    createStars();
    initSplashCursor();
    initScrollReveal();
    updateHeroCarousel();
    initSpecialsCarousel();
    initCardNav();
    animateLoyaltyPoints();

    // Add to cart functionality
    const addButtons = document.querySelectorAll('.add-btn');
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const name = card.querySelector('.card-title').textContent;
            const price = parseFloat(card.querySelector('.price').textContent.replace('₹', ''));
            const image = card.querySelector('.card-image').src;
            
            addToCart(name, price, image, e);
        });
    });

    // Cart drawer toggle
    const cartDrawer = document.querySelector('.cart-drawer');
    const cartIcon = document.querySelector('.cart-icon');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.querySelector('.cart-total .accent-mono');
    let cartItems = [];

    cartIcon.addEventListener('click', () => {
        cartDrawer.classList.toggle('open');
    });
    
    closeCartBtn.addEventListener('click', () => {
        cartDrawer.classList.remove('open');
    });
    
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (!cartDrawer.contains(e.target) && !cartIcon.contains(e.target) && cartDrawer.classList.contains('open')) {
            cartDrawer.classList.remove('open');
        }
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const customMessage = document.createElement('div');
            customMessage.textContent = 'Thank you for subscribing!';
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
            newsletterForm.reset();
        });
    }

    // Checkout button
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cartItems.length === 0) {
            const customMessage = document.createElement('div');
            customMessage.textContent = 'Your cart is empty!';
            customMessage.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #ff4b2b;
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
            return;
        }
        
        const customMessage = document.createElement('div');
        customMessage.textContent = 'Checkout process would start here!\n\nIn a real app, this would open a multi-step checkout flow.';
        customMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #8b5cf6;
            color: white;
            padding: 1.5rem;
            border-radius: 12px;
            z-index: 2000;
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
            font-family: 'Inter', sans-serif;
            text-align: center;
            white-space: pre-wrap;
        `;
        document.body.appendChild(customMessage);
        setTimeout(() => customMessage.remove(), 4000);
    });
});