
import { useState } from "react";

const contrastOptions = [
  { label: "רגיל", value: "normal" },
  { label: "קונטרסט גבוה", value: "high" },
  { label: "גווני אפור", value: "grayscale" }
];

const fontOptions = [
  { label: "ברירת מחדל", value: "default" },
  { label: "פונט קריא", value: "readable" }
];

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState("normal");
  const [font, setFont] = useState("default");
  const [motion, setMotion] = useState(false);

  // Apply accessibility settings to body
  const body = document.body;
  body.style.fontSize = `${fontSize}%`;
  body.style.filter = contrast === "high"
    ? "contrast(1.4)"
    : contrast === "grayscale"
    ? "grayscale(0.9)"
    : "none";
  body.style.fontFamily = font === "readable" ? "Arial, Helvetica, sans-serif" : "";
  if (motion) {
    document.documentElement.style.setProperty('scroll-behavior', 'auto');
  } else {
    document.documentElement.style.setProperty('scroll-behavior', 'smooth');
  }

  return (
    <div>
      <button
        aria-label="פתח תפריט נגישות"
        className="fixed bottom-6 right-6 bg-brand-turquoise text-white rounded-full p-3 z-50 shadow-md hover:scale-110 transition-transform focus:outline focus:outline-brand-gold"
        onClick={() => setOpen((v) => !v)}
      >
        ♿
      </button>
      {open && (
        <aside
          dir="rtl"
          className="fixed bottom-20 right-6 w-72 bg-white rounded shadow-xl border z-50 p-6"
          aria-label="הגדרות נגישות"
        >
          <h2 className="text-lg font-bold mb-3">תפריט נגישות</h2>
          <div className="mb-4">
            <label className="font-semibold block mb-1" htmlFor="font-size">גודל טקסט</label>
            <input
              id="font-size"
              type="range"
              min={80}
              max={150}
              value={fontSize}
              aria-valuemin={80}
              aria-valuemax={150}
              aria-valuenow={fontSize}
              onChange={e => setFontSize(Number(e.target.value))}
              className="w-full"
            />
            <span className="block">{fontSize}%</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold block mb-1">קונטרסט</span>
            {contrastOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => setContrast(opt.value)}
                className={`inline-block mr-2 px-3 py-1 rounded ${
                  contrast === opt.value ? "bg-brand-turquoise text-white" : "bg-gray-200"
                } focus:outline focus:outline-brand-gold`}
                aria-pressed={contrast === opt.value}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="mb-4">
            <span className="font-semibold block mb-1">גופן</span>
            {fontOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => setFont(opt.value)}
                className={`inline-block mr-2 px-3 py-1 rounded ${
                  font === opt.value ? "bg-brand-turquoise text-white" : "bg-gray-200"
                } focus:outline focus:outline-brand-gold`}
                aria-pressed={font === opt.value}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="mb-2">
            <label className="font-semibold block mb-1" htmlFor="motion-reduce">
              הפחת הנפשת עמוד (Reduce motion)
            </label>
            <input
              type="checkbox"
              id="motion-reduce"
              checked={motion}
              onChange={e => setMotion(e.target.checked)}
              className="ml-2"
            /> הפעל
          </div>
          <button
            onClick={() => setOpen(false)}
            className="mt-3 bg-brand-gold text-white font-bold rounded px-4 py-2 w-full hover:bg-brand-gold/90 transition focus:outline focus:outline-brand-turquoise"
            aria-label="סגור תפריט נגישות"
          >
            סגור
          </button>
        </aside>
      )}
    </div>
  );
}
