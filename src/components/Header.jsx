import React from 'react';
import { Clapperboard, Github, Sun } from 'lucide-react';

function Header() {
  return (
    <header>
      <div className="flex justify-between p-4 border-b border-slate-900">
        <div className="flex items-center gap-4">
          <Clapperboard size={45} />
          <h1 className="font-black text-xl">Movie app</h1>
        </div>
        <div className="flex gap-4 items-center">
          <Github />
          <Sun />
        </div>
      </div>
    </header>
  );
}

export default Header;
