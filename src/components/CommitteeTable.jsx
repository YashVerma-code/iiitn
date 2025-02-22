import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";

const CommitteeTable = ({ CommitteData }) => {
  return (
    <div className="w-full sm:w-2/3 flex flex-wrap justify-center items-center min-h-screen">
      <DataTable
        value={CommitteData}
        tableStyle={{ minWidth: "40rem" }}
        paginator
        showGridlines
        rows={5}
        sortField="sno"
        className="w-full p-5 sm:text-base text-sm"
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
          field="name"
          header="Names"
          sortable
          style={{
            width: "20%",
            height: "100px",
            borderBottom: "2px solid #e5e7eb",
            padding: "12px",
          }}
        />
        <Column
          field="designation"
          header="Designation"
          sortable
          style={{
            width: "50%",
            height: "100px",
            borderBottom: "2px solid #e5e7eb",
            padding: "12px",
          }}
        />
        <Column
          field="position"
          header="Position"
          sortable
          style={{
            width: "20%",
            height: "100px",
            borderBottom: "2px solid #e5e7eb",
            padding: "12px",
          }}
        />
      </DataTable>
    </div>
  );
};

export default CommitteeTable;
