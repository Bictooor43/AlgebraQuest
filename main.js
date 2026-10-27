function switchTab(tabName) {
    // 1. Ascunde toate secțiunile
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    
    // 2. Afișează secțiunea selectată
    document.getElementById(`sec-${tabName}`).classList.remove('hidden');

    // 3. Resetează stilul butoanelor (Design pasiv)
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.className = "tab-btn bg-[#1e1e1e] border border-[#2c2c2c] text-slate-200 hover:border-cyan-600 hover:text-white px-5 py-2.5 rounded-md font-bold text-sm shadow-md transition duration-300";
    });

    // 4. Stilizează butonul activ (Cyan Accent)
    const activeBtn = document.getElementById(`tab-${tabName}`);
    activeBtn.className = "tab-btn bg-cyan-600 border border-cyan-600 text-slate-200 px-5 py-2.5 rounded-md font-bold text-sm shadow-md transition duration-300";
}

// 1. Salvează starea (deschis/închis) în localStorage când utilizatorul dă click
function saveState(id) {
    const detailsElement = document.getElementById(id);
    localStorage.setItem(id, detailsElement.open);
}

// 2. La încărcarea paginii, verifică dacă articolul trebuia să fie deschis
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('details').forEach(el => {
        if (localStorage.getItem(el.id) === 'true') {
            el.open = true;
        }
    });
});