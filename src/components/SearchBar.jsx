import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

export function SearchBar() {
  const handleSearch = (e) => {
    e.preventDefault();
    // Add search functionality here
    console.log('Searching...');
  };

  return (
    <motion.form 
      className="flex gap-2 w-full max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSearch}
    >
      <div className="relative flex-1">
        <Input 
          type="text" 
          placeholder="Search the web sustainably..." 
          className="pl-10 bg-white/90 backdrop-blur-sm"
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
      <Button size="lg" type="submit">
        Search
      </Button>
    </motion.form>
  );
}