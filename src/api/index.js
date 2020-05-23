const xml2js = require('xml2js');

export const loadDataRate = async function (url) {
   let promise = await fetch(url);
   let text = await promise.text();
   const parser = new xml2js.Parser({ explicitArray: false });
   let response = [];
   parser.parseString(text, (err, result) => {
      response = result;
   });
   if (response.ValCurs !== 'Error in parameters') {
      for (let i = 0; i < response.ValCurs.Record.length; i++) {
         response.ValCurs.Record[i].Value = Number(response.ValCurs.Record[i].Value.replace(',', '.'));
      }
   } 
   
    return response.ValCurs;
};