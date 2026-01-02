'use client';

import { ChatBubble } from './chat-bubble';
import { StartupList } from './startup-list';
import Link from 'next/link';
import { useState, useEffect, useLayoutEffect } from 'react';

export function ChatLayout() {
  // STRICT SCROLL RESET
  useLayoutEffect(() => {
    // Force manual scroll restoration to prevent browser from remembering position
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  // Master Timeline Calculation
  const d1 = 0.5; // Hey there
  const d2 = d1 + 1.2; // I'm Tomas
  const d3 = d2 + 1.5; // I co-found
  const d4 = d3 + 2.2; // Currently managing
  const d5 = d4 + 1.8; // The List

  // The list takes some time to animate its rows.
  // List starts at d5. 6 items * 0.1s staggering + 0.4s base = ~1.0s animation.
  // We want the footer to unlock AFTER the list is fully visible and read.
  const timeUntilFooterUnlocks = d5 + 2.5; // Give it 2.5s after list starts

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, timeUntilFooterUnlocks * 1000);

    return () => clearTimeout(timer);
  }, [timeUntilFooterUnlocks]);

  return (
    <div className="min-h-screen bg-black text-foreground font-sans px-6 pb-6 pt-12 sm:p-10 md:p-16 flex flex-col justify-start">
      <div className="w-full max-w-2xl flex flex-col gap-1 pb-32">
        {/* TOP SECTION: Auto-plays on load */}

        <ChatBubble
          content={
            <span>
              Hey there <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
            </span>
          }
          delay={d1}
        />

        <ChatBubble content="I'm Tomas Salina." delay={d2} />

        <ChatBubble content="I co-found and build mission-driven startups." delay={d3} />

        <ChatBubble content="Currently managing a diverse ecosystem:" delay={d4} />

        {/* 
            SPACING NOTE: 
            The bubbles have `mb-3` by default.
            StartupList (system variant) has standard bubble margin logic.
            So top spacing is standard.
        */}
        <ChatBubble variant="system" delay={d5} content={<StartupList delay={d5 + 0.2} />} />

        {/* BOTTOM SECTION: Renders ONLY after top section is "done" */}
        {showFooter && (
          <>
            {/* 
                SPACING CORRECTION: 
                We want the gap below the list to match the gap above it.
                Above is standard `mb-3` from Previous Bubble.
                StartupList bubble also has `mb-3`.
                So we just need a small extra nudging or actually NO extra spacer if we want it identical.
                However, user asked for "pegados" and "mismo espacio".
                Standard bubble margin is mb-3.
                We will use h-2 to mimic the visual rhythm if needed, 
                or just empty div with no height if we rely on margin.
                Let's use h-2 to be safe as a 'separator'.
            */}
            <div className="h-2"></div>

            <ChatBubble content="Always building. Always shipping." withScroll={true} delay={0} />

            <ChatBubble
              withScroll={true}
              delay={0.2}
              content={
                <div className="">
                  <span className="mr-2">You can find me on</span>
                  <Link
                    href="https://twitter.com/tomassalina"
                    target="_blank"
                    className="text-blue-500 hover:underline hover:text-blue-400 transition-colors"
                  >
                    X (Twitter)
                  </Link>
                  <span className="mx-1.5 text-gray-500">or</span>
                  <Link
                    href="https://github.com/tomassalina"
                    target="_blank"
                    className="text-blue-500 hover:underline hover:text-blue-400 transition-colors"
                  >
                    GitHub
                  </Link>
                  .
                </div>
              }
            />

            <ChatBubble content="Have a good week" withScroll={true} delay={0.4} />

            <ChatBubble content="~ T." withScroll={true} delay={0.6} />
          </>
        )}
      </div>
    </div>
  );
}
