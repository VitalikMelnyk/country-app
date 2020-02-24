import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const SelectBox = () => {
  //   const [country, setCountry] = useState("US");
  //   const [description, setDescription] = useState({});
  const LIST_COUNTRIES = gql`
    {
      continents {
        code
        name
        countries {
          name
          code
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(LIST_COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data.continents);
  console.log(data.continents.countries);
  return (
    <>
      {/* <select
        value={country}
        onChange={event => setCountry(event.target.value)}
      >
        {data.countries.map(country => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <div>
        {data.countries.map(country => (
          <div key={country.code}>
            <p>Name: {country.name}</p>
            <p>Native: {country.native}</p>
            <p>Currency: {country.currency}</p>
          </div>
        ))}
      </div> */}
      {data.continents.map(continent => (
        <div key={continent.code}>
          <h1>{continent.name}</h1>
          {continent.countries.map(country => (
            <div key={country.code}>
              <h3>{country.name}</h3>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
