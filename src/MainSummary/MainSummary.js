import React, { Component } from "react";

import Option from "./Option/Option";
import Total from "./Total/Total";

const mainSummary = (props) => {
  //header could be in here
  const options = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];

    return (
      <Option
        featureHash={featureHash}
        feature={feature}
        selectedOption={selectedOption}
        currencyFormat={props.currencyFormat}
      />
    );
  });
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {options}
      <Total selected={props.selected} currencyFormat={props.currencyFormat} />
    </section>
  );
};
export default mainSummary;
