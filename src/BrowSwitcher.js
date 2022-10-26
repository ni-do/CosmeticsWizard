import React from "react";

const BrowSwitcher = ({ setBrowColor }) => {
    return (
      <div>
        <button onClick={() => setBrowColor("green")}>grün</button>
        <button onClick={() => setBrowColor("pink")}>pink</button>
      </div>
    );
}

export default BrowSwitcher