## Assignment 5 - Grading Schema

Grading is assigned to each problem. I did the reverse work so that the fully functioning assignment was assigned the highest grade and any grades below that were assigned on how much the student completed the assignment. I gave the A level grade based on the completed version of the assignment, if the student didn't make any progress from the code skeleton, they were assigned a grade level accordingly. The level of difficulty jumps from assignment to assignment so I thought that this would be a good way to handle the grading. 

**Problem 0** <br>
**Grade A** <br>
Student saved the variable of nyc_pop.csv to a variable.
Student used the open method to open the csv file and saved it to a variable.
Student used the read method on the csv file and saved it to a variable called text.
Student used the strip method to remove any white spaces from the text variable.

For problem 0, the assignment is testing the students on creating variables and assigning them values. Lower grades were assigned if the student did not: 
 - manage to use the open method to open the csv file or save it to a variable.
 - manage to use the open method to open the csv file or save it to a variable.
 - use the read method on the csv file or did not save it to a variable called text.
 - use the strip method on the text variable to eliminate teh white space from text.

**Problem 1** <br>
**Grade A** <br>
Student used the split method to separate the text on each new line and saved it to a variable called g.
Student returned the first line of headers correctly using the split method on a comma within the first line called in g.
Student used the function to get the headers from the csv file.

For problem 1, the assignment was to use the split method on the correct value within the data set. This was done twice to get the correct headers from the csv file. Lower grades were assigned if the student did not:
 - use the split method to separate the text on each new line and save it to a variable called g. 
 - return the first line of headers correctly using the split method on a comma within the first line called in g.
 - use the function to get the headers from the csv file.

**Problem 2**
**Grade A**
Student used the split method on the lines of text to differentiate between each line. 
Student used the pop method to get one of the lines from the text. 
Student used the for loop to go through the line and appends each value using the split method on the comma. 

For problem 2, the first step was to use the split method to get the first line. The student must have used the pop method and then a for loop to get the sublist by appending the sublist on each comma of the first line. Lower grades were assigned if the student did not: 
 - use the pop method to get one of the lines from the data set. 
 - use a for loop to get through the line and append each value using the split method on the comma. 

**Problem 3** <br>
**Grade A** <br>
Student used a for in loop on the data set and created a key variable for the first element in each row. 
Student created a value variable to assign the sublist to. 
Student used a for in loop for the first sublist of the data set. 
Student appended the rest of the values in the row to the value variable sublist. 
Student returned the dictionary with a key and value. 

For problem 3, the first step was to use a for in loop on the data set. The student must then assign the first value on the first row to a variable and then create another for in loop on the rest of the data set. The returned value must have a key, which is the variable followed by a colon with the rest of the sublist. Lower grades were assigned fi the student did not: 
 - use a for in loop on the data set and created a key variable for the first element in each row. 
 - use a for in loop for the first sublist of the data set. 
 - append the rest of the values in the row to the value variable sublist. 
 - return the dictionary with a key and value. 

**Problem 4** <br>
**Grade A** <br>
Student used a for in loop on the data set and created a total variable which had the value of 0. 
Student assigned the year data to a variable called year_data. 
Student used a for in loop to loop through each boro in year_data. 
Student added to the total variable the values of each boro. 
Student created a new total key which had the total variable value. 

For problem 4, the first step was to create a for in loop and then to assign a value of 0 to a total variable. Students then had to use another for in loop to eventually get the values of each boro in a total key within a new dictionary. Lower grades were assigned if the student did not: 
 - use a for in loop on the data set and created a total variable which had the value of 0. 
 - assign the year data to a variable called year_data. 
 - use a for in loop to loop through each boro in year_data. 
 - add to the total variable the values of each boro. 
 - create a new total key which had the total variable value. 

**Problem 5** <br>
**Grade A** <br>
Student could differentiate between which functions to use for each question correctly. Lower grades were assigned if the student could not complete different parts of the assignment. 
