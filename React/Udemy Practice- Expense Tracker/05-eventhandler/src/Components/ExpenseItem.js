import Date from './Date';
import './ExpenseItem.css';

// Event Handler
const ExpenseItem = (props) => {
    let hey = props.title

    const clickHandler = () =>{
        hey ="Heyyy";
        console.log("Clicked" ,hey);

    }
  return (
    <div className='expense-item'>
      <Date date={props.date} />
      <div className='expense-item__description'>
        <h2>{hey}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title !!</button>
    </div>
  );
}

export default ExpenseItem;