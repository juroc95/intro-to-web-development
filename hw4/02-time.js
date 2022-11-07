const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  const start = new Date(date2);
  const end = new Date(date1);
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  if (years === 0) {
    years_string = "";
  } else if (years === 1) {
    years_string = "1 year";
  } else {
    years_string = `${years} years`;
  }
  if (months === 0) {
    months_string = "";
  } else if (months === 1) {
    months_string = "1 month";
  } else {
    months_string = `${months} months`;
  }

  if (years_string.length === 0 || months_string.length === 0) {
    return "Time elapsed: " + years_string + months_string;
  } else if (years_string === "NaN years" || months_string === "NaN months") {
    return "Error: Invalid input provided.";
  } else {
    return "Time elapsed: " + years_string + ", " + months_string;
  }
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, "May 1, 1995"));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, "1975-8-11"));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, "birthdate"));
// Error: Invalid input provided.
