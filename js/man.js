// Animate skill bars
window.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.progress span');
    skillBars.forEach(bar => {
        const value = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = value;
        }, 500);
    });
});