// import { Course } from '../models';

// let nextCourseId = 1;

// export function createCourse(courses, courseData) {
//   const course = new Course(nextCourseId++, courseData.title, courseData.description);
//   courses.push(course);
//   return course;
// }

// export function getCourseById(courses, courseId) {
//   return courses.find(course => course.id === courseId);
// }

// export function updateCourse(courses, courseId, updateData) {
//   let course = courses.find(course => course.id === courseId);
//   if (!course) return null;
//   course = { ...course, ...updateData };
//   return course;
// }

// export function deleteCourse(courses, courseId) {
//   const index = courses.findIndex(course => course.id === courseId);
//   if (index === -1) return false;
//   courses.splice(index, 1);
//   return true;
// }