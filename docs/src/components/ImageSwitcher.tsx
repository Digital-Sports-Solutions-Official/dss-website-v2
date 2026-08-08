import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ImageSwitcher = ({ lightSrc, darkSrc, alt, style }) => {

    return (
        <ThemedImage
            alt={alt}
            style={style}
            sources={{
                light: useBaseUrl(lightSrc),
                dark: useBaseUrl(darkSrc),
            }}
        />
    )
}

export default ImageSwitcher;
