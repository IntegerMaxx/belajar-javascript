const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
addEmployee('beni', 'beni@gmail.com', 2021)
console.log(employees);














function addEmployee(name, email, joinYear) {
    var addNewData = {name: name, email: email, joinYear: joinYear}; 
    employees.push(addNewData);
}


 /* @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
 */

function isString(value) {
    return typeof value === 'string';
}
   

// 'beni', 'beni@gmail.com', 2021