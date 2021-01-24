import Head from 'next/head'
import Link from 'next/link'

const Home = ({ countries }) => {
  return (
    <div>
      <Head>
        <title>Country Search App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Country Search App</h1>

        <section>
          {countries ? 
            countries.map((country) => 
              (<Link key={country.name} href="/countries/[id]" as={`/countries/${country.name}`}>
                <a>
                  <div>
                    {country.name}
                  </div>
                </a>
              </Link>)) : 
            <div>No countries</div>
          }
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json()

  return {
    props: {
      countries,
    },
  }
}
