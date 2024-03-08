import { act } from "react-dom/test-utils";
import { combineReducers, createStore } from "redux"

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
}

const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    createAt: ''
};

function accountReducer(state = initialStateAccount,action){
    switch(action.type){
        case 'account/deposit':
            return {...state, balance: state.balance + action.payload}
        case 'account/withdraw':
            return {...state, balance: state.balance - action.payload}
        case 'account/requestloan':
            if(state.loan > 0) return state;
            return {...state, loan: action.payload.amount,loanPurpose: action.payload.purpose,balance: state.balance + action.payload.amount};
        case 'account/payloan':
            return {...state, loan: 0,loanPurpose: "",balance: state.balance - state.loan}
        default: return state;
    }       
}

function customerReducer(state = initialStateCustomer,action){
    switch(action.type){
        case 'customer/createCustomer':
            return {...state,fullName: action.payload.fullName,nationalID: action.payload.nationalID,createAt: action.payload.createAt}
        case 'customer/updateName':
            return {...state,fullName: action.payload};
        default: return state
    }
}

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer 
})
const store = createStore(rootReducer);
// store.dispatch({type: 'account/deposit',payload: 500});
// store.dispatch({type: 'account/withdraw',payload: 200});

// store.dispatch({type: 'account/requestloan',payload: {amount: 1000, purpose: 'Buy a car'}})


// store.dispatch({type: 'account/payloan'})
// console.log(store.getState());

function deposit(amount){
    return {type: 'account/deposit',payload: amount}
}
function withdraw(amount){
    return {type: 'account/withdraw',payload: amount}
}
function requestloan(amount,purpose){
    return {type: 'account/requestloan',payload: {amount, purpose}}
}
function payloan(){
    return {type: 'account/payloan'}
}

store.dispatch(deposit(500))
store.dispatch(withdraw(200))
store.dispatch(requestloan(1000,'Buy a cheap car'))
store.dispatch(payloan())


function createCustomer(fullName,nationalID){
    return {type: 'customer/createCustomer', payload: {fullName,nationalID, createAt: new Date().toISOString()}}
}

function updateName(fullName){
    return {type: 'account/updateName',payload: fullName}
}

store.dispatch(createCustomer('Test','123123'));
console.log(store.getState())