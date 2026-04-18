"use client";

import { useEffect, useRef, useState } from "react";

export default function FineArts() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    const cardNode = cardRef.current;

    if (!sectionNode || !cardNode) return;

    let observer = null;
    let cleanupScroll = null;

    const handleDesktop = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsFlipped(entry.isIntersecting);
        },
        {
          threshold: 0.2,
        }
      );

      observer.observe(sectionNode);
    };

    const handleMobile = () => {
      const checkCardFullyInView = () => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;

        const fullyInView =
          rect.top >= 0 &&
          rect.bottom <= viewportHeight &&
          rect.left >= 0 &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);

        if (fullyInView) {
          setIsFlipped(true);
          window.removeEventListener("scroll", checkCardFullyInView);
          window.removeEventListener("resize", checkCardFullyInView);
        }
      };

      window.addEventListener("scroll", checkCardFullyInView, {
        passive: true,
      });
      window.addEventListener("resize", checkCardFullyInView);

      checkCardFullyInView();

      cleanupScroll = () => {
        window.removeEventListener("scroll", checkCardFullyInView);
        window.removeEventListener("resize", checkCardFullyInView);
      };
    };

    const setup = () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }

      if (cleanupScroll) {
        cleanupScroll();
        cleanupScroll = null;
      }

      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        handleDesktop();
      } else {
        setIsFlipped(false);
        handleMobile();
      }
    };

    setup();
    window.addEventListener("resize", setup);

    return () => {
      if (observer) observer.disconnect();
      if (cleanupScroll) cleanupScroll();
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <section
      id="arts"
      ref={sectionRef}
      className="relative overflow-hidden bg-white/5 py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-secondary">
              Fine & Applied Arts
            </span>

            <h2 className="mb-6 font-hero text-4xl font-bold text-white md:text-5xl">
              Where Tradition Meets Innovation
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              Beyond digital, we celebrate cultural heritage through the
              production, exhibition, and sale of fine arts. Our Adire textile
              designs honor traditional craftsmanship while embracing
              contemporary aesthetics.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="mb-2 font-bold text-white">
                    Traditional Crafts
                  </h4>
                  <p className="text-sm text-gray-400">
                    Preserving indigenous art forms through modern interpretation
                    and sustainable practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M9 10a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="mb-2 font-bold text-white">
                    Adire Textile Design
                  </h4>
                  <p className="text-sm text-gray-400">
                    Authentic resist-dyeing techniques creating unique patterns
                    on premium fabrics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="mb-2 font-bold text-white">
                    Exhibition & Sales
                  </h4>
                  <p className="text-sm text-gray-400">
                    Curated galleries connecting artists with collectors and art
                    enthusiasts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative" style={{ perspective: "1200px" }}>
            <div
              ref={cardRef}
              className="relative aspect-square will-change-transform"
              style={{
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 900ms ease",
              }}
            >
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/20 to-accent/20 p-1"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[22px] bg-dark">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

                  <div className="z-10 p-8 text-center">
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent">
                      <svg
                        className="h-12 w-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                    </div>

                    <h3 className="mb-2 font-display text-2xl font-bold text-white">
                      Artistic Excellence
                    </h3>
                    <p className="text-gray-400">Crafting visual legacies</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[22px] bg-dark">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
                  <div className="absolute inset-0 bg-white/[0.03]" />

                  <div className="z-10 p-8 text-center">
                    <span className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-secondary">
                      Fine Arts
                    </span>
                    <h3 className="mb-3 font-display text-3xl font-bold text-white md:text-4xl">
                      Coming Soon
                    </h3>
                    <p className="text-base text-gray-400 md:text-lg">
                      A curated collection of artistic expressions is on the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}