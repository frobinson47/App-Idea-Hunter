
import React from 'react';
import { HuntingGround } from '../types';

interface HuntingGroundCardProps {
  ground: HuntingGround;
  onSelect: () => void;
}

const colorVariants: { [key: string]: string } = {
  indigo: 'border-indigo-500/50 hover:border-indigo-500 text-indigo-400',
  orange: 'border-orange-500/50 hover:border-orange-500 text-orange-400',
  sky: 'border-sky-500/50 hover:border-sky-500 text-sky-400',
  emerald: 'border-emerald-500/50 hover:border-emerald-500 text-emerald-400',
};

const bgVariants: { [key: string]: string } = {
    indigo: 'bg-indigo-500/10',
    orange: 'bg-orange-500/10',
    sky: 'bg-sky-500/10',
    emerald: 'bg-emerald-500/10',
}

const HuntingGroundCard: React.FC<HuntingGroundCardProps> = ({ ground, onSelect }) => {
  const { title, description, Icon, color } = ground;
  const colorClass = colorVariants[color] || 'border-gray-600 hover:border-gray-500 text-gray-400';
  const bgClass = bgVariants[color] || 'bg-gray-800';

  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer group p-6 rounded-lg border-2 transition-all duration-300 ${colorClass} ${bgClass} flex flex-col`}
    >
      <div className="flex-shrink-0">
        <Icon className="h-10 w-10 mb-4" />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
};

export default HuntingGroundCard;
