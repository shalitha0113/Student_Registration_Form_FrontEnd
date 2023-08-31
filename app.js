`use Strict`;

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