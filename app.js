class Bank {
    constructor(){
        this.balance = 0;
        this.transactions = [];
    
    }

    deposit(amount,name,type){
        const depositTx = {amount, name, type: "deposit"};
            this.balance += amount;
            this.transactions.push(depositTx);
            return true;
    }

    withdrawal(amount,name,type){
        const withdrawTx = {amount, name, type: "withdrawal"};
        if(this.balance > amount){  
            this.balance -= amount;
            this.transactions.push(withdrawTx);
            return true;
        } else{
            return false;
        }
    }
    
}

const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
});

let gt = new Bank();
gt.deposit(100, "faith", "deposit");
gt.withdrawal(50, "faith", "withdrawal")
document.getElementById('totalBalance').innerHTML = formatter.format(gt.balance);
console.log(gt.balance);
