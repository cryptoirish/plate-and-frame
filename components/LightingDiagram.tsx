import type { LightingSetup } from "@/lib/lighting-setups";

const ICONS = {
  camera: (
    <g>
      <rect x="-12" y="-8" width="24" height="16" rx="2" fill="#16110D" />
      <circle cx="0" cy="0" r="4" fill="#F4EFE6" />
    </g>
  ),
  subject: (
    <g>
      <ellipse cx="0" cy="0" rx="18" ry="6" fill="#C44536" />
      <ellipse cx="0" cy="-1" rx="14" ry="4" fill="#B8772B" />
    </g>
  ),
  window: (
    <g>
      <rect x="-22" y="-10" width="44" height="20" fill="#F4EFE6" stroke="#16110D" strokeWidth="1.5" />
      <line x1="0" y1="-10" x2="0" y2="10" stroke="#16110D" strokeWidth="1" />
      <line x1="-22" y1="0" x2="22" y2="0" stroke="#16110D" strokeWidth="1" />
    </g>
  ),
  key: (
    <g>
      <circle cx="0" cy="0" r="10" fill="#EDE5D3" stroke="#16110D" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="4" fill="#C44536" />
    </g>
  ),
  fill: (
    <g>
      <circle cx="0" cy="0" r="10" fill="#EDE5D3" stroke="#16110D" strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="0" cy="0" r="4" fill="#B8772B" />
    </g>
  ),
  rim: (
    <g>
      <rect x="-10" y="-10" width="20" height="20" fill="#16110D" />
      <rect x="-6" y="-6" width="12" height="12" fill="#C44536" />
    </g>
  ),
  diffuser: (
    <g>
      <rect x="-22" y="-3" width="44" height="6" fill="#F4EFE6" stroke="#16110D" strokeWidth="1" strokeDasharray="3 2" />
    </g>
  ),
  reflector: (
    <g>
      <rect x="-22" y="-4" width="44" height="8" fill="#F4EFE6" stroke="#16110D" strokeWidth="1.5" />
    </g>
  ),
};

export function LightingDiagram({ setup }: { setup: LightingSetup }) {
  return (
    <div className="bg-cream border border-ink/15 p-6 lg:p-10">
      <div className="text-[10px] uppercase tracking-widest text-ink/50 font-mono mb-6">
        Top-down diagram
      </div>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-auto max-h-[400px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#16110D" strokeWidth="0.15" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />

        {setup.diagram.elements
          .filter((e) => e.type === "key" || e.type === "fill" || e.type === "rim" || e.type === "window")
          .map((light, i) => {
            const subject = setup.diagram.elements.find((e) => e.type === "subject");
            if (!subject) return null;
            return (
              <line
                key={i}
                x1={light.x}
                y1={light.y}
                x2={subject.x}
                y2={subject.y}
                stroke="#C44536"
                strokeWidth="0.4"
                strokeDasharray="1 1"
                opacity="0.6"
              />
            );
          })}

        {setup.diagram.elements.map((el, i) => (
          <g key={i} transform={`translate(${el.x}, ${el.y}) scale(0.4)`}>
            {ICONS[el.type]}
          </g>
        ))}

        {setup.diagram.elements.map((el, i) => (
          <text
            key={`l-${i}`}
            x={el.x}
            y={el.y + 8}
            textAnchor="middle"
            fontSize="2.5"
            fontFamily="ui-monospace, monospace"
            fill="#16110D"
            opacity="0.7"
          >
            {el.label.toUpperCase()}
          </text>
        ))}
      </svg>
    </div>
  );
}
