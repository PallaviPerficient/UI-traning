var employee = {
  name: "Mr. Ram Shrirao",
  emailID: "ramshrirao122gmail.com",
  phoneNo: 8805725908,
  age: 21,
  destination: "Intern Consulting (UI)",
  address: {
    houseNo: 203/2,
    streetName: "Police Qtr",
    areaName: "Raghuji Nagar",
    cityName: "Nagpur",
    countryName: "India",
  },
};
console.log(employee);

// Dot Notation
console.log("Employee Name: " + employee.name);
console.log("Employee Email Id: " + employee.emailID);
console.log(employee.address);

//Bracket Notation
console.log("Employee Name: " + employee["name"])
console.log("Employee Email Id: " + employee["emailID"])
console.log(employee["address"])
