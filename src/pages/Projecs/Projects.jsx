import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";

const Projects = ({
  Upcomingprojects,
  Completedprojects,
  headerImg,
  consultancyProjects,
}) => {
  return (
    <div className="w-auto min-h-screen flex flex-wrap justify-center overflow-x-hidden font-ubuntu bg-[#f0f0f0] ">
      <div
        className="w-full h-[77vh] bg-cover bg-center sm:bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${headerImg})` }}
      ></div>

      <div className="w-full lg:min-w-[100px] lg:w-5/6 md:w-full min-h-screen flex flex-col flex-wrap items-center gap-10 py-16 px-10">
        <div className="w-full h-[80px] flex justify-center items-center border-b-4">
          <h1 className="w-[80%] h-full text-center text-4xl uppercase">
            Projects
          </h1>
        </div>
        <div className="w-full h-[40px] flex justify-center items-center">
          <h2 className="w-full h-full text-center md:text-left text-2xl uppercase">
            Ongoing projects :
          </h2>
        </div>
        <DataTable
          value={Upcomingprojects}
          tableStyle={{ minWidth: "20rem" }}
          paginator
          showGridlines
          rows={5}
          sortField="sno"
          className="w-full p-2 sm:text-base text-sm"
          emptyMessage="No upcoming projects."
        >
          <Column
            field="sno"
            sortable
            header="SNO"
            style={{
              width: "7%",
              height: "100px",
              borderBottom: "2px solid #e5e7eb",
              padding: "12px",
            }}
          />
          <Column
            field="name_of_faculty"
            header="Name of Faculty"
            sortable
            style={{
              width: "20%",
              height: "100px",
              minWidth:"188px",
              borderBottom: "2px solid #e5e7eb",
              padding: "12px",
            }}
          />
          <Column
            field="title_of_project"
            header="Project Title"
            sortable
            style={{
              width: "30%",
              height: "100px",
              minWidth:"300px",
              borderBottom: "2px solid #e5e7eb",
              padding: "12px",
            }}
          />
          <Column
            field="total_funding"
            header="Total Funding"
            sortable
            style={{
              width: "15%",
              height: "100px",
              minWidth:"120px",
              borderBottom: "2px solid #e5e7eb",
              padding: "12px",
            }}
          />
          <Column
            field="end_date"
            header="End Date"
            sortable
            style={{
              width: "15%",
              height: "100px",
              minWidth:"110px",
              borderBottom: "2px solid #e5e7eb",
              padding: "12px",
            }}
          />
          <Column
            field="funding_organization"
            header="Funding Organization"
            sortable
            style={{
              width: "15%",
              height: "100px",
              minWidth:"120px",
              borderBottom: "2px solid #e5e7eb",
              padding: "12px",
            }}
          />
        </DataTable>
      </div>

      <div className="w-full lg:min-w-[100px] lg:w-5/6 md:w-full min-h-screen flex flex-col flex-wrap items-center gap-10 py-16 px-10">
        <div className="w-full h-[40px] flex justify-center items-center">
          <h2 className="w-full h-full text-center md:text-left text-2xl uppercase">
            Completed projects :
          </h2>
        </div>
        <DataTable
          value={Completedprojects}
          tableStyle={{ minWidth: "20rem" }}
          paginator
          showGridlines
          rows={5}
          sortField="sno"
          className="w-full p-2 sm:text-base text-sm"
          emptyMessage="No upcoming projects."
        >
          <Column
            field="sno"
            sortable
            header="SNO"
            style={{
              width: "7%",
              height: "100px",
              borderBottom: "2px solid #e5e7eb",
              padding: "12px",
            }}
          />
          <Column
            field="name_of_faculty"
            header="Name of Faculty"
            sortable
            style={{
              width: "20%",
              height: "100px",
              minWidth:"188px",
              borderBottom: "2px solid #e5e7eb",
              padding: "12px",
            }}
          />
          <Column
            field="title_of_project"
            header="Project Title"
            sortable
            style={{
              width: "30%",
              height: "100px",
              minWidth:"300px",
              borderBottom: "2px solid #e5e7eb",
              padding: "12px",
            }}
          />
          <Column
            field="total_funding"
            header="Total Funding"
            sortable
            style={{
              width: "15%",
              height: "100px",
              minWidth:"120px",
              borderBottom: "2px solid #e5e7eb",
              padding: "12px",
            }}
          />
          <Column
            field="end_date"
            header="End Date"
            sortable
            style={{
              width: "15%",
              height: "100px",
              minWidth:"120px",
              borderBottom: "2px solid #e5e7eb",
              padding: "12px",
            }}
          />
          <Column
            field="funding_organization"
            header="Funding Organization"
            sortable
            style={{
              width: "15%",
              height: "100px",
              borderBottom: "2px solid #e5e7eb",
              padding: "12px",
            }}
          />
        </DataTable>
      </div>

      {consultancyProjects && (
        <div className="w-full lg:min-w-[100px] lg:w-5/6 md:w-full min-h-screen flex flex-col flex-wrap items-center gap-10 py-16 px-10">
          <div className="w-full h-[40px] flex justify-center items-center">
            <h2 className="w-full h-full md:text-left text-2xl uppercase text-center">
              Consultancy Projects:
            </h2>
          </div>
          <DataTable
            value={consultancyProjects}
            tableStyle={{ minWidth: "20rem" }}
            paginator
            showGridlines
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            paginatorClassName="mt-4 flex flex-wrap gap-2 justify-center"
            rows={5}
            sortField="sno"
            className="w-full p-2 sm:text-base text-sm"
            emptyMessage="No upcoming projects."
          >
            <Column
              field="sno"
              sortable
              header="SNO"
              style={{
                width: "7%",
                height: "100px",
                minWidth:"10px",
                borderBottom: "2px solid #e5e7eb",
                padding: "12px",
              }}
            />
            <Column
              field="name_of_faculty"
              header="Name of Faculty"
              sortable
              style={{
                width: "20%",
                height: "100px",
                minWidth:"188px",
                borderBottom: "2px solid #e5e7eb",
                padding: "12px",
              }}
            />
            <Column
              field="title_of_project"
              header="Project Title"
              sortable
              style={{
                width: "30%",
                height: "100px",
                minWidth:"250px",
                borderBottom: "2px solid #e5e7eb",
                padding: "12px",
              }}
            />
            <Column
              field="total_funding"
              header="Total Funding"
              sortable
              style={{
                width: "15%",
                height: "100px",
                minWidth:"110px",
                borderBottom: "2px solid #e5e7eb",
                padding: "12px",
              }}
            />
            <Column
              field="end_date"
              header="End Date"
              sortable
              style={{
                width: "15%",
                height: "100px",
                borderBottom: "2px solid #e5e7eb",
                padding: "12px",
              }}
            />
            <Column
              field="funding_organization"
              header="Funding Organization"
              sortable
              style={{
                width: "15%",
                height: "100px",
                minWidth:"200px",
                borderBottom: "2px solid #e5e7eb",
                padding: "12px",
              }}
            />
          </DataTable>
        </div>
      )}
    </div>
  );
};

export default Projects;
