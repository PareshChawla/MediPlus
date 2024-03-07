import React, { useState } from 'react';

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const question = "How does it work?";
  const answer = "It works fine.";
  

  return (
    <div className="cursor-pointer hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
      <div className="p-4">{question}</div>
      {isOpen && (
        <div className="border-t border-gray-200 p-4">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Faq;