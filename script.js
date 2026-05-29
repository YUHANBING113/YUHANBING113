// 1. 모든 '상세 보기' 버튼과 '닫기' 버튼 찾기
const openBtns = document.querySelectorAll('.open-modal-btn');
const closeBtns = document.querySelectorAll('.close-modal-btn');

// 2. 열기 버튼 이벤트
openBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const targetId = btn.getAttribute('data-target');
        const targetModal = document.querySelector(targetId);
        targetModal.classList.add('show');
    });
});

// 3. 닫기 버튼 이벤트
closeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const parentModal = btn.closest('.modal-overlay');
        parentModal.classList.remove('show');
    });
});

// 네비게이션 & 위로가기 버튼
const navbar = document.querySelector('#navbar');
const topBtn = document.querySelector('.back-to-top-btn');

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
        topBtn.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        topBtn.classList.remove('visible');
    }
});

// 커서 제어
const cursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 프로젝트 카드 상호작용
const projectCards = document.querySelectorAll('#projects li');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(3)';
        cursor.style.backgroundColor = 'rgba(0, 123, 255, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = '#007bff';
    });
});
