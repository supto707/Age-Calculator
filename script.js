function calculateAge() {
  var birthdate = document.getElementById("birthdate").value;
  var today = new Date();
  var birthdate = new Date(birthdate);
  var age = today.getFullYear() - birthdate.getFullYear();
  var m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age--;
  }
  document.getElementById("output").innerHTML = "Your age is:" + age;
}