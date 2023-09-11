
function Student(firstName, lastName, email, dob, gender, address, telNo, batch) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dob = dob;
    this.gender = gender;
    this.address = address;
    this.telNo = telNo;
    this.batch = batch;
}

function register() {
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value;
    const telNo = document.getElementById("telNo").value;
    const batch = document.getElementById("batch").value;

    //Creating JSON object
    const student = JSON.stringify(new Student(fname, lname, email, dob, gender, address, telNo, batch));
    console.log(student);

    //Fetch (POST Request)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: student,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/student", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

//------------------Student View Form --------------------------------------------------
//let studentTable = document.getElementById("tbl-student");


//Table Body
let tblBody = `<tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Batch</td>
               </tr>`

//Fetch(Get Request)
let studentTable = document.getElementById("tblStudent2");

function loadtable() {
    let studentTable = document.getElementById("tblStudent2");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/student", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.forEach((element) => {
                tblBody += `<tr>
                    <td>${element.id}</td>
                    <td>${element.firstName} ${element.lastName}</td>
                    <td>${element.email}</td>
                    <td>${element.address}</td>
                    <td>${element.batch}</td>
                    <td><button onclick="viewById(${element.id})" >View</button></td>

                    
                  </tr>`
            })
            studentTable.innerHTML = tblBody;
        })
        .catch(error => console.log('error', error));
}

loadtable();

/*Login form view */
document.querySelector("#register-btn").addEventListener("click", function () {
    document.querySelector(".popup-register").classList.add("active");
});

document.querySelector(".popup-register .close-btn").addEventListener("click", function () {
    document.querySelector(".popup-register").classList.remove("active");
});


/* Search function  */
function searchByName() {
    let searchVal = document.getElementById("searchTxt").value;
    alert(searchVal);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    let tBody = `<tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Batch</td>
                  </tr>`

    fetch(`http://localhost:8080/student/stu/${searchVal}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            result.forEach((element) => {
                tBody += `<tr>
                    <td>${element.id}</td>
                    <td>${element.firstName} ${element.lastName}</td>
                    <td>${element.email}</td>
                    <td>${element.address}</td>
                    <td>${element.batch}</td>
                    <td><button id="delete" onclick="deleteById(${element.id})" >Delete</button></td>
                    <td><button onclick="updateById(${element.id})" >Update</button></td>
                    <td><button onclick="viewById(${element.id})" >View</button></td>
                  </tr>`
            })
            studentTable.innerHTML = tBody;
        })
        .catch(error => console.log('error', error));
}

//-----Search by Batch
function searchByBatch() {
    let searchVal2 = document.getElementById("searchTxt_batch").value;
    alert(searchVal2);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    let tBody = `<tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Batch</td>
                  </tr>`

    fetch(`http://localhost:8080/student/stu-batch/${searchVal2}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            result.forEach((element) => {
                tBody += `<tr>
                    <td>${element.id}</td>
                    <td>${element.firstName} ${element.lastName}</td>
                    <td>${element.email}</td>
                    <td>${element.address}</td>
                    <td>${element.batch}</td>
                    <td><button id="delete" onclick="deleteById(${element.id})" >Delete</button></td>
                    <td><button onclick="updateById(${element.id})" >Update</button></td>
                    <td><button id="view-form-id" onclick="viewById(${element.id})" >View</button></td>
                  </tr>`
            })
            studentTable.innerHTML = tBody;
        })
        .catch(error => console.log('error', error));
}



/*Delete Option */
function deleteById(id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`http://localhost:8080/student/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => location.reload())
        .catch(error => console.log('error', error));
}


// View Form

let studentView = document.getElementById("tblView2");
function viewById(id) {
    let studentView = document.getElementById("tblView2");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`http://localhost:8080/student/stu-id/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            let tblBody2 = `
                            <tr>
                                <th style="text-align:right;font-size:18"><label >ID</label></th>  
                                <th>${data.id}</th>
                            </tr>
                            <tr>
                                <td><input type="text" id="firstName" value="${data.firstName}"></td>   
                                <td><input type="text" id="lastName" value="${data.lastName}"></td>
                            </tr>
                            <tr>
                                <th><label >Email</label></th>
                                <td><input type="text" id="email" value="${data.email}"></td>
                            </tr>
                            <tr>
                                <th><label >Birthday</label></th>
                                <td><input type="text" id="dob" value="${data.dob}"></td>
                            </tr>
                            <tr>
                                <th><label >Gender</label></th>
                                <td><input type="text" id="gender" value="${data.gender}"></td>
                            </tr>
                            <tr>
                                <th><label >Address</label></th>
                                <td><input type="text" id="address" value="${data.address}"></td>
                            </tr>
                            <tr>
                                <th><label >Telephone No</label></th>
                                <td><input type="text" id="telNo" value="${data.telNo}"></td>
                            </tr>
                            <tr>
                                <th><label >Batch</label></th>
                                <td><input type="text" id="batch" value="${data.batch}"></td>
                            </tr>
                            <tr>
                                <td><button onclick="deleteById(${data.id})" >Delete</button></td>
                                <td><button onclick="updateById(${data.id})" >Update</button></td>
                            </tr>`
            studentView.innerHTML = tblBody2;
        })

        .catch(error => console.log('error', error));


        /*View Form function */

        document.querySelector("#view-form-id").addEventListener("click", function () {
            document.querySelector(".view-form").classList.add("active");
        });

        document.querySelector(".view-form .close-btn").addEventListener("click", function () {
            document.querySelector(".view-form").classList.remove("active");
        });
}

//Update Option



function updateById(id) {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let dob = document.getElementById('dob').value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById('address').value;
    let telNo = document.getElementById('telNo').value;
    let batch = document.getElementById('batch').value;

    

    let student ={
        firstName:firstName,
        lastName:lastName,
        email:email,
        dob:dob,
        gender:gender,
        address:address,
        telNo:telNo,
        batch:batch
    };

    let studentJSON = JSON.stringify(student);
    console.log(studentJSON);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: studentJSON,
        redirect: 'follow'
    };

    fetch(`http://localhost:8080/student/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => location.reload())
        .catch(error => console.log('error', error));

}










