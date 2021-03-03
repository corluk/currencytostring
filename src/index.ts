 
//@ts-ignore
import  NumberToText   from 'number-to-text';

const getDecimal = (value: number )=>{

    let decimal = value % 1
    let a_decimal = decimal.toString().split(".")
    a_decimal.shift()
     
     decimal = parseInt(a_decimal.join())
    if(a_decimal.length  <2){
         
        decimal = decimal * 10 
    } 
    return decimal

}
export const  convertCurrency= ( value : number | undefined  ) =>{
    let tr = require( "number-to-text/converters/tr")

    let config = {language:"tr",case : "titleCase"}
    let decimal = getDecimal(value as number )

    let integer  = (value as number) - ( (value as number) % 1) 
   let txtInteger : string  = NumberToText.convertToText(integer,config) 
   let txtDecimal = ""
    if(decimal > 0){
         txtDecimal =  NumberToText.convertToText(decimal , config) 
        txtDecimal += "Kuruş"
    }
    txtInteger += "TürkLirası"+txtDecimal
    txtInteger= txtInteger.replace(/[\s,]/g,"")
   return txtInteger
}

 