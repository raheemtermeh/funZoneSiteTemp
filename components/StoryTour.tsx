import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Story {
  id: number;
  image: string;
  title: string;
  category: string;
}

const stories: Story[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611653682161-f58ba65ead8f927f5a5fee32?w=400",
    title: "افتتاح شعبه جدید",
    category: "اخبار",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1589804845133-49b5e06cc415?w=400",
    title: "تورنومنت شطرنج",
    category: "رویدادها",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400",
    title: "تیم FunZone",
    category: "درباره ما",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1761735486587-bcac08b15c79?w=400",
    title: "فرصت سرمایه‌گذاری",
    category: "سرمایه‌گذاری",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
    title: "کافه‌های همکار",
    category: "شبکه ما",
  },
];

export function StoryTour() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (selectedStory === null || isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next story
          const currentIndex = stories.findIndex((s) => s.id === selectedStory);
          if (currentIndex < stories.length - 1) {
            setSelectedStory(stories[currentIndex + 1].id);
            return 0;
          } else {
            setSelectedStory(null);
            return 0;
          }
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [selectedStory, isPaused]);

  const handleNext = () => {
    const currentIndex = stories.findIndex((s) => s.id === selectedStory);
    if (currentIndex < stories.length - 1) {
      setSelectedStory(stories[currentIndex + 1].id);
      setProgress(0);
    }
  };

  const handlePrev = () => {
    const currentIndex = stories.findIndex((s) => s.id === selectedStory);
    if (currentIndex > 0) {
      setSelectedStory(stories[currentIndex - 1].id);
      setProgress(0);
    }
  };

  return (
    <section id="campaigns" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#9d00ff]/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] bg-clip-text text-transparent mb-4">
            کمپین‌ها و استوری‌ها
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            آخرین اخبار، رویدادها و داستان‌های جذاب از دنیای FunZone
          </p>
        </motion.div>

        {/* Story Circles */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => {
                  setSelectedStory(story.id);
                  setProgress(0);
                }}
                className="relative group"
              >
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-[#00f0ff] via-[#9d00ff] to-[#ff00ff]">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <p className="text-sm mt-2 text-center max-w-[100px] truncate">
                  {story.title}
                </p>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Full Story View */}
        <AnimatePresence>
          {selectedStory !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
              onClick={() => setSelectedStory(null)}
            >
              <div 
                className="relative w-full max-w-md h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Progress Bars */}
                <div className="absolute top-4 left-4 right-4 flex gap-2 z-20">
                  {stories.map((story, index) => {
                    const currentIndex = stories.findIndex((s) => s.id === selectedStory);
                    return (
                      <div
                        key={story.id}
                        className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                      >
                        <div
                          className="h-full bg-white transition-all duration-100"
                          style={{
                            width:
                              index < currentIndex
                                ? "100%"
                                : index === currentIndex
                                ? `${progress}%`
                                : "0%",
                          }}
                        ></div>
                      </div>
                    );
                  })}
                </div>

                {/* Story Content */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={stories.find((s) => s.id === selectedStory)?.image || ""}
                    alt={stories.find((s) => s.id === selectedStory)?.title || ""}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00f0ff]/20 border border-[#00f0ff]/50 text-sm mb-2">
                      {stories.find((s) => s.id === selectedStory)?.category}
                    </span>
                    <h3 className="text-white text-xl">
                      {stories.find((s) => s.id === selectedStory)?.title}
                    </h3>
                  </div>
                </div>

                {/* Controls */}
                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>

                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="absolute bottom-6 right-6 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  {isPaused ? <Play size={20} /> : <Pause size={20} />}
                </button>

                {/* Navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors disabled:opacity-50"
                  disabled={stories.findIndex((s) => s.id === selectedStory) === 0}
                >
                  <ChevronRight size={20} />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors disabled:opacity-50"
                  disabled={
                    stories.findIndex((s) => s.id === selectedStory) ===
                    stories.length - 1
                  }
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
