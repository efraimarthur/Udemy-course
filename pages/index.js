import Head from "next/head";
import CounterExample from "../components/CounterExample";
import HelloWorld from "../components/HelloWorld";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Udemy Course</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <HelloWorld name="Arthur" />
          <CounterExample />
        </div>
      </main>
    </div>
  );
}
