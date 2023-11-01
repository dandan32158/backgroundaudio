window.onload = function() {
    var audioElement = document.getElementById('customAudioWidget');

    if(audioElement) {
        
        if(isMobile()) {
            audioElement.volume = 0.1;
        } else {
            audioElement.volume = 0.25;
        }

        
        audioElement.play().catch(function(error) {
            console.error("Initial autoplay failed:", error);
        });

        
        setTimeout(function() {
            audioElement.play().catch(function(error) {
                console.error("Retry autoplay failed:", error);
            });
        }, 1000);  
    }
};

function isMobile() {
    
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}
