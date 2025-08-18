"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, OrbitControls, Line, Html } from "@react-three/drei"
import { useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

type StepId = "constellation"|"builder"|"playback"|"board"|"sign"|"sla"|"vault"|"archive"|"summary"

export default function Scene({ step, onAutoNext }: { step: StepId; onAutoNext: () => void }) {
  const [webgl, setWebgl] = useState(false)
  useEffect(()=>{ try{ const c=document.createElement("canvas"); setWebgl(!!(c.getContext("webgl2")||c.getContext("webgl"))) }catch{ setWebgl(false) } },[])
  if (!webgl) return <div className="h-full w-full grid place-items-center opacity-80">WebGL недоступен</div>

  return (
    <Canvas camera={{ position:[0,2.2,8], fov:55 }} dpr={[1,1.5]} gl={{ antialias:true, powerPreference:"high-performance", alpha:false }}>
      <color attach="background" args={["#0b1220"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[6,8,5]} intensity={0.8} />
      <Stage step={step} onAutoNext={onAutoNext} />
      <OrbitControls enablePan={false} />
    </Canvas>
  )
}

function Stage({ step, onAutoNext }: { step: StepId; onAutoNext: () => void }) {
  const nodes = useMemo(()=>[
    { id:"draft",     pos:new THREE.Vector3(-4.0, 0.4,  0.0), label:"Черновик" },
    { id:"legal",     pos:new THREE.Vector3(-1.8, 1.2, -1.2), label:"Юрист" },
    { id:"finance",   pos:new THREE.Vector3(-0.6,-0.8,  1.4), label:"Финансы" },
    { id:"committee", pos:new THREE.Vector3( 1.6, 1.0, -0.6), label:"Комитет" },
    { id:"eimzo",     pos:new THREE.Vector3( 2.8,-0.6,  1.0), label:"E‑IMZO" },
    { id:"exec",      pos:new THREE.Vector3( 4.2, 0.2,  0.0), label:"Исполнение" },
    { id:"archive",   pos:new THREE.Vector3( 5.6, 0.5, -0.2), label:"Архив" }
  ],[])

  useEffect(()=>{
    let t:any
    if (step==="constellation") t=setTimeout(onAutoNext, 1200)
    if (step==="board")        t=setTimeout(onAutoNext, 1600)
    if (step==="sign")         t=setTimeout(onAutoNext, 1600)
    if (step==="sla")          t=setTimeout(onAutoNext, 1600)
    if (step==="vault")        t=setTimeout(onAutoNext, 1600)
    if (step==="archive")      t=setTimeout(onAutoNext, 1600)
    return ()=> clearTimeout(t)
  },[step,onAutoNext])

  return (
    <>
      {step==="constellation" && <Constellation />}
      {(step!=="constellation") && <Flow nodes={nodes} />}
      {step==="playback" && <DocumentTravel nodes={nodes} startIndex={0} stopIndex={3} onComplete={onAutoNext} />}
      {step==="board" && <StaticDocAt pos={nodes[3].pos} />}
      {step==="sign" && (<><DocumentTravel nodes={nodes} startIndex={3} stopIndex={4} onComplete={()=>{}} speed={0.7} /><EimzoBadge at={nodes[4].pos} /></>)}
      {step==="sla" && <SlaRibbon />}
      {step==="vault" && <Vault at={nodes[5].pos} />}
      {step==="archive" && <Archive at={nodes[6].pos} />}
      {step==="summary" && <Summary />}
    </>
  )
}

function Constellation(){
  const g=useRef<THREE.Group>(null)
  useFrame((_,dt)=>{ if(g.current) g.current.rotation.y+=dt*0.2 })
  const pts=useMemo(()=>Array.from({length:60},()=>({ r:3.5+Math.random()*2.5, a:Math.random()*Math.PI*2, y:-1+Math.random()*2 })),[])
  return (
    <group ref={g}>
      {pts.map((p,i)=>(
        <mesh key={i} position={[Math.cos(p.a)*p.r, p.y, Math.sin(p.a)*p.r]}>
          <sphereGeometry args={[0.04,8,8]} />
          <meshStandardMaterial color="#93c5fd" emissive="#1d4ed8" emissiveIntensity={0.5}/>
        </mesh>
      ))}
      <Text position={[0,1.8,0]} fontSize={0.26} color="#e5e7eb" anchorX="center">Оргструктура</Text>
    </group>
  )
}

function Flow({ nodes }: { nodes:{pos:THREE.Vector3; label:string}[] }){
  return (
    <group>
      <Line points={nodes.map(n=>n.pos)} color="#334155" lineWidth={1.5}/>
      {nodes.map((n,i)=>(
        <group key={i} position={n.pos}>
          <mesh><boxGeometry args={[0.95,0.45,0.1]} /><meshStandardMaterial color={i===4?"#10b981": i%2?"#64748b":"#3b82f6"} metalness={0.15} roughness={0.45}/></mesh>
          <Text position={[0,0.4,0.06]} fontSize={0.14} color="white" anchorX="center" anchorY="middle">{n.label}</Text>
        </group>
      ))}
    </group>
  )
}

function DocIcon(){
  return (
    <group>
      <mesh position={[0,0,0]}><boxGeometry args={[0.72,0.72,0.08]} /><meshStandardMaterial color="#0e1626" metalness={0.2} roughness={0.7}/></mesh>
      <Html transform position={[0,0,0.045]} scale={0.04} distanceFactor={10}>
        <div style={{ width:240, height:240, display:"grid", placeItems:"center" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            <path d="M10 9H8"></path>
            <path d="M16 13H8"></path>
            <path d="M16 17H8"></path>
          </svg>
        </div>
      </Html>
    </group>
  )
}

function StaticDocAt({ pos }: { pos: THREE.Vector3 }){
  return <group position={[pos.x,pos.y,pos.z]}><DocIcon/></group>
}

function DocumentTravel({ nodes, startIndex, stopIndex, speed=0.6, onComplete }: { nodes: Array<{ pos: THREE.Vector3 }>, startIndex:number, stopIndex:number, speed?:number, onComplete:()=>void }) {
  const ref = useRef<THREE.Group>(null)
  const segRef = useRef(startIndex)
  const tRef = useRef(0)
  useFrame((_,dt)=>{
    const seg = segRef.current
    if (seg >= stopIndex) return
    tRef.current += dt*speed
    let t = tRef.current
    if (t >= 1){
      segRef.current += 1
      tRef.current = 0
      if (segRef.current >= stopIndex){ onComplete(); return }
      t = 0
    }
    const A = nodes[seg].pos, B = nodes[seg+1].pos
    const x = THREE.MathUtils.lerp(A.x, B.x, t)
    const y = THREE.MathUtils.lerp(A.y, B.y, t)
    const z = THREE.MathUtils.lerp(A.z, B.z, t)
    if (ref.current){ ref.current.position.set(x,y,z); ref.current.lookAt(B) }
  })
  return <group ref={ref}><DocIcon/></group>
}

function EimzoBadge({ at }: { at: THREE.Vector3 }){
  const r=useRef<THREE.Mesh>(null)
  useFrame((_,dt)=>{ if(r.current) r.current.rotation.z += dt*1.5 })
  return (
    <group position={[at.x,at.y,at.z]}>
      <mesh ref={r} position={[0,0.28,0.06]}><torusGeometry args={[0.22,0.03,16,64]} /><meshStandardMaterial color="#22c55e" emissive="#16a34a" emissiveIntensity={0.8}/></mesh>
      <Text position={[0,-0.04,0.06]} fontSize={0.2} color="#e5e7eb" anchorX="center">E‑IMZO</Text>
    </group>
  )
}

function SlaRibbon(){
  const m=useRef<THREE.MeshStandardMaterial>(null)
  useFrame(()=>{ if(m.current){ const t=(Date.now()/500)%2; m.current.color = new THREE.Color(t<1?"#22c55e":"#f59e0b") } })
  return (
    <group position={[0,-1.3,0]}>
      <mesh><boxGeometry args={[6.8,0.08,0.2]} /><meshStandardMaterial ref={m} color="#22c55e"/></mesh>
      <Text position={[0,0.28,0]} fontSize={0.17} color="#e5e7eb" anchorX="center">SLA</Text>
    </group>
  )
}
function Vault({ at }: { at: THREE.Vector3 }){
  return (
    <group position={[at.x,at.y,at.z]}>
      <mesh><boxGeometry args={[1.2,1.2,1.2]}/><meshStandardMaterial color="#0f172a" metalness={0.3} roughness={0.6}/></mesh>
      <mesh position={[0.6,0,0]}><boxGeometry args={[0.05,1.2,1.2]}/><meshStandardMaterial color="#1f2937" emissive="#3b82f6" emissiveIntensity={0.4}/></mesh>
      <Text position={[0,0.9,0.7]} fontSize={0.16} color="#e5e7eb" anchorX="center">On‑Prem</Text>
    </group>
  )
}
function Archive({ at }: { at: THREE.Vector3 }){
  return (
    <group position={[at.x,at.y,at.z]}>
      {Array.from({length:3}).map((_,r)=>(
        <group key={r} position={[0,r*0.5,0]}>
          {Array.from({length:6}).map((__,c)=>(
            <mesh key={c} position={[c*0.3-0.75,0,0]}><boxGeometry args={[0.26,0.18,0.2]}/><meshStandardMaterial color={r===1&&c===3?"#3b82f6":"#334155"}/></mesh>
          ))}
        </group>
      ))}
      <Text position={[0,1.8,0]} fontSize={0.18} color="#e5e7eb" anchorX="center">Архив</Text>
    </group>
  )
}
function Summary(){
  return (
    <group position={[0,0.8,0]}>
      <mesh><boxGeometry args={[5.5,1.2,0.1]}/><meshStandardMaterial color="#111827"/></mesh>
      <Text position={[0,0.2,0.06]} fontSize={0.22} color="#e5e7eb" anchorX="center">Edoline: полный цикл</Text>
      <Text position={[0,-0.2,0.06]} fontSize={0.14} color="#93c5fd" anchorX="center">Маршрут → Голосование → E‑IMZO → SLA → Хранилище → Архив</Text>
    </group>
  )
}
