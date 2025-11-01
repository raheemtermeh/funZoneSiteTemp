"use client";

import { motion, useInView } from "motion/react";
import { useState, useRef } from "react";
import { Gamepad2, Users, Trophy, Clock, PlayCircle, Star, BookOpen, Video, Download } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

const games = [
  {
    id: 1,
    title: "شطرنج",
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=600",
    level: "مبتدی تا حرفه‌ای",
    players: "۲ نفر",
    duration: "۳۰-۹۰ دقیقه",
    category: "استراتژی",
    description: "بازی کلاسیک استراتژیک برای تقویت تفکر و تمرکز",
    rating: 4.8,
    students: "۱,۲۰۰",
    lessons: [
      { title: "آشنایی با صفحه و مهره‌ها", duration: "۱۵ دقیقه" },
      { title: "حرکت مهره‌ها", duration: "۲۰ دقیقه" },
      { title: "استراتژی‌های افتتاحیه", duration: "۳۰ دقیقه" },
      { title: "میانه بازی و تاکتیک‌ها", duration: "۴۵ دقیقه" },
      { title: "پایان بازی و مات کردن", duration: "۳۰ دقیقه" },
    ],
  },
  {
    id: 2,
    title: "مونوپولی",
    image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=600",
    level: "آسان",
    players: "۲-۸ نفر",
    duration: "۶۰-۱۸۰ دقیقه",
    category: "خانوادگی",
    description: "بازی املاک و مستغلات برای سرگرمی خانواده",
    rating: 4.5,
    students: "۸۵۰",
    lessons: [
      { title: "قوانین پایه بازی", duration: "۱۰ دقیقه" },
      { title: "خرید و فروش املاک", duration: "۱۵ دقیقه" },
      { title: "استراتژی‌های سرمایه‌گذاری", duration: "۲۵ دقیقه" },
      { title: "مدیریت منابع مالی", duration: "۲۰ دقیقه" },
    ],
  },
  {
    id: 3,
    title: "کاتان",
    image: "https://images.unsplash.com/photo-1589804845133-49b5e06cc415?w=600",
    level: "متوسط",
    players: "۳-۴ نفر",
    duration: "۶۰-۱۲۰ دقیقه",
    category: "استراتژی",
    description: "بازی ساخت جزیره و تجارت منابع",
    rating: 4.9,
    students: "۱,۵۰۰",
    lessons: [
      { title: "راه‌اندازی بازی و جزیره", duration: "۱۵ دقیقه" },
      { title: "جمع‌آوری و تجارت منابع", duration: "۲۰ دقیقه" },
      { title: "ساخت جاده‌ها و شهرها", duration: "۲۵ دقیقه" },
      { title: "استراتژی‌های پیشرفته", duration: "۳۵ دقیقه" },
      { title: "راه‌های کسب پیروزی", duration: "۲۰ دقیقه" },
    ],
  },
  {
    id: 4,
    title: "اونو",
    image: "https://images.unsplash.com/photo-1566694271453-390536dd1f0d?w=600",
    level: "آسان",
    players: "۲-۱۰ نفر",
    duration: "۱۵-۳۰ دقیقه",
    category: "سرگرمی",
    description: "بازی کارتی سریع و هیجان‌انگیز",
    rating: 4.6,
    students: "۲,۳۰۰",
    lessons: [
      { title: "قوانین اصلی بازی", duration: "۸ دقیقه" },
      { title: "کارت‌های ویژه و اکشن", duration: "۱۲ دقیقه" },
      { title: "تاکتیک‌های برد", duration: "۱۵ دقیقه" },
    ],
  },
  {
    id: 5,
    title: "مافیا",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=600",
    level: "متوسط",
    players: "۶-۲۰ نفر",
    duration: "۳۰-۶۰ دقیقه",
    category: "گروهی",
    description: "بازی نقش‌آفرینی و استدلال اجتماعی",
    rating: 4.7,
    students: "۱,۸۰۰",
    lessons: [
      { title: "آشنایی با نقش‌ها", duration: "۱۵ دقیقه" },
      { title: "مراحل شب و روز", duration: "۲۰ دقیقه" },
      { title: "استدلال و تحلیل", duration: "۲۵ دقیقه" },
      { title: "استراتژی‌های پیشرفته", duration: "۳۰ دقیقه" },
    ],
  },
  {
    id: 6,
    title: "اسکرابل",
    image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600",
    level: "متوسط",
    players: "۲-۴ نفر",
    duration: "۶۰-۹۰ دقیقه",
    category: "فکری",
    description: "بازی کلمه‌سازی برای افزایش دایره لغات",
    rating: 4.4,
    students: "۶۵۰",
    lessons: [
      { title: "قوانین پایه", duration: "۱۰ دقیقه" },
      { title: "امتیازدهی و استراتژی", duration: "۲۰ دقیقه" },
      { title: "کلمات پربازده", duration: "۲۵ دقیقه" },
    ],
  },
  {
    id: 7,
    title: "پوکر",
    image: "https://images.unsplash.com/photo-1630609674924-1b381d09d313?w=600",
    level: "پیشرفته",
    players: "۲-۱۰ نفر",
    duration: "۴۵-۱۲۰ دقیقه",
    category: "استراتژی",
    description: "بازی کارت محبوب با استراتژی‌های پیچیده",
    rating: 4.9,
    students: "۲,۱۰۰",
    lessons: [
      { title: "دست‌های پوکر و ارزش آن‌ها", duration: "۲۰ دقیقه" },
      { title: "شرط‌بندی و بلوف", duration: "۳۰ دقیقه" },
      { title: "احتمالات و محاسبات", duration: "۴۰ دقیقه" },
      { title: "روانشناسی بازی", duration: "۳۵ دقیقه" },
    ],
  },
  {
    id: 8,
    title: "کدنیمز",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600",
    level: "آسان",
    players: "۴-۸ نفر",
    duration: "۱۵-۳۰ دقیقه",
    category: "گروهی",
    description: "بازی کلمات و حدس زدن تیمی",
    rating: 4.8,
    students: "۱,۴۰۰",
    lessons: [
      { title: "راه‌اندازی و تقسیم تیم‌ها", duration: "۱۰ دقیقه" },
      { title: "نحوه دادن سرنخ", duration: "۱۵ دقیقه" },
      { title: "استراتژی‌های تیمی", duration: "۲۰ دقیقه" },
    ],
  },
];

export function GameTutorials() {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [selectedGame, setSelectedGame] = useState<typeof games[0] | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const categories = ["همه", "استراتژی", "خانوادگی", "سرگرمی", "گروهی", "فکری"];

  const filteredGames =
    selectedCategory === "همه"
      ? games
      : games.filter((game) => game.category === selectedCategory);

  return (
    <section id="games" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[#00f0ff]/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff00ff]/20 to-[#00f0ff]/20 border border-[#ff00ff]/30 mb-6"
          >
            <BookOpen className="w-5 h-5 text-[#ff00ff]" />
            <span className="text-[#ff00ff]">آموزش تخصصی بازی‌ها</span>
          </motion.div>
          
          <h2 className="bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] bg-clip-text text-transparent mb-4">
            آموزش کامل بازی‌های محبوب
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-4">
            با آموزش‌های ویدیویی گام‌به‌گام، از مبتدی تا حرفه‌ای پیش بروید
          </p>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mt-8"
          >
            {[
              { icon: Video, label: "۱۲۰+ ویدیو آموزشی" },
              { icon: Users, label: "۱۰,۰۰۰+ دانشجو" },
              { icon: Gamepad2, label: "۵۰+ بازی مختلف" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-5 h-5 text-[#ff00ff]" />
                  <span className="text-foreground/70">{stat.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] text-white shadow-lg shadow-[#ff00ff]/50"
                  : "bg-card border border-border hover:border-[#ff00ff]/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-[#ff00ff]/50 transition-all duration-300 cursor-pointer h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-16 h-16 rounded-full bg-[#ff00ff]/90 flex items-center justify-center"
                      onClick={() => setSelectedGame(game)}
                    >
                      <PlayCircle className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-[#ff00ff]/90 backdrop-blur-sm border-none">
                    {game.category}
                  </Badge>
                  
                  {/* Rating */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-white">{game.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-2">{game.title}</h3>
                  <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{game.description}</p>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Trophy className="w-4 h-4 text-[#ff00ff]" />
                      <span>{game.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Users className="w-4 h-4 text-[#00f0ff]" />
                      <span>{game.players}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Clock className="w-4 h-4 text-[#9d00ff]" />
                      <span>{game.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <BookOpen className="w-4 h-4 text-[#ff00ff]" />
                      <span>{game.students} دانشجو</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedGame(game)}
                    className="w-full py-2 rounded-lg bg-gradient-to-r from-[#ff00ff]/10 to-[#00f0ff]/10 border border-[#ff00ff]/30 hover:border-[#ff00ff] transition-all group-hover:bg-gradient-to-r group-hover:from-[#ff00ff] group-hover:to-[#00f0ff] group-hover:text-white"
                  >
                    مشاهده آموزش
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Game Detail Dialog */}
        <Dialog open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
            {selectedGame && (
              <>
                <DialogHeader>
                  <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden">
                    <ImageWithFallback
                      src={selectedGame.image}
                      alt={selectedGame.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                    <div className="absolute bottom-4 right-6 left-6">
                      <DialogTitle className="text-3xl text-white mb-2">{selectedGame.title}</DialogTitle>
                      <div className="flex items-center gap-4 text-white/80">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span>{selectedGame.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{selectedGame.students} دانشجو</span>
                        <span>•</span>
                        <span>{selectedGame.level}</span>
                      </div>
                    </div>
                  </div>
                </DialogHeader>
                
                <DialogDescription className="text-foreground/70 mb-6">
                  {selectedGame.description}
                </DialogDescription>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-[#ff00ff]/10 border border-[#ff00ff]/30">
                    <Users className="w-6 h-6 text-[#ff00ff] mb-2" />
                    <div className="text-sm text-foreground/60">تعداد بازیکنان</div>
                    <div className="mt-1">{selectedGame.players}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30">
                    <Clock className="w-6 h-6 text-[#00f0ff] mb-2" />
                    <div className="text-sm text-foreground/60">مدت زمان</div>
                    <div className="mt-1">{selectedGame.duration}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#9d00ff]/10 border border-[#9d00ff]/30">
                    <BookOpen className="w-6 h-6 text-[#9d00ff] mb-2" />
                    <div className="text-sm text-foreground/60">تعداد درس‌ها</div>
                    <div className="mt-1">{selectedGame.lessons.length} درس</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="mb-4">سرفصل دوره آموزشی</h4>
                  <div className="space-y-3">
                    {selectedGame.lessons.map((lesson, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-border hover:border-[#ff00ff]/50 transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#ff00ff]/20 to-[#00f0ff]/20 flex items-center justify-center text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <div className="group-hover:text-[#ff00ff] transition-colors">{lesson.title}</div>
                            <div className="text-sm text-foreground/60">{lesson.duration}</div>
                          </div>
                        </div>
                        <PlayCircle className="w-5 h-5 text-[#ff00ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] hover:opacity-90">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شروع آموزش
                  </Button>
                  <Button variant="outline" className="border-[#00f0ff]/30 hover:border-[#00f0ff]">
                    <Download className="w-4 h-4 ml-2" />
                    دانلود PDF
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
