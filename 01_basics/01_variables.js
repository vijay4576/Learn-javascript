const accountId = 12312
let accountEmail = "vijay@goole.com"
var accoutPass = 45645
accountCity = "ahmedabad"

// accountId = 21211 not allowed because of variable is declared as constant
accountEmail = "vijju@goole.com"
accountPass = 32321
accountCity = "surat"

/*
prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accoutPass, accountCity])