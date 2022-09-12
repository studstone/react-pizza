import React from 'react';
import ContentLoader from "react-content-loader";

const CardSkeleton = () => (
    <>
        {
            [...new Array(8)].map((item, index) =>
                <ContentLoader
                    speed={2}
                    width={260}
                    height={488}
                    viewBox="0 0 260 488"
                    backgroundColor="#f7f7f7"
                    foregroundColor="#e8e8e8"
                    key={index}
                >
                    <rect x="0" y="271" rx="0" ry="0" width="260" height="48" />
                    <rect x="0" y="0" rx="0" ry="0" width="260" height="260" />
                    <rect x="0" y="341" rx="0" ry="0" width="260" height="87" />
                    <rect x="125" y="443" rx="30" ry="30" width="132" height="44" />
                    <rect x="0" y="452" rx="0" ry="0" width="92" height="26" />
                </ContentLoader>
            )
        }
    </>
);

export default CardSkeleton;
