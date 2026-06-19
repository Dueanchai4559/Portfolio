"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ProfileNavItem, ProfileSectionId } from "@/app/lib/profileData";

type StickyProfileTabsProps = {
    items: ReadonlyArray<ProfileNavItem>;
};

export default function StickyProfileTabs({ items }: StickyProfileTabsProps) {
    const headerRef = useRef<HTMLDivElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
    const tickingRef = useRef(false);

    const [activeId, setActiveId] = useState<ProfileSectionId>(items[0]?.id ?? "hero");
    const [headerHeight, setHeaderHeight] = useState(86);

    const sectionIds = useMemo(() => {
        return items.map((item) => item.id);
    }, [items]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        function updateHeaderHeight() {
            const height = headerRef.current?.offsetHeight;

            if (!height) return;

            setHeaderHeight(height);
        }

        updateHeaderHeight();

        const resizeObserver =
            typeof ResizeObserver !== "undefined"
                ? new ResizeObserver(() => {
                    updateHeaderHeight();
                })
                : null;

        if (headerRef.current && resizeObserver) {
            resizeObserver.observe(headerRef.current);
        }

        window.addEventListener("resize", updateHeaderHeight);

        return () => {
            resizeObserver?.disconnect();
            window.removeEventListener("resize", updateHeaderHeight);
        };
    }, []);

    function centerTabOnly(id: ProfileSectionId) {
        const nav = navRef.current;
        const button = tabRefs.current[id];

        if (!nav || !button) return;

        const nextLeft =
            button.offsetLeft -
            nav.clientWidth / 2 +
            button.clientWidth / 2;

        nav.scrollTo({
            left: Math.max(nextLeft, 0),
            behavior: "smooth",
        });
    }

    function getCurrentSectionId() {
        const checkY = headerHeight + 90;

        let currentId: ProfileSectionId = sectionIds[0] ?? "hero";

        for (const id of sectionIds) {
            const section = document.getElementById(id);

            if (!section) continue;

            const rect = section.getBoundingClientRect();

            if (rect.top <= checkY) {
                currentId = id;
            }
        }

        return currentId;
    }

    useEffect(() => {
        if (typeof window === "undefined") return;

        function updateActiveSection() {
            tickingRef.current = false;

            const currentId = getCurrentSectionId();

            setActiveId((prev) => {
                if (prev === currentId) return prev;
                return currentId;
            });
        }

        function handleScroll() {
            if (tickingRef.current) return;

            tickingRef.current = true;
            window.requestAnimationFrame(updateActiveSection);
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [headerHeight, sectionIds]);

    useEffect(() => {
        centerTabOnly(activeId);
    }, [activeId]);

    function handleScrollTo(id: ProfileSectionId) {
        const target = document.getElementById(id);

        if (!target) return;

        setActiveId(id);
        centerTabOnly(id);

        const targetTop = target.getBoundingClientRect().top + window.scrollY;
        const safeTop = Math.max(targetTop - headerHeight - 18, 0);

        window.scrollTo({
            top: safeTop,
            behavior: "smooth",
        });
    }

    return (
        <>
            <div
                ref={headerRef}
                className="fixed left-0 right-0 top-0 z-[9999] w-full border-b border-white/10 bg-slate-950/90 px-3 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:px-5 lg:px-8"
            >
                <nav
                    ref={navRef}
                    aria-label="เมนูหัวข้อโปรไฟล์"
                    className={[
                        "mx-auto flex w-full max-w-7xl items-center gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/10 p-2",
                        "overscroll-x-contain scroll-smooth",
                        "[scrollbar-width:thin]",
                        "[&::-webkit-scrollbar]:h-2",
                        "[&::-webkit-scrollbar-track]:rounded-full",
                        "[&::-webkit-scrollbar-track]:bg-white/10",
                        "[&::-webkit-scrollbar-thumb]:rounded-full",
                        "[&::-webkit-scrollbar-thumb]:bg-cyan-300/50",
                    ].join(" ")}
                >
                    {items.map((item) => {
                        const active = activeId === item.id;

                        return (
                            <button
                                key={item.id}
                                ref={(element) => {
                                    tabRefs.current[item.id] = element;
                                }}
                                type="button"
                                onClick={() => handleScrollTo(item.id)}
                                className={[
                                    "shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                                    "sm:px-5 sm:text-base",
                                    "focus:outline-none focus:ring-2 focus:ring-cyan-300/80 focus:ring-offset-2 focus:ring-offset-slate-950",
                                    active
                                        ? "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20"
                                        : "bg-white/10 text-slate-100 hover:bg-white/20 hover:text-white",
                                ].join(" ")}
                                aria-current={active ? "page" : undefined}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </nav>
            </div>

            <div
                aria-hidden="true"
                style={{
                    height: headerHeight,
                }}
            />
        </>
    );
}