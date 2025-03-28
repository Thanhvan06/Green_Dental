const menuBtn = document.querySelector('.mobile-menu-button');
const nav = document.querySelector('.mobile-navigation');

// Thêm class để theo dõi trạng thái hiển thị của nav
nav.classList.add('nav-hidden');

menuBtn.addEventListener('click', function(event) {
  event.stopPropagation(); // Ngăn sự kiện click lan truyền lên document

  if (nav.classList.contains('nav-hidden')) {
    // Hiển thị nav
    nav.style.opacity = 1;
    nav.style.transform = 'translateX(0)';
    nav.classList.remove('nav-hidden');
  } else {
    // Ẩn nav
    nav.style.opacity = 0;
    nav.style.transform = 'translateX(100%)';
    nav.classList.add('nav-hidden');
  }
});

// Bắt sự kiện click trên toàn bộ document
document.addEventListener('click', function(event) {
  // Kiểm tra xem click có nằm trong nav hay menu-btn không
  if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
    // Nếu click bên ngoài, đóng nav
    nav.style.opacity = 0;
    nav.style.transform = 'translateX(100%)';
    nav.classList.add('nav-hidden');
  }
});

// Lặp qua từng tab-container
const tabContainers = document.querySelectorAll('.case-tab-container');

tabContainers.forEach(tabContainer => {
  // Lấy tất cả các tab-title và tab-panel bên trong tab-container hiện tại
  const tabTitles = tabContainer.querySelectorAll('.case-tab-title');
  const tabPanels = tabContainer.querySelectorAll('.case-tab-panel');

  // Thêm sự kiện click cho mỗi tab-title
  tabTitles.forEach(tabTitle => {
    tabTitle.addEventListener('click', () => {
      // Loại bỏ lớp 'active' khỏi tất cả các tab-title và tab-panel trong tab-container hiện tại
      tabTitles.forEach(title => title.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));

      // Thêm lớp 'active' vào tab-title và tab-panel được click
      tabTitle.classList.add('active');
      const tabId = tabTitle.dataset.tab;
      tabContainer.querySelector(`#${tabId}`).classList.add('active');
    });
  });
});