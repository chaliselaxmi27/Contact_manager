const Contacts = (props) => {
  return (
    <>
      

    <div className="contact_list">
      
      {props.data.name}
      <br/>
      {props.data.mobile}
      <br/>
      {props.data.location}
      </div>

    </>
  );
};

export default Contacts;
