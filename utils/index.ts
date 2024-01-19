/* Utilities */

/**
 * checkIfArray()
 * @param value
 * Check if a value is an array.
 */
const checkIfArray = (value: any) => {
  return Array.isArray(value);
};

/**
 * mergeClasses()
 * @param value
 * Merge an array of classes into a single string.
 */
export const mergeClasses = (value: any) => {
  if (!Array.isArray(value)) {
    console.log("Error: mergeClasses() expects an array as an argument.");
    return;
  }
  return value.join(" ");
};
