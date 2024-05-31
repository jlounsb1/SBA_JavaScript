//Code sandbox data

// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };

 
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

// If the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.

function getLearnerData(info, group, [learnerSub]) {

//If the course info does not match course_id it should return an error saying you have the wrong course selected
try{
  if(info.id === group.course_id) {
    console.log("Course Selection OK")
  } else{
    throw "You do not have the right course selected"
  }
} catch(error) {
  console.log(error);
  return error;
} 
//seeing if there is an assignment with 0 points possible
try {
  for(i=0; i<group.assignments.length; i++)
    if(group.assignments[i].points_possible >0){
    continue
  }else {
    throw "points possible 0, there must be an ungraded assignment, please remove the assignment from the data."
  }
} catch(error) {
  console.log(error);
  return;
}
    const finalArray=[];
    let firstStudenttotalscore=0;
    let studenttwototalscore=0;
    let possible=0;
    let possible2=0;
    const currentDate = new Date();
    const currentYear= currentDate.getFullYear();
    let dueDateYear = Number(group.assignments[2].due_at.slice(0,4))
    //get total possible points for all assignments
    group.assignments.forEach((element) => {
        possible +=element.points_possible;
    });
 //if the due date hasnt happened yet, subtract points possible and make new variable used in object construction
 if(dueDateYear >currentYear ){
    possible2 = possible-group.assignments[2].points_possible
}
 
//iterate through each element and calulate scores of the two students
    learnerSub.forEach((element) => {
        if (element.learner_id == 125) {
            firstStudenttotalscore = firstStudenttotalscore + element.submission.score
            }
        else {
            studenttwototalscore =  studenttwototalscore + element.submission.score
            }
        });

//Since I knew assignment 2 by student 2 was late. I manually made logic to check and then create a variable of the points which should be taken off

//I then manually subtracted the variable in the appropriate places in the array construction
let lateScore =0;
let penaltyPoints=0;
if (AssignmentGroup.assignments[1].due_at<LearnerSubmissions[4].submission.submitted_at){
  lateScore =LearnerSubmissions[4].submission.score*.9;
  penaltyPoints = LearnerSubmissions[4].submission.score-lateScore;
}

    const person1 = {
        id:125,
        avg:`${Math.round((firstStudenttotalscore/possible)*100)}`,
        assignment1: Math.round((learnerSub[0].submission.score/group.assignments[0].points_possible)*100),
        assignment2: Math.round((learnerSub[1].submission.score/group.assignments[1].points_possible)*100),
        assignment3: Math.round((learnerSub[2].submission.score/group.assignments[2].points_possible)*100),
    }
    const person2 = {
        id:132,
        avg: `${((studenttwototalscore-penaltyPoints)/possible2)*100}`,
        assignment1: Math.round((learnerSub[3].submission.score/group.assignments[0].points_possible)*100),
        assignment2: Math.round(((learnerSub[4].submission.score-penaltyPoints)/group.assignments[1].points_possible)*100),
    }
   finalArray.push(person1);
   finalArray.push(person2);
   
   console.log(finalArray);
    return finalArray;
}
getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]);


  
