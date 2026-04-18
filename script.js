// 1. DỮ LIỆU BANNER
const bannerData = [
    { src: "bn1.png", text: "BST Thu Đông – Thanh lịch & Tinh tế", promo: "New Arrivals 2026" },
    { src: "bn2.png", text: "Phong cách Minimalism", promo: "Mua 2 tặng 1" },
    { src: "bn5.jpg", text: "Nhẹ nhàng & Tối giản", promo: "BST pastel mới" },
    { src: "bn7.jpg", text: "Thanh lịch từng đường nét", promo: "Số lượng giới hạn" }
];
let currentIndex = 0;
// 2. LOGIC CHUYỂN BANNER TỰ ĐỘNG
function rotateBanner() {
    const img = document.querySelector('.banner-container img');
    const title = document.querySelector('.banner-overlay h2') || document.querySelector('.banner-title');
    if (!img || !title) return;
    currentIndex = (currentIndex + 1) % bannerData.length;
    img.style.opacity = title.style.opacity = "0"; // Hiệu ứng ẩn
    setTimeout(() => {
        const data = bannerData[currentIndex];
        img.src = data.src;
        title.innerHTML = `${data.text} <br> <span style="color:#ffce3d; font-weight:bold;">${data.promo}</span>`;
        img.style.opacity = title.style.opacity = "1"; // Hiệu ứng hiện
    }, 500);
}
setInterval(rotateBanner, 4000);

// 3. XỬ LÝ TÌM KIẾM & ĐIỀU HƯỚNG
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return alert("Vui lòng nhập từ khóa!");

    // Điều hướng theo từ khóa
    if (/shop|áo|quần|váy/.test(query)) window.location.href = "shop.html";
    else if (/tin tức|news|sale/.test(query)) window.location.href = "news.html";
    else if (/blog|about|liên hệ/.test(query)) window.location.href = "https://ntramy6126-hue.github.io/pgae/";
    else window.location.href = "shop.html";
}

// Lắng nghe sự kiện Click và Enter
searchBtn?.addEventListener('click', handleSearch);
searchInput?.addEventListener('keypress', (e) => e.key === 'Enter' && handleSearch());