"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { TrendingUp, Target, Rocket, DollarSign, Users2, Globe, Lightbulb, PiggyBank, LineChart, CheckCircle, ArrowUpRight, Handshake, Building2, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

export function InvestmentSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentType: "",
    amount: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("پیشنهاد شما با موفقیت ارسال شد! تیم ما به زودی با شما تماس خواهد گرفت.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      investmentType: "",
      amount: "",
      message: "",
    });
  };

  const metrics = [
    { 
      icon: TrendingUp, 
      value: "۳۰۰%", 
      label: "رشد سالانه",
      description: "رشد مستمر در ۳ سال اخیر",
      color: "from-[#00f0ff] to-[#9d00ff]",
    },
    { 
      icon: Users2, 
      value: "۱۰,۰۰۰+", 
      label: "کاربر فعال",
      description: "کاربران ماهانه فعال",
      color: "from-[#9d00ff] to-[#ff00ff]",
    },
    { 
      icon: Globe, 
      value: "۱۵", 
      label: "شهر فعال",
      description: "پوشش سراسر کشور",
      color: "from-[#ff00ff] to-[#00f0ff]",
    },
    { 
      icon: DollarSign, 
      value: "۵۰۰+", 
      label: "کافه همکار",
      description: "شبکه گسترده کافه‌ها",
      color: "from-[#00f0ff] to-[#ff00ff]",
    },
  ];

  const opportunities = [
    {
      title: "سرمایه‌گذاری مستقیم",
      description: "مشارکت مستقیم در توسعه و رشد FunZone با سود سالانه بالا",
      icon: Rocket,
      color: "from-[#00f0ff] to-[#9d00ff]",
      features: ["سود سالانه ۴۰-۶۰٪", "مشارکت در تصمیمات", "گزارش‌های ماهانه"],
      minInvestment: "۱۰۰ میلیون تومان",
    },
    {
      title: "فرانشیز",
      description: "راه‌اندازی شعبه FunZone در شهر خود با پشتیبانی کامل",
      icon: Building2,
      color: "from-[#9d00ff] to-[#ff00ff]",
      features: ["آموزش رایگان", "برندینگ و مارکتینگ", "پشتیبانی ۲۴/۷"],
      minInvestment: "۵۰۰ میلیون تومان",
    },
    {
      title: "مشارکت استراتژیک",
      description: "همکاری بلندمدت در توسعه کسب‌وکار و گسترش شبکه",
      icon: Handshake,
      color: "from-[#ff00ff] to-[#00f0ff]",
      features: ["سهام شرکت", "حق رای", "مشاوره تخصصی"],
      minInvestment: "۱ میلیارد تومان",
    },
  ];

  const successStories = [
    {
      name: "کافه گیم پلاس",
      city: "تهران",
      revenue: "۲۰۰٪",
      description: "افزایش درآمد پس از همکاری با FunZone",
      period: "۶ ماه",
    },
    {
      name: "کافه بازی نو",
      city: "مشهد",
      revenue: "۱۵۰٪",
      description: "رشد تعداد مشتریان و رزروها",
      period: "۴ ماه",
    },
    {
      name: "کافه استراتژی",
      city: "اصفهان",
      revenue: "۱۸۰٪",
      description: "افزایش فروش و جذب مشتریان جدید",
      period: "۵ ماه",
    },
  ];

  const investmentBenefits = [
    {
      icon: LineChart,
      title: "بازگشت سرمایه سریع",
      description: "ROI بالا در کمتر از ۱۲ ماه",
    },
    {
      icon: Shield,
      title: "امنیت سرمایه",
      description: "قراردادهای قانونی و محافظت از سرمایه",
    },
    {
      icon: Zap,
      title: "رشد مداوم",
      description: "بازار در حال رشد با پتانسیل بالا",
    },
    {
      icon: Users2,
      title: "تیم متخصص",
      description: "مدیریت حرفه‌ای با سابقه موفق",
    },
  ];

  const fundingProgress = 78; // 78% of funding goal achieved

  return (
    <section id="investment" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Backgrounds */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 18,
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00f0ff]/20 via-[#9d00ff]/20 to-[#ff00ff]/20 border border-[#00f0ff]/30 mb-6"
          >
            <PiggyBank className="w-5 h-5 text-[#00f0ff]" />
            <span className="text-[#00f0ff]">فرصت سرمایه‌گذاری طلایی</span>
          </motion.div>
          
          <h2 className="bg-gradient-to-r from-[#00f0ff] via-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent mb-4">
            سرمایه‌گذاری و همکاری
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            با ما در ساخت آینده صنعت کافه و سرگرمی شریک شوید و از رشد سریع این بازار بهره‌مند گردید
          </p>

          {/* Funding Progress */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#00f0ff]/10 to-[#9d00ff]/10 border border-[#00f0ff]/30"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-foreground/70">پیشرفت جذب سرمایه</span>
              <span className="bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] bg-clip-text text-transparent">
                {fundingProgress}٪ تکمیل شده
              </span>
            </div>
            <Progress value={fundingProgress} className="h-3 mb-2" />
            <div className="flex justify-between text-sm text-foreground/60">
              <span>۷.۸ میلیارد تومان جذب شده</span>
              <span>هدف: ۱۰ میلیارد تومان</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-[#00f0ff]/50 transition-all group relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-12 h-12 mx-auto mb-3 text-[#00f0ff]" />
                  </motion.div>
                  <div className={`text-3xl md:text-4xl bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                    {metric.value}
                  </div>
                  <p className="text-sm mb-1">{metric.label}</p>
                  <p className="text-xs text-foreground/50">{metric.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Investment Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-center mb-8 bg-gradient-to-r from-[#00f0ff] to-[#ff00ff] bg-clip-text text-transparent">
            چرا در FunZone سرمایه‌گذاری کنیم؟
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {investmentBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-[#00f0ff]/50 transition-all group h-full">
                    <Icon className="w-10 h-10 text-[#00f0ff] mb-4" />
                    <h4 className="mb-2 group-hover:text-[#00f0ff] transition-colors">{benefit.title}</h4>
                    <p className="text-sm text-foreground/60">{benefit.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-center mb-8 bg-gradient-to-r from-[#00f0ff] to-[#ff00ff] bg-clip-text text-transparent">
            فرصت‌های سرمایه‌گذاری
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-[#00f0ff]/50 transition-all h-full group cursor-pointer relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${opportunity.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    
                    <motion.div 
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${opportunity.color} bg-opacity-20 flex items-center justify-center mb-6 relative z-10`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-10 h-10 text-[#00f0ff]" />
                    </motion.div>
                    
                    <div className="relative z-10">
                      <h3 className="mb-3 group-hover:text-[#00f0ff] transition-colors">{opportunity.title}</h3>
                      <p className="text-foreground/60 mb-6">{opportunity.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {opportunity.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-[#00f0ff] flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="text-sm text-foreground/60 mb-2">حداقل سرمایه:</div>
                        <div className={`text-xl bg-gradient-to-r ${opportunity.color} bg-clip-text text-transparent`}>
                          {opportunity.minInvestment}
                        </div>
                      </div>

                      <button className={`w-full mt-6 py-3 rounded-lg bg-gradient-to-r ${opportunity.color} text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}>
                        <span>اطلاعات بیشتر</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-center mb-8 bg-gradient-to-r from-[#00f0ff] to-[#ff00ff] bg-clip-text text-transparent">
            داستان‌های موفقیت
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border hover:border-[#00f0ff]/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="mb-1">{story.name}</h4>
                      <p className="text-sm text-foreground/60">{story.city}</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] border-none">
                      {story.period}
                    </Badge>
                  </div>
                  
                  <div className="text-4xl bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] bg-clip-text text-transparent mb-2">
                    +{story.revenue}
                  </div>
                  <p className="text-sm text-foreground/60">{story.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-64 h-64 bg-[#00f0ff]/10 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <Lightbulb className="w-12 h-12 mx-auto mb-4 text-[#00f0ff]" />
                <h3 className="mb-2">پیشنهاد خود را با ما به اشتراک بگذارید</h3>
                <p className="text-foreground/60">
                  تیم ما آماده است تا درباره فرصت‌های همکاری با شما گفتگو کند
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm">نام و نام خانوادگی *</label>
                    <Input
                      required
                      placeholder="نام خود را وارد کنید"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-border focus:border-[#00f0ff]"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm">شماره تماس *</label>
                    <Input
                      required
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background/50 border-border focus:border-[#00f0ff]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm">ایمیل *</label>
                  <Input
                    required
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border focus:border-[#00f0ff]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm">نوع همکاری *</label>
                    <select
                      required
                      value={formData.investmentType}
                      onChange={(e) => setFormData({ ...formData, investmentType: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:border-[#00f0ff] focus:outline-none transition-colors"
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="direct">سرمایه‌گذاری مستقیم</option>
                      <option value="franchise">فرانشیز</option>
                      <option value="strategic">مشارکت استراتژیک</option>
                      <option value="other">سایر</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm">میزان سرمایه (تومان)</label>
                    <Input
                      placeholder="مثلا: ۱۰۰,۰۰۰,۰۰۰"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="bg-background/50 border-border focus:border-[#00f0ff]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm">پیشنهاد یا ایده شما *</label>
                  <Textarea
                    required
                    placeholder="پیشنهاد خود را با جزئیات بنویسید..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-border focus:border-[#00f0ff] resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] hover:opacity-90 py-6 shadow-lg shadow-[#00f0ff]/50"
                  >
                    <Rocket className="w-5 h-5 ml-2" />
                    ارسال پیشنهاد
                  </Button>
                </motion.div>
              </form>
            </div>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Rocket,
              title: "بازار در حال رشد",
              description: "صنعت کافه و سرگرمی در ایران در حال رشد سریع با پتانسیل بی‌نظیر است",
            },
            {
              icon: Lightbulb,
              title: "نوآوری فناورانه",
              description: "استفاده از جدیدترین تکنولوژی‌ها برای بهترین تجربه کاربری",
            },
            {
              icon: Target,
              title: "تیم باتجربه",
              description: "تیمی از متخصصان با سابقه درخشان در صنعت فناوری و کسب‌وکار",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center bg-gradient-to-br from-[#00f0ff]/10 via-[#9d00ff]/10 to-[#ff00ff]/10 border border-[#00f0ff]/30 hover:border-[#00f0ff]/50 transition-all">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4 text-[#00f0ff]" />
                  </motion.div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="text-sm text-foreground/60">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

import { Shield } from "lucide-react";
