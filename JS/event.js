
/*-------------Student view form ---------- */

/*
tblStudent2.addEventListener('click', e => {
  const tableRows=document.querySelectorAll('#tblStudent2 tr');
  console.log(tableRows);
  tableRows.forEach(row=>{
    row.addEventListener('click',event=>{
      id = row.getAttribute('id');
      console.log(id);
      if(id != undefined){
        fetch(`http://localhost:8080/student/${id}`)
        .then(response +> response.json())
        .then(data =>{
          console.log(data);
          
        })
      }
    })
  })

});

/*
tblView.addEventListener('click', e => {
  const tableRows = document.querySelectorAll('#tblView tr');
  console.log(tableRows);
  tableRows.forEach(row => {
    row.addEventListener('click', event => {
      id = row.getAttribute('data-id');
      console.log(id);
      if (id != undefined) {
        fetch(`http://localhost:8080/studentRegistration/${id}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);

            let tblBody = ` <tr>
                                        <th>[${data.id}] ${data.name}</th>
                                    </tr>
                                    <tr>
                                        <th>(${data.emailAddress})</th>
                                    </tr>
                                    <tr>
                                        <td>From ${data.address}</th>
                                    </tr>
                                    <tr>
                                        <td>${data.age} Years Old</th>
                                    </tr>
                                    <tr>
                                        <th>${data.image}</th>
                                    </tr> `

            tblStudentInfo.innerHTML = tblBody;
            btnRemove.style.display = "block";
          })
      }
    })
  })
});
*/


