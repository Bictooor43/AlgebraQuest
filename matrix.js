function generateGrid(matrixName) {
    const sizeInput = document.getElementById(`size-${matrixName}`);
    const sizeLabel = document.getElementById(`size-${matrixName}-label`);
    const gridContainer = document.getElementById(`grid-${matrixName}`);

    const n = parseInt(sizeInput.value);
    sizeLabel.textContent = `${n} × ${n}`;

    //decizie in fct de culoare
    const colorClass = matrixName === 'a'
        ? 'bg-cyan-500 border-cyan-700 text-cyan-950 focus:border-cyan-950'
        : 'bg-emerald-500 border-emerald-700 text-emerald-950 focus:border-emerald-950';
    
    const colorClass2 = matrixName === 'a'
        ? 'bg-cyan-600'
        : 'bg-emerald-600';

    gridContainer.className = `grid grid-cols-${n} gap-2 p-3 ${colorClass2} rounded-md mb-4`;
    gridContainer.innerHTML = '';

    for(let i = 0; i < n; i++) 
        for(let j = 0; j < n; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.value = '0';

            input.className = `w-12 h-12 text-center border-2 font-mono rounded outline-none ${colorClass}`;
            gridContainer.appendChild(input)
        }

}

document.addEventListener('DOMContentLoaded', () => {
    generateGrid('a');
    generateGrid('b');

    document.getElementById('size-a').addEventListener('input', () => generateGrid('a'));
    document.getElementById('size-b').addEventListener('input', () => generateGrid('b'));
});

function readMatrix(matrixName) {
    const sizeInput = document.getElementById(`size-${matrixName}`);
    const n = parseInt(sizeInput.value);
    const gridContainer = document.getElementById(`grid-${matrixName}`);
    const inputs = gridContainer.querySelectorAll('input');

    let matrix = [];
    let index = 0;

    for(let i = 0; i < n; i++) {
        let row = [];
        for(let j = 0; j < n; j++) {
            let val = parseFloat(inputs[index].value);
            row.push(val);
            index++;
        }
        matrix.push(row);
    }
    return matrix;
}

