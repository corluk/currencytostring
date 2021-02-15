//@ts-ignore
import NumberToText from  "number-to-text"
import  {convertCurrency} from "../src"
 
test("01" , ()=>{
    // 
    let tr = require( "number-to-text/converters/tr")
    let text  =  NumberToText.convertToText(1,{language:"tr",case : "lowerCase"})
    let text2= NumberToText.convertToText(1137.50, {language:"tr",case : "lowerCase"})
    expect(text).toBe("bir")
})

test("01" , ()=>{
    let number= 1 
    let txt = "BirTürkLirası"
   let converted  =  convertCurrency(number)
    expect(converted).toBe(txt)
 
})

test("02" , ()=>{
    let number= 1.5
    let txt = "BirTürkLirasıElliKuruş"
   let converted  =  convertCurrency(number)
    expect(converted).toBe(txt)
 
})

test("03" , ()=>{
    let number= 2950.50
    let txt = "İkiBinDokuzYüzElliTürkLirasıElliKuruş"
   let converted  =  convertCurrency(number)
    expect(converted).toBe(txt)
 
})

test("04" , ()=>{
    let number= 3790
    let txt = "ÜçBinYediYüzDoksanTürkLirası"
   let converted  =  convertCurrency(number)
    expect(converted).toBe(txt)
 
})