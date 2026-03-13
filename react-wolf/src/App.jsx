import Dog from './components/Dog'
import './App.css'
import { Canvas } from '@react-three/fiber'
const App = () => {
  return (
      <Canvas>
        <Dog />
      </Canvas>
  )
}

export default App
