import Link from "next/link";
import React from "react";
import { use } from "react";

const Articles = ({
  params,
  searchParams,
}: {
  params: Promise<{ articleid: string }>;
  searchParams: Promise<{ lang: string }>;
}) => {
  const articleId = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h1>Read Articles Here</h1>
      <h1>You are reading articles are in this {lang}</h1>
      <Link href={`/articles/${articleId.articleid}?lang=en`}>English</Link>
      <Link href={`/articles/${articleId.articleid}?lang=es`}>Spanish</Link>
      <Link href={`/articles/${articleId.articleid}?lang=fr`}>French</Link>
    </div>
  );
};

export default Articles;
