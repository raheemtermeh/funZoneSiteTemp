import { motion } from "motion/react";
import { Calendar, Coffee, Gamepad2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const floatingIcons = [
    { Icon: Coffee, delay: 0, x: -20, y: -30 },
    { Icon: Gamepad2, delay: 0.2, x: 20, y: -20 },
    { Icon: Calendar, delay: 0.4, x: -30, y: 20 },
    { Icon: Sparkles, delay: 0.6, x: 30, y: 30 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00f0ff]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#9d00ff]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating Icons */}
          <div className="relative mb-12">
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay, duration: 0.5 }}
                className="absolute left-1/2 top-0"
                style={{
                  transform: `translate(calc(-50% + ${x}px), ${y}px)`,
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: delay,
                  }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00f0ff]/20 to-[#9d00ff]/20 backdrop-blur-sm border border-[#00f0ff]/30 flex items-center justify-center"
                >
                  <Icon className="w-8 h-8 text-[#00f0ff]" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mt-32"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#9d00ff]/20 border border-[#00f0ff]/30 mb-6"
            >
              <span className="text-[#00f0ff]">🎯 پلتفرم رزرو کافه و رویداد</span>
            </motion.div>

            <h1 className="bg-gradient-to-r from-[#00f0ff] via-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent text-5xl md:text-7xl mb-6">
              تجربه‌ای متفاوت در
              <br />
              دنیای کافه و سرگرمی
            </h1>

            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              FunZone پلتفرمی است که کافه‌داران و علاقه‌مندان به بازی و رویدادها را به هم متصل می‌کند. 
              رزرو آسان، مدیریت هوشمند، و تجربه‌ای بی‌نظیر.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] hover:opacity-90 px-8 py-6 text-lg"
              >
                دانلود اپلیکیشن
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-[#00f0ff]/30 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 px-8 py-6 text-lg"
              >
                مشاهده دموی آنلاین
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {[
              { number: "۵۰۰+", label: "کافه همکار" },
              { number: "۱۰,۰۰۰+", label: "کاربر فعال" },
              { number: "۲۰۰+", label: "بازی و رویداد" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-[#00f0ff]/50 transition-all"
              >
                <div className="bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] bg-clip-text text-transparent text-3xl md:text-4xl mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[#00f0ff]/50 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
