import { motion } from 'framer-motion';

export function FeatureCard({ title, description, icon: Icon }) {
  return (
    <motion.div 
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-[#8eb486] rounded-full opacity-20 transform skew-x-12" />
        <Icon className="w-12 h-12 text-[#8eb486] relative z-10" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-500 text-center">{description}</p>
    </motion.div>
  );
}