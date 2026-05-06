let employees = [];
// Add Employee
function addEmployee() {
    let name   = document.getElementById("empName").value.trim();
    let id     = parseInt(document.getElementById("empId").value);
    let salary = parseFloat(document.getElementById("empSalary").value);
    let dept   = document.getElementById("empDept").value.trim();
    if (!name || isNaN(id) || isNaN(salary) || !dept) {
        showAddMessage("⚠️ Fill all fields correctly", "error");
        return;
    }
    let exists = employees.find(emp => emp.id === id);
    if (exists) {
        showAddMessage("⚠️ ID already exists", "error");
        return;
    }
    employees.push({ name, id, salary, department: dept });
    showAddMessage(`✅ ${name} added!`, "success");
    clearInputs();
}
// Display All
function displayAllEmployees() {
    if (employees.length === 0) {
        showResult('<div class="empty-state">No employees found</div>');
        return;
    }
    let html = `<p class="result-title">All Employees (${employees.length})</p>`;
    html += `<table class="emp-table"><thead>
    <tr><th>ID</th><th>Name</th><th>Dept</th><th>Salary</th></tr>
    </thead><tbody>`;
    for (let emp of employees) {
        let cls = emp.salary > 50000 ? "badge-high" : "badge-low";
        html += `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.department}</td>
        <td class="${cls}">₹${emp.salary.toLocaleString('en-IN')}</td>
        </tr>`;
    }
    html += "</tbody></table>";
    showResult(html);
}
// Filter
function filterHighSalary() {
    let data = employees.filter(emp => emp.salary > 50000);
    if (data.length === 0) {
        showResult('<div class="empty-state">No high salary employees</div>');
        return;
    }
    let html = `<p class="result-title">High Earners (${data.length})</p>`;
    html += `<table class="emp-table"><tbody>`;
    for (let emp of data) {
        html += `<tr>
        <td>${emp.name}</td>
        <td>₹${emp.salary.toLocaleString('en-IN')}</td>
        </tr>`;
    }
    html += "</tbody></table>";
    showResult(html);
}
// Total
function calculateTotalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    showResult(`
    <div class="stat-card">
        <div class="stat-label">Total Salary</div>
        <div class="stat-value">₹${total.toLocaleString('en-IN')}</div>
    </div>`);
}
// Average
function calculateAverageSalary() {
    if (employees.length === 0) return;
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;
    showResult(`
    <div class="stat-card">
        <div class="stat-label">Average Salary</div>
        <div class="stat-value">₹${avg.toFixed(2)}</div>
    </div>`);
}
// Count Dept
function countByDepartment() {
    let dept = document.getElementById("deptInput").value.trim().toLowerCase();
    let count = employees.filter(emp => emp.department.toLowerCase() === dept).length;
    showResult(`
    <div class="stat-card">
        <div class="stat-label">${dept.toUpperCase()} Department</div>
        <div class="stat-value">${count}</div>
    </div>`);
}
// Helpers
function showResult(html) {
    let el = document.getElementById("resultArea");
    el.innerHTML = html;
    el.classList.remove("hidden");
}
function showAddMessage(text, type) {
    let msg = document.getElementById("addMessage");
    msg.textContent = text;
    msg.className = "message " + type;
    msg.classList.remove("hidden");
    setTimeout(() => msg.classList.add("hidden"), 3000);
}
function clearInputs() {
    document.getElementById("empName").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empDept").value = "";
}