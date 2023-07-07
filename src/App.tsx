import { Canvas } from '@react-three/fiber'

//IMPORT COMPONENTS
import Button from './components/Button';
import TextField from './components/TextField';
import Loader from './components/Loader';
import { Mesh, MeshBasicMaterial, MeshStandardMaterial } from 'three';
import Slider from './components/Slider';
import Switch from './components/Switch';

type camConfig = {
 fov: 75 | number,
 near: 0.1 | number,
 far: 1000 | number,
 position: [0, 0, 5] | [number, number, number]
}

export default function App() {

  const camConfig: camConfig = { fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }

  return (
    <Canvas shadows camera={camConfig}>
  <TextField />
    </Canvas>
  )
}
