import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const placementData = [
  {
    year: 2020,
    highestPackage: 30,
    averagePackage: 9.5,
    medianPackage: 8.5,
    lowestPackage: 3.0,
    totalStudents: 90,
    eligibleStudents: 80,
    placedStudents: 70,
    placedPercentage: 77.78,
    companies: 90,
  },
  {
    year: 2021,
    highestPackage: 35,
    averagePackage: 10.1,
    medianPackage: 8.9,
    lowestPackage: 3.2,
    totalStudents: 110,
    eligibleStudents: 90,
    placedStudents: 80,
    placedPercentage: 88.89,
    companies: 110,
  },
  {
    year: 2022,
    highestPackage: 40,
    averagePackage: 11.2,
    medianPackage: 9.8,
    lowestPackage: 3.0,
    totalStudents: 130,
    eligibleStudents: 115,
    placedStudents: 106,
    placedPercentage: 92.17,
    companies: 130,
  },
  {
    year: 2023,
    highestPackage: 45,
    averagePackage: 12.5,
    medianPackage: 10.5,
    lowestPackage: 3.5,
    totalStudents: 140,
    eligibleStudents: 120,
    placedStudents: 110,
    placedPercentage: 91.67,
    companies: 140,
  },
  {
    year: 2024,
    highestPackage: 47,
    averagePackage: 13.25,
    medianPackage: 11,
    lowestPackage: 3.36,
    totalStudents: 290,
    eligibleStudents: 200,
    placedStudents: 160,
    placedPercentage: 80,
    companies: 154,
    additionalInfo: [
      "Four students from 2024 batch got placed at SMS Data Tech, Japan",
      "Second Highest Package grabbed by our student is 45 LPA",
      "Third Highest Package is 44.92 LPA",
      "18 students from 2024 batch got the package above 20 LPA",
      "Total 154 companies visited for On-campus for 2024 batch",
    ],
  },
];

const PlacementStatistics = () => {
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold text-center">Placement Statistics</h1>

      {/* Placement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {placementData.map((data) => (
          <Dialog key={data.year}>
            <DialogTrigger className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition duration-200">
              <div className="text-lg font-semibold">{data.year} Placements</div>
              <div className="text-gray-600">Avg Package: {data.averagePackage} LPA</div>
              <div className="text-gray-600">Median Package: {data.medianPackage} LPA</div>
            </DialogTrigger>
            <DialogContent className="w-full max-w-lg">
              <DialogHeader>
                <DialogTitle>Placement Data - {data.year}</DialogTitle>
              </DialogHeader>
              <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2">Metric</th>
                    <th className="border border-gray-300 px-4 py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Highest Package</td>
                    <td className="border border-gray-300 px-4 py-2">{data.highestPackage} LPA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Average Package</td>
                    <td className="border border-gray-300 px-4 py-2">{data.averagePackage} LPA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Median Package</td>
                    <td className="border border-gray-300 px-4 py-2">{data.medianPackage} LPA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Total Companies</td>
                    <td className="border border-gray-300 px-4 py-2">{data.companies}</td>
                  </tr>
                  {data.additionalInfo &&
                    data.additionalInfo.map((info, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2" colSpan="2">
                          {info}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* Charts Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart - Average & Median Package */}
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Placement Trend (Avg & Median Package)</h3>
          <div className="w-full h-64">
            <Line
              data={{
                labels: placementData.map((data) => data.year),
                datasets: [
                  {
                    label: "Average Package (LPA)",
                    data: placementData.map((data) => data.averagePackage),
                    borderColor: "blue",
                    backgroundColor: "rgba(0, 0, 255, 0.1)",
                  },
                  {
                    label: "Median Package (LPA)",
                    data: placementData.map((data) => data.medianPackage),
                    borderColor: "green",
                    backgroundColor: "rgba(0, 255, 0, 0.1)",
                  },
                ],
              }}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </div>
        </div>

        {/* Bar Chart - Companies Visited */}
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Number of Companies Visited</h3>
          <div className="w-full h-64">
            <Bar
              data={{
                labels: placementData.map((data) => data.year),
                datasets: [
                  {
                    label: "Companies Visited",
                    data: placementData.map((data) => data.companies),
                    backgroundColor: "orange",
                  },
                ],
              }}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementStatistics;
