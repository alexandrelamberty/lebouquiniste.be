import { Send } from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    toast.success("Your message has been sent. We will respond shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-oak">
      <Toaster />
      <div className="max-w-2xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-amber-400/50 mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-amber-50 leading-tight">
            The Guest Book
          </h2>
          <p className="font-body text-amber-100/40 mt-4 italic text-lg">
            Leave your message as you would sign a guest book in a cherished home.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div className="relative">
            <label className="font-label text-[10px] uppercase tracking-[0.2em] text-amber-300/50 block mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-amber-200/20 text-amber-50 font-body text-lg py-2 px-0 placeholder:text-amber-200/20 focus:outline-none focus:border-amber-300/50 transition-colors duration-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="font-label text-[10px] uppercase tracking-[0.2em] text-amber-300/50 block mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-amber-200/20 text-amber-50 font-body text-lg py-2 px-0 placeholder:text-amber-200/20 focus:outline-none focus:border-amber-300/50 transition-colors duration-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <label className="font-label text-[10px] uppercase tracking-[0.2em] text-amber-300/50 block mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-transparent border-b border-amber-200/20 text-amber-50 font-body text-lg py-2 px-0 placeholder:text-amber-200/20 focus:outline-none focus:border-amber-300/50 transition-colors duration-500 resize-none"
              placeholder="Write your message here..."
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-3 px-10 py-3.5 border border-amber-300/30 text-amber-100 font-label text-[11px] uppercase tracking-[0.2em] hover:bg-amber-200/10 hover:border-amber-300/50 disabled:opacity-50 transition-all duration-500"
            >
              {sending ? (
                <span className="inline-block w-4 h-4 border-2 border-amber-200/40 border-t-amber-200 rounded-full animate-spin" />
              ) : (
                <Send size={14} className="text-amber-300/70" />
              )}
              {sending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}