import React from 'react';

const Button = ({ label }) => (
  <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
    {label}
  </button>
);

export default Button;