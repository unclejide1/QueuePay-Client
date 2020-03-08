export const LuhnCheckCard = (number)=> {
  let productSum = 0
 let  productSum2 = 0
  let card_no = number
  //  card_no = str(card_no)
  let strl = card_no.length;
 let  cardType = ""
 let  tempSum = 1
 let newValue = 0
 let total = 0

  if  (card_no.startsWith('34') || card_no.startsWith("37")){
      if (strl === 15){
          cardType = "AMEX"
      }
          
  }
      
  else if (card_no.startsWith('51') || card_no.startsWith('51') || card_no.startsWith('52') || card_no.startsWith('53') 
  || card_no.startsWith('54') || card_no.startsWith('55')){
      if (strl === 16){
          cardType = "MASTERCARD"
      }
      
  }
     
  else if (card_no.startsWith('4')){
      if(strl === 13 || strl === 16){
          cardType = "VISA"
      }
         
  }
      
  else{
      cardType = "INVALID"
  }
     
  for(let i = strl -2 ; i>=0; i -= 2 ){
      tempSum = parseInt(card_no[i]) * 2
      if (tempSum < 10){
          productSum += tempSum
      }
          
      else{
          newValue = 1 + tempSum % 10
          productSum += newValue
      }
  }
     
      
  for(let i = strl -1 ; i>=0; i -= 2 ){
      productSum2 += parseInt(card_no[i])
      
  }
  total = productSum + productSum2
  console.log(total)

  if (total % 10 === 0){
      return (cardType)
  }
      
  else{
      return ("INVALID")
  }
      


}

  