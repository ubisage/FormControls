// import React, { useState, useEffect } from 'react';

// import Card from '../UI/Card/Card';
// import classes from './Login.module.css';
// import Button from '../UI/Button/Button';

// const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);
//  useEffect(() => {
//   const identifier=setTimeout(()=>{
// console.log('cheking form validity!');
// setFormIsValid(
//   enteredEmail.includes('@') && enteredPassword.trim().length > 6
//  )
//   },500);
//   return ()=>{
//     console.log('CLEANUP');
//     clearTimeout(identifier);
//   }

// }, [enteredEmail,enteredPassword])

//   const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);

//     // setFormIsValid(
//     //   event.target.value.includes('@') && enteredPassword.trim().length > 6
//     // );
//   };

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);

//     // setFormIsValid(
//     //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
//     // );
//   };

//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes('@'));
//   };

//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(enteredEmail, enteredPassword);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div
//           className={`${classes.control} ${
//             emailIsValid === false ? classes.invalid : ''
//           }`}
//         >
//           <label htmlFor="email">E-Mail</label>
//           <input
//             type="email"
//             id="email"
//             value={enteredEmail}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//             passwordIsValid === false ? classes.invalid : ''
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={enteredPassword}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;

// ----------------------------USEREDUCER------------------------------------------

// import React, { useState, useEffect, useReducer } from "react";

// import Card from "../UI/Card/Card";
// import classes from "./Login.module.css";
// import Button from "../UI/Button/Button";

// const emailReducer = (state, action) => {

//   if(action.type === 'USER_INPUT'){
//     return { value: action.val, isValid: action.val.includes('@')}
//     // return { value: '', inValid: false };empty snapshot
//   }
//   if(action.type === 'INPUT_BLUR'){
//   return { value: state.value, isValid: state.value.includes('@') }
//   }
//   return { value: '', inValid: false };
// };
// const passwordReducer= (state,action)=>{
//   if(action.type === 'USER_INPUT'){
//   return {value:action.val, isValid:action.val.trim().length>6}
//   }
//   if(action.type === 'INPUT_BLUR'){
//     return { value: state.value, isValid: state.value.trim().length>6 }
//     }
//     return { value: '', inValid: false };

// }

// const Login = (props) => {
//   // const [enteredEmail, setEnteredEmail] = useState("");
//   // const [emailIsValid, setEmailIsValid] = useState();

//   // const [enteredPassword, setEnteredPassword] = useState("");
//   // const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);
//   const [passwordState, dispatchPassword] = useReducer(passwordReducer,
//      {value:"", isValid:null})

//   const [emailState, dispatchEmail] = useReducer(
//     emailReducer,
//     { value: "", isValid: null },
   
//   );

//   // useEffect(() => {
//   //   const identifier = setTimeout(() => {
//   //     console.log("cheking form validity!");
//   //     setFormIsValid(
//   //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
//   //     );
//   //   }, 500);
//   //   return () => {
//   //     console.log("CLEANUP");
//   //     clearTimeout(identifier);
//   //   };
//   // }, [enteredEmail, enteredPassword]);

//   const emailChangeHandler = (event) => {
//     // setEnteredEmail(event.target.value);
// dispatchEmail({type:'USER_INPUT', val: event.target.value})
//     setFormIsValid(
//       event.target.value.includes('@') && passwordState.isValid
//     );
//   };

//   const passwordChangeHandler = (event) => {
//     dispatchPassword({type:'USER_INPUT', val:event.target.value})
//     // setEnteredPassword(event.target.value);

//     setFormIsValid(
//       event.target.value.trim().length > 6 && emailState.isValid
//     );
//   };

//   const validateEmailHandler = () => {
//     // setEmailIsValid(emailState.isValid);
//     dispatchEmail({type: 'INPUT_BLUR'});
//   };

//   const validatePasswordHandler = () => {
//     // setPasswordIsValid(enteredPassword.trim().length > 6);
//     dispatchPassword({type:'INPUT_BLUR'});
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(emailState.value, passwordState.value);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div
//           className={`${classes.control} ${
//             emailState.isValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="email">E-Mail</label>
//           <input
//             type="email"
//             id="email"
//             value={emailState.value}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//             passwordState.isValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={passwordState.value}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;







// ----------------------------USEREDUCER still from validity state depends on other state------------------------ 



import React, { useState, useEffect, useReducer,useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {

  if(action.type === 'USER_INPUT'){
    return { value: action.val, isValid: action.val.includes('@')}
    // return { value: '', inValid: false };empty snapshot
  }
  if(action.type === 'INPUT_BLUR'){
  return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', inValid: false };
};
const passwordReducer= (state,action)=>{
  if(action.type === 'USER_INPUT'){
  return {value:action.val, isValid:action.val.trim().length>6}
  }
  if(action.type === 'INPUT_BLUR'){
    return { value: state.value, isValid: state.value.trim().length>6 }
    }
    return { value: '', inValid: false };

}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();

  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [passwordState, dispatchPassword] = useReducer(passwordReducer,
     {value:"", isValid:null})

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    { value: "", isValid: null },
   
  );
  const authCtx = useContext(AuthContext)

  const {isValid: emailISValid}= emailState;
  const {isValid: passwordIsValid}= passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("cheking form validity!");
      setFormIsValid(
        // emailState.isValid && passwordState.isValid
        emailISValid && passwordIsValid
      );
    }, 500);
    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailISValid, passwordIsValid]);



  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
dispatchEmail({type:'USER_INPUT', val: event.target.value})

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT', val:event.target.value})
    // setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type:'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;