function hideNav() {

    const body = document.body;
    const scrollUp = 'scroll-up';
    const scrollDown = 'scroll-down';
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        
        const currentScroll = window.pageYOffset;

        if (currentScroll == 0) {
            body.classList.remove(scrollUp);
        return;
        }
    
        if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
            // down
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
        } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
            // up
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);
        }

        lastScroll = currentScroll;

    });


}

function showSparkles() {
    const container = document.querySelector('.sparkle-container');
    const sparkleInterval = 200;

    function createSparkle() {
        const rect = container.getBoundingClientRect();
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        container.appendChild(sparkle);

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }

    setInterval(createSparkle, sparkleInterval);

}

$(hideNav);
$(showSparkles);