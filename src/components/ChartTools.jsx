import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../store';
import { loadDataRate } from '../api/index';
import { getISODate, getDataInterval, createTimeInterval } from '../date';


class ChartTools extends React.Component {
  constructor(){
    super();
      const dateToReq = new Date().toLocaleDateString().replace(/[.]/g, '/');
      const url = `http://cbr.ru/scripts/XML_dynamic.asp?date_req1=01/01/1970&date_req2=${dateToReq}&VAL_NM_RQ=${state.currency.unique_id}`;
      loadDataRate(url).then(res => {
        if(typeof res === 'object'){
        state.dataCurrency = res.Record;
        state.dataCurrencyCurrent = getDataInterval(state.dateFrom,state.dateTo,state.dataCurrency);
        }
      });

  }

  loadData() {
    if(state.dateFrom < state.dateTo && state.dateTo <= new Date()){
    state.dataCurrencyCurrent = getDataInterval(state.dateFrom,state.dateTo,state.dataCurrency);
    }
  }


  render() {
    const dayFromIco = getISODate(state.dateFrom);
    const dayToIco = getISODate(state.dateTo);
    const presentDayIco = getISODate(new Date());

    return (

      <div className='chart-tools'>

        <div className='chart-tools-dates'>
          <span>Курс от: </span>
          <input
            type='date'
            id='from'
          
            max={getISODate(new Date() - 1 )}
            defaultValue={dayFromIco}
            onChange={(e) => {
              if (e.target.value !== '') {
                let date = new Date(e.target.value);
                if(date.getFullYear() > 1970 ){
                state.loadChart = true;
                state.dateFrom = new Date(e.target.value);
                this.loadData();
                }
              }
            }}
          />
          <span>Курс до: </span>
          <input
            type='date'
            id='to'
            min={getISODate(new Date(new Date(dayFromIco) + 1 * 24 * 3600 * 1000))}
            max={presentDayIco}
            defaultValue={dayToIco}
            onChange={(e) => {
              if (e.target.value !== '') {
                let date = new Date(e.target.value);
                if(date.getFullYear() > 1970 ){
                state.loadChart = true;
                state.dateTo = new Date(e.target.value);
                this.loadData();
                }
              }
            }}
          />
        </div>
        <div className="chart-tools-interval">
          <button onClick={() => {
            let interval = createTimeInterval( 7 );
            state.dateFrom = interval.from;
            state.dateTo = interval.to;
            this.loadData();
          }}>7d</button>
          <button onClick={() => {
            let interval = createTimeInterval( 14 );
            state.dateFrom = interval.from;
            state.dateTo = interval.to;
            this.loadData();
          }}>14d</button>
                   <button onClick={() => {
            let interval = createTimeInterval( 30 );
            state.dateFrom = interval.from;
            state.dateTo = interval.to;
            this.loadData();
          }}>30d</button>
                   <button onClick={() => {
            let interval = createTimeInterval( 60 );
            state.dateFrom = interval.from;
            state.dateTo = interval.to;
            this.loadData();
          }}>60d</button>
                   <button onClick={() => {
            let interval = createTimeInterval( 90 );
            state.dateFrom = interval.from;
            state.dateTo = interval.to;
            this.loadData();
          }}>90d</button>
                   <button onClick={() => {
           let interval = createTimeInterval( 180 );
            state.dateFrom = interval.from;
            state.dateTo = interval.to;
            this.loadData();
          }}>180d</button>
                   <button onClick={() => {
             let interval = createTimeInterval( 365 );
              state.dateFrom = interval.from;
            state.dateTo = interval.to;
              this.loadData();
          }}>1y</button>
          <button onClick={() => {
              let maxDay =  Math.round((new Date().getTime() - new Date('1980-01-01'))/24/3600/1000);
              let interval = createTimeInterval( maxDay );
              state.dateFrom = interval.from;
              state.dateTo = interval.to;
              this.loadData();
          }}>Max</button>
        </div>
        <div>
          <button onClick={(e) => (state.typeChart = 'Line')}>Line</button>
          <button onClick={(e) => (state.typeChart = 'Area')}>Area</button>
        </div>
      </div>
    );

  }
}
export default view(ChartTools);
