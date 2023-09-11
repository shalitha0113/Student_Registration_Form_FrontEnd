
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
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:8080/student/${id}`, requestOptions)
            .then((response) => response.text())
            .then(
              (result) => location.reload(),
              Swal.fire("Deleted!", "Your file has been deleted.", "success")
            )
            .catch((error) => console.log("error", error));
        }
        
      });
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
                                <th style="font-size:18">${data.id}</th>
                            </tr>
                            <tr>
                                <td><input type="text" id="firstName" value="${data.firstName}" style="font-size:20;text-align:right;border:none;font-weight:bold;"></td>   
                                <td><input type="text" id="lastName" value="${data.lastName}" style="font-size:20;text-align:left;border:none;font-weight:bold;"></td>
                            </tr>
                            <tr>
                                <th style="text-align:center;"><label >Email</label></th>
                                <td><input type="text" id="email" value="${data.email}"></td>
                            </tr>
                            <tr>
                                <th style="text-align:center;"><label >Birthday</label></th>
                                <td><input type="text" id="dob" value="${data.dob}"></td>
                            </tr>
                            <tr>
                                <th style="text-align:center;"><label >Gender</label></th>
                                <td><input type="text" id="gender" value="${data.gender}"></td>
                            </tr>
                            <tr>
                                <th style="text-align:center;"><label >Address</label></th>
                                <td><input type="text" id="address" value="${data.address}"></td>
                            </tr>
                            <tr>
                                <th style="text-align:center;"><label >Telephone No</label></th>
                                <td><input type="text" id="telNo" value="${data.telNo}"></td>
                            </tr>
                            <tr>
                                <th style="text-align:center;"><label >Batch</label></th>
                                <td><input type="text" id="batch" value="${data.batch}"></td>
                            </tr>
                            <tr>
                                <td style="text-align:center;"><button onclick="deleteById(${data.id})" >Delete</button></td>
                                <td style="text-align:center;"><button onclick="updateById(${data.id})" >Update</button></td>
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
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",

    }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:8080/student/${id}`, requestOptions)
            .then((response) => response.text())
            .then(
              (result) => location.reload(),
              Swal.fire("Updated", "Your file has been updated.", "success")
            )
            .catch((error) => console.log("error", error));
        }
        
    });
}

    
