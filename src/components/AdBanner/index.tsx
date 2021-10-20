import React, { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle adbanner-customize"
        style={{
          display: 'block',
        }}
        // data-ad-client=<your-client-id>
        data-ad-client=""
        // data-ad-slot=<slot-id>
        data-ad-slot=""
      />
    </>
  );
};

export default AdBanner;
