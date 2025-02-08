JavaScript has a vast number of built-in methods across different objects like **String, Array, Object, Math, Date, etc.** Below is a categorized list of **JavaScript methods** for quick reference. 🚀

---

## **1️⃣ String Methods**

Methods used to manipulate strings.

```javascript
string.length; // Get length of string
string.charAt(index); // Get character at index
string.charCodeAt(index); // Get Unicode of character at index
string.concat(str1, str2); // Concatenate strings
string.includes("text"); // Check if substring exists
string.indexOf("text"); // Find position of first match
string.lastIndexOf("text"); // Find position of last match
string.toUpperCase(); // Convert to uppercase
string.toLowerCase(); // Convert to lowercase
string.replace("old", "new"); // Replace substring
string.split("separator"); // Split into an array
string.substring(0, 5); // Extract part of string
string.slice(-3); // Extract last 3 characters
string.trim(); // Remove whitespace from both ends
string.padStart(5, "0"); // Pad start with characters
string.padEnd(5, "0"); // Pad end with characters
```

---

## **2️⃣ Array Methods**

Methods for array operations.

```javascript
array.length; // Get array length
array.push(item); // Add item to end
array.pop(); // Remove last item
array.unshift(item); // Add item to start
array.shift(); // Remove first item
array.splice(index, count); // Remove/replace elements
array.slice(start, end); // Extract part of array
array.indexOf(item); // Find index of item
array.lastIndexOf(item); // Find last occurrence index
array.includes(item); // Check if item exists
array.concat(arr2); // Merge arrays
array.join(", "); // Convert array to string
array.reverse(); // Reverse array
array.sort(); // Sort array alphabetically
array.find(callback); // Find first matching element
array.findIndex(callback); // Find index of first match
array.filter(callback); // Filter elements based on condition
array.map(callback); // Transform array
array.reduce(callback); // Reduce array to single value
array.every(callback); // Check if all match condition
array.some(callback); // Check if at least one matches
```

---

## **3️⃣ Object Methods**

Methods for handling objects.

```javascript
Object.keys(obj); // Get array of keys
Object.values(obj); // Get array of values
Object.entries(obj); // Get array of [key, value] pairs
Object.assign(target, source); // Copy properties
Object.freeze(obj); // Prevent modifications
Object.seal(obj); // Prevent adding/removing properties
Object.hasOwnProperty("key"); // Check if object has key
```

---

## **4️⃣ Number Methods**

Methods for working with numbers.

```javascript
Number.isInteger(value); // Check if value is an integer
Number.isNaN(value); // Check if value is NaN
num.toFixed(2); // Format with decimal places
num.toPrecision(3); // Format with specific length
parseInt("42"); // Convert string to integer
parseFloat("3.14"); // Convert string to float
```

---

## **5️⃣ Math Methods**

Mathematical operations.

```javascript
Math.abs(-5); // Absolute value
Math.ceil(4.3); // Round up
Math.floor(4.9); // Round down
Math.round(4.5); // Round to nearest integer
Math.max(10, 20, 5); // Find maximum
Math.min(10, 20, 5); // Find minimum
Math.random(); // Random number (0-1)
Math.pow(2, 3); // Power (2^3)
Math.sqrt(25); // Square root
Math.trunc(4.9); // Remove decimal
```

---

## **6️⃣ Date Methods**

For handling dates and time.

```javascript
const now = new Date();
now.getFullYear(); // Get current year
now.getMonth(); // Get month (0-11)
now.getDate(); // Get day of month
now.getDay(); // Get day of week (0-6)
now.getHours(); // Get hours (0-23)
now.getMinutes(); // Get minutes (0-59)
now.getSeconds(); // Get seconds (0-59)
now.getMilliseconds(); // Get milliseconds
now.getTime(); // Get timestamp (ms since 1970)
now.toISOString(); // Convert to ISO string
now.toLocaleDateString(); // Format date to local string
```

---

## **7️⃣ Function Methods**

Methods to manipulate functions.

```javascript
function sayHello() {
  console.log("Hello");
}
sayHello.call(); // Invoke function
sayHello.apply(); // Invoke function (array args)
const newFunc = sayHello.bind(this); // Create new bound function
```

---

## **8️⃣ Promise Methods**

For handling asynchronous operations.

```javascript
Promise.resolve(value); // Create resolved promise
Promise.reject(error); // Create rejected promise
Promise.all([p1, p2]); // Wait for all promises
Promise.race([p1, p2]); // Resolve as soon as one is done
```

---

## **9️⃣ JSON Methods**

Methods for working with JSON.

```javascript
JSON.stringify(obj); // Convert object to JSON string
JSON.parse(jsonString); // Convert JSON string to object
```

---

## **🔟 Console Methods**

Methods to print debug information.

```javascript
console.log("Hello"); // Print message
console.warn("Warning!"); // Print warning
console.error("Error!"); // Print error
console.table({ a: 1, b: 2 }); // Print table
console.time("label"); // Start timer
console.timeEnd("label"); // End timer
```

---

## **Extra: DOM Methods (For Web Development)**

Methods for manipulating the Document Object Model (DOM).

```javascript
document.getElementById("id"); // Get element by ID
document.getElementsByClassName("class"); // Get elements by class
document.getElementsByTagName("tag"); // Get elements by tag
document.querySelector("selector"); // Get first match
document.querySelectorAll("selector"); // Get all matches
element.innerHTML = "New Content"; // Change HTML content
element.style.color = "red"; // Change CSS
element.setAttribute("attr", "value"); // Set attribute
element.addEventListener("click", myFunction); // Add event listener
```

---

### **🎯 Final Thoughts**

This is a **comprehensive list** of the most useful JavaScript methods. Let me know if you need details on any of them! 🚀😃
