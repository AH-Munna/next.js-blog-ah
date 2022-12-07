// redundant

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

const SecondPage = (props) => {
  return (
    <Layout>
      <Head>
        <title>Second Page</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div className="">
      </div>
    </Layout>
  );
};

export default SecondPage;
