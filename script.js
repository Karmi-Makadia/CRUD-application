var selectedRow = null

function onformsubmit(){
  if(validate()){
    var formData = readformData();
    if(selectedRow == null)
       insertNewRecord(formData);
    else
       updateRecord(formData);
    resetForm();
  }
}
function readformData(){
  var formData = {};
  formData["name"]= document.getElementById("name").value;
  formData["regno"]= document.getElementById("regno").value;
  formData["dept"]= document.getElementById("dept").value;
  return formData;
}
function insertNewRecord(data) {
  var table = document.getElementById("studentlist").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.regno;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.dept;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = '<a onClick="onEdit(this)">Update</a><a onClick="onDelete(this)">Delete</a>';
}
function resetForm(){
  document.getElementById("name").value = "";
  document.getElementById("regno").value = "";
  document.getElementById("dept").value = "";
}
function onEdit(td){
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value= selectedRow.cells[0].innerHTML;
  document.getElementById("regno").value= selectedRow.cells[1].innerHTML;
  document.getElementById("dept").value= selectedRow.cells[2].innerHTML;
}
function updateRecord(formData){
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.regno;
  selectedRow.cells[2].innerHTML = formData.dept;
}
function onDelete(td){
  if(confirm('Confirm to delete this record')) {
    row = td.parentElement.parentElement;
    document.getElementById("studentlist").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if(document.getElementById("name").value == "") {
    isValid = false;
    document.getElementById("nameValidationError").classList.remove("hide");
  }else{
    isValid = true;
    if(!document.getElementById("nameValidationError").classList.contains("hide")){
      document.getElementById("nameValidationError").classList.add("hide");
    }
  }
  return isValid;
}
