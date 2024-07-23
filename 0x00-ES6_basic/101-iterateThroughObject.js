export default function iterateThroughObject(reportWithIterator) {
    // Collect employee names in an array
    const employeeNames = [];
    for (const employee of reportWithIterator) {
      employeeNames.push(employee);
    }
  
    // Join the names with '|'
    return employeeNames.join(' | ');
}
  