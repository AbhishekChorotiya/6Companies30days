/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    const op = {
        '/':1,
        '*':1,
        '+':1,
        '-':1
    }

    const stack = []

    for(let val of tokens){

        if(!op[val]){
            stack.push(val)
        }else{
            let a = stack.pop()
            let b = stack.pop()
            // console.log(b + val + a)
            if(val=='/'){
                if(eval(b+val+a)>0){
            stack.push(Math.floor(eval(b+val+a)))
                }else{
            stack.push(Math.ceil(eval(b+val+a)))
                }
            }else{
            stack.push(`((${b})${val}(${a}))`)
            }
        }
    }
    return eval(stack[0])
};