document.addEventListener('DOMContentLoaded', () => {
    // GSAP setup
    gsap.registerPlugin(ScrollTrigger);

    // Data for menu and sections
    const featuredDishes = [
        { title: "Gourmet Pizza Slice", desc: "A perfect blend of fresh ingredients and melted cheese.", image: "https://i.pinimg.com/736x/88/2c/83/882c83c27e800d1152a5585b5d193635.jpg" },
        { title: "Spicy Tandoori Momos", desc: "Smoky and fiery dumplings served with mint chutney.", image: "https://i.pinimg.com/736x/3f/4f/f5/3f4ff56e6d42e617d91986427d11ef62.jpg" },
        { title: "Classic Paneer Tikka", desc: "Soft paneer cubes marinated and grilled to perfection.", image: "https://i.pinimg.com/736x/11/1d/17/111d171d1532452358c279313271794b.jpg" },
        { title: "Loaded Veggie Burger", desc: "A juicy patty with fresh veggies and a special sauce.", image: "https://i.pinimg.com/736x/44/28/7f/44287f3484f74d0e3a6a12b2a6f2b740.jpg" }
    ];

    const menuItems = [
        { name: "Chicken Biryani", price: 150, rating: 4.5, image: "https://i.pinimg.com/736x/0c/33/c4/0c33c46e01a8511634b260f89839352e.jpg" },
        { name: "Mutter Paneer", price: 120, rating: 4.0, image: "https://i.pinimg.com/736x/d6/3d/c0/d63dc0b4d49a715f02f90a190b63c89c.jpg" },
        { name: "Crispy Spring Rolls", price: 90, rating: 4.2, image: "https://i.pinimg.com/736x/1b/02/b0/1b02b0c3f589c368686d67b864a7812f.jpg" },
        { name: "Butter Chicken", price: 180, rating: 4.8, image: "https://i.pinimg.com/736x/43/d8/6d/43d86d68b63e9034e320d911a3d9229b.jpg" },
        { name: "Choco Lava Cake", price: 80, rating: 4.9, image: "https://i.pinimg.com/736x/21/51/9e/21519e93344b1c8c886e09e25d207c79.jpg" },
        { name: "Lemon Iced Tea", price: 60, rating: 4.1, image: "https://i.pinimg.com/736x/95/ec/3b/95ec3b552d5b6329e71e549176374f67.jpg" }
    ];

    const specialOffers = [
        { title: "Monsoon Delight", desc: "20% off on all snacks", image: "https://i.pinimg.com/736x/77/b9/a1/77b9a1a8c3e808269e38d781b17b62e4.jpg" },
        { title: "Weekend Combo", desc: "Buy 1 Get 1 on burgers", image: "https://i.pinimg.com/736x/13/46/5f/13465f129a25039df788c037f005a76e.jpg" },
        { title: "Student Special", desc: "Get a free drink with any meal", image: "https://i.pinimg.com/736x/8a/89/3e/8a893e3e5c9b83e6014493f1d2a1c22a.jpg" },
        { title: "Family Feast", desc: "Flat ₹100 off on orders over ₹500", image: "https://i.pinimg.com/736x/4b/f5/63/4bf563214b2d69e4a36b8e8f23f05327.jpg" }
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