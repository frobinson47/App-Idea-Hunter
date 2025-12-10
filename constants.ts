
import { HuntingGround } from './types';
import MarketplaceIcon from './components/icons/MarketplaceIcon';
import RedditIcon from './components/icons/RedditIcon';
import SocialIcon from './components/icons/SocialIcon';
import RevenueIcon from './components/icons/RevenueIcon';

export const HUNTING_GROUNDS: HuntingGround[] = [
  {
    id: 'marketplaces',
    title: 'Startup Marketplaces',
    description: 'Filter under $10K MRR listings on sites like Flippa to spot patterns and find what users already pay for.',
    promptHint: 'e.g., "habit trackers" or "student productivity"',
    promptPrefix: `Analyze the niche of "{{USER_INPUT}}" based on listings from startup marketplaces like MicroAcquire or Flippa. Identify common pain points, reasons for selling, and underserved user segments. Based on this analysis, generate 3 distinct and actionable app ideas that could realistically achieve $5k-$10k MRR. For each idea, provide a target audience, the core problem it solves, and a key feature that would make it stand out.`,
    Icon: MarketplaceIcon,
    color: 'indigo',
  },
  {
    id: 'reviews',
    title: 'Reddit & App Reviews',
    description: 'Dive into communities like r/Notion or app stores for "Why can\'t it just..." gems to turn into your MVP.',
    promptHint: 'e.g., "Notion" or "calendar apps"',
    promptPrefix: `Imagine you are analyzing Reddit threads (like r/{{USER_INPUT}} or related subreddits) and app store reviews for products in the "{{USER_INPUT}}" space. Find 5 common, specific user complaints, feature requests, or statements like "I wish it could...". Synthesize these pain points and generate 2 innovative app ideas or significant feature enhancements that directly address them. For each idea, describe the MVP and how it solves the identified user frustrations.`,
    Icon: RedditIcon,
    color: 'orange',
  },
  {
    id: 'social',
    title: 'Social Support',
    description: 'Search "@Slack support" on X/Twitter for real-time gripes. Repeated complaints equal a market gap.',
    promptHint: 'e.g., "Slack" or "Canva"',
    promptPrefix: `Search for common user complaints and feature requests on social media (like X/Twitter) related to the product "{{USER_INPUT}}". Identify the top 3-5 recurring issues that users publicly complain about to the support account. Based on these gripes, brainstorm a standalone app, an integration, or a browser extension that solves one of these major problems. Describe the solution, its target user, and why it would be a compelling fix.`,
    Icon: SocialIcon,
    color: 'sky',
  },
  {
    id: 'revenue',
    title: 'Revenue Trackers',
    description: 'Scan top "boring" earners on sites like Product Hunt. Universal pains pay forever; find an iteration.',
    promptHint: 'e.g., "CSV cleaners" or "screenshot tools"',
    promptPrefix: `Analyze successful "boring" but profitable apps in the "{{USER_INPUT}}" category on platforms like Product Hunt or Indie Hackers. Identify the core, universal problem they solve that makes them so valuable. Generate ideas for 3 niche iterations of this concept. For each idea, specify the new target audience (e.g., "for lawyers", "for content creators") and how you would tailor the features and marketing to dominate that specific vertical.`,
    Icon: RevenueIcon,
    color: 'emerald',
  },
];
