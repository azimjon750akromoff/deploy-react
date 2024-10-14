import React, { useState } from 'react';
import '../styles/Accardion.scss';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null); 

  const data = [
    { title: 'Accordion 1', content: 'Accordion 1 ma\'lumotlar.', image: 'https://picsum.photos/200/100?random=1' },
    { title: 'Accordion 2', content: 'Accordion 2 ma\'lumotlar.', image: 'https://picsum.photos/200/100?random=2' },
    { title: 'Accordion 3', content: 'Accordion 3 ma\'lumotlar.', image: 'https://picsum.photos/200/100?random=3' },
  ];

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            <h3>{item.title}</h3>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
              <img className="accordion-image" src={item.image} alt={item.title} />
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;