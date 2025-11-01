import { motion } from "motion/react";
import { Smartphone, Store, CheckCircle2, Zap, BarChart3, Shield } from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function AppGuides() {
  const userFeatures = [
    { icon: CheckCircle2, title: "رزرو آسان", description: "رزرو میز و رویداد با چند کلیک" },
    { icon: Zap, title: "پیدا کردن سریع", description: "جستجوی هوشمند کافه‌ها و بازی‌ها" },
    { icon: BarChart3, title: "امتیازدهی", description: "مشاهده و ثبت نظرات کاربران" },
    { icon: Shield, title: "پرداخت امن", description: "پرداخت آنلاین با بالاترین امنیت" },
  ];

  const cafeFeatures = [
    { icon: Store, title: "مدیریت رزروها", description: "کنترل کامل رزروها و میزها" },
    { icon: BarChart3, title: "آمار و گزارش", description: "تحلیل فروش و عملکرد کسب‌وکار" },
    { icon: Smartphone, title: "اعلان لحظه‌ای", description: "اطلاع از رزروها و درخواست‌ها" },
    { icon: Zap, title: "مدیریت رویداد", description: "برگزاری و مدیریت تورنومنت‌ها" },
  ];

  return (
    <section id="apps" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] bg-clip-text text-transparent mb-4">
            راهنمای اپلیکیشن‌ها
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            دو اپلیکیشن قدرتمند برای کاربران و کافه‌داران
          </p>
        </motion.div>

        <Tabs defaultValue="user" className="w-full max-w-5xl mx-auto" dir="rtl">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-card/50 backdrop-blur-sm p-1">
            <TabsTrigger 
              value="user" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00f0ff] data-[state=active]:to-[#9d00ff]"
            >
              <Smartphone className="w-4 h-4 ml-2" />
              اپلیکیشن کاربر
            </TabsTrigger>
            <TabsTrigger 
              value="cafe"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#9d00ff] data-[state=active]:to-[#ff00ff]"
            >
              <Store className="w-4 h-4 ml-2" />
              اپلیکیشن کافه‌دار
            </TabsTrigger>
          </TabsList>

          <TabsContent value="user">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* App Preview */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/20 to-[#9d00ff]/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border">
                    <div className="aspect-[9/16] bg-gradient-to-br from-[#00f0ff]/10 to-[#9d00ff]/10 rounded-2xl flex items-center justify-center border border-[#00f0ff]/30">
                      <Smartphone className="w-24 h-24 text-[#00f0ff]/50" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {userFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-5 bg-card/50 backdrop-blur-sm border-border hover:border-[#00f0ff]/50 transition-all group cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f0ff]/20 to-[#9d00ff]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-[#00f0ff]" />
                          </div>
                          <div>
                            <h4 className="mb-1">{feature.title}</h4>
                            <p className="text-sm text-foreground/60">{feature.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="cafe">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* App Preview */}
              <div className="relative order-2 md:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9d00ff]/20 to-[#ff00ff]/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border">
                    <div className="aspect-[9/16] bg-gradient-to-br from-[#9d00ff]/10 to-[#ff00ff]/10 rounded-2xl flex items-center justify-center border border-[#9d00ff]/30">
                      <Store className="w-24 h-24 text-[#9d00ff]/50" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Features */}
              <div className="space-y-4 order-1 md:order-2">
                {cafeFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-5 bg-card/50 backdrop-blur-sm border-border hover:border-[#9d00ff]/50 transition-all group cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9d00ff]/20 to-[#ff00ff]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-[#9d00ff]" />
                          </div>
                          <div>
                            <h4 className="mb-1">{feature.title}</h4>
                            <p className="text-sm text-foreground/60">{feature.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] hover:opacity-90 transition-opacity flex items-center gap-3">
              <span>دانلود از گوگل پلی</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
            </button>
            <button className="px-8 py-4 rounded-2xl border-2 border-[#00f0ff]/50 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all flex items-center gap-3">
              <span>دانلود از کافه‌بازار</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
