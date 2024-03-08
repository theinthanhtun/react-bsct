import "./components/index.css"; 
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import store from './store';
import { Provider, useSelector } from "react-redux";

store.dispatch({type: 'account/deposit',payload: 100});
console.log(store.getState());

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  
  return (
    
      <div>
        <h1>🏦 The React-Redux Bank ⚛️</h1>
        {fullName === '' ? (
        <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )}
      </div>
  );
}

export default App;