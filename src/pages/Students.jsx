import React from "react";
import MainContainer from "../components/container/MainContainer";
import "./page-styles.css";
import useDataFetch from "../hooks/useDataFetch";
import { ShimmerDiv } from "shimmer-effects-react";
import { IoMdRefreshCircle } from "react-icons/io";
import axios from "axios";

const Students = () => {
  var allStudents = [];

  var count = allStudents.length;
  var Approved = 0;

  const userDb =
    "https://firestore.googleapis.com/v1/projects/flutter-test-project-58f59/databases/(default)/documents/users";

  const { isLoading, data, setRefresh } = useDataFetch(userDb);

  const refineStudentData = () => {
    if (data) {
      const userData = data.documents;

      userData.map((userObject) => {
        try {
          const user = {
            firebaseId: userObject.name,
            name: Object.values(userObject.fields.fullName)[0],
            studentId: Object.values(userObject.fields.studentId)[0],
            email: Object.values(userObject.fields.email)[0],
            busRoute: Object.values(userObject.fields.busRoute)[0],
            userType: Object.values(userObject.fields.userType)[0],
            isApproved: Object.values(userObject.fields.isApproved),
          };
          // console.log(typeof user.name)
          allStudents.push(user);
        } catch (err) {
          // alert(err);
        }
      });
    }

    allStudents.forEach((student) => {
      if (student.isApproved == "true") {
        Approved += 1;
      }
      return;
    });
  };

  const onClickRefresh = () => {
    setRefresh((value) => !value);
  };

  const limitLength = (text, limit = 20) => {
    return text.length < 20 ? text : text.slice(0, limit).trim() + "...";
  };

  const allowUser = async (user) => {
    const url = `https://firestore.googleapis.com/v1/${user.firebaseId}`;
    var body = { ...user, isApproved: "true" };
    delete body["firebaseId"];
    console.log(body);

    try {
      // axios({
      //   url: url,
      //   method: "patch",
      //   data: JSON.stringify(body),
      // });
      fetch(url, {
        method: "PATCH",
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error("Error:", err.message); // Log error message
      console.error("Status Code:", err); // Log status code
      console.error("Response Data:", err.response);
    }
  };

  // https://firestore.googleapis.com/v1/projects/flutter-test-project-58f59/databases/(default)/documents/users/imFv9EtmG3gbb2qElUaUJENdxiF2
  // https://firestore.googleapis.com/v1/projects/flutter-test-project-58f59/databases/(default)/documents/users/2hswXR6EeUZeN7T86MW3hnouPFx1"

  refineStudentData(); // call to convert to requried form

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
                Total Students: {count} Approved: {Approved}, Pending:{" "}
                {allStudents.length - Approved}
              </div>
            </div>
            <button className="refresh-btn" onClick={onClickRefresh}>
              <IoMdRefreshCircle />
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
              {allStudents.map((student) => (
                <tr>
                  <td>{limitLength(student.name)}</td>
                  <td>{limitLength(student.studentId)}</td>
                  <td>{limitLength(student.email)}</td>
                  <td>{student.busRoute}</td>
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
