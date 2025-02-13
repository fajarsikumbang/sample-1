// Initialize Floating Hearts
function createHearts() {
    const container = document.getElementById('hearts');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 5 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        container.appendChild(heart);
    }
}

// Animate Love Meter
function animateLoveMeter() {
    const meterBar = document.querySelector('.meter-bar');
    const resultText = document.querySelector('.result-text');
    let width = 0;
    
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            resultText.textContent = "100% Perfect Match! 💖";
        } else {
            width++;
            meterBar.style.width = width + '%';
        }
    }, 20);
}

// Quiz Logic
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        if (this.classList.contains('correct')) {
            this.style.backgroundColor = '#4CAF50';
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        } else {
            this.style.backgroundColor = '#ff4444';
            this.style.transform = 'rotate(-5deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 300);
        }
    });
});

// Music Control
const audioPlayer = document.getElementById('love-song');
document.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
    }
});

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transition = 'all 0.5s ease';
    if (item.classList.contains('left')) {
        item.style.transform = 'translateX(-50px)';
    } else {
        item.style.transform = 'translateX(50px)';
    }
    observer.observe(item);
});

// Initialize All Features
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    animateLoveMeter();
    
    // Add continuous heart creation
    setInterval(() => {
        createHearts();
    }, 1000);
    
    // Auto-play music after interaction
    document.body.addEventListener('click', () => {
        audioPlayer.play();
    }, { once: true });
    
});

// Floating Hearts
function createHearts() {
    const container = document.getElementById('hearts');
    for (let i = 0; i < 3; i++) {
    // for (let i = 0; i < 30; i++) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 5 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        container.appendChild(heart);
    }
}

// Animate Love Meter
function animateLoveMeter() {
    const meterBar = document.querySelector('.meter-bar');
    const resultText = document.querySelector('.result-text');
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            resultText.textContent = "100% Perfect Match! 💖";
        } else if (isInView()) {
        // } else {
            width++;
            meterBar.style.width = width + '%';
        }
    }, 20);
}

function isInView() {
    const section = document.querySelector('.result-text');
    const bounding = section.getBoundingClientRect();

    return (
        bounding.top <= window.innerHeight &&
        bounding.bottom >= 0
    );
}
// Interactive Photo Album
document.querySelectorAll('.polaroid').forEach(polaroid => {
    polaroid.addEventListener('click', function() {
        const memory = this.dataset.memory;
        const caption = document.querySelector('.memory-caption');
        caption.textContent = memory;
        caption.style.animation = 'fadeIn 0.5s';
        setTimeout(() => caption.style.animation = '', 500);
    });
});

// Countdown Timer
function updateCountdown() {
    const targetDate = new Date('2024-12-31T23:59:59').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60))) / (1000 * 60);
    const seconds = Math.floor((difference % (1000 * 60))) / 1000;

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Personalized Message Generator
const loveMessages = [
    "{name}, you are the missing piece that completes my soul's puzzle",
    "Every moment with {name} is a page in our eternal love story",
    "In {name}'s embrace, I've found heaven on earth",
    "{name}, my love for you grows stronger with each heartbeat"
];

document.getElementById('generateMessage').addEventListener('click', () => {
    const name = document.getElementById('partnerName').value || "My Love";
    const messageContainer = document.querySelector('.custom-message');
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    
    messageContainer.innerHTML = randomMessage.replace(/{name}/g, name);
    messageContainer.style.animation = 'heartbeat 1s';
    setTimeout(() => messageContainer.style.animation = '', 1000);
});

// Initialize Lightbox
function initLightbox() {
    document.querySelectorAll('.gallery-item img, .polaroid img').forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${this.src}" alt="${this.alt}">
                    <span class="close">&times;</span>
                </div>
            `;
            document.body.appendChild(lightbox);
            
            lightbox.querySelector('.close').addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
}
// Initialize Features
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    animateLoveMeter();
});
