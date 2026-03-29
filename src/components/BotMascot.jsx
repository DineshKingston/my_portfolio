import { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

const BotMascot = () => {
  const [pos, setPos] = useState({ x: 80, y: 80 }); // Percentages

  const teleportBot = () => {
    // Generate new random viewport percentages
    const newX = 10 + Math.random() * 80; // 10% to 90%
    const newY = 10 + Math.random() * 80;
    
    setPos({ x: newX, y: newY });
  };

  return (
    <>
      <style>{`
        .bot-jump-arc {
          transition: left 0.7s linear, top 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
      <div
        onMouseEnter={teleportBot}
        onClick={teleportBot}
        className="fixed z-[999] p-3 rounded-full bg-slate-900 text-white shadow-xl cursor-pointer bot-jump-arc animate-bounce hover:animate-none"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 20px 25px -5px rgba(15, 23, 42, 0.3)'
        }}
        title="Catch me!"
      >
        <div className="relative">
          <Bot size={32} />
          {/* Eyes */}
          <div className="absolute top-[10px] left-[10px] w-[5px] h-[5px] bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-[10px] right-[10px] w-[5px] h-[5px] bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default BotMascot;
