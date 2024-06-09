import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const IndexPage = () => {
  const [apiTest, setApiTest] = useState([]);

  useEffect(() => {
    fetch("https://yetiserver.com/api/api_test.php")
      .then((response) => response.text())
      .then((data) => {
        try {
          const safeEval = (code) => {
            const func = new Function(code + "; return apiTest;");
            return func();
          };
          const fetchedData = safeEval(data);
          setApiTest(fetchedData);
        } catch (error) {
          console.error("Error evaluating the script:", error);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(apiTest);

  return (
    <section class="bg-white dark:bg-gray-900 font-merriweather h-screen flex items-center justify-center">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex items-center justify-center gap-6 flex-col">
        <a
          href="#"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span class="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 mr-3">
            {apiTest.length > 0 && apiTest[0].test}
          </span>

          <span class="text-sm font-medium">
            React, Php, Cloudflare, Yeti Server
          </span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        {/* <span>
          API Test:
          <label htmlFor="Test" className="ml-2 bg-green-200">
            {apiTest[0].test}
          </label>
        </span> */}
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Deploying React.js Website
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Deploying React.js Website with Cloudflare and Yeti Server. Where
          cloudflare has the frontend and yeti server has the backend.
        </p>

        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span class="font-semibold text-gray-400 uppercase">
            Click here to visit{" "}
            <Link className="underline text-green-600" to="/apanel">
              apanel
            </Link>
          </span>
          <a
            href="https://longtail.info"
            target="_blank"
            rel="noreferrer noopener"
            class="flex justify-center items-center mt-8"
          >
            <img
              src="/longtail_e-media.svg"
              alt="Longtail e-media"
              className="w-64 h-32 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndexPage;
