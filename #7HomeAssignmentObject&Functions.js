const bankAccount = {
  "bankAccountId": '232333',
  "accountNumber": '123456789',
  "credentials": ["userName = Rose", "passWord = 2324343", "pin = 234321"],
  "balance": 5000,
  "createdAt": '1/2/2003',
}

const userAccount = {
  "bankAccount": (bankAccount),
  "debitCard": "232324123232",
  "firstName": "Maryrose",
  "lastName": "Antipuesto",
  "birthDate": "9/23/2002",
  "valid": [
      {'passportId': '232942222'},
      {'driversLicence': '2324334333'},
  ],
  "address": 'Cadawinonan Dumaguete City'
}
function getBankAccountDetails(){
  console.log(userAccount)
}
function withdrawMoney(balance, callback){
  console.log("Username = Rose");
  console.log("password = 2324343");

  function wthdrawAmount (){
      balance = balance - 500;
      console.log('Withdraw amount is 500 you have now ' + balance + ', using your account number: 123456789')

  }
      return wthdrawAmount
}
function depositMoney(balance){
  
  function deposmoney () {
      balance = balance + 400;
      console.log('Deposit amount is 400 you have now ' + balance + ', using your account number: 123456789.')
  }
  return deposmoney
}

getBankAccountDetails();
const accountnumber = withdrawMoney(5000);
accountnumber();
const accountNumber = depositMoney(4500);
accountNumber();