"use client";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Smartphone, Store, CheckCircle2, Zap, BarChart3, Shield, Calendar, Bell, CreditCard, MapPin, Users2, TrendingUp, Settings, Star, QrCode, MessageSquare, Package } from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function AppGuides() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeTab, setActiveTab] = useState("user");

  const userFeatures = [
    { 
      icon: MapPin, 
      title: "جستجوی هوشمند", 
      description: "پیدا کردن نزدیک‌ترین کافه‌ها با فیلترهای پیشرفته",
      color: "from-[#00f0ff] to-[#9d00ff]"
    },
    { 
      icon: Calendar, 
      title: "رزرو آنلاین", 
      description: "رزرو میز و رویداد با چند کلیک و تایید فوری",
      color: "from-[#9d00ff] to-[#ff00ff]"
    },
    { 
      icon: CreditCard, 
      title: "پرداخت امن", 
      description: "پرداخت آنلاین با درگاه‌های معتبر و امن",
      color: "from-[#ff00ff] to-[#00f0ff]"
    },
    { 
      icon: Star, 
      title: "امتیازدهی", 
      description: "مشاهده و ثبت نظرات و امتیازات کاربران",
      color: "from-[#00f0ff] to-[#ff00ff]"
    },
    { 
      icon: Bell, 
      title: "اعلان‌های هوشمند", 
      description: "دریافت اطلاعیه درباره رویدادها و تخفیف‌ها",
      color: "from-[#9d00ff] to-[#00f0ff]"
    },
    { 
      icon: Gamepad2, 
      title: "کتابخانه بازی", 
      description: "دسترسی به آموزش بیش از ۵۰ بازی مختلف",
      color: "from-[#ff00ff] to-[#9d00ff]"
    },
    { 
      icon: Users2, 
      title: "گروه‌های بازی", 
      description: "پیوستن به گروه‌ها و یافتن هم‌بازی",
      color: "from-[#00f0ff] to-[#9d00ff]"
    },
    { 
      icon: Package, 
      title: "پکیج‌های ویژه", 
      description: "استفاده از پیشنهادات و پکیج‌های تخفیف‌دار",
      color: "from-[#9d00ff] to-[#ff00ff]"
    },
  ];

  const cafeFeatures = [
    { 
      icon: BarChart3, 
      title: "داشبورد تحلیلی", 
      description: "گزارش‌های جامع فروش، رزرو و رضایت مشتریان",
      color: "from-[#00f0ff] to-[#9d00ff]"
    },
    { 
      icon: Calendar, 
      title: "مدیریت رزرو", 
      description: "کنترل کامل میزها، ظرفیت و زمان‌بندی",
      color: "from-[#9d00ff] to-[#ff00ff]"
    },
    { 
      icon: Bell, 
      title: "اعلان لحظه‌ای", 
      description: "اطلاع فوری از رزروها و درخواست‌های جدید",
      color: "from-[#ff00ff] to-[#00f0ff]"
    },
    { 
      icon: Zap, 
      title: "مدیریت رویداد", 
      description: "برگزاری تورنومنت‌ها و رویدادهای ویژه",
      color: "from-[#00f0ff] to-[#ff00ff]"
    },
    { 
      icon: TrendingUp, 
      title: "افزایش فروش", 
      description: "ابزارهای بازاریابی و تبلیغات هدفمند",
      color: "from-[#9d00ff] to-[#00f0ff]"
    },
    { 
      icon: QrCode, 
      title: "QR Code", 
      description: "ورود مشتریان با اسکن کد QR",
      color: "from-[#ff00ff] to-[#9d00ff]"
    },
    { 
      icon: MessageSquare, 
      title: "چت با مشتریان", 
      description: "ارتباط مستقیم و پشتیبانی آنلاین",
      color: "from-[#00f0ff] to-[#9d00ff]"
    },
    { 
      icon: Settings, 
      title: "تنظیمات پیشرفته", 
      description: "سفارشی‌سازی کامل منو، قیمت و خدمات",
      color: "from-[#9d00ff] to-[#ff00ff]"
    },
  ];

  const userSteps = [
    { step: "۱", title: "ثبت‌نام و ورود", desc: "ساخت حساب کاربری در چند ثانیه" },
    { step: "۲", title: "جستجو کافه", desc: "یافتن کافه مورد علاقه با فیلترها" },
    { step: "۳", title: "انتخاب میز", desc: "انتخاب میز و زمان دلخواه" },
    { step: "۴", title: "پرداخت", desc: "پرداخت امن و تایید رزرو" },
    { step: "۵", title: "لذت ببرید", desc: "حضور در کافه و تجربه عالی" },
  ];

  const cafeSteps = [
    { step: "۱", title: "ثبت کافه", desc: "ثبت اطلاعات کافه و تایید مدارک" },
    { step: "۲", title: "تنظیمات", desc: "تنظیم منو، میزها و خدمات" },
    { step: "۳", title: "دریافت رزرو", desc: "شروع دریافت رزروهای آنلاین" },
    { step: "۴", title: "مدیریت", desc: "مدیریت رزروها و مشتریان" },
    { step: "۵", title: "رشد کسب‌وکار", desc: "افزایش درآمد و مشتریان" },
  ];

  return (
    <section id="apps" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Backgrounds */}
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#9d00ff]/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -30, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#9d00ff]/20 border border-[#00f0ff]/30 mb-6"
          >
            <Smartphone className="w-5 h-5 text-[#00f0ff]" />
            <span className="text-[#00f0ff]">راهنمای کامل اپلیکیشن‌ها</span>
          </motion.div>
          
          <h2 className="bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] bg-clip-text text-transparent mb-4">
            دو اپلیکیشن قدرتمند برای تجربه‌ای بی‌نظیر
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            چه کاربر باشید چه صاحب کافه، FunZone ابزارهای حرفه‌ای برای شما آماده کرده
          </p>
        </motion.div>

        <Tabs defaultValue="user" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-6xl mx-auto" dir="rtl">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-card/50 backdrop-blur-sm p-1 h-auto">
            <TabsTrigger 
              value="user" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00f0ff] data-[state=active]:to-[#9d00ff] py-4 text-base relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/20 to-[#9d00ff]/20"
                initial={{ x: "-100%" }}
                animate={{ x: activeTab === "user" ? "0%" : "-100%" }}
                transition={{ duration: 0.3 }}
              />
              <Smartphone className="w-5 h-5 ml-2 relative z-10" />
              <span className="relative z-10">اپلیکیشن کاربر</span>
              {activeTab === "user" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] to-[#9d00ff]"
                />
              )}
            </TabsTrigger>
            <TabsTrigger 
              value="cafe"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#9d00ff] data-[state=active]:to-[#ff00ff] py-4 text-base relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#9d00ff]/20 to-[#ff00ff]/20"
                initial={{ x: "-100%" }}
                animate={{ x: activeTab === "cafe" ? "0%" : "-100%" }}
                transition={{ duration: 0.3 }}
              />
              <Store className="w-5 h-5 ml-2 relative z-10" />
              <span className="relative z-10">اپلیکیشن کافه‌دار</span>
              {activeTab === "cafe" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9d00ff] to-[#ff00ff]"
                />
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="user" className="space-y-12">
            {/* Features Grid */}
            <div>
              <h3 className="text-center mb-8 bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] bg-clip-text text-transparent">
                امکانات اپلیکیشن کاربر
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {userFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="p-5 bg-card/50 backdrop-blur-sm border-border hover:border-[#00f0ff]/50 transition-all group cursor-pointer h-full">
                        <motion.div 
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-20 flex items-center justify-center mb-4`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-7 h-7 text-[#00f0ff]" />
                        </motion.div>
                        <h4 className="mb-2 group-hover:text-[#00f0ff] transition-colors">{feature.title}</h4>
                        <p className="text-sm text-foreground/60">{feature.description}</p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h3 className="text-center mb-8 bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] bg-clip-text text-transparent">
                چگونه کار می‌کند؟
              </h3>
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00f0ff] via-[#9d00ff] to-[#ff00ff] hidden lg:block" 
                     style={{ transform: 'translateY(-50%)' }} />
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                  {userSteps.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#9d00ff] flex items-center justify-center mx-auto mb-4 relative"
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(0, 240, 255, 0.3)",
                            "0 0 40px rgba(0, 240, 255, 0.5)",
                            "0 0 20px rgba(0, 240, 255, 0.3)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-xl text-white">{item.step}</span>
                      </motion.div>
                      <h4 className="mb-2">{item.title}</h4>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] hover:opacity-90 px-12 py-6 text-lg shadow-lg shadow-[#00f0ff]/50"
              >
                <Smartphone className="w-5 h-5 ml-2" />
                دانلود اپلیکیشن کاربر
              </Button>
            </motion.div>
          </TabsContent>

          <TabsContent value="cafe" className="space-y-12">
            {/* Features Grid */}
            <div>
              <h3 className="text-center mb-8 bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent">
                امکانات اپلیکیشن کافه‌دار
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cafeFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="p-5 bg-card/50 backdrop-blur-sm border-border hover:border-[#9d00ff]/50 transition-all group cursor-pointer h-full">
                        <motion.div 
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-20 flex items-center justify-center mb-4`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-7 h-7 text-[#9d00ff]" />
                        </motion.div>
                        <h4 className="mb-2 group-hover:text-[#9d00ff] transition-colors">{feature.title}</h4>
                        <p className="text-sm text-foreground/60">{feature.description}</p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h3 className="text-center mb-8 bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent">
                چگونه شروع کنیم؟
              </h3>
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9d00ff] via-[#ff00ff] to-[#00f0ff] hidden lg:block" 
                     style={{ transform: 'translateY(-50%)' }} />
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                  {cafeSteps.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9d00ff] to-[#ff00ff] flex items-center justify-center mx-auto mb-4 relative"
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(157, 0, 255, 0.3)",
                            "0 0 40px rgba(157, 0, 255, 0.5)",
                            "0 0 20px rgba(157, 0, 255, 0.3)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-xl text-white">{item.step}</span>
                      </motion.div>
                      <h4 className="mb-2">{item.title}</h4>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] hover:opacity-90 px-12 py-6 text-lg shadow-lg shadow-[#9d00ff]/50"
              >
                <Store className="w-5 h-5 ml-2" />
                ثبت کافه و شروع همکاری
              </Button>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

import { Gamepad2 } from "lucide-react";
