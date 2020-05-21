import { store } from '@risingstack/react-easy-state';

const state = store({
  typeChart: 'Area',
  dataCurrency: [],
  dataCurrencyCurrent:[],
  currency: {
    title: 'Dollar',
    unique_id:'R01235'
  },
  dateFrom: new Date(new Date() - 180  * 24 * 3600 * 1000),
  dateTo: new Date()
});



export default state;
