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


document.getElementById("employee").innerHTML = "My name is " + " " +employee.name + " you can reach out to me at" + " " + employee.emailID+
" . " + "I am " + employee.designation + " at Perficient." + "My contact no is"+
employee.phoneNo + " and I live at " + employee.address.houseNo + " , " + employee.address.streetName + " , " + employee.address.areaName +
" , " + employee.address.cityName + " , " + employee.address.countryName +" .";

