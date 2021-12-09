import React, {useEffect, useRef} from 'react';
import { mount } from 'marketing/MarketingApp';

// This is kind of adapter for the marketing app.
// If we switch to another framework in future...
// ... we'll only need to upd this file.
function MarketingApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <div ref={ref}/>
  );
}

export default MarketingApp;
