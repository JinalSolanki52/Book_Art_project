import React from "react";

const clickme = () => alert("Are you sure to join into channels..");

const Channels = (props) => {
    return (
        <>
          <h4>About several channels to communicate</h4>
          <button onClick={clickme}> Click me</button>
        </>
    );
};
export default Channels;