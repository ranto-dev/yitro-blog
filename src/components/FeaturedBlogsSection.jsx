import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const TiltCard = ({ children }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;
    x.set(posX / 10);
    y.set(posY / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-xl shadow-2xl overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

export default function FeaturedBlogsSection({ featuredBlogs }) {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Fond 3D étoilé derrière les articles */}
      <Canvas
        className="absolute inset-0 z-0"
        camera={{ position: [0, 0, 20], fov: 50 }}
      >
        <ambientLight intensity={0.3} />
        <Stars
          radius={50}
          depth={30}
          count={1000}
          factor={4}
          fade
          color="#3b82f6"
        />
      </Canvas>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase text-blue-600 font-medium tracking-wide">
            Sélection du moment
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Articles à ne pas manquer
          </h2>
        </div>

        {featuredBlogs.length ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <TiltCard key={blog.id}>
                <img
                  src={"https://backblog.yitro-consulting.com/"+blog.main_image_url}
                  alt={blog.image_alt_text}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6 space-y-3">
                  <span className="text-xs uppercase text-blue-500 font-semibold">
                    Article
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {blog.meta_title
                      ? `${blog.meta_title.slice(0, 140)}...`
                      : "Aucun contenu disponible"}
                  </p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center text-sm text-blue-600 font-medium hover:underline"
                  >
                    Lire l’article <FaArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">Aucun article disponible.</p>
        )}
      </div>
    </section>
  );
}
