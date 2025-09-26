// components/WhatsAppFloat.tsx
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  const phone = "254113710584"; // your WhatsApp number
  const message = encodeURIComponent("Hi, I need help with my Event.");

  return (
    <>
      {/* ---- floating button ---- */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* ---- chat bubble ---- */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-72 rounded-xl bg-white p-4 shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-700">Chat with us</span>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>

          <p className="mb-3 text-xs text-gray-500">
            Typically replies within minutes.
          </p>

          <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-600"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}
    </>
  );
}