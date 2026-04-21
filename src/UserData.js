import React, { useContext, useEffect, useRef, useState } from "react";

const UserData = () => {
  const [name, setName] = useState("name");
  const [phone, setPhone] = useState("phone number");
  const [street, setStreet] = useState("address1");
  const [city, setCity] = useState("city");
  const [county, setCounty] = useState("county");
  const [state, setState] = useState("state");
  const [zipcode, setZipcode] = useState("zipcode");

  const refName = useRef();

  useEffect(()=>{
    refName.current.focus();
  }, [])

  const keyDown = (event) =>{
    if(event.key < '0' || event.key > '9')
    {
        event.preventDefault();
    }
  }

  const ZipChange = (event) => {
    setZipcode(event.target.value);
  }

  const StateChange = (event) => {
    setState(event.target.value);
  }

  const CountyChange = (event) => {
    setCounty(event.target.value);
  }

  const CityChange = (event) => {
    setCity(event.target.value);
  }

  const ChangeName = (event) => {
    setName(event.target.value);
  }

  const ChangePhone = (event) => {
    setPhone(event.target.value);
  }

   const ChangeStreet = (event) => {
    setStreet(event.target.value);
  }

  return(
  <>
    Name : <input type="text" value={name} ref={refName} onChange={ChangeName} />
    <br />
    Phone Number : <input  type="text" value={phone} onChange={ChangePhone} onKeyDown={keyDown} />
    <br />
    Street : <input type="text" value={street} onChange={ChangeStreet} />
    <br />
    City : <input type="text" value={city} onChange={CityChange} />
    <br />
    County : <input type="text" value={county} onChange={CountyChange} />
    <br />
    State : <input type="text" value={state} onChange={StateChange} />
    <br />
    Zipcode : <input type="text" value={zipcode} onChange={ZipChange} />
    <br />
  </>
  )
};

export default UserData;
