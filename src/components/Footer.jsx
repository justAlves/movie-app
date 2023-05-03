import React from 'react';
import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-slate-800 flex  p-6 justify-center items-center">
      <span>
        Feito com
      </span>
      <Heart size={15} color="red" />
      <span>por Alves.</span>
    </footer>
  );
}

export default Footer;
