import React from "react";

const Admission = () => {
  const courses = [
    { id: 1, name: "B. Tech. Computer Science & Engineering", seats: 223 },
    { id: 2, name: "B. Tech. CSE (Artificial Intelligence & Machine Learning)", seats: 66 },
    { id: 3, name: "B. Tech. CSE (Data Science & Analytics)", seats: 66 },
    { id: 4, name: "B. Tech. CSE (Human Computer Interaction & Gaming Technology)", seats: 66 },
    { id: 5, name: "B. Tech. Electronics & Communication Engineering", seats: 150 },
    { id: 6, name: "B. Tech. ECE (Internet of Things)", seats: 66 },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Title and Online Admission Portal Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-700">B.Tech Admission 2024-2025</h1>
        <a
  href="/admissions/ug/online"
  className="mt-3 sm:mt-0 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
>
  Visit Online Admission Portal
</a>

      </div>

      {/* Important Links */}
      <div className="mt-6 space-y-3">
        <p className="text-red-600 font-semibold">
          🔴 Revised Institute Reporting Schedule 08.08.2024{" "}
          <a href="#" className="text-blue-600 underline">
            Click Here
          </a>
        </p>
        <p className="text-gray-700">
          📢 Notice for latest availability of Hostel Accommodation As on Date 08.08.2024 04:00 PM{" "}
          <a href="#" className="text-blue-600 underline">
            Click Here
          </a>
        </p>
        <p className="text-black font-medium">
          📄 Institute Reporting Schedule 2024-2025{" "}
          <a href="#" className="text-blue-600 underline">
            Click Here
          </a>
        </p>
      </div>

      {/* Course Table */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center">Undergraduate Courses Offered</h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border px-4 py-2">Sr. No.</th>
                <th className="border px-4 py-2">Program Name</th>
                <th className="border px-4 py-2">Total Seat Intake</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="odd:bg-gray-100 even:bg-white">
                  <td className="border px-4 py-2">{course.id}</td>
                  <td className="border px-4 py-2">{course.name}</td>
                  <td className="border px-4 py-2">{course.seats}</td>
                </tr>
              ))}
              <tr className="bg-blue-100 font-semibold">
                <td className="border px-4 py-2 text-center" colSpan="2">Total</td>
                <td className="border px-4 py-2">637</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Links */}
      <div className="mt-6 space-y-3">
        <p className="font-medium">
          📘 More Details About Courses{" "}
          <a href="#" className="text-blue-600 underline">
            Click Here
          </a>
        </p>
        <p className="font-medium">
          💰 Admission Cancellation & Fees Refund Policy{" "}
          <a href="#" className="text-blue-600 underline">
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Admission;
