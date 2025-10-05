import React from 'react';

const About = () => {
    return (
     <div className="max-w-[1440px] mx-auto min-h-screen px-6 py-16 bg-gray-50 text-gray-800">
  {/* Hero Section */}
  <section className="text-center mb-16">
    <h1 className="text-4xl font-bold text-blue-700 mb-4">About Our Book Library</h1>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Welcome to <span className="font-semibold text-blue-600">BookNest</span> — your cozy digital space
      for discovering, organizing, and tracking books you love.
      From classics to modern gems, we make your reading journey beautifully simple.
    </p>
  </section>

  {/* Our Story */}
  <section className="bg-white rounded-2xl shadow-md p-8 mb-10">
    <h2 className="text-2xl font-semibold text-gray-900 mb-3">📚 Our Story</h2>
    <p className="text-gray-600 leading-relaxed">
      BookNest started as a small idea among a few book enthusiasts who wanted a simple way to manage
      what they read and what they dream to read next. What began as a weekend project grew into a community-driven
      tool that celebrates reading, curiosity, and self-growth.
    </p>
  </section>

  {/* Mission Section */}
  <section className="bg-white rounded-2xl shadow-md p-8 mb-10">
    <h2 className="text-2xl font-semibold text-gray-900 mb-3">🎯 Our Mission</h2>
    <p className="text-gray-600 leading-relaxed">
      We believe reading shapes the mind, sparks imagination, and opens new worlds.
      Our mission is to make reading more organized, inspiring, and rewarding — helping
      every reader stay motivated and connected with stories that matter.
    </p>
  </section>

  {/* How It Works */}
  <section className="bg-white rounded-2xl shadow-md p-8 mb-10">
    <h2 className="text-2xl font-semibold text-gray-900 mb-3">⚙️ How It Works</h2>
    <ul className="list-disc pl-5 text-gray-600 space-y-2">
      <li>Add books you’ve read or wish to read — all saved directly in your browser.</li>
      <li>Organize your lists with simple filters like ratings, total pages, or categories.</li>
      <li>Explore and rediscover your reading stats anytime, anywhere.</li>
    </ul>
  </section>

  {/* Features Section */}
  <section className="grid md:grid-cols-3 gap-6 mb-16">
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold text-blue-600 mb-2">📖 Track Your Reads</h3>
      <p className="text-gray-600">
        Keep your reading history up to date — add, remove, or review books with ease.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold text-green-600 mb-2">⭐ Rate & Organize</h3>
      <p className="text-gray-600">
        Sort by ratings, total pages, or titles to quickly find the right book for your next read.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">💡 Personalized Lists</h3>
      <p className="text-gray-600">
        Separate your “Read” and “Wishlist” sections with a clean and intuitive interface.
      </p>
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="bg-white rounded-2xl shadow-md p-8 mb-10">
    <h2 className="text-2xl font-semibold text-gray-900 mb-3">🌟 Why Choose BookNest?</h2>
    <p className="text-gray-600 leading-relaxed mb-4">
      There are countless book-tracking apps, but we focus on simplicity and experience. BookNest is:
    </p>
    <ul className="list-disc pl-5 text-gray-600 space-y-2">
      <li>Lightweight — no signup, no login, just books.</li>
      <li>Privacy-first — your data stays in your browser.</li>
      <li>Fast and minimal — designed for distraction-free reading management.</li>
    </ul>
  </section>

  {/* Future Vision */}
  <section className="bg-white rounded-2xl shadow-md p-8">
    <h2 className="text-2xl font-semibold text-gray-900 mb-3">🚀 Our Future Vision</h2>
    <p className="text-gray-600 leading-relaxed">
      We’re constantly improving BookNest to make it even more interactive.
      In the future, expect features like reading goals, quote collections, and community book reviews.
      Our vision is to build a platform where every reader feels at home — one page at a time.
    </p>
  </section>
</div>

  );
};

export default About;