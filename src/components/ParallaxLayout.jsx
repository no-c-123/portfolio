// src/components/ParallaxLayout.jsx
import { ParallaxProvider } from 'react-scroll-parallax';

export default function ParallaxLayout({ children }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}