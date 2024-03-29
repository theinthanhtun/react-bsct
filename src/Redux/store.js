import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './features/accounts/accountsSlice'
import customerReducer from "./features/customers/customerSlice";

const store =configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer
    }
})
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