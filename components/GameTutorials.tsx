import { motion } from "motion/react";
import { useState } from "react";
import { Gamepad2, Users, Trophy, Clock, PlayCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
  },
];

export function GameTutorials() {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const categories = ["همه", "استراتژی", "خانوادگی", "سرگرمی", "گروهی", "فکری"];

  const filteredGames =
    selectedCategory === "همه"
      ? games
      : games.filter((game) => game.category === selectedCategory);

  return (
    <section id="games" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] bg-clip-text text-transparent mb-4">
            آموزش بازی‌ها
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            با آموزش‌های کامل بازی‌های محبوب، تجربه بهتری از سرگرمی خود داشته باشید
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] text-white"
                  : "bg-card border border-border hover:border-[#ff00ff]/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-[#ff00ff]/50 transition-all duration-300 cursor-pointer">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-[#ff00ff]" />
                  </div>
                  <Badge className="absolute top-3 right-3 bg-[#ff00ff]/90 backdrop-blur-sm border-none">
                    {game.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-2">{game.title}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{game.description}</p>

                  <div className="space-y-2 text-sm">
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
                  </div>

                  <button className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-[#ff00ff]/10 to-[#00f0ff]/10 border border-[#ff00ff]/30 hover:border-[#ff00ff] transition-all group-hover:bg-gradient-to-r group-hover:from-[#ff00ff] group-hover:to-[#00f0ff] group-hover:text-white">
                    مشاهده آموزش
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
