document.addEventListener("DOMContentLoaded", () => {
    // ページ読み込み時にフワッと要素を表示させる上品なアニメーション
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Intersection Observerを使って、画面に入ったら表示（今回は全体がほぼ1画面に収まる想定ですが汎用性を持たせています）
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 一度表示されたら監視を解除
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(el => observer.observe(el));
});
