// Data Produk
const products = [
    {
        id: "template-1",
        slug: "template-cleanshop",
        title: "CleanShop Ecommerce",
        desc: "Template toko online modern, minimalis, dan siap konversi tinggi.",
        price: 250000,
        discountPercent: 40,
        lynk: "https://lynk.id/ziywe.studio/checkout-template-1",
        wa: "6281234567890",
        preview: "https://placehold.co/600x400/1e293b/FFF?text=CleanShop+Preview"
    },
    {
        id: "template-2",
        slug: "template-portfoliopro",
        title: "Portfolio Pro",
        desc: "Tampilkan karya terbaikmu dengan desain elegan dan profesional.",
        price: 150000,
        discountPercent: 30,
        lynk: "https://lynk.id/ziywe.studio/checkout-template-2",
        wa: "6281234567890",
        preview: "https://placehold.co/600x400/1e293b/FFF?text=Portfolio+Pro+Preview"
    },
    {
        id: "template-3",
        slug: "template-bizlanding",
        title: "BizLanding Corporate",
        desc: "Landing page perusahaan yang terpercaya dan informatif.",
        price: 300000,
        discountPercent: 50,
        lynk: "https://lynk.id/ziywe.studio/checkout-template-3",
        wa: "6281234567890",
        preview: "https://placehold.co/600x400/1e293b/FFF?text=BizLanding+Preview"
    }
];

// Helper: Format Rupiah
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}

// Helper: Hitung harga diskon
function calcDiscounted(price, percent) {
    return price - (price * (percent / 100));
}

// Render Products
function renderProducts() {
    const productContainer = document.getElementById('product-list');

    // Clear loading state if any
    productContainer.innerHTML = '';

    products.forEach(product => {
        const discountedPrice = calcDiscounted(product.price, product.discountPercent);
        const saveAmount = product.price - discountedPrice;

        // Buat link WA dengan pesan custom
        const waMessage = `Halo Ziywe Studio, saya tertarik custom untuk template ${product.title}. Bisakah kita diskusi?`;
        const waLink = `https://wa.me/${product.wa}?text=${encodeURIComponent(waMessage)}`;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.preview}" alt="${product.title}" class="product-image" onclick="openModal('${product.preview}')">
            <div class="product-info">
                <div class="product-header">
                    <h3 class="product-title">${product.title}</h3>
                    <span class="discount-badge">-${product.discountPercent}%</span>
                </div>
                <p class="product-desc">${product.desc}</p>

                <div class="price-container">
                    <div>
                        <span class="original-price">${formatRupiah(product.price)}</span>
                        <span class="final-price">${formatRupiah(discountedPrice)}</span>
                    </div>
                    <span class="save-amount">Hemat ${formatRupiah(saveAmount)}</span>
                </div>

                <div class="action-buttons">
                    <a href="./demo/${product.slug}.html" class="btn btn-outline full-width-btn" target="_blank">Live Demo</a>
                    <a href="${product.lynk}" class="btn btn-primary" target="_blank">Beli Sekarang</a>
                    <a href="${waLink}" class="btn btn-secondary" target="_blank">Tanya Custom</a>
                </div>
            </div>
        `;
        productContainer.appendChild(card);
    });
}

// FAQ Accordion Logic
function initFAQ() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');

            // Close all items
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
            });

            // If it wasn't active before, make it active now
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Image Preview Modal Logic
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeModalBtn = document.querySelector('.close-modal');

// Expose openModal to global scope because it's called from inline HTML
window.openModal = function(src) {
    modal.style.display = 'flex'; // Set display first for layout
    modalImg.src = src;
    // Small timeout to allow transition
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        modalImg.src = '';
    }, 300); // Wait for transition
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Close when clicking outside image
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Theme Toggle Logic
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');

        // Save preference
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initFAQ();
    initTheme();
});
