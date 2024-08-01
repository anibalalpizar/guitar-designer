const Patterns = () => {
  return (
    <>
      <pattern
        id="woodPattern"
        patternUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <image
          href="/wood.jpg"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        />
      </pattern>
      <pattern
        id="mapleWoodPattern"
        patternUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <image
          href="/maple.jpg"
          preserveAspectRatio="none"
          width="190px"
          height="190px"
        />
      </pattern>
      <pattern
        id="darkFingerboardWoodPattern"
        patternUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <image
          href="/wood.jpg"
          preserveAspectRatio="none"
          width="190px"
          height="190px"
        />
      </pattern>
    </>
  );
};

export default Patterns;
