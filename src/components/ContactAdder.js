import React, { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const contactdata={name,mobile,location}
  const addhandler = () => {
    props.onContactadded(contactdata);
  };
  const submithandler=(e)=>{
    e.preventDefault();
  }

  return (
    <>
      <div>
        <form on onSubmit={submithandler}>
          <label>Name:
          <input
            type="text"
            value={name}
            placeholder="Contact name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          </label>
          <label> Phone:

          <input
            type="number"
            value={mobile}
            placeholder="Contact number"
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          </label>
          <label> Location:

          <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          </label>

          <br />
          <br />

          <button onClick={addhandler}> Add Contact </button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
