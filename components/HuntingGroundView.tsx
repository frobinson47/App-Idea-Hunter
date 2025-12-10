
import React, { useState, useCallback } from 'react';
import { HuntingGround } from '../types';
import { getAppIdeas } from '../services/geminiService';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import SparklesIcon from './icons/SparklesIcon';

interface HuntingGroundViewProps {
  ground: HuntingGround;
  onBack: () => void;
}

const colorVariants: { [key: string]: { text: string; button: string; ring: string; } } = {
  indigo: { text: 'text-indigo-400', button: 'bg-indigo-600 hover:bg-indigo-700', ring: 'focus:ring-indigo-500' },
  orange: { text: 'text-orange-400', button: 'bg-orange-600 hover:bg-orange-700', ring: 'focus:ring-orange-500' },
  sky: { text: 'text-sky-400', button: 'bg-sky-600 hover:bg-sky-700', ring: 'focus:ring-sky-500' },
  emerald: { text: 'text-emerald-400', button: 'bg-emerald-600 hover:bg-emerald-700', ring: 'focus:ring-emerald-500' },
};

const HuntingGroundView: React.FC<HuntingGroundViewProps> = ({ ground, onBack }) => {
  const [userInput, setUserInput] = useState('');
  const [ideas, setIdeas] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { title, description, Icon, color, promptHint, promptPrefix } = ground;
  const colors = colorVariants[color] || colorVariants.indigo;

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    setIsLoading(true);
    setError('');
    setIdeas('');

    try {
      const result = await getAppIdeas(promptPrefix, userInput);
      setIdeas(result);
    } catch (err) {
      setError('Failed to fetch ideas. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [userInput, isLoading, promptPrefix]);

  const formattedIdeas = ideas.split('\n').map((line, index) => {
    if (line.startsWith('* ') || line.startsWith('- ')) {
      return <li key={index} className="mb-2">{line.substring(2)}</li>;
    }
    if (/^\d+\./.test(line)) {
       return <li key={index} className="mb-2 list-decimal ml-5">{line.substring(line.indexOf('.') + 1)}</li>;
    }
    if (line.trim().length === 0) {
      return <br key={index} />;
    }
    if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-4 mb-2 text-white">{line.substring(4)}</h3>;
    }
    if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-white">{line.substring(3)}</h2>;
    }
    if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-white">{line.substring(2)}</h1>;
    }
    return <p key={index} className="mb-4">{line}</p>;
  });

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-8 text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        Back to Hunting Grounds
      </button>

      <div className="flex items-start gap-4 mb-6">
        <Icon className={`h-12 w-12 flex-shrink-0 ${colors.text}`} />
        <div>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <p className="text-slate-400 mt-1">{description}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={promptHint}
          className={`w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 ${colors.ring} transition-all`}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !userInput.trim()}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white rounded-md transition-all ${colors.button} disabled:bg-slate-600 disabled:cursor-not-allowed`}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <SparklesIcon className="h-5 w-5" />
              <span>Generate Ideas</span>
            </>
          )}
        </button>
      </form>
      
      {error && <p className="text-red-400 text-center">{error}</p>}
      
      {ideas && (
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-slate-300 prose prose-invert prose-p:text-slate-300 prose-li:text-slate-300">
          {formattedIdeas}
        </div>
      )}
    </div>
  );
};

export default HuntingGroundView;
