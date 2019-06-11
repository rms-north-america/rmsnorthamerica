// findByString - scans array looking for an exact match to the string passed in, returning true if a match is found and false if no match
export const findByString = (array, string) => (array.find((element) => element === string) ? true : false);

// findByProperty - scans array until it finds an exact match and then stops, ignoring any remaining objects in the array
export const findByProperty = (array, name, value) => {
    const object = array.find((object) => object[name] === value); // returns undefined if no match
    return object ? object : {}; // returns only one object from the array or an empty object if no match
};

// findIndexByProperty - returns the index number of the object within the array or -1 if no match
export const findIndexByProperty = (array, name, value) => array.findIndex((object) => object[name] === value);

// includeByProperty - returns a new array containing all the matching objects or an empty array if none match the property
export const includeByProperty = (array, name, value) => array.filter((object) => object[name] === value);

// excludeByProperty - returns a new array containing all the original objects except for any objects matching the property (used to remove an object from an array)
export const excludeByProperty = (array, name, value) => array.filter((object) => object[name] !== value);

// checkStatus - checks the "status" portion of an action type string
export const checkStatus = (string) => string.substr(-7);

// addStatus - adds the given "status" portion of an action type string
export const addStatus = (string, status) => string.concat('_', status);

// removeStatus - removes the "status" portion of an action type string
export const removeStatus = (string) => string.substring(0, string.length - 8);
