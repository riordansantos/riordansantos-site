import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./styles";
function ToggleCard(props) {
  const [showCard, setShowCard] = useState(true);
  const {buttonTitle, content} = props;
  return (
    <Card>
      <button className="pai" onClick={() => setShowCard(!showCard)}>{buttonTitle}</button>
      <div className="content">
        <AnimatePresence>
          {showCard && (
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5 }}
              className="card"
            
            >
              
              <p>{content}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}

export default ToggleCard;
