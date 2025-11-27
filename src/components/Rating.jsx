import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import celebrateIcon from '../assets/congratulations.gif';
import thumbsUpIcon from '../assets/thumbs-up.gif';

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
  const [celebrate, setCelebrate] = useState(null); // 'goldThumb' | 'paperPop' | null

  // Fetch all ratings
  const fetchRatings = async () => {
    const { data, error } = await supabase
      .from("ratings")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setRatings(data);
    }
  };

  useEffect(() => {
    const loadRatings = async () => {
      const { data } = await supabase.from("ratings").select("*");
      setRatings(data);
    };
    loadRatings();
  }, []);

  // Add a new rating
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

    if (error) {
      setStatus("Failed to submit rating!");
    } else {
      setStatus("Rating submitted successfully!");
      triggerCelebration(form.stars);
      setForm({ name: "", company: "", description: "", stars: 0 });
      fetchRatings();
    }
  };

  // Trigger celebration animation
  const triggerCelebration = (stars) => {
    if (stars === 5) {
      setCelebrate("paperPop");
      setTimeout(() => setCelebrate(null), 2000);
    } else if (stars === 4) {
      setCelebrate("goldThumb");
      setTimeout(() => setCelebrate(null), 2000);
    }
  };

  return (
    <section className="py-20 px-8 max-w-7xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Ratings & Reviews
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
        {/* LEFT SIDE: FORM */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex-1 animate-fadeIn">
          <h3 className="text-3xl font-semibold mb-6">Rate Me</h3>

          <form onSubmit={submitRating} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-700 w-full"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="text"
              placeholder="Company"
              className="p-3 rounded bg-gray-700 w-full"
              required
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />

            <textarea
              placeholder="I’d appreciate it if you could tell me more about your colleague."
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              rows={5}
              className="p-3 rounded bg-gray-700 w-full"
            />

            {/* Star Rating */}
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  className={`text-4xl transition-all ${
                    form.stars >= n
                      ? "text-yellow-400 scale-110"
                      : "text-gray-500"
                  }`}
                  onClick={() => setForm({ ...form, stars: n })}
                >
                  ★
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="bg-blue-600 p-3 rounded hover:bg-blue-700 transition-all"
            >
              Submit Rating
            </button>

            {status && <p className="text-green-400 mt-2">{status}</p>}
          </form>
        </div>

        {/* RIGHT SIDE: RATINGS LIST */}
        <div className="flex-1">
          <div className="flex flex-wrap -m-2">
            {ratings.map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 p-5 m-2 flex-1 min-w-[250px] max-w-[300px] rounded-xl shadow-lg
                           hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-transform transform cursor-pointer animate-fadeInSlow"
              >
                {/* Avatar + Name */}
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-3">
                  {" "}
                  {item.name.charAt(0).toUpperCase()}{" "}
                </div>{" "}
                <h4 className="text-xl font-semibold">{item?.name}</h4>{" "}
                <p className="text-gray-400">{item?.company}</p>{" "}
                {/* Conditional description */}{" "}
                {item?.description && (
                  <p className="text-gray-400 mt-2 break-words whitespace-pre-wrap">
                    {" "}
                    {item.description}{" "}
                  </p>
                )}
                {/* Stars */}
                <div className="mt-3 flex">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`text-2xl ${
                        item.stars >= n ? "text-yellow-400" : "text-gray-600"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Celebration Animations */}
      {celebrate === "paperPop" && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <img src={celebrateIcon} alt="5 stars!" className="w-32 h-32" />
        </div>
      )}
      {celebrate === "goldThumb" && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <img src={thumbsUpIcon} alt="4 stars!" className="w-24 h-24" />
        </div>
      )}
    </section>
  );
}
