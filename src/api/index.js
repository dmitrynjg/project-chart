const xml2js = require('xml2js');

export const loadDataRate = async function (url) {
   const myHeaders = new Headers();
   for (var value of myHeaders.values()) {
      console.log(value); 
   }
   console.log(myHeaders);
// const option = {
//   method: 'GET',
//   headers: myHeaders,
//   mode: 'cors',
//   cache: 'default'
// };
//    let res = await fetch(url, option );
//    let text = await res.text();
//    console.log(res)
//    const parser = new xml2js.Parser({ explicitArray: false });
//    let response = [];
//    parser.parseString(text, (err, result) => {
//       response = result;
//    });
//    if (response.ValCurs !== 'Error in parameters') {
//       for (let i = 0; i < response.ValCurs.Record.length; i++) {
//          response.ValCurs.Record[i].Value = Number(response.ValCurs.Record[i].Value.replace(',', '.'));
//       }
//    } 
   
//     return response.ValCurs;
};