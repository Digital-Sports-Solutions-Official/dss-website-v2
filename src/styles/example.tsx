// Example Case Study Card Component (/src/components/CaseStudyCard.tsx)
export default function CaseStudyCard() {
  return (
    <div className="bg-bg-primary text-text-primary p-6 rounded-lg shadow-md border border-neutral-light transition-all duration-normal ease-dss hover:shadow-hardware hover:-translate-y-1">
      <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-accent bg-accent-subtle px-2 py-1 rounded-sm mb-4">
        IoT & Embedded Systems
      </span>
      <h3 className="text-2xl font-sans font-bold tracking-tight mb-2">
        The tinyLeague™ Ecosystem
      </h3>
      <p className="text-text-secondary text-sm font-sans mb-4">
        Discover how we engineered a custom, low-latency BLE scoreboard system capable of withstand high-stress collegiate tournament conditions.
      </p>
      <a href="/case-studies/tinyleague" className="inline-flex items-center text-sm font-sans font-semibold text-accent hover:text-accent-hover transition-colors duration-fast">
        Read Full Case Study →
      </a>
    </div>
  );
}