function calculateGrade() {
    let math = parseFloat(document.getElementById("math").value) || 0;
    let science = parseFloat(document.getElementById("science").value) || 0;
    let english = parseFloat(document.getElementById("english").value) || 0;

    let average = (math + science + english) / 3;

    let grade = "";

    if (average >= 80) {
        grade = "A 🟢 Excellent";
    } else if (average >= 70) {
        grade = "B 🟡 Good";
    } else if (average >= 60) {
        grade = "C 🟠 Average";
    } else if (average >= 50) {
        grade = "D 🔴 Pass";
    } else {
        grade = "F ❌ Fail";
    }

    document.getElementById("result").innerHTML =
        "Average: " + average.toFixed(2) + "%<br>Grade: " + grade;
}