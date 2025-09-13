document.addEventListener('DOMContentLoaded', () => {
    // GSAP setup
    gsap.registerPlugin(ScrollTrigger);

    // Data for menu and sections
    const featuredDishes = [
        { title: "Gourmet Pizza Slice", desc: "A perfect blend of fresh ingredients and melted cheese.", image: "https://i.pinimg.com/736x/df/2e/63/df2e634ecbe81838baa6db425620fa2f.jpg" },
        { title: "Spicy Tandoori Momos", desc: "Smoky and fiery dumplings served with mint chutney.", image: "https://i.pinimg.com/736x/b6/a1/98/b6a19828e60af4b61a52abdd8a29877f.jpg" },
        { title: "Classic Paneer Tikka", desc: "Soft paneer cubes marinated and grilled to perfection.", image: "https://i.pinimg.com/1200x/2b/d7/6d/2bd76dffd6ef7bd3b64baff988f8e0cf.jpg" },
        { title: "Loaded Veggie Burger", desc: "A juicy patty with fresh veggies and a special sauce.", image: "https://i.pinimg.com/736x/c6/bb/95/c6bb9592f49c25413846e5b4627f0787.jpg" }
    ];

    const menuItems = [
        { name: "Chicken Biryani", price: 150, rating: 4.5, image: "https://i.pinimg.com/1200x/6a/cc/f3/6accf3cefbe7f9779d151e3696018990.jpg" },
        { name: "Mutter Paneer", price: 120, rating: 4.0, image: "https://i.pinimg.com/736x/9b/50/2e/9b502ed46fb2b42bfb7ac4dd50387d50.jpg" },
        { name: "Crispy Spring Rolls", price: 90, rating: 4.2, image: "https://i.pinimg.com/736x/fd/65/ab/fd65abd246418fe65b7bc326e3936edd.jpg" },
        { name: "Butter Chicken", price: 180, rating: 4.8, image: "https://i.pinimg.com/1200x/ca/f9/aa/caf9aae7199cd49d7bf0cc5275566900.jpg" },
        { name: "Choco Lava Cake", price: 80, rating: 4.9, image: "https://i.pinimg.com/736x/3d/02/f6/3d02f6ba1c20daf2347e6ccec64690cb.jpg" },
        { name: "Lemon Iced Tea", price: 60, rating: 4.1, image: "https://i.pinimg.com/736x/6a/a5/2e/6aa52ef43e3d97f8a2a03251b5f0cf36.jpg" }
    ];

    const specialOffers = [
        { title: "Monsoon Delight", desc: "20% off on all snacks", image: "https://i.pinimg.com/1200x/91/4f/58/914f58bf634bb92ca80da57bb4df4507.jpg" },
        { title: "Weekend Combo", desc: "Buy 1 Get 1 on burgers", image: "https://i.pinimg.com/1200x/68/41/9f/68419f46de44237f89bd76c49de12120.jpg" },
        { title: "Student Special", desc: "Get a free drink with any meal", image: "https://i.pinimg.com/736x/6d/ae/7d/6dae7d7a8600b35b69ed98ae211396d9.jpg" },
        { title: "Family Feast", desc: "Flat ₹100 off on orders over ₹500", image: "https://i.pinimg.com/736x/62/78/7a/62787a64390f8ac8f8866e5f926ba3cb.jpg" }
    ];

    const takeawayItems = [
        { title: "Quick Lunch Box", desc: "A balanced meal for a quick break.", icon: "box", color: "text-red-500", bg: "bg-red-500" },
        { title: "Grab & Go Snacks", desc: "Perfect for on-the-go cravings.", icon: "fast-food", color: "text-yellow-500", bg: "bg-yellow-500" },
        { title: "Express Combos", desc: "Pre-packaged meals for faster service.", icon: "coffee", color: "text-blue-500", bg: "bg-blue-500" },
    ];

    const offers = [
        { title: "Flat 20% Off", desc: "On your first order", code: "WELCOME20" },
        { title: "Cashback Bonanza", desc: "Get 10% cashback up to ₹50", code: "CASHBACK10" },
        { title: "Refer & Earn", desc: "Invite a friend & get ₹100", code: "REFER100" }
    ];

    const testimonials = [
        { name: "Priya Sharma", review: "The delivery was super fast and the food was hot and delicious. Highly recommend the Chicken Biryani!", avatar: "PS" },
        { name: "Ravi Kumar", review: "Great service and the app is so easy to use. The menu has a lot of options and everything is fresh.", avatar: "RK" },
        { name: "Sonia Singh", review: "I love the loyalty program! I've already earned enough points for a free dessert. A very rewarding experience.", avatar: "SS" }
    ];

    // GSAP Animations
    // ----------------------------------------------------
    gsap.to("#main-header", {
        backgroundColor: "rgba(17, 24, 39, 0.8)",
        backdropFilter: "blur(10px)",
        scroll: "20",
        ease: "power2.inOut",
        duration: 0.5,
        scrollTrigger: {
            trigger: "body",
            start: "top -10%",
            end: "top -10%",
            toggleActions: "play reverse play reverse"
        }
    });

    const sections = document.querySelectorAll('.reveal');
    sections.forEach(section => {
        gsap.from(section, {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // Populate and Animate Sections
    // ----------------------------------------------------

    // Featured Carousel
    const featuredCarousel = document.querySelector('.featured-carousel');
    featuredDishes.forEach(item => {
        const card = document.createElement('div');
        card.className = 'featured-card snap-center';
        card.style.backgroundImage = `url('${item.image}')`;
        card.innerHTML = `
            <div class="featured-card-content">
                <h3 class="font-bold text-2xl">${item.title}</h3>
                <p class="text-sm">${item.desc}</p>
            </div>
        `;
        featuredCarousel.appendChild(card);
    });
    
    // Menu Grid
    const menuGrid = document.getElementById('menu-grid');
    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'food-card reveal';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="food-card-image">
            <h3 class="font-bold text-lg">${item.name}</h3>
            <div class="flex items-center justify-between my-2">
                <span class="text-xl font-bold text-primary">₹${item.price}</span>
                <div class="flex items-center text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span class="ml-1 text-sm">${item.rating}</span>
                </div>
            </div>
            <button class="add-to-cart-btn">Add to Cart</button>
        `;
        menuGrid.appendChild(card);
    });

    // Specials Carousel
    const specialsScroll = document.querySelector('.specials-scroll-cards');
    specialOffers.forEach(item => {
        const card = document.createElement('div');
        card.className = 'special-card reveal';
        card.style.backgroundImage = `url('${item.image}')`;
        card.innerHTML = `
            <div class="special-card-content">
                <h3 class="font-bold text-lg">${item.title}</h3>
                <p class="text-sm text-gray-400">${item.desc}</p>
            </div>
        `;
        specialsScroll.appendChild(card);
    });

    // Takeaway Cards
    const takeawayGrid = document.querySelector('.takeaway-grid');
    takeawayItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'takeaway-card reveal';
        card.innerHTML = `
            <div class="flex items-center mb-4">
                <span class="text-3xl ${item.color} mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span>
                <h3 class="font-bold text-xl text-white">${item.title}</h3>
            </div>
            <p class="text-gray-400">${item.desc}</p>
            <button class="mt-4 px-6 py-2 rounded-full bg-primary text-white text-sm font-bold">Order Now</button>
        `;
        takeawayGrid.appendChild(card);
    });
    
    // Offers Grid
    const offersGrid = document.querySelector('.offers-grid');
    offers.forEach(item => {
        const card = document.createElement('div');
        card.className = 'offer-card reveal';
        card.innerHTML = `
            <div class="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M21.2 15c.7-2.2 1-4.4.8-6.6a2.6 2.6 0 0 0-3.8-3.6 7.4 7.4 0 0 1-.8-2.6 2.6 2.6 0 0 0-3.6-3.8c-2.2.7-4.4 1-6.6.8a2.6 2.6 0 0 0-3.6 3.8 7.4 7.4 0 0 1-2.6.8 2.6 2.6 0 0 0-3.8 3.6c.7 2.2 1 4.4.8 6.6a2.6 2.6 0 0 0 3.8 3.6 7.4 7.4 0 0 1 .8 2.6 2.6 2.6 0 0 0 3.6 3.8c2.2-.7 4.4-1 6.6-.8a2.6 2.6 0 0 0 3.6-3.8 7.4 7.4 0 0 1 2.6-.8 2.6 2.6 0 0 0 3.8-3.6z"></path><path d="M14 12H10V8H14V12Z" fill="white"></path></svg>
            </div>
            <h3 class="font-bold text-lg mb-2 text-white">${item.title}</h3>
            <p class="text-sm text-gray-400 mb-4">${item.desc}</p>
            <div class="bg-gray-700 py-2 px-4 rounded-full text-center text-sm font-semibold">
                Code: <span class="text-primary">${item.code}</span>
            </div>
        `;
        offersGrid.appendChild(card);
    });

    // Testimonials Carousel
    const reviewsCarousel = document.querySelector('.reviews-carousel');
    testimonials.forEach(item => {
        const card = document.createElement('div');
        card.className = 'review-card reveal snap-center';
        card.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mr-4">${item.avatar}</div>
                <div>
                    <h4 class="font-semibold text-white">${item.name}</h4>
                    <div class="flex text-yellow-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    </div>
                </div>
            </div>
            <p class="text-sm text-gray-400">${item.review}</p>
        `;
        reviewsCarousel.appendChild(card);
    });


    // Sidebar Cart functionality
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    let cartItems = [];

    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('translate-x-full');
    });

    closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('translate-x-full');
    });

    // Dummy add to cart functionality
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.food-card');
            const name = card.querySelector('h3').textContent;
            const price = parseFloat(card.querySelector('.text-primary').textContent.replace('₹', ''));
            
            let item = cartItems.find(i => i.name === name);
            if (item) {
                item.quantity++;
            } else {
                item = { name, price, quantity: 1 };
                cartItems.push(item);
            }
            updateCartUI();
        });
    });

    function updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');
        
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;

        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'flex justify-between items-center bg-gray-700 p-4 rounded-xl mb-4';
            itemElement.innerHTML = `
                <div>
                    <h4 class="font-semibold text-white">${item.name}</h4>
                    <p class="text-sm text-gray-400">₹${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <span class="font-bold text-primary">₹${(item.price * item.quantity).toFixed(2)}</span>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
            count += item.quantity;
        });

        cartCount.textContent = count;
        cartTotal.textContent = `₹${total.toFixed(2)}`;
    }
});