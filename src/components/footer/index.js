"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data); // Use the submitted data
  };

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 sm:m-1 flex flex-col items-center text-light dark:text-dark bg-black text-white">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={(event) => handleSubmit(onSubmit)(event)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 p-2 bg-white dark:bg-light "
        />
        <input
          type="submit"
          className="bg-white text-black dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-2"
        />
      </form>

      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-center">&copy;2023 CodeTalks. All rights reserved.</span>
        <Link href="/sitemap.xml" className="text-center underline my-4 md:my-0">
          Sitemap
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a href="https://devdreaming.com" className="underline" target="_blank" rel="noopener noreferrer">
            CodeTalks
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
