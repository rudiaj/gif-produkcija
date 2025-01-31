export const BlurAndScaleFilter = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <filter id="blur-and-scale" y="-50%" x="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blurred" />
        <feColorMatrix type="saturate" in="blurred" values="4" />
        <feComposite in="SourceGraphic" operator="over" />
      </filter>
    </defs>
  </svg>
);
