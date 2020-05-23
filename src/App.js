import React from "react";
import { view } from "@risingstack/react-easy-state";
import Charts from "./components/Chart";
import ChartsTools from "./components/ChartTools";
import state from "./store";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
      <div className="rate-currancy">
        <h2>Курс {state.currency.title} c {state.dateFrom.toLocaleDateString()} по {state.dateTo.toLocaleDateString()}</h2>
        <ChartsTools/>
        <Charts/>
      </div>
      </React.StrictMode>
    );
  }
}

export default view(App);
