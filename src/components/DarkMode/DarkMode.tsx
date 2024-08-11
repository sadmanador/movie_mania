"use client";
import { useState, useEffect } from "react";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<string>("light");


  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "business" ? "pastel" : "business"));
  };

  return (
    <div onClick={toggleTheme}>
      {theme === "business" ? (
        <button className="bg-neutral-700 p-2 rounded-full hover:bg-neutral-400">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--emojione"
            preserveAspectRatio="xMidYMid meet"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <g fill="#ffe62e">
                {" "}
                <path d="M20.5 59.7l7-7.2c-2.5-.5-4.8-1.5-6.9-2.9l-.1 10.1">
                  {" "}
                </path>{" "}
                <path d="M43.5 4.3l-7 7.2c2.5.5 4.8 1.5 6.9 2.9l.1-10.1">
                  {" "}
                </path>{" "}
                <path d="M4.3 43.5l10.1-.1C13 41.3 12 39 11.5 36.5l-7.2 7">
                  {" "}
                </path>{" "}
                <path d="M59.7 20.5l-10.1.1c1.3 2.1 2.3 4.4 2.9 6.9l7.2-7">
                  {" "}
                </path>{" "}
                <path d="M4.3 20.5l7.2 7c.5-2.5 1.5-4.8 2.9-6.9l-10.1-.1">
                  {" "}
                </path>{" "}
                <path d="M59.7 43.5l-7.2-7c-.5 2.5-1.5 4.8-2.9 6.9l10.1.1">
                  {" "}
                </path>{" "}
                <path d="M20.5 4.3l.1 10.1c2.1-1.3 4.4-2.3 6.9-2.9l-7-7.2">
                  {" "}
                </path>{" "}
                <path d="M43.5 59.7l-.1-10.1C41.3 51 39 52 36.5 52.5l7 7.2">
                  {" "}
                </path>{" "}
              </g>{" "}
              <g fill="#ffce31">
                {" "}
                <path d="M14.8 44l-4 9.3l9.3-4C18 47.8 16.2 46 14.8 44">
                  {" "}
                </path>{" "}
                <path d="M49.2 20l4-9.3l-9.2 4c2 1.5 3.8 3.3 5.2 5.3"> </path>{" "}
                <path d="M11.4 28.3L2 32l9.4 3.7c-.3-1.2-.4-2.4-.4-3.7s.1-2.5.4-3.7">
                  {" "}
                </path>{" "}
                <path d="M52.6 35.7L62 32l-9.4-3.7c.2 1.2.4 2.5.4 3.7c0 1.3-.1 2.5-.4 3.7">
                  {" "}
                </path>{" "}
                <path d="M20 14.8l-9.3-4l4 9.3c1.5-2.1 3.3-3.9 5.3-5.3"> </path>{" "}
                <path d="M44 49.2l9.3 4l-4-9.3C47.8 46 46 47.8 44 49.2"> </path>{" "}
                <path d="M35.7 11.4L32 2l-3.7 9.4c1.2-.2 2.5-.4 3.7-.4s2.5.1 3.7.4">
                  {" "}
                </path>{" "}
                <path d="M28.3 52.6L32 62l3.7-9.4c-1.2.3-2.4.4-3.7.4s-2.5-.1-3.7-.4">
                  {" "}
                </path>{" "}
                <circle cx="32" cy="32" r="19">
                  {" "}
                </circle>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      ) : (
        <button className="bg-slate-700 p-2 rounded-full hover:bg-sky-600">
          <svg
            height="25px"
            width="25px"
            version="1.1"
            id="_x36_"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path
                    style={{ fill: "#F0EEDB" }}
                    d="M90.822,60.408c105.574-92.296,264.984-76,357.28,29.574s84.138,262.286-21.436,354.583 S158.688,529.26,66.392,423.687S-14.752,152.704,90.822,60.408z"
                  />
                  <path
                    style={{ fill: "#EBE9D2" }}
                    d="M107.702,89.331c99.918-87.352,248.823-74.176,333.823,23.051s75.389,243.385-24.528,330.736 c-99.918,87.352-251.733,82.319-336.733-14.909S7.784,176.683,107.702,89.331z"
                  />
                  <g>
                    <path
                      style={{ fill: "#D4D5B1" }}
                      d="M244.034,141.578C226.114,178.849,181.001,192.92,143.73,175 c-37.271-17.92-53.236-61.358-35.316-98.629c17.92-37.271,62.836-54.047,100.107-36.127 C245.792,58.164,261.954,104.307,244.034,141.578z"
                    />
                    <path
                      style={{ opacity: 0.06, fill: "#040000" }}
                      d="M128.089,97.737c17.92-37.271,62.836-54.047,100.107-36.127 c4.127,1.984,7.995,4.316,11.586,6.943c-7.335-11.909-17.951-21.909-31.261-28.309c-37.271-17.92-82.187-1.144-100.107,36.127 c-15.805,32.873-5.247,70.539,23.036,91.267C118.965,147.179,116.792,121.234,128.089,97.737z"
                    />
                  </g>
                  <path
                    style={{ fill: "#D4D5B1" }}
                    d="M217.126,218.456c-1.17-5.733,2.71-11.178,8.442-12.348c5.733-1.17,11.248,2.359,12.418,8.092 s-2.456,11.466-8.189,12.636C224.065,228.005,218.296,224.189,217.126,218.456z"
                  />
                  <path
                    style={{ opacity: 0.5, fill: "#FFFFFF" }}
                    d="M363.159,97.031c-1.17-5.733,2.71-11.178,8.442-12.348s11.248,2.359,12.418,8.092 c1.17,5.733-2.456,11.466-8.189,12.636C370.097,106.581,364.328,102.764,363.159,97.031z"
                  />
                  <path
                    style={{ fill: "#D4D5B1" }}
                    d="M282.758,398.482c8.691-7.598,21.813-6.256,29.411,2.434c7.598,8.691,6.926,21.591-1.765,29.189 c-8.691,7.598-22.06,6.972-29.658-1.719C273.149,419.697,274.067,406.08,282.758,398.482z"
                  />
                  <path
                    style={{ opacity: 0.5, fill: "#FFFFFF" }}
                    d="M58.328,221.051c-1.17-5.733,2.71-11.178,8.442-12.348 c5.733-1.17,11.248,2.359,12.418,8.092c1.17,5.733-2.456,11.466-8.189,12.636C65.267,230.6,59.498,226.784,58.328,221.051z"
                  />
                  <path
                    style={{ fill: "#D4D5B1" }}
                    d="M468.957,281.792c-3.725,36.65-37.257,62.1-73.907,58.374c-36.65-3.725-63.179-35.28-59.453-71.93 c3.725-36.65,36.273-64.306,72.923-60.581C445.17,211.381,472.683,245.142,468.957,281.792z"
                  />
                  <g>
                    <path
                      style={{ fill: "#D4D5B1" }}
                      d="M173.243,331.228c14.631,25.328,4.867,57.296-20.461,71.927 c-25.328,14.631-57.072,6.642-71.703-18.687c-14.631-25.328-6.526-58.259,18.802-72.89 C125.209,296.946,158.611,305.899,173.243,331.228z"
                    />
                    <path
                      style={{ opacity: 0.06, fill: "#040000" }}
                      d="M112.82,324.421c18.464-10.666,41.211-8.787,57.856,2.82 c-15.693-22.239-46.848-29.497-70.796-15.664c-25.328,14.631-33.433,47.562-18.802,72.89c4.04,6.993,9.388,12.657,15.541,16.895 c-0.915-1.299-1.789-2.644-2.602-4.052C79.387,371.983,87.492,339.052,112.82,324.421z"
                    />
                  </g>
                  <path
                    style={{ opacity: 0.06, fill: "#040000" }}
                    d="M349.708,282.184c3.725-36.65,36.272-64.306,72.923-60.581 c12.217,1.242,23.416,5.824,32.783,12.736c-11.007-14.534-27.695-24.731-46.895-26.682c-36.65-3.725-69.197,23.931-72.922,60.581 c-2.465,24.248,8.316,46.262,26.507,59.465C352.784,315.151,347.977,299.219,349.708,282.184z"
                  />
                </g>
                <path
                  style={{ opacity: 0.1, fill: "#040000" }}
                  d="M254.816,381.8c-105.36,0-198.423-52.065-254.726-131.657 C-2.613,349.865,55.643,444.482,154.03,486.89c128.776,55.508,279.654,1.534,335.162-127.242 c15.267-35.419,21.657-72.749,20.289-109.419C453.171,329.772,360.138,381.8,254.816,381.8z"
                />
              </g>
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ThemeToggleButton;
