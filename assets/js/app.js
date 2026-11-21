const cl = console.log;

const stdForm = document.getElementById('stdForm');
const fnameControl = document.getElementById('fname');
const lnameControl = document.getElementById('lname');
const emailControl = document.getElementById('email');
const contactControl = document.getElementById('contact');
const ageControl = document.getElementById('age');
const genderControl = document.getElementById('Gender');
const BGroupControl = document.getElementById('BGroup')
const Student = document.getElementById('Student');
const submitbtn = document.getElementById('submitbtn')

let stdArr = [
    {
        fname: 'Rohit',
        lname: 'sharma',
        email: 'rohits@gmail.com',
        contact: 9876545689,
        age: 32,
        Gender: 'Male',
        BGroup: 'A+'
    },
    {
        fname: 'sachin',
        lname: 'Tendulkar',
        email: 'sachinT@gmail.com',
        contact: 8743245789,
        age: 35,
        Gender: 'Male',
        BGroup: 'B+'
    }
];

function createtable(arr) {
    let result = "";
    arr.forEach((std, i) => {
        result += `
          <tr>
              <td>${i + 1}</td>
        
              <td>${std.fname}</td>
              <td>${std.lname}</td>
              <td>${std.email}</td>
              <td>${std.contact}</td>
              <td>${std.age}</td>
              <td>${std.Gender}</td>
              <td>${std.BGroup}</td>
              
              <td>
                 <button class="btn btn-sm btn-primary">
                 <i class="fa-solid fa-pen-to-square"></i>
                 </button>
              </td>
              <td>
                 <button class="btn btn-sm btn-danger">
                 <i class="fa-solid fa-trash"></i>
                 </button>
              </td>
              </tr>
              `;
    });

    Student.innerHTML = result;
}

createtable(stdArr);
function onStdAdd(eve) {
    eve.preventDefault();
    let stdObj = {
        fname: fnameControl.value,
        lname: lnameControl.value,
        email: emailControl.value,
        contact: contactControl.value,
        age: ageControl.value,
        Gender: genderControl.value,
        BGroup: BGroupControl.value
    }

    stdArr.push(stdObj);
    createtable(stdArr);
    stdForm.reset();
}

stdForm.addEventListener('submit',onStdAdd);