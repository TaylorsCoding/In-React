import React from "react";

import FeatureOption from "./FeatureOption/FeatureOption";
import FeatureList from "./FeatureList/FeatureList";

const mainForm = (props) => {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx; //"Processor-0"
    const options = props.features[feature].map((item) => {
      const itemHash = props.slugify(JSON.stringify(item));
      const selectedOption = props.selected[feature].name;
      return (
        <FeatureOption
          itemHash={itemHash}
          feature={feature}
          item={item}
          selectedOption={selectedOption}
          updateFeature={props.updateFeature}
          currencyFormat={props.currencyFormat}
        />
      );
    });
    return (
      <FeatureList
        featureHash={featureHash}
        feature={feature}
        options={options}
      />
    );
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
};

export default mainForm;
