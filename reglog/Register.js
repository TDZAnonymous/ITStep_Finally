
   function registrationUser() {
    fetch('http://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        "userName": document.getElementById("Username").value,
    "firstName":  document.getElementById("Username").value,
    "lastName":  document.getElementById("Username").value,
    "email":  document.getElementById("Email").value,
    "privateNumber":  "",
    "password":  document.getElementById("Password").value,
    "active": true})
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response))) 
  }