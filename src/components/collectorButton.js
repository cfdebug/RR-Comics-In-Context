import React, { useContext } from "react";
import StylesContext from './stylesContext'

export default function CollectorButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
    </div>
  );
}