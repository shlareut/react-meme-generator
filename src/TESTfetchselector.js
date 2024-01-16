import React from 'react';
import Templates from './memeTemplates.json';

export default function TESTfetchselector() {
  return (
    <div>
      <p>Test</p>
      <div>
        {Templates.map((item) => (
          <p>{item.id}</p>
        ))}
      </div>
    </div>
  );
}
