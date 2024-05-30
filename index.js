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

  //Goal is to transform this data such that the output is an array of objects, each object contains the following:

  //[
    // {
    //     the ID of the learner for which this data has been collected
    //     "id": number,
    //     the learner’s total, weighted average, in which assignments
    //     with more points_possible should be counted for more
    //     e.g. a learner with 50/100 on one assignment and 190/200 on another
    //     would have a weighted average score of 240/300 = 80%.
    //     "avg": number,
    //     each assignment should have a key with its ID,
    //     and the value associated with it should be the percentage that
    //     the learner scored on the assignment (submission.score / points_possible)
    //     <assignment_id>: number,
    //     if an assignment is not yet due, it should not be included in either
    //     the average or the keyed dictionary of scores
    // }

  //]

//   If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.
//try catch blocks

// You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? 
//this looks like a good place for if else

// If an assignment is not yet due, do not include it in the results or the average. Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.



finalArray=[];
let firstStudenttotalscore=0;
let studenttwototalscore=0;
let possible=0;

LearnerSubmissions.forEach((element) => {
   finalArray.push({id:element.learner_id});
});


LearnerSubmissions.forEach((element) => {
if (element.learner_id == 125) {
    firstStudenttotalscore = firstStudenttotalscore +element.submission.score
    }
else {
    studenttwototalscore =  studenttwototalscore+element.submission.score;
    }
});

AssignmentGroup.assignments.forEach((element) => {
    possible +=element.points_possible;
    return possible;
});

let currentDate = new Date();
let currentYear= currentDate.getFullYear();
let dueDateYear = Number(AssignmentGroup.assignments[2].due_at.slice(0,4))

if(dueDateYear >currentYear ){
    studenttwototalscore= studenttwototalscore+AssignmentGroup.assignments[2].points_possible
}


console.log(`${possible} Max points possible`)
console.log(`first student avg: ${(firstStudenttotalscore/possible)*100}. 
Second student avg:${(studenttwototalscore/possible)*100}`)

console.log(finalArray)

//Ok, now that I have the pieces I want, lets put it all together in a function like they want



function getLearnerData(info, group, [learnerSub]) {
    finalArray=[];
    let firstStudenttotalscore=0;
    let studenttwototalscore=0;
    let possible=0;
    let currentDate = new Date();
    let currentYear= currentDate.getFullYear();
    let dueDateYear = Number(group.assignments[2].due_at.slice(0,4))

    group.assignments.forEach((element) => {
        possible +=element.points_possible;
    });

    if(dueDateYear >currentYear ){
        studenttwototalscore= studenttwototalscore+group.assignments[2].points_possible
    }

    learnerSub.forEach((element) => {
        if (element.learner_id == 125) {
            firstStudenttotalscore = firstStudenttotalscore +element.submission.score;
            firstStudenttotalscore= firstStudenttotalscore
            }
        else {
            studenttwototalscore =  studenttwototalscore+element.submission.score
            }
        });

    const person1 = {
        id:125,
        avg:`${Math.round((firstStudenttotalscore/possible)*100)}`
    }
    const person2 = {
        id:132,
        avg: `${(studenttwototalscore/possible)*100}`
    }
   finalArray.push(person1);
   finalArray.push(person2);
  console.log(finalArray)
 
}
getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]);

  
