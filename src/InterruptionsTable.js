import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import React, { useState, useEffect } from "react";
import axios from "axios";

function InterruptionsTable() {
  const [datas, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/interruption")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const columns = [
    { dataField: "id", text: "Id" },
    { dataField: "date", text: "Date" },
    { dataField: "startTime", text: "Start Time" },
    { dataField: "endTime", text: "End Time" },
    { dataField: "locations", text: "Location" },
    { dataField: "area", text: "Area" },
    { dataField: "county", text: "County" },
    { dataField: "region", text: "Region" },
  ];

  const options = {
    paginationSize: 10,
    pageStartIndex: 1,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
    alwaysShowAllBtns: false,
    withFirstAndLast: false,
  };

  if (!datas)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div>
      <BootstrapTable
        keyField="id"
        data={datas}
        columns={columns}
        pagination={paginationFactory(options)}
      />
    </div>
  );
}

export default InterruptionsTable;
