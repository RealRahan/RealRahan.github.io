document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        const size = Math.random() * 5 + 3;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.top = `${Math.random() * 100}%`;
        
        const duration = Math.random() * 20 + 10;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;
        
        snowflakesContainer.appendChild(snowflake);
    }

    const sparklesContainer = document.querySelector('.sparkles');
    document.addEventListener('mousemove', function(e) {
        for (let i = 0; i < 3; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            const size = Math.random() * 10 + 5;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            
            sparkle.style.left = `${e.clientX + (Math.random() * 40 - 20)}px`;
            sparkle.style.top = `${e.clientY + (Math.random() * 40 - 20)}px`;
            
            sparkle.style.animationDelay = `${Math.random() * 0.5}s`;
            
            sparklesContainer.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }
    });

    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }
    });

    document.querySelectorAll('a, button, .social-btn, .cat-section').forEach(el => {
        el.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.backgroundColor = 'var(--blue)';
            }
        });
        
        el.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.backgroundColor = 'var(--pink)';
            }
        });
    });

    const elements = document.querySelectorAll('.profile-card, .goodbye');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    setTimeout(() => {
        elements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 100);
});