"use client";

import {
  FaDiscord,
  FaFacebookF,
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import type { IconType } from "react-icons";

type SocialLink = {
  title: string;
  url: string;
  icon: IconType;
};

const socialLinks: SocialLink[] = [
  {
    title: "Facebook",
    url: "https://facebook.com/uxelbi",
    icon: FaFacebookF,
  },
  {
    title: "Messenger Group",
    url: "https://messenger.uxelbi.org",
    icon: FaFacebookMessenger,
  },
  {
    title: "Discord",
    url: "https://discord.uxelbi.org",
    icon: FaDiscord,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/uxelbi",
    icon: FaInstagram,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/company/uxelbi",
    icon: FaLinkedinIn,
  },
];

function SocialLinkPill({ title, url, icon: Icon }: SocialLink) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex min-h-12 items-center gap-2.5 border border-[#1a1a1a]/12 bg-white px-4 py-2 text-sm font-medium tracking-[0.01em] text-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 hover:border-[#d42216] hover:text-[#d42216]"
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
      <span>{title}</span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f0ea] text-[#181818]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bouba-shape bouba-one" />
        <div className="bouba-shape bouba-two" />
        <div className="kiki-shape kiki-one" />
        <div className="kiki-shape kiki-two" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16 sm:px-10">
        <div className="grid w-full grid-cols-1 gap-10 border border-[#1a1a1a]/15 bg-[#f6f3ee] p-8 shadow-[16px_16px_0_0_rgba(24,24,24,0.08)] sm:p-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h1 className="text-6xl font-semibold uppercase leading-[0.86] tracking-[-0.03em] text-[#111] sm:text-7xl md:text-8xl">
              UX
              <span className="block text-[#d42216]">ELBI</span>
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-6 text-[#222]/80">
              Founded in 2026, User Experience (UX) Elbi is a community based in Los Banos, Laguna that is dedicated to the idea that design is a form of public service.
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="max-w-lg border-t border-[#1a1a1a]/20 pt-5 text-2xl leading-tight tracking-[-0.01em] text-[#1b1b1b] sm:text-3xl">
              Join our spaces!
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <SocialLinkPill key={link.title} {...link} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bouba-shape {
          position: absolute;
          opacity: 0.42;
          filter: blur(0.2px);
          animation: boubaFloat 14s ease-in-out infinite;
        }

        .bouba-one {
          top: 16%;
          right: 9%;
          height: 120px;
          width: 170px;
          border-radius: 54% 46% 63% 37% / 41% 58% 42% 59%;
          background: #ff4d3a;
        }

        .bouba-two {
          bottom: 8%;
          left: 11%;
          height: 100px;
          width: 146px;
          border-radius: 42% 58% 39% 61% / 61% 37% 63% 39%;
          background: #ff9e00;
          animation-delay: 2.6s;
        }

        .kiki-shape {
          position: absolute;
          width: 86px;
          height: 86px;
          background: #0057ff;
          opacity: 0.34;
          clip-path: polygon(50% 0%, 59% 34%, 93% 11%, 68% 43%, 100% 50%, 67% 58%, 93% 89%, 58% 67%, 50% 100%, 42% 67%, 7% 89%, 33% 58%, 0% 50%, 32% 43%, 7% 11%, 41% 34%);
          animation: kikiDrift 18s ease-in-out infinite;
        }

        .kiki-one {
          top: 20%;
          left: 7%;
        }

        .kiki-two {
          right: 15%;
          bottom: 12%;
          background: #00a37a;
          transform: scale(0.75) rotate(10deg);
          animation-delay: 4s;
        }

        @keyframes boubaFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(0, -10px, 0) rotate(2deg);
          }
        }

        @keyframes kikiDrift {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(0, 8px, 0) rotate(-8deg);
          }
        }

        @media (max-width: 640px) {
          .bouba-shape,
          .kiki-shape {
            opacity: 0.1;
          }

          .kiki-shape {
            width: 62px;
            height: 62px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bouba-shape,
          .kiki-shape {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}