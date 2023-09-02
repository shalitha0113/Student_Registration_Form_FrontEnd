`use Strict`;

//Access Registration Form
function accessRegistration(){
    
}

function Student(firstName, lastName,email,dob,gender,address,telNo, batch) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email=email;
    this.dob=dob;
    this.gender=gender;
    this.address=address;
    this.telNo=telNo;
    this.batch = batch;

}

function register() {
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const email=document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const gender=document.getElementById("gender").value;
    const address=document.getElementById("address").value;
    const telNo=document.getElementById("telNo").value;
    const batch = document.getElementById("batch").value;

    //Creating JSON object
    const student = JSON.stringify(new Student(fname, lname,email,dob,gender,address,telNo,batch));
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

//Fetch(Get Request)
let studentTable=document.getElementById("tbl-student");
fetch("http://localhost:8080/student")
.then(response=>response.json())
.then(res=>{
    let tblBody=`<tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Tel No</th>
                    <th>Batch</th>
                    
                  </tr>`
    res.forEach(element =>{
        tblBody+=`<tr>
                    <td>${element.id}</td>
                    <td>${element.firstName}</td>
                    <td>${element.lastName}</td>
                    <td>${element.email}</td>
                    <td>${element.dob}</td>
                    <td>${element.gender}</td>
                    <td>${element.address}</td>
                    <td>${element.telNo}</td>
                    <td>${element.batch}</td>
                    
                  </tr>`
    })
    studentTable.innerHTML=tblBody;

})

function update(){
    

}

function deleteId(id){

}


/*Login form view */ 
document.querySelector("#register-btn").addEventListener("click",function(){
    document.querySelector(".popup-register").classList.add("active");
});

document.querySelector(".popup-register .close-btn").addEventListener("click",function(){
    document.querySelector(".popup-register").classList.remove("active");
});