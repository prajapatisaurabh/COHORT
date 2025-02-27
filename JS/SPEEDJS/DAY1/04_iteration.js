let salesdata = [
  { product: "Laptop", price: 1200 },
  { product: "SmartPhone", price: 800 },
  { product: "Headphone", price: 150 },
  { product: "Keyboard", price: 80 },
];

let totalSales = salesdata.reduce((acc, cur) => acc + cur.price, 0);

let invertory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowStockItems = invertory.filter((item) => item.stock <= 50);
// console.log(lowStockItems);

let userActivity = [
  {
    user: "A",
    activityCount: 45,
  },
  {
    user: "B",
    activityCount: 72,
  },
  {
    user: "C",
    activityCount: 4,
  },
  {
    user: "D",
    activityCount: 5,
  },
];

let mostActiveUser = userActivity.reduce((acc, cur) =>
  cur.activityCount > acc.activityCount ? cur : acc
);
console.log(mostActiveUser);
