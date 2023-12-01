let inps = document.querySelectorAll("#num input")
let exp = document.querySelectorAll("#expire input")
console.log(inps);
console.log(exp);
inps.forEach((val, index) => {
    val.addEventListener('keyup', () => {
        for (let x = 0; x < 3; x++) {
            if (x == index) {
                if (
                    (val.value.length) == 4
                ) {
                    val.nextElementSibling.focus()
                }
            }else if(index==3){
                if ((val.value.length) == 4) {
                    val.parentElement.nextElementSibling.children[0].children[1].focus()  
                }
            }
        }
    })
});

exp.forEach((val , index) => {
    val.addEventListener('keyup' , ()=>{
        for (let x = 0; x < 1; x++) {
            if (x == index) {
                if (
                    (val.value.length) == 2
                ) {
                    val.nextElementSibling.nextElementSibling.focus()
                }
            }else if(
                    index==1 &&
                    val.value<=12
                ){
                if ((val.value.length) == 2) {
                    val.parentElement.nextElementSibling.children[1].focus()  
                }
            }else if(
                index ==1 &&
                val.value >12
                ){
                val.value = null
            }
        }
    })
});


document.getElementById('cvv2').addEventListener('keyup' , (e)=>{
    if(e.keyCode == 13){
        document.getElementById('holder').focus()
    }
})