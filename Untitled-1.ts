  //const x = "hello"
//console.log(x.substring(1)) //ello
//console.log(x.charAt(0)) //h

//function reverseString(text: string) {
    //let reverseText = ""
    //for (let i = text.length - 1; i >= 0; i--) {
    //    reverseText += text[i]
   // }
   // return reverseText
//}
//console.log(reverseString(x))//olleh

function recursiveReverseString(text: string):string {
    if (text == "" ){
    return ""
    }
    return recursiveReverseString(text.substring(1)) + text.charAt(0)
}
console.log(recursiveReverseString('hello'))//olleh
console.log(recursiveReverseString('prayuth'))//htuyarp