// src/components/Hero3D.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Stars,
} from "@react-three/drei";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero3D = () => {
  return (
    <section className="relative w-full h-screen text-white overflow-hidden">
      {/* Texte au-dessus */}
      <div className="absolute top-1/2 left-1/2 z-10 max-w-4xl -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400"
        >
          SK Yitro Consulting • Blog & Insights
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Des analyses claires <br />
          <span className="text-blue-400">pour mieux décider</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-gray-300 text-lg"
        >
          Stratégie, technologie et performance au service des entreprises
          ambitieuses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            to="/articles"
            className="inline-flex items-center mt-10 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            Explorer les articles <FaArrowRight className="ml-3" />
          </Link>
        </motion.div>
      </div>

      {/* Canvas Three.js pour l'orbe 3D */}
      <Canvas
        className="absolute inset-0 z-0"
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          {/* Orbe animée */}
          <Sphere args={[1.5, 64, 64]} scale={1}>
            <MeshDistortMaterial
              color="#3b82f6" // couleur de l'orbe
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0.2}
            />
          </Sphere>

          {/* Etoiles avec couleur similaire à l'orbe */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            color="#3b82f6" // couleur des étoiles = couleur de l'orbe
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero3D;
