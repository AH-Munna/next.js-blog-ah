// redundant

import Link from "next/link";
import Layout from "../../components/layout";

const FirstPage = props => {
    return (<Layout className="">
        <h1 className="text-center text-red-500 font-bold text-5xl my-5">First Post</h1>
        <h2>
            <div className="flex flex-col text-center">
          <Link className="text-3xl" href="/">Back to home</Link>
          <Link className="text-3xl" href="/my-pages/second-page">go to 2nd page</Link>
        </div>
        </h2>
      </Layout>);
}

export default FirstPage;