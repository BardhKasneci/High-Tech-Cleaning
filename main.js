document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = document.querySelectorAll('.t-card, .t-summary');
    
    let currentIndex = 0;

    function getVisibleCardsCount() {
        if (window.innerWidth <= 640) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function updateCarousel() {
        const visibleCards = getVisibleCardsCount();
        const maxIndex = cards.length - visibleCards;

        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 20; 
        
        const moveDistance = currentIndex * (cardWidth + gap);
        track.style.transform = `translateX(-${moveDistance}px)`;

        prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
        prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        
        nextBtn.style.opacity = currentIndex === maxIndex ? '0.4' : '1';
        nextBtn.style.pointerEvents = currentIndex === maxIndex ? 'none' : 'auto';
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
    });

    window.addEventListener('resize', () => {
        updateCarousel();
    });

    updateCarousel();
});