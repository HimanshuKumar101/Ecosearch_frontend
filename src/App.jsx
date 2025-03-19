import { Leaf, Lock, Minimize, TreePine } from 'lucide-react';
import { motion } from 'framer-motion';
import { SearchBar } from './components/SearchBar';
import { NewsletterForm } from './components/NewsletterForm';
import { FeatureCard } from './components/FeatureCard';

// Features data
const features = [
  {
    title: "Climate Driven",
    description: "We invest revenue in renewable energy and plantation drives",
    icon: Leaf
  },
  {
    title: "Privacy First",
    description: "We don't collect or store any personal data",
    icon: Lock
  },
  {
    title: "Minimal Design",
    description: "Optimized interface to reduce carbon footprint",
    icon: Minimize
  },
  {
    title: "Eco-Friendly",
    description: "300% reduction in energy consumption",
    icon: TreePine
  }
];

function App() {
  return (
    <div className="min-h-screen bg-[#fdf7f4]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#fdf7f4]/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <motion.h1 
            className="text-2xl font-black"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[#8eb486]">Eco</span>Search
          </motion.h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            World's first <span className="text-[#8eb486]">Green</span> AI
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Search the web while making a positive impact on the environment
          </motion.p>

          <div className="flex flex-col items-center gap-8">
            <SearchBar />
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Build sustainable systems with your search
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8eb486] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">EcoSearch</h2>
              <p className="text-white/80">Making the web greener, one search at a time</p>
            </div>
            <div className="text-sm text-white/80">
              © {new Date().getFullYear()} EcoSearch. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;