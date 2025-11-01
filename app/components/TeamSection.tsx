"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Linkedin, Mail, Award, Briefcase, GraduationCap, Code, Palette, TrendingUp, Users2, Target, Rocket, Heart } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";

const team = [
  {
    name: "رضا محمدی",
    role: "مدیرعامل و بنیانگذار",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "۱۰ سال تجربه در صنعت فناوری و کسب‌وکار",
    expertise: ["استراتژی کسب‌وکار", "مدیریت محصول", "رهبری تیم"],
    education: "MBA از دانشگاه تهران",
    achievements: ["رشد ۵۰۰٪ در ۲ سال", "جذب سرمایه ۲ میلیون دلاری"],
    quote: "ما در FunZone به دنبال ساخت آینده‌ای هستیم که در آن سرگرمی و فناوری در کنار هم قرار دارند.",
  },
  {
    name: "سارا احمدی",
    role: "مدیر محصول",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "متخصص طراحی تجربه کاربری و استراتژی محصول",
    expertise: ["UX/UI Design", "تحقیقات کاربر", "استراتژی محصول"],
    education: "کارشناسی ارشد طراحی تعاملی",
    achievements: ["طراحی ۵۰+ محصول موفق", "برنده جایزه بهترین UX"],
    quote: "طراحی خوب، طراحی‌ای است که کاربر آن را احساس نکند.",
  },
  {
    name: "علی کریمی",
    role: "مدیر فناوری",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    bio: "توسعه‌دهنده ارشد با تخصص در معماری نرم‌افزار",
    expertise: ["Architecture", "Cloud Computing", "DevOps"],
    education: "کارشناسی ارشد مهندسی نرم‌افزار",
    achievements: ["مدیریت تیم ۲۰ نفره", "معماری سیستم‌های مقیاس‌پذیر"],
    quote: "کد خوب، کدی است که قابل نگهداری و توسعه باشد.",
  },
  {
    name: "مریم رضایی",
    role: "مدیر بازاریابی",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400",
    bio: "استراتژیست دیجیتال مارکتینگ و رشد کسب‌وکار",
    expertise: ["Digital Marketing", "Growth Hacking", "Brand Strategy"],
    education: "MBA با تخصص بازاریابی",
    achievements: ["رشد ۱۰۰۰٪ کاربران", "کمپین‌های ویروسی موفق"],
    quote: "بازاریابی خوب درباره داستان‌سرایی است، نه فروختن.",
  },
  {
    name: "امیر حسینی",
    role: "طراح ارشد",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    bio: "طراح خلاق با تمرکز بر تجربه کاربری مدرن",
    expertise: ["Visual Design", "Motion Graphics", "Brand Identity"],
    education: "کارشناسی گرافیک و تایپوگرافی",
    achievements: ["۱۰۰+ پروژه طراحی", "همکاری با برندهای معتبر"],
    quote: "طراحی باید زیبا و کاربردی باشد، نه یکی از آن‌ها.",
  },
  {
    name: "نیلوفر صادقی",
    role: "مدیر عملیات",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    bio: "مدیریت موثر تیم‌ها و فرآیندهای کسب‌وکار",
    expertise: ["Operations", "Process Optimization", "Team Management"],
    education: "کارشناسی ارشد مدیریت صنعتی",
    achievements: ["بهینه‌سازی ۴۰٪ هزینه‌ها", "افزایش بهره‌وری تیم"],
    quote: "عملیات خوب، قلب تپنده هر کسب‌وکار موفق است.",
  },
];

const values = [
  {
    icon: Heart,
    title: "اشتیاق",
    description: "ما عاشق کاری هستیم که انجام می‌دهیم",
    color: "from-[#ff00ff] to-[#00f0ff]",
  },
  {
    icon: Users2,
    title: "کار تیمی",
    description: "موفقیت ما در همکاری و اعتماد است",
    color: "from-[#00f0ff] to-[#9d00ff]",
  },
  {
    icon: Rocket,
    title: "نوآوری",
    description: "همیشه به دنبال راه‌حل‌های بهتر هستیم",
    color: "from-[#9d00ff] to-[#ff00ff]",
  },
  {
    icon: Target,
    title: "تمرکز بر کاربر",
    description: "رضایت کاربران اولویت اول ماست",
    color: "from-[#00f0ff] to-[#ff00ff]",
  },
];

export function TeamSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <section id="team" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Backgrounds */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9d00ff]/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#9d00ff]/20 to-[#ff00ff]/20 border border-[#9d00ff]/30 mb-6"
          >
            <Users2 className="w-5 h-5 text-[#9d00ff]" />
            <span className="text-[#9d00ff]">تیم حرفه‌ای و متعهد</span>
          </motion.div>
          
          <h2 className="bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-4">
            تیم FunZone
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            گروهی از افراد خلاق، باهوش و پرانگیزه که با اشتیاق برای ایجاد بهترین تجربه کار می‌کنند
          </p>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Users2, value: "۵۰+", label: "اعضای تیم" },
              { icon: Award, value: "۱۰+", label: "جوایز ملی" },
              { icon: Briefcase, value: "۴ سال", label: "سابقه فعالیت" },
              { icon: TrendingUp, value: "۳۰۰%", label: "رشد سالانه" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-[#9d00ff]/50 transition-all">
                    <Icon className="w-8 h-8 mx-auto mb-2 text-[#9d00ff]" />
                    <div className="text-2xl bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-foreground/60">{stat.label}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
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
              whileHover={{ y: -10 }}
            >
              <Card 
                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-[#9d00ff]/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative">
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                    
                    {/* Animated Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-[#9d00ff]/80 via-[#9d00ff]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                  
                  <div className="absolute bottom-0 right-0 left-0 p-6">
                    <motion.div
                      initial={false}
                      animate={{ y: 0 }}
                      className="transform transition-transform group-hover:-translate-y-2"
                    >
                      <h3 className="text-white mb-1 text-xl">{member.name}</h3>
                      <p className="text-[#00f0ff] mb-3">{member.role}</p>
                      <p className="text-white/80 text-sm line-clamp-2 mb-4">{member.bio}</p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {member.expertise.slice(0, 2).map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                    
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-[#9d00ff]/50 border border-white/20 flex items-center justify-center transition-all"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-[#00f0ff]/50 border border-white/20 flex items-center justify-center transition-all"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-center mb-8 bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent">
            ارزش‌های ما
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-[#9d00ff]/50 transition-all group h-full">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} bg-opacity-20 flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-[#9d00ff]" />
                    </motion.div>
                    <h4 className="mb-2 group-hover:text-[#9d00ff] transition-colors">{value.title}</h4>
                    <p className="text-sm text-foreground/60">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border overflow-hidden relative">
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-[#9d00ff]/10 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-4">
                  درباره FunZone
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-2">
                    ۲۰۲۱
                  </div>
                  <p className="text-foreground/60">سال تاسیس</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-2">
                    ۵۰+
                  </div>
                  <p className="text-foreground/60">اعضای تیم</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-2">
                    ۱۵
                  </div>
                  <p className="text-foreground/60">شهر فعال</p>
                </motion.div>
              </div>

              <div className="space-y-4 text-center">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-[#9d00ff]/10 to-[#ff00ff]/10 border border-[#9d00ff]/30">
                  <h4 className="mb-3 text-[#9d00ff]">ماموریت ما</h4>
                  <p className="text-foreground/80">
                    ایجاد یک پلتفرم جامع برای اتصال علاقه‌مندان به بازی و کافه‌داران. 
                    ما معتقدیم که سرگرمی و تعامل اجتماعی باید برای همه قابل دسترس باشد.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-r from-[#00f0ff]/10 to-[#9d00ff]/10 border border-[#00f0ff]/30">
                  <h4 className="mb-3 text-[#00f0ff]">چشم‌انداز ما</h4>
                  <p className="text-foreground/80">
                    تبدیل شدن به بزرگترین پلتفرم رزرو کافه و رویداد در ایران و منطقه با ارائه 
                    بهترین تجربه کاربری و خدمات نوآورانه.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Team Member Detail Dialog */}
        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-2xl bg-card border-border">
            {selectedMember && (
              <>
                <DialogHeader>
                  <div className="flex items-start gap-6">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <DialogTitle className="text-2xl mb-2">{selectedMember.name}</DialogTitle>
                      <p className="text-[#9d00ff] mb-3">{selectedMember.role}</p>
                      <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-lg bg-[#9d00ff]/10 hover:bg-[#9d00ff]/20 border border-[#9d00ff]/30 flex items-center justify-center transition-all">
                          <Linkedin className="w-4 h-4 text-[#9d00ff]" />
                        </button>
                        <button className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 border border-[#00f0ff]/30 flex items-center justify-center transition-all">
                          <Mail className="w-4 h-4 text-[#00f0ff]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6 mt-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-5 h-5 text-[#9d00ff]" />
                      <h4>درباره</h4>
                    </div>
                    <p className="text-foreground/70">{selectedMember.bio}</p>
                    <p className="text-foreground/60 text-sm italic mt-3 p-4 rounded-lg bg-[#9d00ff]/10 border-r-4 border-[#9d00ff]">
                      "{selectedMember.quote}"
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-5 h-5 text-[#00f0ff]" />
                      <h4>تحصیلات</h4>
                    </div>
                    <p className="text-foreground/70">{selectedMember.education}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="w-5 h-5 text-[#ff00ff]" />
                      <h4>تخصص‌ها</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.expertise.map((skill, idx) => (
                        <Badge key={idx} className="bg-gradient-to-r from-[#9d00ff]/20 to-[#ff00ff]/20 border-[#9d00ff]/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-[#00f0ff]" />
                      <h4>دستاوردها</h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedMember.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#00f0ff] mt-1">✓</span>
                          <span className="text-foreground/70">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
