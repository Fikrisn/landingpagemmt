// ========================================
// GAME LINKS HANDLER
// ========================================

// Game links configuration
const gameLinks = {
    'code-kingdom': '', // Isi dengan link game Code Kingdom nanti
    'fishingpedia': ''  // Isi dengan link game FishingPedia nanti
};

// Initialize game buttons
document.addEventListener('DOMContentLoaded', () => {
    const game1Btn = document.getElementById('startGame1');
    const game2Btn = document.getElementById('startGame2');
    
    // Handle Code Kingdom button
    game1Btn.addEventListener('click', () => {
        const gameName = game1Btn.getAttribute('data-game');
        const gameUrl = gameLinks[gameName];
        
        if (gameUrl && gameUrl !== '') {
            // Redirect to game URL when available
            window.location.href = gameUrl;
        } else {
            // Show message when link not available yet
            alert('Link game Code Kingdom belum tersedia.');
        }
    });
    
    // Handle FishingPedia button
    game2Btn.addEventListener('click', () => {
        const gameName = game2Btn.getAttribute('data-game');
        const gameUrl = gameLinks[gameName];
        
        if (gameUrl && gameUrl !== '') {
            // Redirect to game URL when available
            window.location.href = gameUrl;
        } else {
            // Show message when link not available yet
            alert('Link game FishingPedia belum tersedia.');
        }
    });
});
