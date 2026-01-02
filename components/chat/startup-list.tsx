'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Startup {
  name: string;
  description: string;
  logo: string;
  url: string;
}

const startups: Startup[] = [
  {
    name: 'Slice',
    description: 'Decentralized real-time dispute resolution.',
    logo: '/startups/slice-logo.png',
    url: 'https://slicehub.xyz',
  },
  {
    name: 'Koopay',
    description: 'Secure payments for freelancers.',
    logo: '/startups/koopay-logo.png',
    url: 'https://www.koopay.io',
  },
  {
    name: 'e4e',
    description: 'Tinder for retail investors.',
    logo: '/startups/e4e-logo.png',
    url: 'https://www.e4e.app',
  },
  {
    name: 'Dropsland',
    description: 'Next-gen music ecosystem.',
    logo: '/startups/dropsland-logo.png',
    url: 'https://www.dropsland.com',
  },
  {
    name: 'AviTracker',
    description: 'Aviation maintenance OS.',
    logo: '/startups/avitracker-logo.png',
    url: 'https://www.avitracker.org',
  },
  {
    name: 'MiNNA',
    description: 'Hyper-personalized AI education.',
    logo: '/startups/minna-logo.jpeg',
    url: 'https://www.minna.com.ar',
  },
];

export function StartupList({ delay = 0 }: { delay: number }) {
  return (
    <div className="flex flex-col gap-5 mt-2">
      {startups.map((startup, index) => (
        <motion.div
          key={startup.name}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + index * 0.1, ease: 'easeOut' }}
        >
          <a
            href={startup.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group hover:opacity-80 transition-opacity p-2 rounded-xl -ml-2"
          >
            {/* Circular Logo */}
            <div className="h-10 w-10 shrink-0 rounded-full overflow-hidden bg-white/10">
              <Avatar className="h-full w-full">
                <AvatarImage src={startup.logo} alt={startup.name} className="object-cover" />
                <AvatarFallback className="text-[10px] font-bold bg-neutral-800 text-white">
                  {startup.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Text Line */}
            <div className="flex flex-wrap items-baseline gap-2 text-[16px]">
              <span className="font-semibold text-white group-hover:underline decoration-white/30 underline-offset-4 transition-all">
                {startup.name}
              </span>
              <span className="text-gray-500 text-sm">✦</span>
              <span className="text-gray-400 font-light">{startup.description}</span>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
}
