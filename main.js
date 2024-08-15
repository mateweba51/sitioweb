// script.js
function updateFields() {
    const type = document.getElementById('type').value;
    
    document.getElementById('pictograficaFields').style.display = (type === 'pictografica') ? 'block' : 'none';
    document.getElementById('aritmeticaFields').style.display = (type === 'aritmetica') ? 'block' : 'none';
    document.getElementById('numericaFields').style.display = (type === 'numerica') ? 'block' : 'none';
}

function generateSequence() {
    const type = document.getElementById('type').value;
    const count = parseInt(document.getElementById('count').value, 10);
    const resultDiv = document.getElementById('result');
    let result = '';

    switch (type) {
        case 'pictografica':
            const startPict = parseInt(document.getElementById('startPict').value, 10);
            result = generatePictographicSequence(startPict, count);
            break;
        case 'aritmetica':
            const startArit = parseInt(document.getElementById('startArit').value, 10);
            const step = parseInt(document.getElementById('step').value, 10);
            const showDivision = document.getElementById('showDivision').checked;
            result = generateArithmeticSequence(startArit, step, count, showDivision);
            break;
        case 'numerica':
            const startNum = parseInt(document.getElementById('startNum').value, 10);
            const stepNum = parseInt(document.getElementById('stepNum').value, 10);
            const operation = document.getElementById('operation').value;
            result = generateNumericSequence(startNum, stepNum, count, operation);
            break;
    }

    resultDiv.innerHTML = result;
}

function generatePictographicSequence(start, count) {
    let sequence = '';
    for (let i = 0; i < count; i++) {
        sequence += '<div>' + '🟢'.repeat(start + i) + '</div>';
    }
    return sequence;
}

function generateArithmeticSequence(start, step, count, showDivision) {
    let sequence = '';
    for (let i = 0; i < count; i++) {
        const value = start + (i * step);
        sequence += `<div>${value}`;
        if (showDivision && i > 0) {
            sequence += ` / ${start + ((i - 1) * step)} = ${value / (start + ((i - 1) * step))}`;
        }
        sequence += '</div>';
    }
    return sequence;
}

function generateNumericSequence(start, step, count, operation) {
    let sequence = '';
    for (let i = 0; i < count; i++) {
        let value;
        switch (operation) {
            case 'multiplicacion':
                value = start * (i + 1);
                break;
            case 'potenciacion':
                value = Math.pow(start, i + 1);
                break;
            case 'factorial':
                value = factorial(start + i);
                break;
        }
        sequence += `<div>${value}</div>`;
    }
    return sequence;
}

function factorial(num) {
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
