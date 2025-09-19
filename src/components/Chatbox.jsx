import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-lg border p-4"
          >
            <div className="flex justify-between items-center border-b pb-2 mb-3">
              <h3 className="font-semibold text-gray-800">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="h-40 overflow-y-auto text-gray-600 text-sm space-y-2">
              <p>Hello 👋, how can we help you today?</p>
            </div>
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full mt-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
