import "./DateCard.css";

function DateCard({ date, todos }) { 
    
  return (
    <li className="date-card">
        
        <div
        style={{
          backgroundColor:
            date % 7 === 0 ? "grey" : date % 7 === 1 ? "pink" :
        date * 1 === 25 ? "red" : ""}}
      >{date}</div>
      <ul>
      {todos?.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </li>
  );
}

export default DateCard;