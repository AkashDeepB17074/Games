// alert('Connected')
var x = ''
var op =''
var int1 = ''
var int2 = ''
let num = 0
var total = 0
function input(a){
    var scr = document.querySelector('#screen')
    x=x+a
    if(typeof a == "number" && num == 0){
        int1 += a
        console.log(int1, "int1")
    }
    else if(typeof a == "string"){
        if(a == "c"){
            x = ''
            int1=''
            int2=''
            num=0
            total=0
            console.log("hello")
            scr.textContent = "i"
        }
        else if(a == "*" ){
            op = a
            console.log(op, " op")
            if(num > 0){
                console.log("yes", num)
                var ax = parseInt(int1)
                var ay = parseInt(int2)
                total = ax*ay
                console.log(total)
                x = total
                int1 = total
                int2= '0'
                num = 0
            }else
                num+=1
        }
        else if(a == "-"){
            op = a
            console.log(op, " op")
            if(num > 0){
                console.log("yes", num)
                var ax = parseInt(int1)
                var ay = parseInt(int2)
                total = ax-ay
                console.log(total)
                x = total
                int1 = total
                int2= '0'
                num = 0
            }else
                num+=1
        }
        else if(a == "+"){
            op = a
            console.log(op, " op")
            if(num > 0){
                console.log("yes", num)
                var ax = parseInt(int1)
                var ay = parseInt(int2)
                total = ax+ay
                console.log(total)
                x = total
                int1 = total
                int2= '0'
                num = 0
            }else
                num+=1
        }
        else if(a == "/"){
            op = a
            console.log(op, " op")
            if(num > 0){
                console.log("yes", num)
                var ax = parseInt(int1)
                var ay = parseInt(int2)
                total = ax/ay
                console.log(total)
                x = total
                int1 = total
                int2= '0'
                num = 0
            }else
                num+=1
        }
        else if(a == "="){
            input(op)
        }
        else if(a == "."){op = a
            if(num == 0){
            int1 += '.'
            console.log(parseFloat(int1))
        }
            else
            int2 += '.'
        }
    }
    else if(typeof a=="number"){
        int2 += a
        console.log(int2, "int2")
    }


    scr.textContent = x
    
}