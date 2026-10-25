function switchTab(tabName) {
    // 1. Ascunde toate secțiunile
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    
    // 2. Afișează secțiunea selectată
    document.getElementById(`sec-${tabName}`).classList.remove('hidden');

    // 3. Resetează stilul butoanelor (Design pasiv)
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.className = "tab-btn bg-[#1e1e1e] border border-[#2c2c2c] text-[#9ca3af] hover:border-cyan-500 hover:text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition duration-300";
    });

    // 4. Stilizează butonul activ (Cyan Accent)
    const activeBtn = document.getElementById(`tab-${tabName}`);
    activeBtn.className = "tab-btn bg-[#1e1e1e] border border-cyan-500 text-cyan-400 px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition duration-300";
}