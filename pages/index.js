import Head from 'next/head'
import SearchBar from '../src/components/SearchBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Country Search App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Country Search App</h1>

        <SearchBar />
      </main>
    </div>
  );
};
