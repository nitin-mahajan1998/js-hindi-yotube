const accountId = 155456
let accountEmail ="nitin@gmail.com"
var password = "122325"
accountCity = "Mumbai"

// accountId = 2 // not allowed
console.log(accountId);

accountEmail = "sagar@gmail.com"
accountPassword = "252565"
accountCity = "Pune"
let accountState;
console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/