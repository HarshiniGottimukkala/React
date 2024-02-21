import { useState } from 'react'
import './App.css'

function App({ faqData }) {
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setExpandedItemIndex(index === expandedItemIndex ? null : index);
  };

  return (
    <div>
      {faqData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-question ${index === expandedItemIndex ? 'expanded' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            {item.question}
          </div>
          {index === expandedItemIndex && (
            <div className="accordion-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App
