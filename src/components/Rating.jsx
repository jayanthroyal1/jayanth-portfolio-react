import React, { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import celebrateIcon from "../assets/congratulations.gif";
import thumbsUpIcon from "../assets/thumbs-up.gif";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Rating() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    description: "",
    stars: 0,
  });

  const [status, setStatus] = useState("");
  const [ratings, setRatings] = useState([]);
  const [celebrate, setCelebrate] = useState(null);

  // Fetch ratings
  const fetchRatings = async () => {
    const { data, error } = await supabase
      .from("ratings")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setRatings(data);
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  // Submit rating
  const submitRating = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("ratings").insert([
      {
        name: form.name,
        company: form.company,
        description: form.description,
        stars: form.stars,
      },
    ]);

    if (error) setStatus("Failed to submit rating!");
    else {
      setStatus("Rating submitted successfully!");
      triggerCelebration(form.stars);
      setForm({ name: "", company: "", description: "", stars: 0 });
      fetchRatings();
    }
  };

  const triggerCelebration = (stars) => {
    if (stars === 5) {
      setCelebrate("paperPop");
      setTimeout(() => setCelebrate(null), 2000);
    } else if (stars === 4) {
      setCelebrate("goldThumb");
      setTimeout(() => setCelebrate(null), 2000);
    }
  };

  // Rating Card Component
  function RatingCard({ item }) {
    const descRef = useRef(null);
    const [showExpand, setShowExpand] = useState(false);
    const [expanded, setExpanded] = useState(false);

    // Only measure once on mount
    useEffect(() => {
      if (!descRef.current) return;
      if (descRef.current.scrollHeight > 200) {
        requestAnimationFrame(() => setShowExpand(true));
      }
    }, []);

    return (
      <div
        className={`group relative bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700
          overflow-hidden transition-all duration-300 transform
          hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 hover:rotate-1
        `}
      >
        {/* Inner wrapper controls height for hover/expand */}
        <div
          className={`transition-all duration-300 ease-in-out
            ${expanded ? "h-auto" : "h-[260px] md:group-hover:h-auto"}
          `}
        >
          {/* Avatar */}
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-2xl font-bold mb-3 shadow-md">
            {item.name.charAt(0).toUpperCase()}
          </div>

          <h4 className="text-xl font-semibold">{item.name}</h4>
          <p className="text-gray-400">{item.company}</p>

          {/* Description */}
          <p
            ref={descRef}
            className={`text-gray-300 mt-2 break-words whitespace-pre-wrap
              ${!expanded ? "line-clamp-3 opacity-70" : "line-clamp-none opacity-100"}
              transition-all duration-300 ease-in-out
            `}
          >
            {item.description}
          </p>

          {/* Mobile overlay for tap */}
          {showExpand && !expanded && (
            <div
              className="absolute inset-0 bg-black/30 flex items-end justify-center p-3 cursor-pointer md:hidden"
              onClick={() => setExpanded(true)}
            >
              <span className="text-white font-semibold">Tap to read more</span>
            </div>
          )}

          {/* Collapse button */}
          {expanded && (
            <button
              onClick={() => setExpanded(false)}
              className="text-blue-400 mt-2 hover:underline md:hidden"
            >
              Show Less
            </button>
          )}

          {/* Stars */}
          <div className="mt-3 flex space-x-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className={`text-2xl transition-transform duration-200 transform
                  ${item.stars >= n ? "text-yellow-400 scale-110 animate-pulse" : "text-gray-600"}
                `}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="rating" className="py-20 px-8 max-w-7xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-4 text-center text-black">Ratings & Reviews</h2>
      <p className="text-xl mb-10 text-center text-black">
        Hi everyone, could you share some feedback on my skills and recent performance? I’d really appreciate your input to help me improve.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
        {/* Left form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl flex-1 flex flex-col border border-gray-700 h-[560px]">
          <h3 className="text-3xl font-semibold mb-6">Contribute Your Thoughts</h3>

          <form onSubmit={submitRating} className="flex flex-col space-y-4 flex-1">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-700 w-full focus:ring-2 focus:ring-blue-500 transition"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Company"
              className="p-3 rounded bg-gray-700 w-full focus:ring-2 focus:ring-blue-500 transition"
              required
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
            <textarea
              placeholder="I’d appreciate it if you could share your feedback about me."
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={5}
              className="p-3 rounded bg-gray-700 w-full focus:ring-2 focus:ring-blue-500 transition"
            />

            {/* Stars */}
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  className={`text-4xl transition-all duration-200 transform hover:scale-125 ${
                    form.stars >= n ? "text-yellow-400 scale-110 animate-pop" : "text-gray-500 hover:text-yellow-300"
                  }`}
                  onClick={() => setForm({ ...form, stars: n })}
                >
                  ★
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="bg-blue-600 p-3 rounded hover:bg-blue-700 transition-all hover:scale-[1.02]"
            >
              Leave Feedback
            </button>

            {status && <p className="text-green-400 mt-2">{status}</p>}
          </form>
        </div>

        {/* Right side */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ratings.map((item, i) => (
            <RatingCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Celebration */}
      {celebrate === "paperPop" && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <img src={celebrateIcon} alt="5 stars!" className="w-40 h-40" />
        </div>
      )}
      {celebrate === "goldThumb" && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <img src={thumbsUpIcon} alt="4 stars!" className="w-28 h-28" />
        </div>
      )}
    </section>
  );
}
