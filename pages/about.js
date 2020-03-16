import React from "react";
import Link from "next/link";

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export const getStaticProps = async () => {
  await sleep(2000);
  return { props: { foo: "bar" } };
};

export default () => (
  <>
    <h1>ABOUT</h1>
    <p>Just some text so that the difference is more visible.</p>
    <Link href="/">
      <a>Index</a>
    </Link>
  </>
);
