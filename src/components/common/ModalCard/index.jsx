import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const Modal = ({ isShowing, hide, ourservices }) => {
  const [contactDetail, setContactDetail] = useState([]);
  const [dis, setDis] = useState({
    name: "",
    phone: "",
    message: "",
    email: "",
  });
  const [btnDis, setBtnDis] = useState(false);
  useEffect(() => {
    if (
      dis.email.length &&
      dis.name.length &&
      dis.phone.length &&
      dis.message.length
    ) {
      setBtnDis(true);
      document.getElementById("mySubmit").disabled = false;
    } else {
      setBtnDis(false);
      // document.getElementById("mySubmit").disabled = true; 
    }
  }, [dis]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.name.trim().length === 0) {
      toast("Please Enter a correct Name");
      return;
    }
    if (data.phone.length > 20) {
      toast("Please Enter a correct phone number");
    } else if (data.message.length > 800) {
      toast("write a correct message");
    } else {
      fetch("/api/appointment", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          // console.log("Response received", res);
          if (res.status === 200) {
            // console.log("Response succeeded!");
            toast("Thank you for contacting us!");
          } else {
            // console.log("Email/Password is invalid.");
            toast("Something is wrong.");
          }
          setBtnDis(false);
      document.getElementById("mySubmit").disabled = true; 
        })
        .catch((e) => console.log(e));
      reset();
    }
  };
  return (
    <React.Fragment>
      {isShowing && (
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper "
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal rounded-xl ">
              <div className="px-[65px] py-5 pb-[70px] border bg-[#605C44] rounded-tl-[50px]">
                <div className="modal-header absolute top-[45px] right-[90px]">
                  <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="">
                  <h2 className="text-white text-[28px] leading-[50px] font-[600] mb-5">
                    Make An Appointment
                  </h2>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    method="POST"
                    className="text-[16px] leading-[22px] font-[500]"
                  >
                    <div className="grid grid-cols-2 gap-[10px] outline-none">
                      <div className="w-full ">
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Full Name*"
                          onChange={(e) =>
                            setDis({ ...dis, name: e.target.value })
                          }
                          className="w-full py-[7px] outline-none px-[14px] rounded-[4px]"
                        />
                      </div>
                      <div className="w-full">
                        <input
                          {...register("phone", { required: true })}
                          type="number"
                          onChange={(e) =>
                            setDis({ ...dis, phone: e.target.value })
                          }
                          id="phone"
                          name="phone"
                          onKeyDown={(e) =>
                            ["e", "E", "+", "-", "."].includes(e.key) &&
                            e.preventDefault()
                          }
                          required
                          placeholder="Phone Number*"
                          className="w-full py-[7px] outline-none px-[14px] rounded-[4px]"
                        />
                      </div>
                      <div className="w-full">
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          onChange={(e) =>
                            setDis({ ...dis, email: e.target.value })
                          }
                          required
                          id="email"
                          name="email"
                          placeholder="Email*"
                          className="w-full py-[7px] outline-none px-[14px] rounded-[4px]"
                        />
                      </div>
                      <div className="w-full">
                        <select
                          {...register("service", { required: true })}
                          id="service"
                          name="service"
                          required
                          className="w-full py-[7px] outline-none px-[14px] rounded-[4px]"
                        >
                          {ourservices?.map((item, index) => (
                            <option
                              className="text-black"
                              key={index}
                              value={item.attributes?.title}
                            >
                              {item?.attributes?.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="w-full">
                        <input
                          {...register("date", { required: true })}
                          type="date"
                          id="date"
                          name="date"
                          required
                          placeholder="Date"
                          className="w-full py-[7px] outline-none px-[14px] rounded-[4px]"
                        />
                      </div>
                      <div className="w-full">
                        <input
                          {...register("time", { required: false })}
                          type="time"
                          id="time"
                          name="time"
                          placeholder="Time"
                          className="w-full py-[7px] outline-none px-[14px] rounded-[4px]"
                        />
                      </div>
                    </div>
                    <div className="mt-[12px]">
                      <textarea
                        defaultValue={""}
                        {...register("message", { required: true })}
                        required
                        id="message"
                        name="message"
                        onChange={(e) =>
                        setDis({ ...dis, message: e.target.value })
                        }
                        placeholder="Message*"
                        cols="30"
                        rows="4"
                        type="text"
                        className="w-full px-[14px] py-1 outline-none rounded-[4px]"
                      ></textarea>
                    </div>
                    <button
                      className={` w-full text-center mt-[6px] py-[7px] bg-[#E4C57C] rounded-[4px] 
                      ${
                    !btnDis && "cursor-not-allowed"
                  } `}
                      id="mySubmit"
                      type="submit"
                    >
                      Send
                    </button>
                  </form>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default Modal;
