import { combineReducers, createStore } from "redux"
import accountReducer from './features/accounts/accountsSlice'
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer 
})
const store = createStore(rootReducer);
export default store;

// store.dispatch({type: 'account/deposit',payload: 500});
// store.dispatch({type: 'account/withdraw',payload: 200});

// store.dispatch({type: 'account/requestloan',payload: {amount: 1000, purpose: 'Buy a car'}})


// store.dispatch({type: 'account/payloan'})
// console.log(store.getState());



// store.dispatch(deposit(500))
// store.dispatch(withdraw(200))
// store.dispatch(requestloan(1000,'Buy a cheap car'))
// store.dispatch(payloan())


// store.dispatch(createCustomer('Test','123123'));
// console.log(store.getState())