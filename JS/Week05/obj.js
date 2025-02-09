// Create an object
const createObject = (key, value) => {
  let obj = {};
  obj[key] = value;
  return obj;
};

// Get the keys of an object
const getObjectKeys = (obj) => {
  return Object.keys(obj);
};

// Get the values of an object
const getObjectValues = (obj) => {
  return Object.values(obj);
};

// Get the entries of an object
const getObjectEntries = (obj) => {
  return Object.entries(obj);
};

// Check if an object has a specific property
const hasProperty = (obj, key) => {
  return obj.hasOwnProperty(key);
};

// Merge two objects
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

// Clone an object
const cloneObject = (obj) => {
  return { ...obj };
};

// Delete a property from an object
const deleteProperty = (obj, key) => {
  delete obj[key];
  return obj;
};

// Freeze an object (make it immutable)
const freezeObject = (obj) => {
  return Object.freeze(obj);
};

// Seal an object (make it non-extensible and properties non-configurable)
const sealObject = (obj) => {
  return Object.seal(obj);
};

// Get the prototype of an object
const getPrototype = (obj) => {
  return Object.getPrototypeOf(obj);
};

// Set the prototype of an object
const setPrototype = (obj, prototype) => {
  Object.setPrototypeOf(obj, prototype);
  return obj;
};
