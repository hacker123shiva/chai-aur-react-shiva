const course = {
  coursename: 'js in hinde',
  price: '999',
  courseInstructor: 'hitesh choudhary',
};

//redundancing of course.
console.log(course.courseInstructor);

//instad of this we can use destructuring
const { courseInstructor } = course;
console.log(courseInstructor);

//aliasing of courseInstructor
const { courseInstructor: instructor } = course;
console.log(instructor);

const navbar = ({company}) => {};
navbar(company="hitest");
//In react by default we have to pass props in function component 


//API : In previous time value of api is in xml format but now a days it is in json format.
//API : Application Programming Interface

//key and value generally in string in json formate 
{
    "name": "hitesh",
    "cousename": "js in hinde",
    "price": "free",

}
