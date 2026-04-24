import react, { Fragment } from "react";
import useFetch from "./useFetch";
import useCountries from "./useCountries";

const Countries = ({name}) => {
  const countries = useCountries(name);
  return (
    <>
      {!countries ? (<>Waiting...!</>) :
       (
        <>{
            countries.map(function (name, index) {
              return <Fragment key={index}>{name}<br/>
              </Fragment>
            })
          }</>
       )
      }
    </>
  );
};
export default Countries;
