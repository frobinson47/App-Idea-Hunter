
import React from 'react';

export interface HuntingGround {
  id: string;
  title: string;
  description: string;
  promptHint: string;
  promptPrefix: string;
  Icon: React.FC<{ className?: string }>;
  color: string;
}
