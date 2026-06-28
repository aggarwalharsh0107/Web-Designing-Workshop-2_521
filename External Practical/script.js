function generateResult() {

    let name = document.getElementById("name").value;

    let m1 = Number(document.getElementById("sub1").value);
    let m2 = Number(document.getElementById("sub2").value);
    let m3 = Number(document.getElementById("sub3").value);
    let m4 = Number(document.getElementById("sub4").value);
    let m5 = Number(document.getElementById("sub5").value);

    let total = m1 + m2 + m3 + m4 + m5;
    let percentage = total / 5;

    let grade;
    let status;

    if (
        m1 < 33 ||
        m2 < 33 ||
        m3 < 33 ||
        m4 < 33 ||
        m5 < 33
    ) {
        status = "Fail";
        grade = "F";
    }
    else {
        status = "Pass";

        if (percentage >= 90)
            grade = "A+";
        else if (percentage >= 80)
            grade = "A";
        else if (percentage >= 70)
            grade = "B";
        else if (percentage >= 60)
            grade = "C";
        else if (percentage >= 50)
            grade = "D";
        else
            grade = "E";
    }

    document.getElementById("studentName").innerHTML = name;
document.getElementById("totalMarks").innerHTML = `${total}/500`;
document.getElementById("percentage").innerHTML = `${percentage.toFixed(2)}%`;
document.getElementById("grade").innerHTML = grade;
document.getElementById("status").innerHTML = status;

}