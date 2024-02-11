import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { BsArrowRight } from "react-icons/bs";
import { useTheme } from "../layout";
import Head from 'next/head';
import format from "date-fns";
import Image from 'next/image'

export const Posts = ({ data }) => {
  const theme = useTheme();
  const titleColorClasses = {
    blue: "group-hover:text-blue-600 dark:group-hover:text-blue-300",
    teal: "group-hover:text-teal-600 dark:group-hover:text-teal-300",
    green: "group-hover:text-green-600 dark:group-hover:text-green-300",
    red: "group-hover:text-red-600 dark:group-hover:text-red-300",
    pink: "group-hover:text-pink-600 dark:group-hover:text-pink-300",
    purple: "group-hover:text-purple-600 dark:group-hover:text-purple-300",
    orange: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
    yellow: "group-hover:text-basiskleur dark:group-hover:text-basiskleur",
  };

  return (
    <>
      {data.map((postData) => {
        const post = postData.node;
        return (
          <Link
            key={post._sys.filename}
            href={`/post/` + post._sys.filename}
            passHref
          >
            <a
              key={post.id}
              className="relative group block grid mb-8 last:mb-0 bg-liturgischekleur rounded-xl no-underline"
            >
              <img
              src={post._values.heroImg}
              className="md:absolute md:h-full md:max-w-[25%] w-full h-auto object-cover rounded-xl md:rounded-r-xl shadow-sm place-self-end bottom-0"
              />
              <div className="static px-8 mr-0 py-10 md:w-4/6">
              <h3
                className={`text-basiskleur dark:text-basiskleur text-3xl font-semibold title-font mb-5 transition-all duration-150 ease-out ${
                  titleColorClasses[theme.color]
                }`}
              >
                {post._values.title}{" "}
                <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <BsArrowRight className="inline-block h-8 -mt-1 ml-1 w-auto opacity-70" />
                </span>
              </h3>
              <div className="prose-lg w-full max-w-none mb-5 text-basiskleur text-justify">
                <TinaMarkdown content={post._values.excerpt} />
              </div>
              <div className="flex items-center -mb-2">
                <div className="flex-shrink-0 mr-2">
                  <img
                    className="h-10 w-10 object-cover rounded-full shadow-sm"
                    src={post?.author?.avatar}
                    alt={post?.author?.name}
                  />
                </div>
                <p className="text-sm font-medium text-basiskleur group-hover:text-basiskleur dark:text-basiskleur dark:group-hover:text-white">
                  {post?.author?.name}
                </p>
                <span className="font-bold text-basiskleur dark:text-basiskleur mx-2">
                  —
                </span>
                <p className="text-sm text-basiskleur group-hover:text-basiskleur dark:text-basiskleur dark:group-hover:text-gray-150">
                  {format(new Date(post._values.date), "MMM dd, yyyy")}
                </p>
              </div>
              </div>
            </a>
          </Link>
        )
      })}
      <Head>
        <title>Nieuws @ Sint-Franciscusparochie Heverlee</title>
        <meta name="keywords" content="nieuws,parochienieuws"/>
        <meta name="description" content="Het nieuws uit onze parochie, in een handig overzicht."/>
      </Head>
    </>
  );
};
