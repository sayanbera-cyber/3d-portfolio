import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei/core/ContactShadows.js';
import { OrbitControls } from '@react-three/drei/core/OrbitControls.js';
import { RoundedBox } from '@react-three/drei/core/RoundedBox.js';
import type { Group, Mesh } from 'three';
import { nikonSources } from '../content';

type Part = 'body' | 'lens';
const facts = {
  body: { label: 'CAMERA BODY', title: 'Nikon D7500', items: ['20.9 MP DX-format sensor', 'ISO 100–51,200 (native range)', '51-point autofocus system', 'Up to 8 frames per second'] },
  lens: { label: 'TELEPHOTO LENS', title: 'AF-S NIKKOR 200–500mm f/5.6E ED VR', items: ['200–500mm focal range', 'Constant maximum aperture of f/5.6', 'Vibration Reduction', '2.2m minimum focus distance', 'Approx. 2,300g with tripod collar'] },
};

function CameraModel({ onHover, onLock }: { onHover: (part: Part | null) => void; onLock: (part: Part) => void }) {
  const root = useRef<Group>(null);
  const body = useRef<Mesh>(null);
  const lens = useRef<Mesh>(null);
  useFrame(({ pointer }, delta) => {
    if (!root.current) return;
    root.current.rotation.y += (pointer.x * 0.12 - root.current.rotation.y) * Math.min(1, delta * 1.4);
    root.current.rotation.x += (-pointer.y * 0.055 - root.current.rotation.x) * Math.min(1, delta * 1.2);
  });
  const handlers = (part: Part) => ({
    onPointerOver: (event: { stopPropagation: () => void }) => { event.stopPropagation(); onHover(part); document.body.style.cursor = 'pointer'; },
    onPointerOut: () => { onHover(null); document.body.style.cursor = ''; },
    onClick: (event: { stopPropagation: () => void }) => { event.stopPropagation(); onLock(part); },
  });
  return <group ref={root} rotation={[0.02, -0.22, 0]} scale={0.9}>
    {/* D7500 body: faceted grip, raised prism, top controls and mount. */}
    <RoundedBox ref={body} args={[2.2, 1.34, 0.88]} radius={0.14} smoothness={4} position={[0, 0, 0]} castShadow receiveShadow {...handlers('body')}><meshStandardMaterial color="#252822" roughness={0.42} metalness={0.48}/></RoundedBox>
    <RoundedBox args={[0.74, 0.34, 0.62]} radius={0.08} smoothness={4} position={[-0.1, 0.79, 0.03]} castShadow><meshStandardMaterial color="#32352e" roughness={0.36} metalness={0.52}/></RoundedBox>
    <RoundedBox args={[0.44, 1.13, 0.78]} radius={0.08} smoothness={4} position={[0.87, -0.02, 0.05]} castShadow><meshStandardMaterial color="#171916" roughness={0.78}/></RoundedBox>
    <mesh position={[-0.75, 0.7, 0.06]} rotation={[0, 0, Math.PI / 2]} castShadow><cylinderGeometry args={[0.22, 0.22, 0.12, 32]}/><meshStandardMaterial color="#111310" roughness={0.55} metalness={0.6}/></mesh>
    <mesh position={[-0.78, 0.7, 0.13]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.13, 0.13, 0.13, 32]}/><meshStandardMaterial color="#66695e" roughness={0.35} metalness={0.8}/></mesh>
    <mesh position={[0.52, 0.7, 0.02]} castShadow><cylinderGeometry args={[0.16, 0.16, 0.1, 32]}/><meshStandardMaterial color="#131512" roughness={0.7}/></mesh>
    <mesh position={[-0.42, 0.35, 0.47]}><boxGeometry args={[0.32, 0.24, 0.04]}/><meshStandardMaterial color="#101512" roughness={0.22} metalness={0.25}/></mesh>
    {/* Lens barrel, metal rings, rubber grip bands, and optical front glass. */}
    <mesh ref={lens} position={[0, -0.05, 1.17]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow {...handlers('lens')}><cylinderGeometry args={[0.53, 0.58, 1.68, 48]}/><meshStandardMaterial color="#20231e" roughness={0.48} metalness={0.54}/></mesh>
    {[0.42, 0.55, 0.68, 1.37, 1.48, 1.61, 2.01].map((z, i) => <mesh key={z} position={[0, -0.05, z]} rotation={[Math.PI / 2, 0, 0]} {...handlers('lens')}><cylinderGeometry args={[i > 4 ? 0.56 : 0.54, i > 4 ? 0.56 : 0.54, 0.035, 48]}/><meshStandardMaterial color={i % 2 ? '#131511' : '#77796d'} roughness={0.32} metalness={0.78}/></mesh>)}
    {Array.from({ length: 12 }, (_, i) => <mesh key={i} position={[0, -0.05, 0.76 + i * 0.047]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.55, 0.55, 0.017, 48]}/><meshStandardMaterial color="#0e100d" roughness={0.92}/></mesh>)}
    <mesh position={[0, -0.05, 2.04]} rotation={[Math.PI / 2, 0, 0]} {...handlers('lens')}><cylinderGeometry args={[0.48, 0.48, 0.06, 48]}/><meshStandardMaterial color="#0c1214" roughness={0.12} metalness={0.65}/></mesh>
    <mesh position={[0, -0.05, 2.078]}><circleGeometry args={[0.39, 48]}/><meshPhysicalMaterial color="#172c31" roughness={0.14} metalness={0.52} clearcoat={1} clearcoatRoughness={0.08}/></mesh>
    <mesh position={[0, -0.05, 2.083]}><circleGeometry args={[0.15, 32]}/><meshBasicMaterial color="#617b68"/></mesh>
    <mesh position={[0, -0.05, 2.086]}><circleGeometry args={[0.06, 24]}/><meshBasicMaterial color="#090b09"/></mesh>
    <mesh position={[-1.22, 0.18, 0.05]} rotation={[0, 0, Math.PI / 2]}><torusGeometry args={[0.12, 0.035, 12, 24]}/><meshStandardMaterial color="#77796d" metalness={0.8}/></mesh>
  </group>;
}

export default function CameraExperience() {
  const [hovered, setHovered] = useState<Part | null>(null);
  const [locked, setLocked] = useState<Part | null>(null);
  const active = locked ?? hovered;
  const selected = active ? facts[active] : null;
  return <div className="camera-experience">
    <div className="camera-canvas" aria-label="Interactive 3D Nikon D7500 and NIKKOR 200–500mm lens. Drag to rotate and scroll to zoom.">
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [3.7, 2.8, 5.5], fov: 38 }} gl={{ antialias: true, powerPreference: 'low-power' }}>
        <color attach="background" args={['#161813']}/><ambientLight intensity={1.2}/><directionalLight position={[3, 5, 5]} intensity={2.3} castShadow shadow-mapSize={[1024, 1024]}/><pointLight position={[-4, 2, 1]} intensity={18} color="#c4c9a7"/><pointLight position={[0, -2, -3]} intensity={10} color="#718179"/>
        <CameraModel onHover={setHovered} onLock={part => setLocked(current => current === part ? null : part)}/>
        <ContactShadows position={[0, -1.25, 0]} opacity={0.48} scale={8} blur={2.4} far={3}/>
        <OrbitControls enablePan={false} enableZoom minDistance={3.4} maxDistance={8} autoRotate={!locked && !hovered} autoRotateSpeed={0.55} minPolarAngle={0.65} maxPolarAngle={2.35}/>
      </Canvas>
      <div className="camera-canvas-label">DRAG TO ROTATE · SCROLL TO ZOOM</div>
      <div className="camera-hotspot-buttons"><button onMouseEnter={() => setHovered('body')} onMouseLeave={() => setHovered(null)} onClick={() => setLocked(locked === 'body' ? null : 'body')}>BODY +</button><button onMouseEnter={() => setHovered('lens')} onMouseLeave={() => setHovered(null)} onClick={() => setLocked(locked === 'lens' ? null : 'lens')}>LENS +</button></div>
    </div>
    <aside className={`camera-spec-panel ${selected ? 'is-open' : ''}`} aria-live="polite">
      {selected ? <><span>{selected.label}</span><h3>{selected.title}</h3><ul>{selected.items.map(fact => <li key={fact}>{fact}</li>)}</ul><a href={active === 'body' ? nikonSources.camera : nikonSources.lens} target="_blank" rel="noreferrer">Nikon specifications <span>↗</span></a></> : <><span>FIELD EQUIPMENT</span><h3>Ready for the long wait.</h3><p>Hover or tap the camera or lens to explore verified specifications. Drag to orbit; scroll to zoom.</p></>}
      <button className="camera-spec-close" onClick={() => {setLocked(null);setHovered(null)}} aria-label="Clear selected camera specification">×</button>
    </aside>
  </div>;
}
