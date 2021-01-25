/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Head from 'next/head';
import Link from 'next/link';

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
          <div sx={{variant: "containers.list"}}>
            {countries ?
              countries.map(country =>
                (<div sx={{width: '33%', p: 2}} key={country.name}>
                  <Link href="/countries/[id]" as={`/countries/${country.name}`}>
                    <a>
                      <div sx={{variant: "containers.card"}}>{country.name}</div>
                    </a>
                  </Link>
                </div>)) :
              <div>Loading</div>
            }
          </div>
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
