const button = document.getElementById("add");
const info = document.getElementById("info");
const tableBody = info.querySelector("tbody");

function getInputFields() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    
    return {
        fname:fname.value,
        lname:lname.value,
        email:email.value
    }
}

function registerUser() {
    const data = getInputFields();
    console.log(data);
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    td1.innerText = data.fname;
    tr.appendChild(td1);

    td2.innerText = data.lname;
    tr.appendChild(td2);

    td3.innerText = data.email;
    tr.appendChild(td3);

    tableBody.appendChild(tr);
}

button.addEventListener("click", registerUser);
