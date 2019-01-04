fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
.then(response => response.json())
.then(employees => {
  employees.forEach(employee => {
   let employeeCard= `
   <article class="employee">
    <header class="employee__name">
        <h1>${employee.name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${employee.department.name} department
    </section>
    <section class="employee__computer">
        Currently using a ${employee.computer.name}
    </section>
</article>`
console.log(employeeCard);
let outputElement=document.querySelector("#output")
outputElement.innerHTML += employeeCard
  })
})