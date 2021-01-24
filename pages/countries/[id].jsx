import React from 'react';

const Page = ({ country }) => {
  return (
    <div>
      <h1>Country Page for {country.name}</h1>

      <h2>Country: {country.name}</h2>
      <h3>Region: {country.region}</h3>
      <h3>Subregion: {country.subregion}</h3>
      <h3>Population: {country.population}</h3>
    </div>
  )
}

export default Page;

export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`https://restcountries.eu/rest/v2/name/${params.id}`);
  const data = await response.json();

  return {
    props: {country: data[0]}
  }
}