const category = document.getElementById("course")
// Here we use a simple solution to the problem of having multiple
// JS files. If the titles page is equal to add or edit we continue
// with our code
if (category.textContent == "A D D   C O U R S E S") {
    // DOM Elements
    const form = document.getElementById("form");
    const courseName = form["name"];
    const streams = form["streams"];
    const type = form["typee"];
    const startingDate = form["startdate"]
    const endingDate = form["enddate"]
    const description = form["comments"]

    // We create our array for our objects if the local storage does already
    // have a course array filled with objects we dont want to re-initialize
    // our array so we parse it and skip the second argument which gives an
    // empty array
    const courses = JSON.parse(localStorage.getItem("courses")) || [];

    // With this function we de-construct an objects and use it as an argument
    // for our function.The objects properties that we push because we know 
    // that our arguments will have fixed values we simplify our code by
    // writing (name) instead of (name:name,streams:streams etc...)
    // we also seting to our local storage the new edited array
    const addCourse = (name, streams, typee, startdate, enddate, comments) => { 
        courses.push({    
            name,
            streams,
            typee,
            startdate,
            enddate,
            comments,
        });

        localStorage.setItem("courses", JSON.stringify(courses));

        return { name, streams, typee, startdate, enddate, comments };
    };

    // We check every single element of our current arrray to see if the
    // user input for name already exists in our array so we can throw an
    // error
    courseName.onchange = () => {
        courses.forEach(course => {
            if (courseName.value == course.name) {
                alert("A course with the same name alreadt exists, please select another course name")
                courseName.value = ""
            }
        });
    }


    form.onsubmit = e => {
        e.preventDefault();

        // Here we force the user to only choose an expiring date 6 months
        // apart and for empty user inputs. At the end if all the validations
        // pass, we call our push method with the users inputs values and we give 
        // our array a new object and we reset the form to its original form
        if (startingDate.value[6] == "1" && endingDate.value[6] != "6") {
            alert("Courses should be 6 months apart!")
        } else if (startingDate.value[6] == "7" && endingDate.value[5] + endingDate.value[6] != "01") {
            alert("Courses should be 6 months apart!")
        } else if (courseName.value == "") {
            alert("Course name cannot be empty please write atleast 5 characters")
        }
        else {
            alert("Course has been successfully saved")
            addCourse(
                courseName.value,
                streams.value,
                type.value,
                startingDate.value,
                endingDate.value,
                description.value,
            );

            form.reset()
        }
    };
}

else if (category.textContent == "A D D   T R A I N E R") {
    // DOM Elements
    const form = document.getElementById("form");
    const trainerName = form["name"];
    const trainerLastName = form["last_name"]
    const streams = form["streams"];

    const trainers = JSON.parse(localStorage.getItem("trainers")) || [];

    const addTrainer = (name, last_name, streams) => {
        trainers.push({
            name,
            last_name,
            streams,
        });

        localStorage.setItem("trainers", JSON.stringify(trainers));

        return { name, last_name, streams };
    };
   
    form.onsubmit = e => {
        e.preventDefault();

        trainers.forEach(trainer => {
            if (trainerName.value == trainer.name && trainerLastName.value == trainer.last_name) {
                alert("A trainer with the same name alreadt exists, please select another trainer name")
                trainerName.value = ""
                trainerLastName.value = ""
                
            }
        });

        if (trainerName.value == "" || trainerLastName.value == "") {
            alert("Course name cannot be empty please write atleast 5 characters")
        }
         else {
            alert("Trainer has been successfully saved")
            addTrainer(
                trainerName.value,
                trainerLastName.value,
                streams.value,
            );

            form.reset()
        }           
    };

}

else if (category.textContent == "A D D   S T U D E N T") {
    
    // DOM Elements
    const form = document.getElementById("form");
    const studentName = form["name"];
    const studentLastName = form["last_name"]
    const birthDate = form["birthDate"]
    const plans = form["plans"];


    const students = JSON.parse(localStorage.getItem("students")) || [];

    const addStudent = (name, last_name, birthDate, plans) => {
        students.push({
            name,
            last_name,
            birthDate,
            plans,
        });

        localStorage.setItem("students", JSON.stringify(students));

        return { name, last_name, birthDate, plans };
    };

    form.onsubmit = e => {
        e.preventDefault();

        students.forEach(student => {
            if (studentName.value == student.name && studentLastName.value == student.last_name) {
                alert("A student with the same name alreadt exists, please select another student name")
                studentName.value = ""
                studentLastName.value = ""
            }
        });
        
        if (studentName.value == "" || studentLastName.value == "") {
            alert("Student name cannot be empty please write atleast 5 characters")
        } 
         else {
            alert("Student has been successfully saved")
            addStudent(
                studentName.value,
                studentLastName.value,
                birthDate.value,
                plans.value,
            );

            form.reset()
        }
        
    };

}

else if (category.textContent == "A D D   A S S I G N M E N T") {
    // DOM Elements
    const form = document.getElementById("form");
    const assignmentName = form["name"];
    const subDate = form["subdate"]
    const oralMark = form["oralmark"];
    const totalMark = form["totalmark"]
    const description = form["comments"]


    const assignments = JSON.parse(localStorage.getItem("assignments")) || [];

    const addAssignment = (name, subdate, oralmark, totalmark, comments) => {
        assignments.push({
            name,
            subdate,
            oralmark,
            totalmark,
            comments,
        });

        localStorage.setItem("assignments", JSON.stringify(assignments));

        return { name, subdate, oralmark, totalmark, comments };
    };

    assignmentName.onchange = () => {
        assignments.forEach(assignment => {
            if (assignmentName.value == assignment.name) {
                alert("An assignment with the same name alreadt exists, please select another assignment name")
                assignmentName.value = ""
            }
        });
    }

    form.onsubmit = e => {
        e.preventDefault();
        console.log(description.value)
        if (assignmentName.value == "") {
            alert("Assignment name cannot be empty please write atleast 5 characters")
        } 
         else {
            alert("Assignment has been successfully saved")
            addAssignment(
                assignmentName.value,
                subDate.value,
                oralMark.value,
                totalMark.value,
                description.value,
            );

            form.reset()
        }
        
    };

}





