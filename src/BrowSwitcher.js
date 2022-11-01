import React from "react";

const BrowSwitcher = (props) => {
    return (
      <div>
        <fieldset>
            <input type="radio" id="green" name="color" value="green" onClick={() => props.setBrowColor("green")}/>
            <label for="green">Green</label> 
            <input type="radio" id="pink" name="color" value="pink" onClick={() => props.setBrowColor("pink")}/>
            <label for="pink">Pink</label> 
            <input type="radio" id="blue" name="color" value="blue" onClick={() => props.setBrowColor("blue")}/>
            <label for="blue">Blue</label> 
        </fieldset>
      </div>
    );
}

export default BrowSwitcher