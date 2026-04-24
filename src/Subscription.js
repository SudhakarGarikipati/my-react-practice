import react, { useReducer } from "react";

const Subscription = () => {
    const [value, dispatch] = useReducer(function(value, action){
        if(action == "SUB")
        {
            value +=1;
        }
        if(action == "UnSub")
        {
            value -=1;
        }
        return value;
    }, 0);

    const incrSubscrition = () => {
            dispatch("SUB");
    }

    const dicrSubscription = () => {
            dispatch("UnSub");
    }

    return(
        <>
        <button onClick={incrSubscrition}>Subscribe</button> 
        <b><i>Followers</i></b>: {value} 
        <button type="button" onClick={dicrSubscription}>UnSubscribe</button>
        </>
    )
}

export default Subscription;