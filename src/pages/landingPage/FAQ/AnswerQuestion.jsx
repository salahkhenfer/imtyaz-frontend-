import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const AnswerQuestion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-3 md:p-3 bg-white rounded-lg shadow-sm">
      <div
        dir="rtl"
        className="flex  py-4 px-3 bg-gray-200 rounded-2xl border-4 border-emerald-200 border-solid  flex-col gap-2"
      >
        <motion.div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <p className="font-semibold text-base md:text-lg text-gray-700 pr-4">
            {question}
          </p>
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <Minus className="w-5 h-5 md:w-6 md:h-6 text-gray-600 flex-shrink-0" />
            ) : (
              <Plus className="w-5 h-5 md:w-6 md:h-6 text-gray-600 flex-shrink-0" />
            )}
          </motion.div>
        </motion.div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <p className="text-sm md:text-base text-gray-600 font-light leading-normal">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnswerQuestion;
