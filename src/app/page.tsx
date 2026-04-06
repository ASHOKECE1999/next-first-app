import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      Welcome Home!
      <div>
        <Link href="/articles/article-123?lang=en">
          Read article in English
        </Link>
        <Link href="/articles/article-123?lang=es">
          Read article in Spanish
        </Link>
        <Link href="/articles/article-123?lang=fr">Read article in French</Link>
      </div>
    </div>
  );
};

export default Home;
