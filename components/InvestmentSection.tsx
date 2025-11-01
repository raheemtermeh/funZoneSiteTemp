import { motion } from "motion/react";
import { TrendingUp, Target, Rocket, DollarSign, Users2, Globe } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function InvestmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const metrics = [
    { icon: TrendingUp, value: "۳۰۰%", label: "رشد سالانه" },
    { icon: Users2, value: "۱۰,۰۰۰+", label: "کاربر فعال" },
    { icon: Globe, value: "۱۵", label: "شهر فعال" },
    { icon: DollarSign, value: "۵۰۰+", label: "کافه همکار" },
  ];

  const opportunities = [
    {
      title: "سرمایه‌گذاری مستقیم",
      description: "مشارکت مستقیم در توسعه و رشد FunZone",
      icon: Rocket,
      color: "from-[#00f0ff] to-[#9d00ff]",
    },
    {
      title: "فرانشیز",
      description: "راه‌اندازی شعبه FunZone در شهر خود",
      icon: Target,
      color: "from-[#9d00ff] to-[#ff00ff]",
    },
    {
      title: "مشارکت استراتژیک",
      description: "همکاری بلندمدت در توسعه کسب‌وکار",
      icon: TrendingUp,
      color: "from-[#ff00ff] to-[#00f0ff]",
    },
  ];

  return (
    <section id="investment" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="bg-gradient-to-r from-[#00f0ff] via-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-4">
            سرمایه‌گذاری و همکاری
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            با ما در ساخت آینده صنعت کافه و سرگرمی شریک شوید
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-[#00f0ff]/50 transition-all">
                  <Icon className="w-10 h-10 mx-auto mb-3 text-[#00f0ff]" />
                  <div className="text-2xl md:text-3xl bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <p className="text-sm text-foreground/60">{metric.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Opportunities */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-[#00f0ff]/50 transition-all h-full group cursor-pointer">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${opportunity.color} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-[#00f0ff]" />
                  </div>
                  <h3 className="mb-3">{opportunity.title}</h3>
                  <p className="text-foreground/60 mb-6">{opportunity.description}</p>
                  <button className={`text-sm bg-gradient-to-r ${opportunity.color} bg-clip-text text-transparent hover:opacity-80`}>
                    اطلاعات بیشتر ←
                  </button>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border">
            <div className="text-center mb-8">
              <h3 className="mb-2">پیشنهاد خود را با ما به اشتراک بگذارید</h3>
              <p className="text-foreground/60">
                تیم ما آماده است تا درباره فرصت‌های همکاری با شما گفتگو کند
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block mb-2 text-sm">نام و نام خانوادگی</label>
                <Input
                  placeholder="نام خود را وارد کنید"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border focus:border-[#00f0ff]"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">ایمیل</label>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border focus:border-[#00f0ff]"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">پیشنهاد یا ایده شما</label>
                <Textarea
                  placeholder="پیشنهاد خود را با جزئیات بنویسید..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border focus:border-[#00f0ff] resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] hover:opacity-90 py-6"
              >
                ارسال پیشنهاد
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Why Invest */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#00f0ff]/10 via-[#9d00ff]/10 to-[#ff00ff]/10 border border-[#00f0ff]/30"
        >
          <h3 className="text-center mb-8 bg-gradient-to-r from-[#00f0ff] to-[#ff00ff] bg-clip-text text-transparent">
            چرا در FunZone سرمایه‌گذاری کنیم؟
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="mb-2">بازار در حال رشد</h4>
              <p className="text-sm text-foreground/60">
                صنعت کافه و سرگرمی در ایران در حال رشد سریع است
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">💡</div>
              <h4 className="mb-2">نوآوری فناورانه</h4>
              <p className="text-sm text-foreground/60">
                استفاده از جدیدترین تکنولوژی‌ها برای بهترین تجربه
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="mb-2">تیم باتجربه</h4>
              <p className="text-sm text-foreground/60">
                تیمی از متخصصان با سابقه در صنعت فناوری
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
