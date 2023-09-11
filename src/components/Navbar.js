import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddHabit from "../images/addhabit.png";
import { addHabit } from "../redux/features/habitSlice";

const Navbar = ({ name }) => {
  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();

  // change state acording time
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  // function for add habit
  const handleSave = () => {
    const habitName = document.getElementById("habitName").value;
    dispatch(addHabit(habitName));
    alert("Your habit added successfully");
    document.getElementById("habitName").value = "";
  };

  return (
    <>
      <div className="navbar">
        {/* according to time it shows morning, afternoon, evening, and night */}
        {hour <= 12 ? (
          <div>
            Good morning!
            <br />
            Seize the day and master your habits.
          </div>
        ) : hour <= 17 ? (
          <div>
            Afternoon alert!
            <br />
            Stay on track with your habits.
          </div>
        ) : hour <= 21 ? (
          <div>
            Good evening!
            <br />
            Elevate your habits and conquer the day.
          </div>
        ) : (
          <div>
            Nighttime focus!
            <br />
            Reflect and level up your habits.
          </div>
        )}

        <div className="right-nav">
          <div className="navbar-addhabit">
            <img src={AddHabit} alt="addhabit" />
          </div>
          <button
            className="addhabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus"></i> Add Habits
          </button>
        </div>
      </div>

      {/* modal for add habit form */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add your habit and keep a track;)
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                ></label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter habit name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
