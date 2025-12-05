<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6">
  {/* Existing Reviews */}
  {[
    {
      name: "Yash Garg",
      text: "Dipon has an insane eye for details and storytelling. He made our videos feel alive. Highly recommended!"
    },
    {
      name: "Siddharth Singh",
      text: "I loved how smooth the edits were. It felt like he knew exactly what my audience would love."
    },
    {
      name: "Sahil Ghori",
      text: "From branding to post-production — Dipon just gets it. A creative powerhouse, truly."
    },
    {
      name: "Another Client",
      text: "Working with Dipon was seamless. He overdelivered on every expectation I had!"
    }
  ].map((review, i) => (
    <div key={i} className="bg-white rounded-2xl p-4 shadow-md">
      <p className="italic">“{review.text}”</p>
      <p className="text-purple-600 font-medium mt-2">— {review.name}</p>
    </div>
  ))}

  {/* Review Submission Card */}
  <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center justify-center text-center">
    <p className="font-semibold mb-2">Want to leave a review?</p>
    <p className="mb-4">Tap the button below and share your experience!</p>
    <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
      Leave a Review
    </button>
  </div>
</div>
