import React from "react";

const LocIframe = () => {
  return (
    <div>
      <iframe
        loading="lazy"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?q=1500%20Tara%20Hills%20Dr.%2C%20Suite%20104A%2C%20Pinole%2C%20CA%2094564&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
        title="1500 Tara Hills Dr., Suite 104A, Pinole, CA 94564"
        aria-label="1500 Tara Hills Dr., Suite 104A, Pinole, CA 94564"
        data-rocket-lazyload="fitvidscompatible"
        data-lazy-src="https://maps.google.com/maps?q=1500%20Tara%20Hills%20Dr.%2C%20Suite%20104A%2C%20Pinole%2C%20CA%2094564&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
        data-ll-status="loaded"
        className="entered lazyloaded min-w-full h-[300px]"
      ></iframe>
    </div>
  );
};

export default LocIframe;
