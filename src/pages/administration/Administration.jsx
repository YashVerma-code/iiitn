import Profile from "@/components/Profile";
import CommitteeTable from "@/components/CommitteeTable";
import { chaimanDetail, directorDetail, registrarDetail } from "@/data/administration/data";
import {
  boardOfGovernance,
  buildingWorksCommittee,
  financeCommittee,
  senate,
} from "@/data/governance/data";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Administration({}) {
  const { section } = useParams();
  const [activeTab, setActiveTab] = useState(section);

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center overflow-x-hidden font-ubuntu bg-[#f0f0f0] p-6 mx-auto">
      <div
        className="w-full h-[25vh] sm:h-[70vh] bg-cover bg-center sm:bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(/administration/header.jpg)` }}
      ></div>
      <h2 className="text-4xl font-bold w-full text-center mt-10 uppercase">
        Administration
      </h2>
      <div className="grid grid-cols-1 mt-10 border-b-4 pb-8 sm:w-2/3 w-full place-items-center">
        <div className="grid sm:grid-cols-4 grid-cols-2 w-full gap-5 place-items-center text-lg">
          <Link
            to={"/administration/chairman"}
            className={`text-base sm:text-lg md:text-xl font-semibold uppercase text-center p-4 ${
              activeTab === "chairman"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("chairman")}
          >
            Chairman Profile
          </Link>
          <Link
            to={"/administration/director"}
            className={`text-base sm:text-lg md:text-xl font-semibold uppercase text-center p-4 ${
              activeTab === "director"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("director")}
          >
            Director Profile
          </Link>
          <Link
            to={"/administration/registrar"}
            className={`text-base sm:text-lg md:text-xl font-semibold uppercase text-center p-4 ${
              activeTab === "registrar"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("registrar")}
          >
            Registrar Profile
          </Link>
          <Link
            to={"/administration/staff"}
            className={`text-base sm:text-lg md:text-xl font-semibold uppercase text-center p-4 ${
              activeTab === "staff"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("staff")}
          >
            building works committee
          </Link>
        </div>
      </div>
      {activeTab === "chairman" ? (
        <Profile profile={chaimanDetail} />
      ) : activeTab === "director" ? (
        <Profile profile={directorDetail} />
      ) : activeTab === "registrar" ? (
        <Profile profile={registrarDetail} />
      ) : activeTab === "staff" ? (
        <CommitteeTable CommitteData={buildingWorksCommittee} />
      ) : (
        <></>
      )}
    </div>
  );
}
