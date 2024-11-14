function checkGrade() {
    const grade = parseFloat(document.getElementById('gradeInput').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(grade) || grade < 0 || grade > 100) {
        resultDiv.innerHTML = '<span style="color: red; font-family:monospace;">INVALID</span>';
    } else if (grade >= 70) {
        resultDiv.innerHTML = '<span style="color: green; font-family:monospace;">A</span>';
    } else if (grade >= 60 && grade <= 69) {
        resultDiv.innerHTML = '<span style="color: yellow; font-family:monospace;">B</span>';
    } else if (grade >= 50 && grade <= 59) {
        resultDiv.innerHTML = '<span style="color: yellow; font-family:monospace;">C</span>';
    } else if (grade >= 46 && grade <= 49) {
        resultDiv.innerHTML = '<span style="color: Orange; font-family:monospace;">D</span>';
    } else if (grade >= 40 && grade <= 45) {
        resultDiv.innerHTML = '<span style="color: orange; font-family:monospace;">E</span>';
    } else if (grade <= 39) {
        resultDiv.innerHTML = '<span style="color: red; font-family:monospace;">F</span>';
    } else {
        resultDiv.innerHTML = '<span style="color: red; font-family:monospace;"></span>'; 
    }
}
