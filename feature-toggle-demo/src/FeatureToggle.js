import React from 'react';

const FeatureToggle = ({ isEnabled, featureName }) => { //passing props as parameters
  return (
    <div>
      {/* Check if isEnabled is true */}
      {isEnabled ? (
        <p>Feature {featureName} is enabled.</p> //return enablef is true
      ) : (
        <p>Feature {featureName} is disabled.</p> //return disabled is false
      )}
    </div>
  );
};

export default FeatureToggle; //export default component
