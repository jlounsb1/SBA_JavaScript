# SBA_JavaScript


In this skill based assesment I used data provided from the exercise and manipulated it with a function to return a new array of objects which contains both students information. The information includes id, average, and grades on their assignments.

I also included some try/catch blocks that verifies the correct course is selected in the function, and that no assignments are worth 0 points, and therefore ungraded.

If a student has not completed an assignment because it is not due yet, it does not affect their average.

I knew there was one late assignment, and I manually calculated the points to be taken off and inputed that in my array construction.  I wanted to set up an automatic way to find this and be able to handle the input of more data in my function, but I wasn't able to find the correct way to do that.

I created my final array by making a blank array vareable, then added objects for each student with the push method.

I looped through items to get things like student scores, but I did end up having a much longer single function than I would like.  I wanted to loop through more data to try and not repeat myself, but I could not make the function as efficient as I would like.

The result of the function is what the  assignment asked for, but with more experience I believe I would be able to make my function more concise.