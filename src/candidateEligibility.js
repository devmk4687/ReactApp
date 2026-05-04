// let jsScore = 65;
// let name = "Alex Carry";
// let age = 25;

// let projectsCompleted = 3;
// let willingToRelocate = "Yes";

const myForm = document.getElementById("candidateForm");
 


myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(myForm);

   

    let name = formData.get("name");
    let age = parseInt(formData.get("age"));
    let jsScore = parseInt(formData.get("jsScore"));
    let projectsCompleted = parseInt(formData.get("projects"));
    let willingToRelocate = window.relocValue;
    let education = formData.get("education");
    
       
    console.log(name, age, jsScore, projectsCompleted, willingToRelocate, education);
    generateReport(name, age, jsScore, projectsCompleted, willingToRelocate, education);
});


function generateReport(name, age, jsScore, projectsCompleted, willingToRelocate, education) {
    console.log("Candidate Name: " + name);
    checkEligibility(age, jsScore, projectsCompleted);
    calculateSalary(jsScore, willingToRelocate);
    checkConfidenceLevel(projectsCompleted);

   

    const msg = document.getElementById('formMsg');
    msg.className = 'msg success';
    msg.style.display = 'block';
    msg.innerHTML =
      '<strong>Application submitted successfully!</strong><br>' +
      'Name: ' + name + ' &nbsp;|&nbsp; ' +
      'Age: ' + age + ' &nbsp;|&nbsp; ' +
      'Education: ' + education + '<br>' +
      'JS Score: ' + jsScore + '/100 &nbsp;|&nbsp; ' +
      'Projects: ' + projectsCompleted + ' &nbsp;|&nbsp; ' +
      'Relocate: ' + (willingToRelocate === 'yes' ? 'Yes' : 'No');
    
}

function calculateSalary(jsScore, willingToRelocate) {
        // calculate salary range
        if(jsScore >= 60 && jsScore <= 70) {
            if(willingToRelocate === "Yes") {
                console.log("Candidate Estimated Salary : ₹5–7 LPA!");
            }else {
                console.log("Candidate Estimated Salary : ₹4–6 LPA!");
            }
        }else if (jsScore >= 71 && jsScore <= 85) {
            if(willingToRelocate === "Yes") {
                console.log("Candidate Estimated Salary : ₹7–11 LPA!");
            }else {
                console.log("Candidate Estimated Salary : ₹6–10 LPA");
            }
        }else if (jsScore >= 86 && jsScore <= 100) {
            if(willingToRelocate === "Yes") {
                console.log("Candidate Estimated Salary : ₹11–21 LPA!");
            }else {
                console.log("Candidate Estimated Salary : ₹10–18 LPA");
            
        }


    }
}
function checkConfidenceLevel(projectsCompleted){
     //check confidence level
        if(projectsCompleted >= 4) {
            console.log("Candidate Confidence is High!");
        }else if (projectsCompleted >= 2 && projectsCompleted <= 3) {
            console.log("Candidate Confidence is Medium");
        }else if (projectsCompleted < 2) {
            console.log("Candidate Confidence is Low");
        }
}

function checkEligibility(age, jsScore, projectsCompleted) {
    if(age >=18 && age <= 60) {
        //determine candiate eligible or not
        if(jsScore >= 60 && projectsCompleted >=2) {
            console.log("Eligible Candidate!");
        }else if (jsScore >= 80 && projectsCompleted >= 3) {
            console.log("Eligible - Priority Candidate");
        }else {
            console.log("Not Eligible");
        }
    }else {
        console.log("You are not eligible for the job as you are underage or overage");
    }
}

// O/P:
// Candidate Name: Alex Carry
// Eligible Candidate!
// Candidate Estimated Salary : ₹5–7 LPA!
// Candidate Confidence is Medium