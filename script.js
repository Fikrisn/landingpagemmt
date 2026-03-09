// ========================================
// GAME CONFIGURATION
// ========================================

// Game links configuration
const gameLinks = {
    'code-kingdom': '', // Isi dengan link game Code Kingdom nanti
    'fishingpedia': '',  // Isi dengan link game FishingPedia nanti
    'oopedia': '' // Isi dengan link game OOPedia nanti
};

// Game details configuration
const gameDetails = {
    'code-kingdom': {
        title: 'Code Kingdom',
        logo: './assets/logocodekingdom.png',
        tagline: 'Taklukkan Kerajaan dengan Kekuatan Coding!',
        description: 'Masuki dunia fantasi Code Kingdom, sebuah kerajaan ajaib di mana kode pemrograman adalah kunci untuk membuka semua misteri. Sebagai seorang Coding Knight, kamu akan berpetualangan melalui berbagai castle, dungeon, dan kingdom yang penuh dengan puzzle dan tantangan coding. Setiap level dirancang untuk mengajarkan konsep pemrograman fundamental sambil memberikan pengalaman gaming yang seru dan adiktif!',
        
        gameplayDescription: 'Game ini menggabungkan mechanics puzzle-platformer 2D dengan pembelajaran coding interaktif. Pemain akan menggunakan perintah pemrograman untuk mengontrol karakter, memecahkan teka-teki, dan mengalahkan musuh. Sistem drag-and-drop code blocks membuatnya mudah dipahami bahkan untuk pemula.',
        
        features: [
            {
                icon: '🎮',
                title: 'Puzzle Coding Interaktif',
                desc: 'Lebih dari 100+ level puzzle yang dirancang progresif, dari basic sequence hingga complex algorithms. Setiap stage menghadirkan tantangan baru!'
            },
            {
                icon: '👑',
                title: 'Eksplorasi Kingdom',
                desc: 'Jelajahi 5 kingdom berbeda: Forest Kingdom, Ice Castle, Fire Dungeon, Sky Palace, dan Dark Tower. Masing-masing dengan tema dan mekanik unik.'
            },
            {
                icon: '🧩',
                title: 'Algoritma & Logika',
                desc: 'Pelajari konsep fundamental: sequences, loops, conditions, functions, variables, dan debugging dalam konteks game yang menyenangkan.'
            },
            {
                icon: '🏆',
                title: 'Achievement System',
                desc: 'Kumpulkan 50+ badges, unlock special characters, dan dapatkan rare items. Compete di leaderboard global!'
            },
            {
                icon: '💡',
                title: 'Tutorial Lengkap',
                desc: 'Sistem tutorial step-by-step dengan NPC guide yang membantu dari basic hingga advanced concepts. Auto-hint system tersedia.'
            },
            {
                icon: '⚔️',
                title: 'Boss Battles',
                desc: 'Hadapi Epic Boss di setiap kingdom! Gunakan strategi coding untuk mengalahkan mereka dan unlock new abilities.'
            }
        ],
        
        educationalValue: {
            main: 'Membangun fondasi pemrograman yang kuat melalui gamification yang efektif',
            points: [
                'Computational Thinking: Belajar memecah masalah kompleks menjadi langkah-langkah sederhana',
                'Algorithm Design: Merancang solusi efisien untuk berbagai jenis problem',
                'Debugging Skills: Identifikasi dan perbaiki error dalam code dengan systematic approach',
                'Creative Problem Solving: Multiple solutions untuk setiap puzzle, mendorong kreativitas',
                'Persistence & Growth Mindset: Level yang menantang mengajarkan pentingnya practice dan tidak menyerah'
            ]
        },
        
        objective: 'Memperkenalkan konsep pemrograman fundamental (algoritma, loops, conditionals, functions) melalui narrative-driven game yang engaging, sehingga siswa membangun logical thinking dan problem-solving skills tanpa merasa sedang "belajar".',
        
        targetAge: '10-16 tahun',
        difficulty: 'Beginner to Intermediate',
        duration: '20-30 jam gameplay',
        skills: 'Programming Logic • Algorithm Design • Problem Solving • Computational Thinking • Debugging',
        
        technicalFeatures: [
            'Visual block-based programming (seperti Scratch)',
            'Transition ke text-based code untuk advanced levels',
            'Real-time code execution dan feedback',
            'Save progress & cloud sync'
        ],
        
        stats: {
            levels: '100+',
            kingdoms: '5',
            achievements: '50+',
            avgPlaytime: '25 hours'
        }
    },
    'fishingpedia': {
        title: 'FishingPedia',
        logo: './assets/logofhising.png',
        tagline: 'Petualangan Memancing & Ensiklopedia Laut!',
        description: 'Selami dunia bawah laut yang menakjubkan dalam FishingPedia! Game simulasi memancing yang menggabungkan gameplay yang addictive dengan pembelajaran marine biology. Sebagai seorang Marine Explorer, kamu akan menjelajahi berbagai lokasi perairan di seluruh dunia, dari coral reefs yang berwarna-warni hingga deep ocean yang misterius. Setiap ikan yang kamu tangkap akan membuka entry di ensiklopedi dengan fakta-fakta menarik tentang spesies tersebut!',
        
        gameplayDescription: 'Game ini menggabungkan mechanics fishing simulation 2D dengan collection & encyclopedia system. Pemain akan menggunakan berbagai teknik memancing, upgrade equipment, dan explore different water biomes. Mini-games dan quick-time events membuat setiap fishing session exciting dan tidak monoton.',
        
        features: [
            {
                icon: '🐠',
                title: 'Database 200+ Spesies Ikan',
                desc: 'Tangkap dan pelajari 200+ jenis ikan dari seluruh dunia! Dari ikan air tawar hingga deep sea creatures. Setiap ikan memiliki entry detail dengan ilustrasi, habitat, diet, dan fun facts.'
            },
            {
                icon: '🎣',
                title: 'Realistic Fishing Mechanics',
                desc: 'Sistem memancing yang realistis dengan timing, tension meter, dan fish behavior simulation. Berbagai teknik: casting, jigging, trolling, dan fly fishing!'
            },
            {
                icon: '📚',
                title: 'Ensiklopedi Interaktif',
                desc: 'Setiap ikan yang ditangkap unlock entry ensiklopedi lengkap: klasifikasi ilmiah, habitat natural, behavior patterns, conservation status, dan trivia menarik!'
            },
            {
                icon: '🌊',
                title: '8 Ekosistem Berbeda',
                desc: 'Eksplorasi berbagai biome: Tropical Reef, Mangrove Forest, River Delta, Deep Ocean, Arctic Waters, Lake, Swamp, dan Coastal Area.'
            },
            {
                icon: '🏅',
                title: 'Collection & Achievements',
                desc: 'Sistem collection dengan rarity tiers (Common, Rare, Epic, Legendary). 60+ achievements untuk completionist. Photo mode untuk capture momen!'
            },
            {
                icon: '⚙️',
                title: 'Upgrade System',
                desc: 'Unlock dan upgrade fishing rods, reels, baits, dan boats. Setiap equipment memiliki stats berbeda yang mempengaruhi gameplay.'
            },
            {
                icon: '🌍',
                title: 'Conservation Awareness',
                desc: 'Pelajari tentang endangered species, ecosystem balance, dan marine conservation. Quest khusus untuk protect ocean habitats.'
            },
            {
                icon: '🎯',
                title: 'Daily Challenges',
                desc: 'Quest harian dengan target spesifik: catch rare fish, explore new areas, atau complete fishing tournaments dengan rewards menarik!'
            }
        ],
        
        educationalValue: {
            main: 'Membangun pemahaman comprehensive tentang marine biology dan ecosystem melalui experiential learning',
            points: [
                'Species Recognition: Identifikasi berbagai jenis ikan berdasarkan karakteristik fisik',
                'Habitat Understanding: Memahami hubungan antara species dengan habitat natural mereka',
                'Food Chain & Ecosystem: Belajar tentang predator-prey relationships dan ecosystem balance',
                'Conservation Awareness: Memahami pentingnya marine conservation dan sustainable fishing',
                'Scientific Classification: Introduction to taxonomy dan biological classification system',
                'Environmental Science: Impact of pollution, climate change, dan human activities pada ocean'
            ]
        },
        
        objective: 'Menumbuhkan apresiasi dan pemahaman tentang kehidupan laut melalui interactive fishing simulation, mendorong curiosity terhadap marine biology, dan menanamkan environmental awareness sejak dini.',
        
        targetAge: '8-14 tahun',
        difficulty: 'Easy to Medium',
        duration: '30-40 jam gameplay',
        skills: 'Marine Biology • Ecology • Environmental Science • Reading Comprehension • Observation Skills • Pattern Recognition',
        
        technicalFeatures: [
            'Dynamic weather & time system yang mempengaruhi fish behavior',
            'Physics-based fishing mechanics',
            'Photo mode dengan filters',
            'Aquarium feature untuk display caught fish'
        ],
        
        stats: {
            species: '200+',
            locations: '8',
            achievements: '60+',
            avgPlaytime: '35 hours'
        }
    },
    'oopedia': {
        title: 'OOPedia',
        logo: './assets/logooopedia.jpeg',
        tagline: 'Petualangan Belajar OOP dengan OOPEDIA si Robot Pintar!',
        description: 'Bergabunglah dengan OOPEDIA, robot pembelajaran interaktif yang siap membimbing kamu menguasai dunia Object-Oriented Programming! OOPedia adalah platform pembelajaran berbasis web yang dirancang khusus untuk mahasiswa Jurusan Teknologi Informasi Politeknik Negeri Malang dalam mata kuliah Pemrograman Berorientasi Objek (PBO). Dengan antarmuka yang friendly dan metode pembelajaran yang interaktif, OOPEDIA membuat konsep-konsep kompleks seperti Inheritance, Polymorphism, Encapsulation, dan Abstraction menjadi mudah dipahami dan menyenangkan untuk dipelajari!',
        
        gameplayDescription: 'Platform ini menggabungkan teori dengan praktik melalui interactive modules, visual demonstrations, code playground, dan quiz system yang progressif. Setiap konsep OOP dijelaskan dengan analogi real-world, diagram interaktif, dan hands-on coding exercises. Sistem adaptive learning memastikan setiap mahasiswa belajar sesuai dengan pace mereka sendiri.',
        
        features: [
            {
                icon: '🤖',
                title: 'OOPEDIA Interactive Guide',
                desc: 'Robot virtual assistant yang memandu setiap langkah pembelajaran! OOPEDIA menjelaskan konsep dengan bahasa yang mudah dipahami, memberikan hints, dan motivasi sepanjang journey.'
            },
            {
                icon: '📚',
                title: 'Materi Pembelajaran Lengkap',
                desc: 'Coverage komprehensif: Class & Object, Constructor & Destructor, Inheritance (Single, Multiple, Multilevel), Polymorphism (Overloading & Overriding), Encapsulation, Abstraction, Interface, Package, dan Exception Handling.'
            },
            {
                icon: '💡',
                title: 'Visualisasi Konsep',
                desc: 'Diagram UML interaktif, class relationship visualizer, memory allocation simulator, dan animation untuk menjelaskan konsep abstrak secara visual dan intuitif.'
            },
            {
                icon: '⌨️',
                title: 'Code Playground',
                desc: 'Built-in code editor dengan syntax highlighting, real-time compilation, dan instant feedback. Practice coding langsung di browser tanpa setup environment!'
            },
            {
                icon: '📝',
                title: 'Bank Soal & Quiz',
                desc: 'Ratusan soal latihan dengan berbagai tingkat kesulitan: Multiple Choice, Fill in the Code, Debug Challenge, dan Code Writing. Auto-grading dengan explanation detail.'
            },
            {
                icon: '🎯',
                title: 'Learning Path Terstruktur',
                desc: 'Kurikulum yang disusun progresif dari fundamental hingga advanced. Unlock module selanjutnya setelah menyelesaikan prerequisite dengan skor minimum.'
            },
            {
                icon: '🏆',
                title: 'Achievement & Progress',
                desc: 'Track progress learning dengan dashboard personal. Dapatkan badges untuk setiap milestone: First Class, Inheritance Master, Polymorphism Pro, dan banyak lagi!'
            },
            {
                icon: '🔍',
                title: 'Real-World Examples',
                desc: 'Setiap konsep dijelaskan dengan contoh real-world dan use cases praktis dari industry. Understand tidak hanya "how" tapi juga "why" dan "when" menggunakan setiap pattern.'
            },
            {
                icon: '📊',
                title: 'Analytics Dashboard',
                desc: 'Lihat progress detail: topics mastered, time spent, quiz scores, weak areas, dan recommendations untuk improvement. Visualisasi learning curve kamu!'
            },
            {
                icon: '💬',
                title: 'Diskusi & Community',
                desc: 'Forum diskusi untuk bertanya, berbagi knowledge, dan collaborate dengan sesama mahasiswa. OOPEDIA bot juga aktif menjawab pertanyaan umum 24/7!'
            }
        ],
        
        educationalValue: {
            main: 'Membangun pemahaman mendalam tentang paradigma Object-Oriented Programming melalui pembelajaran terstruktur, interaktif, dan praktis',
            points: [
                'Object-Oriented Thinking: Mengembangkan mindset untuk memecah problem menjadi objects dan relationships',
                'Design Principles: Memahami SOLID principles, design patterns, dan best practices dalam OOP',
                'Code Organization: Belajar struktur code yang maintainable, scalable, dan reusable',
                'Problem Modeling: Kemampuan modeling real-world problems menggunakan class diagrams dan OOP concepts',
                'Debugging Skills: Identify dan fix common OOP errors seperti NullPointerException, ClassCastException, dll',
                'Software Engineering Fundamentals: Foundation untuk advanced topics seperti Frameworks, Design Patterns, dan Architectural Patterns',
                'Industry Readiness: Persiapan untuk development dengan Java Spring, C# .NET, Python Django, dan frameworks modern lainnya'
            ]
        },
        
        objective: 'Memberikan platform pembelajaran interaktif yang memudahkan mahasiswa Teknologi Informasi Politeknik Negeri Malang menguasai konsep-konsep fundamental dan advanced dalam Pemrograman Berorientasi Objek (PBO), khususnya Inheritance, Polymorphism, dan Encapsulation, dengan pendekatan yang mendorong pembelajaran mandiri, pemahaman mendalam, dan aplikasi praktis dalam software development.',
        
        targetAge: 'Mahasiswa TI (18-22 tahun)',
        difficulty: 'Beginner to Advanced',
        duration: 'Self-paced (±40 jam konten)',
        skills: 'Object-Oriented Programming • Java • Class Design • UML Diagrams • Software Architecture • Design Patterns • Problem Solving • Code Quality',
        
        technicalFeatures: [
            'Interactive code editor dengan multi-language support (Java, C++, Python, C#)',
            'Real-time syntax checking dan code compilation',
            'Automated test cases untuk verify code correctness',
            'Responsive design - akses dari desktop, tablet, atau mobile',
            'Progress tracking & cloud sync',
            'Export learning report untuk portfolio atau submission'
        ],
        
        stats: {
            modules: '12',
            exercises: '150+',
            quizzes: '50+',
            avgCompletion: '40 hours'
        }
    }
};

// Expose gameDetails to window for info.js
window.gameDetails = gameDetails;

// ========================================
// MODAL FUNCTIONS
// ========================================

function openModal(gameName) {
    const modal = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');
    const game = gameDetails[gameName];
    
    if (!game) return;
    
    // Create modal content with game 2D elements
    const content = `
        <div class="modal-header">
            <div class="game-badge">
                <img src="${game.logo}" alt="${game.title}" class="modal-logo">
                <div class="level-badge">LV 1</div>
            </div>
            <h2 class="modal-title">${game.title}</h2>
            <p class="game-tagline">${game.tagline}</p>
        </div>
        
        <div class="stats-bar-container">
            <div class="stat-bar">
                <div class="stat-icon">📊</div>
                <div class="stat-info">
                    <span class="stat-label">Difficulty</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${game.difficulty === 'Easy to Medium' ? '40%' : '60%'}"></div>
                    </div>
                </div>
            </div>
            <div class="stat-bar">
                <div class="stat-icon">⏱️</div>
                <div class="stat-info">
                    <span class="stat-label">Duration</span>
                    <span class="stat-value">${game.duration}</span>
                </div>
            </div>
        </div>
        
        <div class="game-stats-grid">
            ${Object.entries(game.stats).map(([key, value]) => `
                <div class="stat-card pixel-border">
                    <div class="stat-number">${value}</div>
                    <div class="stat-name">${key.toUpperCase()}</div>
                </div>
            `).join('')}
        </div>
        
        <div class="modal-description">
            <div class="section-title pixel-border-bottom">
                <span class="section-icon">📖</span> STORY
            </div>
            <p>${game.description}</p>
        </div>
        
        <div class="modal-section">
            <div class="section-title pixel-border-bottom">
                <span class="section-icon">🎮</span> GAMEPLAY
            </div>
            <p>${game.gameplayDescription}</p>
        </div>
        
        <div class="modal-section">
            <div class="section-title pixel-border-bottom">
                <span class="section-icon">✨</span> FEATURES
            </div>
            <div class="features-grid">
                ${game.features.map(feature => `
                    <div class="feature-card pixel-border">
                        <div class="feature-icon-large">${feature.icon}</div>
                        <h4 class="feature-title">${feature.title}</h4>
                        <p class="feature-desc">${feature.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <div class="section-title pixel-border-bottom">
                <span class="section-icon">🎓</span> EDUCATIONAL VALUE
            </div>
            <div class="edu-value-box pixel-border">
                <p class="edu-main">${game.educationalValue.main}</p>
                <ul class="edu-points">
                    ${game.educationalValue.points.map(point => `
                        <li class="edu-point">
                            <span class="point-bullet">▶</span>
                            <span class="point-text">${point}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
        
        <div class="modal-section">
            <div class="section-title pixel-border-bottom">
                <span class="section-icon">🎯</span> LEARNING OBJECTIVES
            </div>
            <p class="objective-text">${game.objective}</p>
        </div>
        
        <div class="info-cards-row">
            <div class="info-card-2d pixel-border">
                <div class="card-icon">👥</div>
                <div class="card-label">Target Age</div>
                <div class="card-value">${game.targetAge}</div>
            </div>
            <div class="info-card-2d pixel-border">
                <div class="card-icon">📈</div>
                <div class="card-label">Difficulty</div>
                <div class="card-value">${game.difficulty}</div>
            </div>
        </div>
        
        <div class="skills-section">
            <div class="section-title pixel-border-bottom">
                <span class="section-icon">🧠</span> SKILLS DEVELOPED
            </div>
            <div class="skills-tags">
                ${game.skills.split(' • ').map(skill => `
                    <span class="skill-tag pixel-border">${skill}</span>
                `).join('')}
            </div>
        </div>
        
        <div class="achievement-preview">
            <div class="achievement-title">🏆 Unlock Achievements!</div>
            <div class="achievement-badges">
                <div class="badge-item">🥇</div>
                <div class="badge-item">🎖️</div>
                <div class="badge-item">⭐</div>
                <div class="badge-item">💎</div>
                <div class="badge-item locked">🔒</div>
            </div>
        </div>
        
        <button class="btn-play-modal pixel-border" data-game="${gameName}">
            <span class="btn-icon">▶</span> START ADVENTURE
        </button>
    `;
    
    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add event listener to play button in modal
    const playBtn = modalBody.querySelector('.btn-play-modal');
    playBtn.addEventListener('click', () => {
        closeModal();
        startGame(gameName);
    });
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function startGame(gameName) {
    const gameUrl = gameLinks[gameName];
    
    if (gameUrl && gameUrl !== '') {
        window.location.href = gameUrl;
    } else {
        const gameTitle = gameDetails[gameName]?.title || gameName;
        alert(`Link game ${gameTitle} belum tersedia.`);
    }
}

// ========================================
// TOOLTIP FUNCTIONS
// ========================================

function initTooltips() {
    // Tooltip disabled - using game name overlay instead
    return;
}

// ========================================
// GAME NAME OVERLAY HOVER EFFECT
// ========================================

function initGameNameOverlay() {
    const gameBoxes = document.querySelectorAll('.game-box');
    
    gameBoxes.forEach(box => {
        const overlay = box.querySelector('.game-name-overlay');
        const logo = box.querySelector('.game-logo');
        
        box.addEventListener('mouseenter', () => {
            // Animate overlay appearance
            setTimeout(() => {
                overlay.style.animation = 'fadeInScale 0.4s ease forwards';
            }, 50);
            
            // Optional: Add pulse effect to text
            overlay.style.animation = 'pulseText 1.5s ease-in-out infinite';
        });
        
        box.addEventListener('mouseleave', () => {
            overlay.style.animation = 'none';
        });
    });
}

// ========================================
// INITIALIZE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize game name overlay hover effects
    initGameNameOverlay();
    
    // Handle INFO buttons
    const infoBtns = document.querySelectorAll('.btn-info');
    infoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const gameName = btn.getAttribute('data-game');
            openModal(gameName);
        });
    });
    
    // Handle PLAY buttons
    const playBtns = document.querySelectorAll('.btn-play');
    playBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const gameName = btn.getAttribute('data-game');
            startGame(gameName);
        });
    });
    
    // Handle modal close button
    const modalClose = document.getElementById('modalClose');
    modalClose.addEventListener('click', closeModal);
    
    // Handle modal overlay click (close when clicking outside)
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Handle ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Add hover effect to game boxes
    const gameBoxes = document.querySelectorAll('.game-box');
    gameBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05) translateY(-10px)';
        });
        
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1) translateY(0)';
        });
    });
});
