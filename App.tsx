
import React, { useState } from 'react';
import { HuntingGround } from './types';
import { HUNTING_GROUNDS } from './constants';
import Header from './components/Header';
import HuntingGroundCard from './components/HuntingGroundCard';
import HuntingGroundView from './components/HuntingGroundView';

const App: React.FC = () => {
  const [selectedGround, setSelectedGround] = useState<HuntingGround | null>(null);

  const handleSelectGround = (ground: HuntingGround) => {
    setSelectedGround(ground);
  };

  const handleGoBack = () => {
    setSelectedGround(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {selectedGround ? (
          <HuntingGroundView ground={selectedGround} onBack={handleGoBack} />
        ) : (
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Chase Pains, Not Unicorns?
              </h1>
              <p className="max-w-3xl mx-auto text-lg text-slate-400">
                Profitable apps aren't eureka strikes—they're solutions to problems people Google daily.
                Mine real complaints to build your next successful app.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HUNTING_GROUNDS.map((ground) => (
                <HuntingGroundCard
                  key={ground.id}
                  ground={ground}
                  onSelect={() => handleSelectGround(ground)}
                />
              ))}
            </div>
          </div>
        )}
      </main>
       <footer className="text-center py-6 text-slate-500">
        <p>Built with React, Tailwind CSS, and the Gemini API.</p>
      </footer>
    </div>
  );
};

export default App;
