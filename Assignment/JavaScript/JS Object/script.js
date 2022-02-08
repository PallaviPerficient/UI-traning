var employee = {
  name: "Pallavi kanfade",
  emailID: "pallavikanfade10@gmail.com",
  phoneNo: 123456789,
  age: 22,
  destination: "Intern Consulting ",
  address: {
    houseNo: 87,
    streetName: "Bhagat lay out ",
    areaName: "Behind Datta Mandir Ward no:8",
    cityName: "Saoner",
    countryName: "India",
  },
};
console.log(employee);

console.log("Employee Name: " + employee.name);
console.log("Employee Email Id: " + employee.emailID);
console.log(employee.address);


console.log("Employee Name: " + employee["name"])
console.log("Employee Email Id: " + employee["emailID"])
console.log(employee["address"])
