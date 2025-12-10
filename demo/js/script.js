document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle
    const toggleBtn = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isActive = navMenu.classList.contains('active');
            toggleBtn.setAttribute('aria-expanded', isActive);
            toggleBtn.innerHTML = isActive ? '&times;' : '&#9776;';
        });
    }

    // Modal Interaction (Simple Alert for Demo)
    const orderButtons = document.querySelectorAll('.btn-order');
    orderButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const itemName = e.target.closest('.card')?.querySelector('h3')?.innerText || 'Item';
            alert(`Terima kasih! Anda memilih: ${itemName}. Silakan selesaikan pesanan di kasir.`);
        });
    });

    console.log("Lestari Kopi Script Loaded.");
});
