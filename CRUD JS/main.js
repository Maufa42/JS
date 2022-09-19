var selectedRow = null;

function onFormSubmit(){
   var formData = readFormData();
   console.log(formData)
   if(selectedRow == null){
     insertNewRecord(formData);
   }else{
    updateRecord(formData);
   }
   resetForm();
}

// Create
function insertNewRecord(data){
  var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
  console.log("Inside insertNewRecord"+table);
  var newRow  = table.insertRow(table.length);
  console.log("Inside insertNewRecord"+newRow);

  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.phonenumber;
  
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.city;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.salary;

  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<a onClick = "onEdit(this)">Edit</> <a onClick = "onDelete(this)">Delete</>`;
}

//Read
function readFormData(){
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["phonenumber"] = document.getElementById("phonenumber").value;
  formData["city"] = document.getElementById("city").value;
  formData["salary"] = document.getElementById("salary").value;
  return formData;
}


function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("phonenumber").value = "";
  document.getElementById("city").value = "";
  document.getElementById("salary").value = "";
  selectedRow = null;
}

// UPDATE
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("phonenumber").value = selectedRow.cells[1].innerHTML;
  document.getElementById("city").value = selectedRow.cells[2].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[3].innerHTML;

}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.phonenumber;
  selectedRow.cells[2].innerHTML = formData.city;
  selectedRow.cells[3].innerHTML = formData.salary;

}
//DELETE
function onDelete(formdata){
  if (confirm('Are your sure to delete this record?')){

    let   row = formdata.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();

  }
}