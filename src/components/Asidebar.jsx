/* eslint-disable react/prop-types */
import React from 'react';

function Asidebar({ nav }) {
  return (
    <aside className={`${!nav ? 'max-sm:hidden' : ''}`}>
      <div className="p-4 ">
        <ul className="flex flex-col gap-6">
          <li><span className="font-semibold text-lg hover:text-slate-500 hover:cursor-pointer">Home</span></li>
          <li><span className="font-semibold text-lg hover:text-slate-500 hover:cursor-pointer">Trend Movies</span></li>
          <li><span className="font-semibold text-lg hover:text-slate-500 hover:cursor-pointer">Upcoming Movies</span></li>
          <li><span className="font-semibold text-lg hover:text-slate-500 hover:cursor-pointer">Trend Series</span></li>
          <li><span className="font-semibold text-lg hover:text-slate-500 hover:cursor-pointer">Upcoming Series</span></li>
        </ul>
      </div>
    </aside>
  );
}

export default Asidebar;
