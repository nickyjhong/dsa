// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm (num) {
    const numStr = num.toString();
    let expanded = [];
    let multiplier = 1;

    for (let i = numStr.length - 1; i >= 0; i--) {
        expanded.unshift((numStr[i]) * multiplier);
        multiplier *= 10;
    }
    return expanded
        .filter(num => num !== 0)    
        .join(' + ');
}