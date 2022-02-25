let alphas = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let digits = "0123456789";

function isAlpha(c) {
return (alphas.indexOf(c) != -1);
}

function isDigit(c) {
return (digits.indexOf(c) != -1);
}

function isAlphaNum(c) {
return (isAlpha(c) || isDigit(c));
}


export function encoder(s, cs){
    if (s==""){
        return s
    }
    if (!cs){
        s = s.toLowerCase();
    }
    let result = "";
    let count = 1
    for(var i=0;i<s.length;i++){
        try {
            if (isAlphaNum(s[i])){
                if (s[i] === s[i+1]){
                    count++;
                }else{
                    result = result + s[i] + count.toString();
                    count = 1;
                }
            }
            else{
                result = result + s[i]
                continue;
            }
        } catch (error) {
            result = result + s[i] + count.toString();
        }
    }
    return result
}