// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';
import axios from "axios";

export default async function (amount:number) {
  
  const res = await axios.get(`https://api.exchangeratesapi.io/latest?base=USD`,
      {
        headers: {
         ' access_key':'D0LkIm5vyuhh0B9QTpotqhhy7Ud2glby',
        },
      });
  const data = res.data;
  const exchangeRate = data.rates.PKR;
 
  const pkr = amount * exchangeRate;
  return pkr;
};
