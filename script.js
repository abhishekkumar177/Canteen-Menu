document.addEventListener('DOMContentLoaded', () => {

  // --- Section Animations with Intersection Observer ---
  const sections = [
    document.getElementById('menu-section'),
    document.getElementById('reviews-section'),
    document.getElementById('pricing-section'),
    document.getElementById('stats-section')
  ];

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.menu-card, .review-card, .pricing-card').forEach(card => {
          card.classList.add('is-visible');
        });
        if (entry.target.id === 'stats-section') {
          animateCounter('orders-counter', 3500);
          animateCounter('deliveries-counter', 2800);
          animateCounter('users-counter', 1500);
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    if (section) {
      observer.observe(section);
    }
  });


  // --- Animated Counter ---
  function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    if (!element) return;
    let current = 0;
    const increment = target / 200; // Adjust speed
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };
    updateCounter();
  }


  // --- Typewriter Effect for Specials ---
  const specials = ['Hot Parathas', 'Chowmein', 'Egg Rolls', 'Chicken Biryani'];
  const specialElement = document.getElementById('current-special');
  let specialIndex = 0;

  function typeText(text, index) {
    if (index < text.length) {
      specialElement.textContent += text.charAt(index);
      setTimeout(() => typeText(text, index + 1), 100);
    } else {
      setTimeout(() => {
        specialElement.textContent = '';
        specialIndex = (specialIndex + 1) % specials.length;
        typeText(specials[specialIndex], 0);
      }, 1500);
    }
  }
  typeText(specials[specialIndex], 0);

  // --- Gallery Carousel ---
  const galleryImages = [
    { url: 'https://placehold.co/800x600/1f2937/FFFFFF?text=Delicious+Food', name: 'Delicious Food', price: '$8.50' },
    { url: 'https://placehold.co/800x600/1f2937/FFFFFF?text=Canteen+Ambiance', name: 'Canteen Ambiance', price: '$X.XX' },
    { url: 'https://placehold.co/800x600/1f2937/FFFFFF?text=Daily+Specials', name: 'Daily Specials', price: '$6.00' },
    { url: 'https://placehold.co/800x600/1f2937/FFFFFF?text=Fresh+Ingredients', name: 'Fresh Ingredients', price: '$X.XX' },
  ];
  let currentImageIndex = 0;

  const galleryImageEl = document.getElementById('gallery-image');
  const dishNameEl = document.getElementById('gallery-dish-name');
  const priceEl = document.getElementById('gallery-price');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  function updateGallery() {
    galleryImageEl.src = galleryImages[currentImageIndex].url;
    dishNameEl.textContent = galleryImages[currentImageIndex].name;
    priceEl.textContent = `Price: ${galleryImages[currentImageIndex].price}`;
  }

  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
  });

  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateGallery();
  });

  updateGallery();

  // --- Dynamic Content Generation ---
  // Menu Cards
  const menuCardsData = [
    { type: 'Breakfast', icon: '🍳', desc: 'Your favorite breakfast dishes, ready to order.' },
    { type: 'Lunch', icon: '🍲', desc: 'A wide variety of lunch options to fuel your day.' },
    { type: 'Snacks', icon: '🍔', desc: 'Quick bites and savory treats for your cravings.' },
    { type: 'Dinner', icon: '🍝', desc: 'Hearty and delicious dinner meals.' }
  ];

  const menuContainer = document.getElementById('menu-cards-container');
  menuCardsData.forEach(item => {
    const cardHtml = `
      <div class="menu-card card-3d bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:glow-effect relative cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-br from-[#ff4b2b] to-[#ff416c] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl z-0"></div>
        <div class="relative p-6 z-10 flex flex-col items-center">
          <div class="w-24 h-24 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-5xl text-lime-400">
            <span role="img" aria-label="${item.type}">${item.icon}</span>
          </div>
          <h3 class="text-2xl font-bold mb-2">${item.type}</h3>
          <p class="text-gray-400 text-center">${item.desc}</p>
        </div>
      </div>
    `;
    menuContainer.innerHTML += cardHtml;
  });

  // Customer Reviews
  const reviewsData = [
    { name: 'Aakash S.', text: 'Fast delivery and amazing food. My go-to place for dinner!', rating: 5 },
    { name: 'Priya K.', text: 'The weekly pass is a lifesaver. Never have to worry about my meals.', rating: 5 },
    { name: 'Rohit M.', text: 'Great service and affordable prices. Highly recommend the snacks!', rating: 4 }
  ];

  const reviewsContainer = document.getElementById('reviews-container');
  reviewsData.forEach(review => {
    const starsHtml = Array(5).fill(0).map((_, i) => `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="h-5 w-5 ${i < review.rating ? 'text-yellow-400 animate-pulse' : 'text-gray-600'}"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 35.8-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46.5 46.4 34.3L288 439.6l129.9 68.3c23.2 12.2 50.9-7.9 46.4-34.3l-25-145.5 105.7-103c19-18.9 8.5-50.6-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.4-45.3-23.4-57.6 0z"/></svg>
    `).join('');
    const reviewHtml = `
      <div class="review-card card-3d bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-300 transform hover:scale-105 hover:glow-effect">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-gray-700 rounded-full overflow-hidden mr-4 border-2 border-[#ff4b2b] animate-pulse">
            <img src="https://placehold.co/100x100/1f2937/FFFFFF?text=${review.name.charAt(0)}" alt="${review.name}" class="w-full h-full object-cover" />
          </div>
          <h4 class="text-xl font-bold">${review.name}</h4>
        </div>
        <div class="flex mb-4">${starsHtml}</div>
        <p class="text-gray-400 italic">"${review.text}"</p>
      </div>
    `;
    reviewsContainer.innerHTML += reviewHtml;
  });

  // Pricing Cards
  const pricingData = [
    { title: 'Basic', desc: 'Pay per meal', price: '$0', period: '/mo', highlight: false },
    { title: 'Weekly Pass', desc: 'Discounted price', price: '$49', period: '/wk', highlight: true },
    { title: 'Monthly Pass', desc: 'Free delivery + perks', price: '$159', period: '/mo', highlight: false }
  ];

  const pricingContainer = document.getElementById('pricing-cards-container');
  pricingData.forEach(plan => {
    const cardHtml = `
      <div class="pricing-card card-3d ${plan.highlight ? 'bg-gradient-to-br from-[#ff4b2b] to-[#ff416c] text-white transform scale-105 hover:scale-110 relative z-10' : 'bg-gray-900 text-gray-200'} rounded-2xl p-8 text-center shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        ${plan.highlight ? '<div class="absolute top-0 right-0 bg-lime-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>' : ''}
        <h3 class="text-2xl font-bold mb-2">${plan.title}</h3>
        <p class="${plan.highlight ? 'text-gray-200' : 'text-gray-400'} mb-4">${plan.desc}</p>
        <div class="text-4xl font-extrabold mb-4">${plan.price} <span class="${plan.highlight ? 'text-gray-200' : 'text-gray-500'} text-xl">${plan.period}</span></div>
        <ul class="list-disc list-inside text-left mx-auto max-w-xs mb-8">
          <li>Access to full menu</li>
          <li>${plan.highlight ? 'Unlimited orders' : 'Standard delivery'}</li>
          <li>${plan.highlight ? '10% off on all meals' : 'No minimum order'}</li>
        </ul>
        <button class="px-6 py-2 ${plan.highlight ? 'bg-white text-[#ff4b2b] hover:bg-gray-100' : 'bg-[#4facfe] text-white hover:bg-[#00f2fe]'} font-bold rounded-full transition-colors">Choose Plan</button>
      </div>
    `;
    pricingContainer.innerHTML += cardHtml;
  });
});