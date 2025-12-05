import { Sparkles } from "lucide-react";
import {
  PiPaintBrushDuotone,
  PiMountainsDuotone,
  PiFilmSlateDuotone,
  PiCoffeeDuotone,
} from "react-icons/pi";
import { FaRegLaughSquint } from "react-icons/fa";

const hobbies = [
  { icon: <FaRegLaughSquint size={28} />, label: "Meme Archaeology" },
  { icon: <PiCoffeeDuotone size={28} />, label: "Tea Lover" },
  { icon: <PiMountainsDuotone size={28} />, label: "Travel" },
  { icon: <PiFilmSlateDuotone size={28} />, label: "Sci-fi Movie" },
  { icon: <PiPaintBrushDuotone size={28} />, label: "Painting" },
];

export default function Hobbies() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10">
      <div className="relative z-10 w-full max-w-4xl rounded-3xl bg-black/90 p-10 shadow-lg ring-1 ring-white/10">
        <h2 className="mb-6 text-3xl font-bold text-white">
          <span className="bg-purple-600 px-2 py-1 rounded-md text-black mr-2">
            Hobbies
          </span>
          & Interests
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="relative group w-24 h-24 flex flex-col items-center justify-center rounded-xl bg-black shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-purple-500 -z-10" />
              
              {/* Icon */}
              <div className="text-purple-400">{hobby.icon}</div>
              
              {/* Label */}
              <span className="mt-2 text-xs text-white text-center font-semibold">
                {hobby.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
var swiper = new Swiper('.reviews-slider', {
  loop: true,
  slidesPerView: 2.2, // Show 2 full slides + peek of next/prev
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

