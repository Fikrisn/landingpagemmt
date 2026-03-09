// ========================================
// LAB MMT TITLE ANIMATION SYSTEM
// ========================================

class LabMMTAnimator {
    constructor() {
        this.title = document.querySelector('.title');
        this.subtitle = document.querySelector('.subtitle');
        this.originalText = 'LAB MMT';
        this.letters = [];
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.animationFrame = null;
        this.effects = {
            glitch: false,
            rainbow: true,
            wave: true,
            glow: true,
            particles: true,
            lightning: false
        };
        this.glitchInterval = null;
        this.colorShift = 0;
        
        this.init();
    }
    
    init() {
        if (!this.title) return;
        
        // Split title into individual letters for animation
        this.splitTextIntoLetters();
        
        // Create canvas for particle effects
        this.createCanvas();
        
        // Start all animations
        this.startAnimations();
        
        // Add hover interactions
        this.addHoverEffects();
        
        console.log('✨ LAB MMT Animations Initialized!');
    }
    
    // ========================================
    // TEXT SPLITTING
    // ========================================
    
    splitTextIntoLetters() {
        const text = this.title.textContent;
        this.title.textContent = '';
        this.title.style.display = 'flex';
        this.title.style.justifyContent = 'center';
        this.title.style.flexWrap = 'wrap';
        this.title.style.gap = '15px';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'letter-animate';
            span.style.display = 'inline-block';
            span.style.position = 'relative';
            span.style.animationDelay = `${index * 0.1}s`;
            
            if (char === ' ') {
                span.style.width = '20px';
            }
            
            this.letters.push(span);
            this.title.appendChild(span);
        });
    }
    
    // ========================================
    // CANVAS SETUP
    // ========================================
    
    createCanvas() {
        const header = document.querySelector('header');
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'title-particle-canvas';
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '50%';
        this.canvas.style.transform = 'translateX(-50%)';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '5';
        
        const rect = this.title.getBoundingClientRect();
        this.canvas.width = window.innerWidth;
        this.canvas.height = rect.height + 100;
        
        header.style.position = 'relative';
        header.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
    }
    
    // ========================================
    // GLITCH EFFECT
    // ========================================
    
    startGlitchEffect() {
        if (!this.effects.glitch) return;
        
        const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
        
        this.glitchInterval = setInterval(() => {
            if (Math.random() < 0.05) { // 5% chance (reduced)
                const randomLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
                if (randomLetter && randomLetter.textContent !== ' ') {
                    const originalText = randomLetter.textContent;
                    
                    // Glitch effect
                    randomLetter.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
                    randomLetter.textContent = glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    randomLetter.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
                    
                    // Restore after short delay
                    setTimeout(() => {
                        randomLetter.textContent = originalText;
                        randomLetter.style.transform = '';
                        randomLetter.style.color = '';
                    }, 50 + Math.random() * 100);
                }
            }
        }, 200);
    }
    
    // ========================================
    // RAINBOW COLOR EFFECT
    // ========================================
    
    startRainbowEffect() {
        if (!this.effects.rainbow) return;
        
        const animateColors = () => {
            this.colorShift += 0.3; // Slower color change
            
            this.letters.forEach((letter, index) => {
                if (letter.textContent !== ' ') {
                    const hue = (this.colorShift + index * 30) % 360;
                    letter.style.filter = `hue-rotate(${hue}deg) brightness(1.05) saturate(0.8)`; // More subtle
                }
            });
            
            requestAnimationFrame(animateColors);
        };
        
        animateColors();
    }
    
    // ========================================
    // WAVE ANIMATION
    // ========================================
    
    startWaveAnimation() {
        if (!this.effects.wave) return;
        
        let time = 0;
        
        const animate = () => {
            time += 0.02; // Slower animation
            
            this.letters.forEach((letter, index) => {
                const y = Math.sin(time + index * 0.5) * 3; // Reduced amplitude
                const rotation = Math.sin(time + index * 0.3) * 1; // Less rotation
                const scale = 1 + Math.sin(time + index * 0.4) * 0.03; // Subtle scale
                
                letter.style.transform = `translateY(${y}px) rotate(${rotation}deg) scale(${scale})`;
            });
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    // ========================================
    // GLOW PULSE EFFECT
    // ========================================
    
    startGlowEffect() {
        if (!this.effects.glow) return;
        
        let intensity = 0;
        let direction = 1;
        
        const animate = () => {
            intensity += 0.01 * direction; // Slower pulse
            
            if (intensity >= 1) direction = -1;
            if (intensity <= 0) direction = 1;
            
            const shadow = `
                0 0 ${8 + intensity * 10}px rgba(255, 179, 71, ${0.3 + intensity * 0.2}),
                0 0 ${15 + intensity * 15}px rgba(255, 140, 105, ${0.2 + intensity * 0.2}),
                3px 3px 6px rgba(0, 0, 0, 0.5)
            `; // More subtle glow
            
            this.title.style.textShadow = shadow;
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    // ========================================
    // PARTICLE SYSTEM
    // ========================================
    
    createTitleParticles() {
        if (!this.effects.particles) return;
        
        const colors = ['#FFB347', '#FF8C69', '#FFC870', '#FFD700'];
        
        const rect = this.title.getBoundingClientRect();
        
        for (let i = 0; i < 2; i++) { // Reduced from 5 to 2
            this.particles.push({
                x: rect.left + Math.random() * rect.width,
                y: rect.top + rect.height / 2,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: 2 + Math.random() * 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 0.8,
                decay: 0.005 + Math.random() * 0.01,
                life: 1
            });
        }
    }
    
    updateParticles() {
        if (!this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Create new particles (less frequently)
        if (Math.random() < 0.1) { // Reduced from 0.3 to 0.1
            this.createTitleParticles();
        }
        
        // Update and draw particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;
            p.alpha = p.life * 0.8;
            
            if (p.life <= 0) {
                this.particles.splice(i, 1);
                continue;
            }
            
            // Draw with glow effect
            this.ctx.save();
            this.ctx.globalAlpha = p.alpha;
            this.ctx.fillStyle = p.color;
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = p.color;
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.restore();
        }
    }
    
    // ========================================
    // LIGHTNING EFFECT
    // ========================================
    
    createLightningBolt(startX, startY, endX, endY) {
        this.ctx.save();
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 2;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = '#FFD700';
        this.ctx.globalAlpha = 0.8;
        
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        
        const segments = 5;
        for (let i = 1; i <= segments; i++) {
            const x = startX + (endX - startX) * (i / segments) + (Math.random() - 0.5) * 20;
            const y = startY + (endY - startY) * (i / segments) + (Math.random() - 0.5) * 20;
            this.ctx.lineTo(x, y);
        }
        
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
        this.ctx.restore();
    }
    
    startLightningEffect() {
        if (!this.effects.lightning) return;
        
        setInterval(() => {
            if (Math.random() < 0.05) { // 5% chance
                const rect = this.title.getBoundingClientRect();
                const startX = rect.left + Math.random() * rect.width;
                const startY = rect.top;
                const endX = rect.left + Math.random() * rect.width;
                const endY = rect.bottom;
                
                this.createLightningBolt(startX, startY, endX, endY);
                
                // Clear lightning after short time
                setTimeout(() => {
                    // Will be cleared by particle update loop
                }, 100);
            }
        }, 2000);
    }
    
    // ========================================
    // HOVER EFFECTS
    // ========================================
    
    addHoverEffects() {
        this.title.addEventListener('mouseenter', () => {
            this.letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.style.animation = 'letterBounce 0.5s ease';
                    setTimeout(() => {
                        letter.style.animation = '';
                    }, 500);
                }, index * 50);
            });
            
            // Create explosion of particles (reduced)
            for (let i = 0; i < 8; i++) { // Reduced from 30 to 8
                this.createTitleParticles();
            }
        });
        
        this.letters.forEach(letter => {
            letter.addEventListener('mouseenter', () => {
                letter.style.transform += ' scale(1.15)'; // Less scale
                letter.style.color = '#FFD700';
                letter.style.textShadow = '0 0 15px #FFD700'; // Simpler glow
            });
            
            letter.addEventListener('mouseleave', () => {
                letter.style.color = '';
            });
        });
    }
    
    // ========================================
    // SUBTITLE ANIMATION
    // ========================================
    
    animateSubtitle() {
        if (!this.subtitle) return;
        
        const text = this.subtitle.textContent;
        this.subtitle.textContent = '';
        
        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                this.subtitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            } else {
                // Add blinking cursor
                this.subtitle.innerHTML += '<span class="cursor-blink">_</span>';
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // ========================================
    // SCANNING LINE EFFECT
    // ========================================
    
    createScanLine() {
        const scanLine = document.createElement('div');
        scanLine.className = 'scan-line';
        document.querySelector('header').appendChild(scanLine);
    }
    
    // ========================================
    // START ALL ANIMATIONS
    // ========================================
    
    startAnimations() {
        // Start glitch effect
        this.startGlitchEffect();
        
        // Start rainbow effect
        this.startRainbowEffect();
        
        // Start wave animation
        this.startWaveAnimation();
        
        // Start glow effect
        this.startGlowEffect();
        
        // Start lightning effect
        this.startLightningEffect();
        
        // Animate subtitle
        this.animateSubtitle();
        
        // Create scan line
        this.createScanLine();
        
        // Start particle animation loop
        const animate = () => {
            this.updateParticles();
            this.animationFrame = requestAnimationFrame(animate);
        };
        animate();
    }
    
    // ========================================
    // CLEANUP
    // ========================================
    
    destroy() {
        if (this.glitchInterval) clearInterval(this.glitchInterval);
        if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    }
}

// ========================================
// ENTRANCE ANIMATION
// ========================================

function createEntranceAnimation() {
    const title = document.querySelector('.title');
    if (!title) return;
    
    title.style.opacity = '0';
    title.style.transform = 'scale(0) rotate(180deg)';
    
    setTimeout(() => {
        title.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        title.style.opacity = '1';
        title.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
}

// ========================================
// FLOATING LETTERS ON SCROLL
// ========================================

function addScrollAnimation() {
    window.addEventListener('scroll', () => {
        const title = document.querySelector('.title');
        if (!title) return;
        
        const scrollY = window.scrollY;
        const letters = title.querySelectorAll('.letter-animate');
        
        letters.forEach((letter, index) => {
            const offset = Math.sin(scrollY * 0.01 + index) * 5;
            letter.style.transform += ` translateY(${offset}px)`;
        });
    });
}

// ========================================
// INITIALIZE
// ========================================

let labMMTAnimator = null;

function initLabMMTAnimations() {
    // Create entrance animation
    createEntranceAnimation();
    
    // Wait for entrance to complete, then start all effects
    setTimeout(() => {
        labMMTAnimator = new LabMMTAnimator();
        addScrollAnimation();
    }, 1500);
    
    console.log('🎮 LAB MMT Title Animations Loaded!');
}

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLabMMTAnimations);
} else {
    initLabMMTAnimations();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (labMMTAnimator) {
        labMMTAnimator.destroy();
    }
});
