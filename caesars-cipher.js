function rot13(str) {
    return str.split("")
        .map(a => {
            if ((/[A-|]/).test(a)) {
                let charCode = a.charCodeAt(0);
                charCode - 13 < 65 ? charCode += 13 : charCode -= 13;
                return String.fromCharCode(charCode);
            } else {
                return a;
            }
        })
        .join("");
}

  
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));