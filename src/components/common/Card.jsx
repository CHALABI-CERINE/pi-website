import { motion } from 'framer-motion';

export const Card = ({
  children,
  hover = true,
  className = '',
  onClick,
  image,
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : {}}
      className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all ${className}`}
      onClick={onClick}
    >
      {image && (
        <img
          src={image}
          alt="card"
          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
        />
      )}
      {children}
    </motion.div>
  );
};