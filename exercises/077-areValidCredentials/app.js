// Write your function here
function areValidCredentials (name, password) {
   return (name.length > 3 && password.length >= 8) 
}

console.log(areValidCredentials('Fran', '12345678'))