function getNeighbors(row, col, matrix) {
  let adjNodes = [] // store all adjasent
  
  
  // First store than check  
  // add all :

  // Check top
  adjNodes.push([(row - 1), (col)])
  // Check top right
  adjNodes.push([(row - 1), (col + 1)])
  // Check right
  adjNodes.push([(row), (col + 1)])
  // Check bottom right
  adjNodes.push([(row + 1), (col + 1)])
  // Check bottom
  adjNodes.push([(row + 1), (col)])
  // Check bottom left
  adjNodes.push([(row + 1), (col - 1)])
  // Check left
  adjNodes.push([(row), (col - 1)])
  // Check top left
  adjNodes.push([(row - 1), (col - 1)]);

  // Return neighbors, node row exist in matrix and node val = 1
  return adjNodes.filter(nbor => matrix[nbor[0]] && matrix[nbor[0]][nbor[1]])

}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited, 
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];