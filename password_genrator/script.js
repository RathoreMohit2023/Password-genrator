const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numberset = "1234567890"
const symbolset = "~!@#$%^&*()_+/"

// selectors

const passwordbox = document.getElementById("pass-box");
const totalchar = document.getElementById("total-char");
const upperinput = document.getElementById("upper-case");
const lowerinput = document.getElementById("lower-case");
const numberinput = document.getElementById("number");
const symbolinput = document.getElementById("symbols");


const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const genratepassword = (password = "") => {
    if(upperinput.checked){
        password += getRandomData(uppercase)
    }
    if(lowerinput.checked){
        password += getRandomData(lowercase)
    }

    if(numberinput.checked){
        password += getRandomData(numberset)
    }

    if (symbolinput.checked){
        password += getRandomData(symbolset)
    }

    if (password.length < totalchar.value){
        return genratepassword(password)
    }

    passwordbox.innerHTML = truncatestring(password, totalchar.value);

}

genratepassword();

document.getElementById("btn").addEventListener("click", function(){
    genratepassword();
})


function truncatestring(str, num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }else{
        return str;
    }
}