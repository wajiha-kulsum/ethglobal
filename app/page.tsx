// Pixel-exact replica of the Paper design "Mindful nebula" (artboard 1728 x 4081).
// Canvas is fixed at 1728px; every element sits at its exact design coordinate.
// Source: Paper file 01M5T7KZ3RCVFEHRQ0NEGG6CQC, artboard "MacBook Pro 16\" - 1".

const NAV_LINKS = ["Home", "Features", "How it works", "Contact us"];

const CARDS = [
  { card: 589, label: 613, body: 613, sphere: 631, sphereTop: 1052, title: "01/ converstional" },
  { card: 947, label: 970, body: 972, sphere: 987, sphereTop: 1052, title: "02/ connected" },
  { card: 1305, label: 1324, body: 1324, sphere: 1349, sphereTop: 1078, title: "03/ compliant" },
];

// Grid rules under the "Read your own writes" columns, plus ruler ticks every
// 58px (ticks that would collide with a divider are omitted, as in the design).
const DIVIDER_X = [138, 428, 718, 1008, 1298, 1588];
const TICKS = Array.from({ length: 24 }, (_, k) => 196 + 58 * k).filter(
  (x) => !DIVIDER_X.includes(x),
);
const COLUMNS = [171, 461, 757, 1047, 1344];

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const LINE = "bg-[#CECECE]";

/** Card artwork — exact exports (1st/2nd/3rd.svg) from the design file. */
const SPHERE_ART = [
  { src: "/images/1st.svg", w: 252, h: 248 },
  { src: "/images/2nd.svg", w: 257, h: 247 },
  { src: "/images/3rd.svg", w: 249, h: 210 },
];

export default function Home() {
  return (
    <main className="relative mx-auto h-[4081px] w-[1728px] min-w-[1728px] overflow-hidden bg-white">
      {/* Hero art */}
      <div
        className="absolute left-0 top-0 h-[1184px] w-[1728px]"
        style={{
          backgroundImage: "url(/images/colosseum.svg)",
          backgroundSize: "100% 100%",
          filter: "brightness(112%) contrast(92%)",
        }}
      />

      {/* Footer band */}
      <div className="absolute left-[55px] top-[3351px] h-[286px] w-[1617px] border border-[#CECECE] bg-[#EBEBEB]" />

      {/* Full-height vertical rules */}
      <div className={`absolute left-[54px] top-0 h-[4081px] w-px ${LINE}`} />
      <div className={`absolute left-[1671px] top-[90px] h-[3991px] w-px ${LINE}`} />

      {/* Hero copy */}
      <h1 className="absolute left-[641px] top-[175px] whitespace-pre font-serif text-[100px] font-normal leading-[100px] text-[#1E1E1E]">
        {"Build lasting\nrelationships"}
      </h1>
      <p className="absolute left-[641px] top-[384px] w-[494px] whitespace-pre-wrap text-[20px] leading-[24px] text-black">
        {"conversational AI platform for modern  financial institution agents that handle the full borrows lifecycle across mail , SMS , and voice"}
      </p>
      <div className="absolute left-[717px] top-[488px] flex h-[43px] w-[294px] items-center justify-center rounded-[6px] bg-black">
        <span className="text-[20px] leading-[24px] text-white">Book a demo</span>
      </div>

      {/* Section surface */}
      <div className="absolute left-[575px] top-[726px] h-[821px] w-[1080px] bg-white" />

      {/* What we do */}
      <p className="absolute left-[610px] top-[717px] whitespace-pre text-[20px] leading-[100px] text-black">
        [ what we do ]
      </p>
      <div className={`absolute left-[1632px] top-[946px] h-[1044px] w-px ${LINE}`} />
      <div className={`absolute left-[990px] top-[726px] h-[477px] w-px ${LINE}`} />
      <h2 className="absolute left-[610px] top-[808px] whitespace-pre font-serif text-[60px] font-normal leading-[60px] text-[#1E1E1E]">
        {"Conversation that\nbuild momentum"}
      </h2>

      {/* Cards: surfaces, labels, drawings, body copy (z-order as designed) */}
      {CARDS.map((c) => (
        <div
          key={c.card}
          className="absolute top-[965px] h-[547px] w-[336px] border border-[#CECECE] bg-[#EBEBEB]"
          style={{ left: c.card }}
        />
      ))}
      {CARDS.map((c) => (
        <p
          key={c.title}
          className="absolute whitespace-pre text-[20px] leading-[24px] text-[#1E1E1E]"
          style={{ left: c.label, top: 987 }}
        >
          {c.title}
        </p>
      ))}
      {CARDS.map((c, i) => (
        <img
          key={c.title}
          src={SPHERE_ART[i].src}
          alt=""
          width={SPHERE_ART[i].w}
          height={SPHERE_ART[i].h}
          className="absolute"
          style={{ left: c.sphere, top: c.sphereTop }}
        />
      ))}
      {CARDS.map((c) => (
        <p
          key={`body-${c.title}`}
          className="absolute w-[244px] whitespace-pre-wrap text-[20px] leading-[24px] text-black"
          style={{ left: c.body, top: 1375 }}
        >
          Natural conversations that understand context and move customers forward.
        </p>
      ))}

      {/* Infrastructure band */}
      <p className="absolute left-[96px] top-[1575px] w-[876px] whitespace-pre-wrap font-serif text-[60px] font-normal leading-[60px] text-black">
        Built like infrastructure. Query it, extend it, and trust what it returns.
      </p>

      {/* Ruler + column grid */}
      <div className={`absolute left-[55px] top-[2078px] h-px w-[1618px] ${LINE}`} />
      {DIVIDER_X.map((x) => (
        <div key={x} className={`absolute top-[1814px] h-[265px] w-px ${LINE}`} style={{ left: x - 1 }} />
      ))}
      {TICKS.map((x) => (
        <div key={x} className={`absolute top-[2039px] h-[40px] w-px ${LINE}`} style={{ left: x - 1 }} />
      ))}
      {COLUMNS.map((x) => (
        <p
          key={`h-${x}`}
          className="absolute whitespace-pre text-[20px] leading-[24px] text-[#1E1E1E]"
          style={{ left: x, top: 1816 }}
        >
          Read your own writes
        </p>
      ))}
      {COLUMNS.map((x) => (
        <p
          key={`b-${x}`}
          className="absolute w-[199px] whitespace-pre-wrap text-[20px] leading-[24px] text-black"
          style={{ left: x, top: 1850 }}
        >
          The first CRM with external consistency.
        </p>
      ))}

      {/* Panorama + blue registration blocks */}
      <div
        className="absolute left-[55px] top-[2151px] h-[539px] w-[1617px] bg-cover"
        style={{
          backgroundImage: "url(/images/panorama.png)",
          filter: "contrast(98%) saturate(0%)",
        }}
      />
      <div className="absolute left-[1199px] top-[2081px] h-[137px] w-[407px] bg-[#1743FF] opacity-30" />
      <div className="absolute left-[137px] top-[2610px] h-[137px] w-[407px] bg-[#1743FF] opacity-30" />
      <div className="absolute left-[55px] top-[2690px] h-[113px] w-[540px] border-2 border-[#A1A1A1]" />
      <div className="absolute left-[593px] top-[2690px] h-[113px] w-[540px] border-2 border-[#A1A1A1]" />
      <div className="absolute left-[1131px] top-[2690px] h-[113px] w-[543px] border-2 border-[#A1A1A1]" />

      {/* How it works */}
      <h2 className="absolute left-[103px] top-[2846px] whitespace-pre font-serif text-[60px] font-normal leading-[72px] text-black">
        How it works
      </h2>
      <p className="absolute left-[103px] top-[2952px] w-[1449px] whitespace-pre-wrap text-[25px] font-medium leading-[30px] text-[#757575]">
        {LOREM}
      </p>

      {/* Nav */}
      <nav className="absolute left-[1116px] top-[37px] flex h-[24px] items-center gap-[39px] text-[20px] leading-[24px] text-[#1E1E1E]">
        {NAV_LINKS.map((link) => (
          <span key={link}>{link}</span>
        ))}
      </nav>
      <div className={`absolute left-[1049px] top-[92px] h-px w-[623px] ${LINE}`} />
      <div className={`absolute left-[1048px] top-[92px] h-[92px] w-px ${LINE}`} />

      {/* Footer */}
      <div className="absolute left-[413px] top-[3427px] h-[658px] w-[1315px] bg-cover bg-center" style={{ backgroundImage: "url(/images/goddess.png)" }} />
      <div className="absolute left-[138px] top-[3384px] flex w-[119px] flex-col gap-[5px] text-[20px] text-[#1E1E1E]">
        <p className="leading-[36px]">Socials</p>
        <p className="leading-[30px]">Twitter X</p>
        <p className="leading-[30px]">Instagram</p>
        <p className="leading-[30px]">Linkedin</p>
      </div>
      <div className="absolute left-[341px] top-[3384px] flex w-[139px] flex-col gap-[6px] text-[20px] text-[#1E1E1E]">
        <p className="leading-[36px]">About Us</p>
        <p className="leading-[30px]">contact us</p>
        <p className="leading-[30px]">Services</p>
      </div>
      <div className="absolute left-[138px] top-[3576px] flex gap-[50px] text-[20px] leading-[24px] text-[#757575]">
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Terms of Use</span>
      </div>
    </main>
  );
}
