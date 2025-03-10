document.getElementById("login").addEventListener("submit",function(event){
    event.preventDefault();

    if(!ValidateForm()) return;
    
    let userData={
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        email:document.getElementById("email").value,
        dob:document.getElementById("dob").value,
        age:document.getElementById("age").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        phone:document.getElementById("phone").value,
        address:document.getElementById("address").value
    };

    localStorage.setItem("userData",JSON.stringify(userData));

    window.location.href="display.html";


});

function ValidateForm() {
    let fname=document.getElementById("fname").value.trim();
    let lname=document.getElementById("lname").value.trim();
    let email=document.getElementById("email").value.trim();
    let dob=document.getElementById("dob").value.trim();
    let age=document.getElementById("age").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let phone=document.getElementById("phone").value.trim();
    let address=document.getElementById("address").value.trim();

    if(fname.length<4 || !/^[a-zA-Z]+$/.test(fname)){
        alert("First Name must have atleast 4 characters and should contain alphabets only");
        return false;
    }
    if(lname.length<1 || !/^[a-zA-Z]+$/.test(lname)){
        alert("Last Name must have atleast 1 characters and should contain alphabets only");
        return false;
    }

    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
        alert("Invalid Email Address");
        return false;
    }
    if(!/^\d{4}-\d{2}-\d{2}$/.test(dob)){
        alert("Invalid Date of Birth");
        return false;
    }
    if(isNaN(age) || age<10 || age >100){
        alert("Invalid Age");
        return false;   
    }
    if(!/^\d{10}$/.test(phone)){
        alert("Invalid Phone Number");
        return false;
    }
    if(address.length==0){
        alert("Address cannot be empty");
        return false;
    }
    return true;
}

// Client Side Validation
// ----------------------------------         
// 1) First Name (Name should contains alphabets and the length Should not be less than 4 characters).
// 2) Last Name (Name should contains alphabets and the length Should not be less than 1 characters).
// 3) E-mail id (should not contain any invalid and must follow the standard pattern name@domain.com)
// 4) Date (should be in data format check date format before submit).
// 5) Age (should be in 2 digits numbers).
// 6) Mobile Number (Phone number should contain 10 digits only).
// 7) Address (should be use textarea tag and should not be empty).