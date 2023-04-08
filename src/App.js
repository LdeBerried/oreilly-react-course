import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {id:1, title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28)},
        {id:2, title: "Toilet Paper", amount: 94.67, date: new Date(2021, 5, 12)},
        {id:3, title: "New TV", amount: 1294.67, date: new Date(2021, 8, 28)},
        {id: 4, title: "New Desk (Wooden)", amount: 294.67, date: new Date(2021, 2, 28)},
    ];
    return (
        <div>
            <h1>Let's get started!</h1>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
        </div>
    );
}

export default App;
