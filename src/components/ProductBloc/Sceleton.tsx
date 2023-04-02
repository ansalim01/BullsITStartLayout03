import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={326}
    height={544}
    viewBox="0 0 326 544"
    backgroundColor="#d9d9d9"
    foregroundColor="#ededed"
    {...props}
  >
    <rect x="0" y="0" rx="15" ry="15" width="305" height="523" />
  </ContentLoader>
);

export default Sceleton;
