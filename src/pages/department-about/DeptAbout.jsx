import { bsdept, csedept, ecedept } from "@/data/aboutdept/data";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DepartmentPage = () => {
  const { dept } = useParams();
  const aboutData =
    dept === "cse"
      ? csedept
      : dept === "ece"
      ? ecedept
      : dept === "bs"
      ? bsdept
      : null;

  if (!aboutData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-gray-600">
        Department Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-10 flex flex-wrap justify-center items-center">
      <h1 className="w-full text-2xl sm:text-4xl font-bold text-center text-gray-800 p-4">
        Department of {aboutData.header}
      </h1>

      <p className="w-full text-lg text-gray-600 leading-relaxed p-14">
        {aboutData.deptdetail || "Details not available."}
      </p>

      {aboutData.stats?.length > 0 && (
        <div className="w-full min-h-fit flex flex-wrap justify-center items-center mt-8 gap-6 p-6">
          {aboutData.stats.map((stat, index) => (
            <div className="grid min-h-[110px] w-full sm:w-1/2 md:w-1/4 h-full p-4 bg-blue-100 rounded-lg text-center" key={index}>
              <h3 className="text-2xl font-semibold">{stat.value}</h3>
              <p className="text-gray-700">{stat.type}</p>
            </div>
          ))}
        </div>
      )}
      {aboutData.subdomains?.length > 0 && aboutData.subdomains.map((subdomain, index) => (
        <div className="mt-12 w-full p-14" key={index}>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-4 border-blue-500 pb-2 mb-10">
            {subdomain.title}
          </h2>

          <ul className="flex flex-wrap justify-start mt-4 w-full text-gray-600 leading-relaxed">
            {subdomain.detail.map((item, index) => (
              <li key={index} className="p-4 font-medium w-full">
                {item}
              </li>
            ))}
          </ul>

          {subdomain.jobarea?.length > 0 && (
            <div className="w-full min-h-fit flex flex-wrap justify-center items-center mt-6 gap-6">
              {subdomain.jobarea.map((item, index) => (
                <div
                  key={index}
                  className="min-h-[100px] w-full sm:w-1/2 md:w-1/4 h-full text-center bg-gray-100 rounded-lg text-gray-700 font-medium flex flex-wrap items-center justify-center p-2"
                >
                  <p >{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentPage;
