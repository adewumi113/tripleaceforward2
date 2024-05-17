const employeeSlides = document.querySelectorAll('.employeeslide');
const employeeSlideInterval = 7000;
let currentEmployeeSlide = 0;
const showNextEmployeeSlide = () => {
  employeeSlides[currentEmployeeSlide].style.opacity = '0';
  currentEmployeeSlide = (currentEmployeeSlide + 1) % employeeSlides.length;
  employeeSlides[currentEmployeeSlide].style.opacity = '1';
};
employeeSlides[currentEmployeeSlide].style.opacity = '1';
setInterval(showNextEmployeeSlide, employeeSlideInterval);