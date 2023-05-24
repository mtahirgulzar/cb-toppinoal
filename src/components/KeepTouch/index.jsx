import React, { useRef, useState, useEffect } from "react";
import Title from "../common/Title";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const KeepTouch = ({ data, title }) => {
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
      fetch("/api/contact", {
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
            toast("Mail is not sent.");
          }
		  setBtnDis(false);
		  document.getElementById("mySubmit").disabled = true; 
        })
        .catch((e) => console.log(e));
      reset();
    }
  };
  return (
    <div className="sm:py-[75px] py-[40px]">
      <Title data={title} red />
      <div className="max-w-[1156px] mx-auto px-4 my-[30px]">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-y-[20px] mb-6">
              <div className="flex flex-col">
                <label
                  htmlFor="full_name"
                  className="text-[#12141D] text-sm font-semibold leading-tight tracking-normal mb-1"
                >
                  Name*
                </label>
                <input
                  {...register("name", { required: true })}
                  placeholder="Name (Required)"
                  required
                  // pattern="[a-zA-Z]{2,20}"
                  // title="Name should be only alphabets "
                  type="text"
                  id="name"
                  name="name"
				  onChange={(e) =>
                            setDis({ ...dis, name: e.target.value })
                          }
                  className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-[#DDE1E0] rounded-md border-[1px]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="full_name"
                  className="text-[#12141D] text-sm font-semibold leading-tight tracking-normal mb-1"
                >
                  Phone*
                </label>
                <input
                  {...register("phone", { required: true })}
                  placeholder="Phone (Required)"
                  required
                  type="number"
                  id="phone"
                  name="phone"
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-", "."].includes(e.key) &&
                    e.preventDefault()
                  }
				  onChange={(e) =>
                            setDis({ ...dis, phone: e.target.value })
                          }
                  className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-[#DDE1E0] rounded-md border-[1px]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="full_name"
                  className="text-[#12141D] text-sm font-semibold leading-tight tracking-normal mb-1"
                >
                  Email*
                </label>
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  required
                  type="email"
                  id="email"
                  name="email"
				  onChange={(e) =>
                            setDis({ ...dis, email: e.target.value })
                          }
                  className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-[#DDE1E0] rounded-md border-[1px]"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col mb-10">
                <label
                  className="text-[#12141D] text-sm font-semibold leading-tight tracking-normal mb-1"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  defaultValue={""}
                  {...register("message", { required: false })}
                  placeholder="Message sent using this form are not consider private. Avoid sending private and confidential information through this facility."
                  name="message"
                  className="text-sm border-[#DDE1E0] rounded-md border-[1px]  py-2 outline-none resize-none px-3 focus:outline-none focus:border focus:border-indigo-700"
                  rows={4}
                  id="message"
				  onChange={(e) =>
                            setDis({ ...dis, message: e.target.value })
                          }
                />
              </div>
              <button
                type="submit"
				id="mySubmit"
                className={` focus:outline-none bg-[#605C44] mb-1 transition-all duration-500 ease-in-out  rounded-[10px] text-white px-2 w-full py-[10px] text-base font-semibold leading-6 hover:bg-[#cf2e2e] 
				${
                    !btnDis && "cursor-not-allowed"
                  } 
				`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default KeepTouch;
