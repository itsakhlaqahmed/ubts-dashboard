import React, { useEffect, useState } from "react";
import MainContainer from "../components/container/MainContainer";
import "./page-styles.css";
import { ShimmerDiv } from "shimmer-effects-react";
import { IoMdRefreshCircle } from "react-icons/io";
import { getAllDocuments } from "../firebase/firebaseService";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getStudents = async () => {
    const students = await getAllDocuments("users");
    if (students) setStudents(students);
    setIsLoading(false);
  };

  const refresh = async () => {
    setRefreshing(true);
    await getStudents("users");
    setRefreshing(false);
  };

  useEffect(() => {
    getStudents();
  }, []);

  let totalStudents = students.length;
  let Approved = 0;

  const limitLength = (text, limit = 20) => {
    return text.length < 20 ? text : text.slice(0, limit).trim() + "...";
  };

  const allowUser = async (user) => {};

  return (
    <MainContainer activeTab={2}>
      {isLoading ? (
        <div className="shimmer-container">
          <ShimmerDiv
            mode="light"
            rounded={1}
            width={"100%"}
            height={"500px"}
          />
        </div>
      ) : (
        <div className="table-container">
          <div className="tableTitleRow">
            <div className="tableTitle">
              <div className="tableTitle-main">Students</div>
              <div className="tableTitle-sub">
                Total Students: {totalStudents} Approved: {Approved}, Pending:{" "}
                {students.length - Approved}
              </div>
            </div>
            <button
              className={
                refreshing ? "refresh-btn refresh-btn-loading" : "refresh-btn"
              }
              onClick={refreshing ? null : refresh}
            >
              {refreshing ? <div class="loading"></div> : <IoMdRefreshCircle />}
            </button>
          </div>

          <table className="table" border={1} rules="rows" frame="void">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student Id</th>
                <th>Email</th>
                <th>Route</th>
                <th>Account Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{limitLength(student.fullName ?? "null")}</td>
                  <td>{limitLength(student.studentId ?? "null")}</td>
                  <td>{limitLength(student.email ?? "null")}</td>
                  <td>{student.busRoute ?? null}</td>
                  <td>
                    {student.isApproved == "true" ? (
                      <div className="approved">Approved</div>
                    ) : (
                      <div className="notApproved">Not Approved</div>
                    )}
                  </td>
                  <td>
                    <div className="action-btns">
                      <button
                        className="table-text-btn allow-btn"
                        onClick={() => {
                          allowUser(student);
                        }}
                      >
                        Allow
                      </button>

                      <button className="table-text-btn delete-btn">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </MainContainer>
  );
};

export default Students;
