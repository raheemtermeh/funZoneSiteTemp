"use client";

import { motion, AnimatePresence, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Play, Pause, Heart, Share2, MessageCircle, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

interface Story {
  id: number;
  image: string;
  title: string;
  category: string;
  views: string;
  likes: string;
  description: string;
  hashtags: string[];
}

const stories: Story[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611653682161-f58ba65ead8f927f5a5fee32?w=400",
    title: "افتتاح شعبه جدید تهران",
    category: "اخبار",
    views: "۲.۵k",
    likes: "۳۸۰",
    description: "با افتخار اعلام می‌کنیم که شعبه جدید ما در منطقه ولنجک تهران افتتاح شد! 🎉",
    hashtags: ["#افتتاح", "#تهران", "#فان_زون"],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1589804845133-49b5e06cc415?w=400",
    title: "تورنومنت شطرنج ماهانه",
    category: "رویدادها",
    views: "۱.۸k",
    likes: "۲۵۰",
    description: "تورنومنت شطرنج این ماه با حضور ۵۰ شرکت‌کننده برگزار شد. تبریک به برندگان! 🏆",
    hashtags: ["#شطرنج", "#تورنومنت", "#بازی"],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400",
    title: "آشنایی با تیم FunZone",
    category: "درباره ما",
    views: "۳.۲k",
    likes: "۴۲۰",
    description: "تیم متعهد و حرفه‌ای ما که شبانه‌روز برای ایجاد بهترین تجربه تلاش می‌کنند 💪",
    hashtags: ["#تیم", "#فان_زون", "#ما"],
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1761735486587-bcac08b15c79?w=400",
    title: "فرصت سرمایه‌گذاری",
    category: "سرمایه‌گذاری",
    views: "۱.۵k",
    likes: "۱۸۰",
    description: "فرصت طلایی برای سرمایه‌گذاری در آینده صنعت کافه و سرگرمی 💰",
    hashtags: ["#سرمایه_گذاری", "#فرصت", "#کسب_وکار"],
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
    title: "شبکه کافه‌های همکار",
    category: "شبکه ما",
    views: "۲.۱k",
    likes: "۳۱۰",
    description: "بیش از ۵۰۰ کافه در سراسر کشور عضو خانواده FunZone هستند ☕",
    hashtags: ["#کافه", "#شبکه", "#همکاری"],
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1630609674924-1b381d09d313?w=400",
    title: "شب بازی گروهی",
    category: "رویدادها",
    views: "۱.۹k",
    likes: "۲۷۵",
    description: "شب بازی مافیا با حضور ۳۰ نفر! چه شبی پرهیجان بود! 🎭",
    hashtags: ["#مافیا", "#بازی_گروهی", "#شب_بازی"],
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1594404430367-9858af713541?w=400",
    title: "قهوه تخصصی روز",
    category: "کافه",
    views: "۲.۷k",
    likes: "۴۵۰",
    description: "امروز اسپرسو تک‌خاستگاه اتیوپی رو امتحان کنید! ☕✨",
    hashtags: ["#قهوه", "#اسپرسو", "#کافه"],
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?w=400",
    title: "اپلیکیشن جدید",
    category: "فناوری",
    views: "۳.۵k",
    likes: "۵۲۰",
    description: "نسخه جدید اپلیکیشن با قابلیت‌های هیجان‌انگیز منتشر شد! 📱",
    hashtags: ["#اپ", "#فناوری", "#بروزرسانی"],
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1702468049239-49fd1cf99d20?w=400",
    title: "دورهمی تیمی",
    category: "فرهنگ سازمانی",
    views: "۱.۶k",
    likes: "۲۲۰",
    description: "دورهمی ماهانه تیم برای جشن موفقیت‌های اخیر 🎊",
    hashtags: ["#تیم_ورک", "#جشن", "#موفقیت"],
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400",
    title: "بازی کدنیمز",
    category: "بازی",
    views: "۱.۴k",
    likes: "۱۹۵",
    description: "یکی از محبوب‌ترین بازی‌های گروهی در کافه‌های ما! 🎮",
    hashtags: ["#کدنیمز", "#بازی", "#گروهی"],
  },
];

export function StoryTour() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (selectedStory === null || isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next story
          const currentIndex = stories.findIndex((s) => s.id === selectedStory);
          if (currentIndex < stories.length - 1) {
            setSelectedStory(stories[currentIndex + 1].id);
            setLiked(false);
            return 0;
          } else {
            setSelectedStory(null);
            setLiked(false);
            return 0;
          }
        }
        return prev + 1.5; // Faster progress
      });
    }, 100);

    return () => clearInterval(timer);
  }, [selectedStory, isPaused]);

  const handleNext = () => {
    const currentIndex = stories.findIndex((s) => s.id === selectedStory);
    if (currentIndex < stories.length - 1) {
      setSelectedStory(stories[currentIndex + 1].id);
      setProgress(0);
      setLiked(false);
    }
  };

  const handlePrev = () => {
    const currentIndex = stories.findIndex((s) => s.id === selectedStory);
    if (currentIndex > 0) {
      setSelectedStory(stories[currentIndex - 1].id);
      setProgress(0);
      setLiked(false);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      // Trigger like animation
      const heart = document.getElementById('story-like-animation');
      if (heart) {
        heart.style.display = 'block';
        setTimeout(() => {
          heart.style.display = 'none';
        }, 1000);
      }
    }
  };

  return (
    <section id="campaigns" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#9d00ff]/5 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#9d00ff]/20 to-[#ff00ff]/20 border border-[#9d00ff]/30 mb-6"
          >
            <Eye className="w-5 h-5 text-[#9d00ff]" />
            <span className="text-[#9d00ff]">استوری تور اینستاگرامی</span>
          </motion.div>
          
          <h2 className="bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-4">
            کمپین‌ها و استوری‌ها
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            آخرین اخبار، رویدادها و داستان‌های جذاب از دنیای FunZone را دنبال کنید
          </p>
        </motion.div>

        {/* Story Circles */}
        <div className="relative mb-8">
          {/* Scroll Gradient Left */}
          <div className="absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-l from-transparent to-background z-10 pointer-events-none" />
          
          {/* Scroll Gradient Right */}
          <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-r from-transparent to-background z-10 pointer-events-none" />
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4" style={{ scrollbarWidth: 'none' }}>
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0"
              >
                <motion.button
                  onClick={() => {
                    setSelectedStory(story.id);
                    setProgress(0);
                    setLiked(false);
                  }}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-[#9d00ff] via-[#ff00ff] to-[#00f0ff] relative"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-background relative">
                      <ImageWithFallback
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Category Badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <Badge className="text-xs bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] border-none">
                      {story.category}
                    </Badge>
                  </div>
                  
                  {/* Views */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#9d00ff] flex items-center justify-center text-xs text-white border-2 border-background">
                    {index + 1}
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8"
        >
          {[
            { label: "استوری‌های فعال", value: `${stories.length}`, icon: Eye },
            { label: "مجموع بازدید", value: "۲۰k+", icon: Eye },
            { label: "مجموع لایک", value: "۳.۵k+", icon: Heart },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border"
              >
                <Icon className="w-6 h-6 mx-auto mb-2 text-[#9d00ff]" />
                <div className="text-2xl bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-foreground/60">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

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
                className="relative w-full max-w-md h-[85vh]"
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
                        <motion.div
                          className="h-full bg-white"
                          style={{
                            width:
                              index < currentIndex
                                ? "100%"
                                : index === currentIndex
                                ? `${progress}%`
                                : "0%",
                          }}
                          transition={{ duration: 0.1 }}
                        />
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
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50"></div>
                  
                  {/* Top Info */}
                  <div className="absolute top-16 left-4 right-4 flex items-center gap-3 z-20">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9d00ff] to-[#ff00ff] p-1">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xl">
                        🎮
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white">FunZone</div>
                      <div className="text-white/60 text-sm">
                        {stories.find((s) => s.id === selectedStory)?.views} بازدید
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <Badge className="bg-[#9d00ff]/90 backdrop-blur-sm border-none mb-3">
                      {stories.find((s) => s.id === selectedStory)?.category}
                    </Badge>
                    <h3 className="text-white text-2xl mb-2">
                      {stories.find((s) => s.id === selectedStory)?.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-3">
                      {stories.find((s) => s.id === selectedStory)?.description}
                    </p>
                    
                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {stories.find((s) => s.id === selectedStory)?.hashtags.map((tag, idx) => (
                        <span key={idx} className="text-[#00f0ff] text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Interaction Bar */}
                    <div className="flex items-center gap-4 text-white">
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        onClick={handleLike}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          animate={liked ? { scale: [1, 1.3, 1] } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          <Heart 
                            className={`w-6 h-6 ${liked ? 'fill-red-500 text-red-500' : ''}`}
                          />
                        </motion.div>
                        <span className="text-sm">
                          {stories.find((s) => s.id === selectedStory)?.likes}
                        </span>
                      </motion.button>

                      <button className="flex items-center gap-2">
                        <MessageCircle className="w-6 h-6" />
                        <span className="text-sm">نظرات</span>
                      </button>

                      <button className="flex items-center gap-2">
                        <Share2 className="w-6 h-6" />
                        <span className="text-sm">اشتراک</span>
                      </button>
                    </div>
                  </div>

                  {/* Like Animation */}
                  <motion.div
                    id="story-like-animation"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: [0, 1.5, 0], opacity: [1, 1, 0] }}
                    transition={{ duration: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden"
                  >
                    <Heart className="w-32 h-32 fill-red-500 text-red-500" />
                  </motion.div>
                </div>

                {/* Controls */}
                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>

                <motion.button
                  onClick={() => setIsPaused(!isPaused)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-6 right-6 z-20 w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  {isPaused ? <Play size={24} /> : <Pause size={24} />}
                </motion.button>

                {/* Navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors disabled:opacity-30"
                  disabled={stories.findIndex((s) => s.id === selectedStory) === 0}
                >
                  <ChevronRight size={24} />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors disabled:opacity-30"
                  disabled={
                    stories.findIndex((s) => s.id === selectedStory) ===
                    stories.length - 1
                  }
                >
                  <ChevronLeft size={24} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
