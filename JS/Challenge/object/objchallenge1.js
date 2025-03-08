// Validate name: Should be a string
if (typeof name !== "string" || name.trim() === "") {
  return "Invalid input";
}

// Validate age: Should be a positive integer greater than 5
if (typeof age !== "number" || age <= 5 || !Number.isInteger(age)) {
  return "Invalid input";
}

// Validate grade: Should be a string in the format "10th", "12th", etc.
if (typeof grade !== "string" || !/^\d{1,2}th$/.test(grade)) {
  return "Invalid input";
}

// Return student profile if all validations pass
return { name, age, grade };
