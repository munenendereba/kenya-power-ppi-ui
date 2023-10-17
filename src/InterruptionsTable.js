import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

function InterruptionsTable() {
  const [datas, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(API_URL + "/interruption")
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
    withFirstAndLast: true,
  };

  if (!datas)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  function SearchTable(event) {
    //on search, hide the rows that don't match the search by locations column
    setSearchTerm(event.target.value);

    let filter, table, tr, td, i, txtValue;

    if (!searchTerm || searchTerm.length < 1) return;

    filter = searchTerm.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = (td.textContent || td.innerText).toUpperCase();

        if (txtValue.indexOf(filter) > -1) tr[i].style.display = "";
        else tr[i].style.display = "none";
      }
    }
  }

  return (
    <div style={{ backgroundColor: "aqua", textAlign: "center" }} id="table">
      <h1>Interruptions Table</h1>
      <input
        id="search-box"
        className="form-control ml-4"
        style={{ width: "90%", margin: "auto" }}
        type="text"
        placeholder="Search"
        onChange={SearchTable}
      />
      <br />
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
