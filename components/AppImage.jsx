import React from 'react';

// Lightweight Image wrapper to match usage in React components.
// Adds lazy loading by default and forwards props.
const AppImage = React.forwardRef(({ alt = '', loading = 'lazy', ...props }, ref) => {
  return <img ref={ref} alt={alt} loading={loading} {...props} />;
});

AppImage.displayName = 'AppImage';

export default AppImage;

