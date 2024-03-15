import React from 'react';
import FeatureToggle from './FeatureToggle';

function App() {
  return (
    <div className="App">
      {/* Render FeatureToggle with different props */}
      <FeatureToggle isEnabled={true} featureName="One" />
      <FeatureToggle isEnabled={false} featureName="Two" />
      <FeatureToggle isEnabled={true} featureName="Three" />
      <FeatureToggle isEnabled={false} featureName="Four" />
    </div>
  );
}

export default App;
