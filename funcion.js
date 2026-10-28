function sigma(n) {
    let suma=0;
    for (let i = 0; i <=n; i++) {
        suma+=i
    }
    return suma
    
}



console.log(sigma(5))

function isValid(username, password) {
    if (username== "user" && password== "qweasd" || username=="admin") {
        return true
    } else {
        return false
    }

}
console.log(isValid("admin", "ahre"))

