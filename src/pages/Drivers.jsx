import React, { useEffect, useState } from "react";
import MainContainer from "../components/container/MainContainer";
import "./page-styles.css";
import { ShimmerDiv } from "shimmer-effects-react";
import { IoMdRefreshCircle } from "react-icons/io";
import {
  deleteDocument,
  getAllDocuments,
  createDocument,
} from "../firebase/firebaseService";
import AddUserModal from "../components/addUserModal/AddUserModal";

const Drivers = () => {
  const [drivers, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const driversDb = "drivers";

  useEffect(() => {
    getDrivers();
  }, []);

  let totalDrivers = drivers.length;

  const getDrivers = async () => {
    const drivers = await getAllDocuments(driversDb);
    if (drivers) setStudents(drivers);
    setIsLoading(false);
  };

  const refresh = async () => {
    setRefreshing(true);
    await getDrivers();
    setRefreshing(false);
  };

  const limitLength = (text, limit = 20) => {
    return text.length < 20 ? text : text.slice(0, limit).trim() + "...";
  };

  const deleteDriver = async (id) => {
    await deleteDocument(id, driversDb);
    refresh();
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <MainContainer activeTab={3}>
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
        <div>
          <AddUserModal
            showModal={showModal}
            onCloseModal={() => setShowModal(false)}
            collectionName={"drivers"}
            onSuccess={refresh}
          />
          <div className="table-container">
            <div className="tableTitleRow">
              <div className="tableTitle">
                <div className="tableTitle-main">Bus Drivers</div>
                <div className="tableTitle-sub">
                  Total drivers: {totalDrivers}
                </div>
              </div>
              <div className="btns-section">
                <button className="add-user-btn" onClick={openModal}>
                  Add Driver
                </button>
                <button
                  className={
                    refreshing
                      ? "refresh-btn refresh-btn-loading"
                      : "refresh-btn"
                  }
                  onClick={refreshing ? null : refresh}
                >
                  {refreshing ? (
                    <div className="loading"></div>
                  ) : (
                    <IoMdRefreshCircle />
                  )}
                </button>
              </div>
            </div>
            <table className="table" border={1} rules="rows" frame="void">
              <thead>
                <tr>
                  <th>Driver Name</th>
                  <th>Phone #</th>
                  <th>Email</th>
                  <th>About</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver) => (
                  <tr key={driver.id}>
                    <td>{limitLength(driver.name ?? "null")}</td>
                    <td>{limitLength(driver.phone ?? "null")}</td>
                    <td>{limitLength(driver.email ?? "null")}</td>
                    <td>{limitLength(driver.about ?? "null")}</td>
                    <td>
                      <div className="action-btns">
                        <button
                          className="table-text-btn delete-btn"
                          onClick={() => {
                            deleteDriver(driver.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </MainContainer>
  );
};

export default Drivers;
