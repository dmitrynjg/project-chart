export const getISODate = function (date) {
    let value = date.valueOf() + new Date().getTimezoneOffset() * -60000;
    return new Date(value).toISOString().slice(0, 10);
}

export const createTimeInterval=  function(day) {
  if(new Date().getFullYear() % 4 === 0){
    day++;
  }
  return{
       from: new Date(new Date() - day * 24 * 3600 * 1000 ),
       to: new Date()
  }
}

export const getDataInterval = function(fromDate,toDate,data) {
  if(typeof( fromDate && toDate && data) === 'object'){
    let returnData = [];
    for(let i = 0;i < data.length; i++){
      let dateInfo = data[i].$.Date.split('.');
    
      if((fromDate <= new Date(dateInfo[2],dateInfo[1],dateInfo[0])) && (new Date(dateInfo[2],dateInfo[1],dateInfo[0]) <= toDate)){
         returnData.push(data[i]);
      }
    }
    return returnData;
  }
}