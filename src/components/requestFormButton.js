import React, { useContext } from "react";
import StylesContext from "./stylesContext";

export default function RequestFormButton() {
    const buttonStyling = React.useContext(StylesContext)
    return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
      <input type="submit" value="Submit" />

    </div>
  );
}
