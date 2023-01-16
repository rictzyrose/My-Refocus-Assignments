function createBankAccount(balance){
  console.log ('Rose');

  function depositAmount(){
      balance = balance + 200;
      console.log('Deposit amount is 200 you have now ' + balance + '.');
      balance = balance - 100;
      console.log('Withdraw amount is 100 you have now ' + balance + '.');
  }
      return depositAmount

}

const bankAccount = createBankAccount(5000);
bankAccount()

//Task 2 

function createBankAcount (name, balance, callback) {
  console.log(`${name}`);
  balance = balance + 500;
  console.log('Your remaining balance is ' + balance);
  callback(name, balance);
}
function withdraw(name, balance) {
  balance = balance - 300;
  console.log(name + 
      ' Your remaining balance is ' + balance);
}

createBankAcount("Rose.", 5000, withdraw);