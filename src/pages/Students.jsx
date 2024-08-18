import React from "react";
import MainContainer from "../components/container/MainContainer";
import "./page-styles.css";

const Students = () => {
  const data = [
    { name: "John Doe", id: "BSE-21S-094", route: "hadeed", isApproved: true },
    {
      name: "Nigha Don",
      id: "CSC-20F-102",
      route: "gulshan",
      isApproved: false,
    },
    {
      name: "Nigha Don",
      id: "CSC-20F-102",
      route: "gulshan",
      isApproved: false,
    },
    { name: "John Doe", id: "BSE-21S-094", route: "hadeed", isApproved: true },
    { name: "John Doe", id: "BSE-21S-094", route: "hadeed", isApproved: false },
  ];

  var count = 12;
  var Approved = 0;
  data.map((student) => {
    if (student.isApproved) {
      Approved++;
    }
    return;
  });

  return (
    <MainContainer activeTab={2}>
      <div className="table-container">
        <div className="tableTitle">
          <div className="tableTitle-main">Students</div>
          <div className="tableTitle-sub">
            Total Students: {count} Approved: {Approved}, Pending:{" "}
            {data.length - Approved}
          </div>
        </div>
        <table className="table" border={1} rules="rows" frame="void">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student Id</th>
              <th>Route</th>
              <th>Account Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr>
                <td>{student.name}</td>
                <td>{student.id}</td>
                <td>{student.route}</td>
                <td>
                  {student.isApproved ? (
                    // <div>
                    <div className="approved">Approved</div>
                  ) : (
                    // {/* </div> */}
                    <div className="notApproved">Not Approved</div>
                  )}
                </td>
                <td>Action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainContainer>
  );
};

export default Students;
