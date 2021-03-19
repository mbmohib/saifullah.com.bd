import React from 'react';

export default function Stat({ stat = {} }) {
  return (
    <div className="shadow-1 bg-primary-light rounded-sm flex py-5 px-3">
      <div className="flex items-center justify-center w-full">
        {stat.icon}
        <div>
          <p className="text-2xl font-bold text-primary">{stat.stat}</p>
          <p className="text-lg">{stat.label}</p>
        </div>
      </div>
    </div>
  );
}
