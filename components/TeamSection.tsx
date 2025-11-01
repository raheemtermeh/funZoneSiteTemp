import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const team = [
  {
    name: "رضا محمدی",
    role: "مدیرعامل و بنیانگذار",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "۱۰ سال تجربه در صنعت فناوری و کسب‌وکار",
  },
  {
    name: "سارا احمدی",
    role: "مدیر محصول",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "متخصص طراحی تجربه کاربری و استراتژی محصول",
  },
  {
    name: "علی کریمی",
    role: "مدیر فناوری",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    bio: "توسعه‌دهنده ارشد با تخصص در معماری نرم‌افزار",
  },
  {
    name: "مریم رضایی",
    role: "مدیر بازاریابی",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400",
    bio: "استراتژیست دیجیتال مارکتینگ و رشد کسب‌وکار",
  },
  {
    name: "امیر حسینی",
    role: "طراح ارشد",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    bio: "طراح خلاق با تمرکز بر تجربه کاربری مدرن",
  },
  {
    name: "نیلوفر صادقی",
    role: "مدیر عملیات",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    bio: "مدیریت موثر تیم‌ها و فرآیندهای کسب‌وکار",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9d00ff]/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-4">
            تیم FunZone
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            گروهی از افراد خلاق و متخصص که با اشتیاق برای ایجاد بهترین تجربه کار می‌کنند
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-[#9d00ff]/50 transition-all duration-300">
                <div className="relative">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 left-4">
                    <h3 className="text-white mb-1">{member.name}</h3>
                    <p className="text-[#00f0ff] text-sm">{member.role}</p>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm text-foreground/60 mb-4">{member.bio}</p>
                  
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-lg bg-[#9d00ff]/10 hover:bg-[#9d00ff]/20 border border-[#9d00ff]/30 flex items-center justify-center transition-all">
                      <Linkedin className="w-4 h-4 text-[#9d00ff]" />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 border border-[#00f0ff]/30 flex items-center justify-center transition-all">
                      <Mail className="w-4 h-4 text-[#00f0ff]" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border">
            <div className="text-center mb-8">
              <h3 className="bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-4">
                درباره FunZone
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-2">
                  ۲۰۲۱
                </div>
                <p className="text-foreground/60">سال تاسیس</p>
              </div>
              <div>
                <div className="text-3xl bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-2">
                  ۵۰+
                </div>
                <p className="text-foreground/60">اعضای تیم</p>
              </div>
              <div>
                <div className="text-3xl bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-2">
                  ۱۵
                </div>
                <p className="text-foreground/60">شهر فعال</p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#9d00ff]/10 to-[#ff00ff]/10 border border-[#9d00ff]/30">
              <p className="text-center text-foreground/80">
                ماموریت ما ایجاد یک پلتفرم جامع برای اتصال علاقه‌مندان به بازی و کافه‌داران است.
                ما معتقدیم که سرگرمی و تعامل اجتماعی باید برای همه قابل دسترس باشد.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
