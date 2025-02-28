let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount;
    // report[expense.category] = (report[expense.category] || 0) + expense;
    return report;
  },
  { Food: 0, Utilities: 0 }
);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedName = tasks
  .filter((item) => !item.completed)
  .sort((a, b) => a.priority - b.priority);
// console.log(pendingSortedName);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let avarageRating = movieRatings.map((movie) => {
  let avrage =
    movie.ratings.reduce((acc, cur) => acc + cur, 0) / movie.ratings.length;
  return { ...movie, a_rating: avrage.toFixed(2) };
});

console.log(avarageRating);
