document.getElementById("opForm").addEventListener("submit", function(event){
  event.preventDefault();
  
  let name = document.getElementById("name").value;
  let department = document.getElementById("department").value;
  let location = document.getElementById("location").value;
  let date = document.getElementById("date").value;
  
  document.getElementById("successMessage").innerHTML = 
    `✅ Registration successful!<br>
    Patient: <b>${name}</b><br>
    Department: <b>${department}</b><br>
    Location: <b>${location}</b><br>
    Date: <b>${date}</b>`;
  
  document.getElementById("successModal").style.display = "block";
});

document.getElementById("closeBtn").onclick = function() {
  document.getElementById("successModal").style.display = "none";
};
