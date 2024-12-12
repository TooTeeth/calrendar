import "./App.css";
import DateCard from "./components/DateCard";
import data from "./data.json";

function App() {
  return (
    <div className="app-container">
      <h1>24024년 12월 전혁진</h1>
      <ul className="day-list">
        <li>MON</li>
        <li>TUE</li>
        <li>WED</li>
        <li>THU</li>
        <li>FRI</li>
        <li>SAT</li>
        <li>SUN</li>
      </ul>
      <ul className="date-list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        {data.map((v, i) => (
          <DateCard key={i} date={v.date} todos={v.todos} />
        ))}
      </ul>
    </div>
  );
}

export default App;