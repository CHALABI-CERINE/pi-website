import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

export const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-border">
    <button
      className="flex w-full items-center justify-between py-6 text-left font-poppins text-xs font-bold uppercase tracking-widest hover:text-primary transition-all"
      onClick={onClick}
    >
      {title}
      <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pb-6 font-montserrat text-sm text-muted-foreground leading-relaxed">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)