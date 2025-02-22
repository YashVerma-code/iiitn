import CommitteeTable from "@/components/CommitteeTable";
import { boardOfGovernance, buildingWorksCommittee, financeCommittee, senate } from "@/data/governance/data";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function Governance({}) {
  const { committee } = useParams();
  const [activeTab, setActiveTab] = useState(committee);

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center overflow-x-hidden font-ubuntu bg-[#f0f0f0] p-6 mx-auto">
      {/* Events page header will update in future */}
      {/* <div className="w-full h-[70vh] bg-red-500 mb-5 mt-0 grid grid-cols-11 grid-rows-10 gap-4">
        <div className="col-span-5 row-span-5 border">1</div>
        <div className="col-span-3 row-span-3 col-start-6 border">3</div>
        <div className="col-span-3 row-span-3 col-start-9 border">4</div>
        <div className="col-span-6 row-span-4 col-start-6 row-start-4 border">5</div>
        <div className="col-span-5 row-span-5 row-start-6 border">6</div>
        <div className="col-span-6 row-span-3 col-start-6 row-start-8 border">7</div>
      </div> */}
      <h2 className="text-4xl font-bold w-full text-center mt-10 uppercase">
        Governance Committee
      </h2>
      <div className="grid grid-cols-1 mt-10 border-b-4 pb-8 sm:w-2/3 w-full place-items-center">
        <div className="grid sm:grid-cols-4 grid-cols-2 w-full gap-5 place-items-center text-lg">
          <Link
            to={"/governance/board-of-governors"}
            className={`text-base sm:text-lg md:text-xl font-semibold uppercase text-center p-4 ${
              activeTab === "board-of-governors"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("board-of-governors")}
          >
            board of governors
          </Link>
          <Link
            to={"/governance/inance-committee"}
            className={`text-base sm:text-lg md:text-xl font-semibold uppercase text-center p-4 ${
              activeTab === "finance-committee"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("finance-committee")}
          >
            finance committee
          </Link>
          <Link
            to={"/governance/senate"}
            className={`text-base sm:text-lg md:text-xl font-semibold uppercase text-center p-4 ${
              activeTab === "senate"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("senate")}
          >
            senate
          </Link>
          <Link
            to={"/governance/building-works-committee"}
            className={`text-base sm:text-lg md:text-xl font-semibold uppercase text-center p-4 ${
              activeTab === "building-works-committee"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("building-works-committee")}
          >
            building works committee
          </Link>
        </div>
      </div>
      {activeTab === "board-of-governors" ? (
        <CommitteeTable CommitteData={boardOfGovernance}/>
      ) : activeTab ==="finance-committee"?(
        <CommitteeTable CommitteData={financeCommittee}/>
      ) : activeTab ==="senate"?(
        <CommitteeTable CommitteData={senate}/>
    ):activeTab ==="building-works-committee"?(
          <CommitteeTable CommitteData={buildingWorksCommittee}/>  
      ):<></>
    }
      
    </div>
  );
}
