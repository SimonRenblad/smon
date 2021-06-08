import React, {useRef, useState, useMemo} from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import * as THREE from "three";
import five from "./assets/five.png"

const Box = (props) => {
    const mesh = useRef();
  
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
     // Subscribe this component to the render-loop, rotate the mesh every frame
    //useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

    const texture = useMemo(() => new THREE.TextureLoader().load(five), []);
    
    return (
        <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
    );
}

export default Box;