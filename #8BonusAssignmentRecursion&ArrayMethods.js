const arr = [
  "Web Developer",
  "Refocus",
  "Web Developer",
  "Web Developer",
  "Refocus",
  "Awesome",
];
const count = arr.reduce((accumulator, value) => {
  accumulator[value] = ++accumulator[value] || 1;
  return accumulator;
}, {});
console.log(count);

//Task 2

let invoiceList = [
  "Invoice 008 ",
  "Invoice 007 ",
  "Invoice 006 ",
  "Invoice 005 ",
];

function reverseList () {
  console.log(invoiceList.reverse())
};
invoiceList.push("Invoice 004 ");
invoiceList.push("Invoice 003 ");
invoiceList.push("Invoice 002 ");
invoiceList.push("Invoice 001 ");

console.log(invoiceList.join (""));
reverseList()