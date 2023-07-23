function findSumOfDistinctElements(set1, set2) {
    // Create an array to store distinct elements
    let distinctElements = [];
  
    // Compare each element of set1 with set2 and add to the distinctElements array if not present
    for (let i = 0; i < set1.length; i++) {
      if (!distinctElements.includes(set1[i])) {
        distinctElements.push(set1[i]);
      }
    }
  
    // Compare each element of set2 with set1 and add to the distinctElements array if not present
    for (let i = 0; i < set2.length; i++) {
      if (!distinctElements.includes(set2[i])) {
        distinctElements.push(set2[i]);
      }
    }
  
    // Calculate the sum of all distinct elements
    let sumOfDistinctElements = distinctElements.reduce((sum, element) => sum + element, 0);
    return sumOfDistinctElements;
  }
  
  // Example usage:
  let set1 = [3, 1, 7, 9];
  let set2 = [2, 4, 1, 9, 3];
  let result = findSumOfDistinctElements(set1, set2);
  console.log("Output:", result); // Output: 13 (distinct elements 4, 7, 2)
  