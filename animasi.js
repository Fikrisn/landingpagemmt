// ========================================
// ADVANCED ANIMATION SYSTEM FOR GAME CARDS
// ========================================

class GameCardAnimator {
    constructor(gameBox) {
        this.gameBox = gameBox;
        this.isHovering = false;
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.animationFrame = null;
        this.glowIntensity = 0;
        this.rotationAngle = 0;
        this.waveOffset = 0;
        
        this.init();
    }
    
    init() {
        // Create canvas for particle effects
        this.createCanvas();
        
        // Add event listeners
        this.gameBox.addEventListener('mouseenter', () => this.onMouseEnter());
        this.gameBox.addEventListener('mouseleave', () => this.onMouseLeave());
        this.gameBox.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }
    
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'particle-canvas';
        this.canvas.width = this.gameBox.offsetWidth;
        this.canvas.height = this.gameBox.offsetHeight;
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.borderRadius = '15px';
        this.canvas.style.zIndex = '5';
        this.gameBox.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
    }
    
    onMouseEnter() {
        this.isHovering = true;
        this.startAnimations();
        this.createBurstParticles();
        this.addShakeEffect();
        this.addGlowPulse();
        this.addFloatingIcons();
    }
    
    onMouseLeave() {
        this.isHovering = false;
        this.particles = [];
        this.glowIntensity = 0;
        this.removeEffects();
    }
    
    onMouseMove(e) {
        if (!this.isHovering) return;
        
        const rect = this.gameBox.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create trailing particles
        this.createTrailParticle(x, y);
    }
    
    // ========================================
    // PARTICLE SYSTEM
    // ========================================
    
    createBurstParticles() {
        const colors = ['#FFB347', '#FF8C69', '#FFC870', '#FFD700'];
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        for (let i = 0; i < 12; i++) { // Reduced from 30 to 12
            const angle = (Math.PI * 2 * i) / 12;
            const velocity = 1 + Math.random() * 1.5; // Slower particles
            
            this.particles.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                size: 2 + Math.random() * 3, // Smaller particles
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 1,
                decay: 0.02,
                type: 'burst'
            });
        }
    }
    
    createTrailParticle(x, y) {
        const colors = ['#FFB347', '#FF8C69', '#FFC870', '#FFD700'];
        
        this.particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2 - 1,
            size: 2 + Math.random() * 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
            decay: 0.03,
            type: 'trail'
        });
    }
    
    createFloatingParticle() {
        const colors = ['#FFB347', '#FF8C69', '#FFC870', '#FFD700', '#FF6B9D'];
        
        this.particles.push({
            x: Math.random() * this.canvas.width,
            y: this.canvas.height + 10,
            vx: (Math.random() - 0.5) * 0.5,
            vy: -1 - Math.random() * 2,
            size: 3 + Math.random() * 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 0.8,
            decay: 0.01,
            type: 'floating',
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.1
        });
    }
    
    updateParticles() {
        if (!this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Limit max particles for performance
        if (this.particles.length > 50) {
            this.particles = this.particles.slice(-50);
        }
        
        // Update and draw particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;
            
            if (p.rotation !== undefined) {
                p.rotation += p.rotationSpeed;
            }
            
            if (p.alpha <= 0) {
                this.particles.splice(i, 1);
                continue;
            }
            
            // Draw particle
            this.ctx.save();
            this.ctx.globalAlpha = p.alpha;
            this.ctx.fillStyle = p.color;
            
            if (p.type === 'floating' || p.type === 'burst') {
                // Draw star-shaped particles
                this.drawStar(p.x, p.y, 5, p.size, p.size / 2, p.rotation || 0);
            } else {
                // Draw circle particles
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fill();
            }
            
            // Add glow effect
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = p.color;
            
            this.ctx.restore();
        }
        
        // Create new floating particles occasionally (less frequent)
        if (this.isHovering && Math.random() < 0.05) { // Reduced from 0.1 to 0.05
            this.createFloatingParticle();
        }
    }
    
    drawStar(cx, cy, spikes, outerRadius, innerRadius, rotation) {
        let rot = Math.PI / 2 * 3 + rotation;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy - outerRadius);
        
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            this.ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            this.ctx.lineTo(x, y);
            rot += step;
        }
        
        this.ctx.lineTo(cx, cy - outerRadius);
        this.ctx.closePath();
        this.ctx.fill();
    }
    
    // ========================================
    // VISUAL EFFECTS
    // ========================================
    
    addShakeEffect() {
        const overlay = this.gameBox.querySelector('.game-name-overlay');
        if (!overlay) return;
        
        overlay.style.animation = 'shakeIn 0.5s ease, textWave 2s ease-in-out infinite';
    }
    
    addGlowPulse() {
        this.gameBox.style.animation = 'glowPulse 1.5s ease-in-out infinite';
    }
    
    addFloatingIcons() {
        const icons = ['✨', '⭐', '💎'];
        const gameWrapper = this.gameBox.parentElement;
        
        for (let i = 0; i < 3; i++) { // Reduced from 5 to 3
            setTimeout(() => {
                if (!this.isHovering) return;
                
                const icon = document.createElement('div');
                icon.className = 'floating-icon';
                icon.textContent = icons[Math.floor(Math.random() * icons.length)];
                icon.style.left = Math.random() * 100 + '%';
                icon.style.animationDelay = Math.random() * 0.5 + 's';
                
                this.gameBox.appendChild(icon);
                
                setTimeout(() => icon.remove(), 2000);
            }, i * 200);
        }
    }
    
    addRotatingBorder() {
        // Disabled for elegant look
        return;
    }
    
    removeEffects() {
        this.gameBox.style.animation = '';
        const overlay = this.gameBox.querySelector('.game-name-overlay');
        if (overlay) {
            overlay.style.animation = '';
        }
    }
    
    // ========================================
    // ANIMATION LOOP
    // ========================================
    
    startAnimations() {
        const animate = () => {
            if (!this.isHovering && this.particles.length === 0) {
                this.animationFrame = null;
                return;
            }
            
            this.updateParticles();
            this.animationFrame = requestAnimationFrame(animate);
        };
        
        if (!this.animationFrame) {
            animate();
        }
    }
}

// ========================================
// 3D TILT EFFECT
// ========================================

class TiltEffect {
    constructor(element) {
        this.element = element;
        this.width = element.offsetWidth;
        this.height = element.offsetHeight;
        
        element.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        element.addEventListener('mouseleave', () => this.handleMouseLeave());
    }
    
    handleMouseMove(e) {
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        
        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;
        
        const rotateY = percentX * 5; // Reduced from 10 to 5
        const rotateX = -percentY * 5; // Reduced from 10 to 5
        
        this.element.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale3d(1.05, 1.05, 1.05)
            translateY(-10px)
        `;
    }
    
    handleMouseLeave() {
        this.element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
}

// ========================================
// RIPPLE EFFECT ON CLICK
// ========================================

class RippleEffect {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', (e) => this.createRipple(e));
    }
    
    createRipple(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
}

// ========================================
// INITIALIZE ALL ANIMATIONS
// ========================================

function initAdvancedAnimations() {
    const gameBoxes = document.querySelectorAll('.game-box');
    
    gameBoxes.forEach(gameBox => {
        // Apply all animation effects
        new GameCardAnimator(gameBox);
        new TiltEffect(gameBox);
        new RippleEffect(gameBox);
        
        // Add transition for smooth transforms
        gameBox.style.transition = 'transform 0.1s ease-out, box-shadow 0.3s ease';
    });
    
    console.log('🎮 Advanced animations initialized!');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdvancedAnimations);
} else {
    initAdvancedAnimations();
}
