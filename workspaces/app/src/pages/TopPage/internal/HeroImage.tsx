import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { IMAGE_SRC } from './ImageSrc';

const Wrapper = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
`;

const Image = styled.img`
  display: inline-block;
  width: 100%;
`;

export const HeroImage: React.FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageAttributes, setImageAttributes] = useState({ height: 0, src: '', width: 0 });

  const updateImage = useCallback((attributes: { height: number; src: string; width: number }) => {
    setImageAttributes(attributes);
  }, []);

  useEffect(() => {
    const width = 2048 / (typeof window !== 'undefined' ? window.devicePixelRatio : 1);
    const height = (width / 16) * 9;

    updateImage({
      height,
      src: IMAGE_SRC,
      width,
    });
  }, [updateImage]);

  useEffect(() => {
    const resize = () => {
      const width = imageRef.current?.clientWidth ?? 0;
      const height = (width / 16) * 9;
      updateImage({
        height,
        src: IMAGE_SRC, // Note: Adjust this if you intend to use the canvas for something.
        width,
      });
    };

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, [updateImage]);

  return (
    <Wrapper>
      <Image ref={imageRef} alt="Cyber TOON" {...imageAttributes} />
    </Wrapper>
  );
};
