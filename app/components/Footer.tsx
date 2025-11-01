import { motion } from "motion/react";
import { Instagram, Send, Youtube, Twitter } from "lucide-react";

export function Footer() {
  const footerLinks = {
    product: [
      { name: "ویژگی‌ها", href: "#" },
      { name: "قیمت‌گذاری", href: "#" },
      { name: "راهنما", href: "#apps" },
      { name: "سوالات متداول", href: "#" },
    ],
    company: [
      { name: "درباره ما", href: "#team" },
      { name: "تیم", href: "#team" },
      { name: "بلاگ", href: "#" },
      { name: "همکاری با ما", href: "#" },
    ],
    support: [
      { name: "پشتیبانی", href: "#" },
      { name: "تماس با ما", href: "#" },
      { name: "قوانین و مقررات", href: "#" },
      { name: "حریم خصوصی", href: "#" },
    ],
  };

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0f]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#9d00ff] flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
                <span className="text-xl bg-gradient-to-r from-[#00f0ff] via-[#9d00ff] to-[#ff00ff] bg-clip-text text-transparent">
                  FunZone
                </span>
              </div>
              <p className="text-foreground/60 mb-6 max-w-sm">
                پلتفرم پیشرو رزرو کافه و رویدادهای سرگرمی. 
                ما دنیای بازی و کافه را به هم متصل می‌کنیم.
              </p>
              
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Send, href: "#" },
                  { icon: Youtube, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-card/50 border border-border hover:border-[#00f0ff]/50 flex items-center justify-center transition-all hover:bg-[#00f0ff]/10 group"
                    >
                      <Icon className="w-5 h-5 text-foreground/60 group-hover:text-[#00f0ff] transition-colors" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4">محصول</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-[#00f0ff] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">شرکت</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-[#00f0ff] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">پشتیبانی</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-[#00f0ff] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-gradient-to-r from-[#00f0ff]/10 via-[#9d00ff]/10 to-[#ff00ff]/10 border border-[#00f0ff]/30 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="mb-2">عضویت در خبرنامه</h3>
            <p className="text-foreground/60 mb-6">
              از آخرین اخبار و رویدادهای FunZone باخبر شوید
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-[#00f0ff] focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#9d00ff] hover:opacity-90 transition-opacity whitespace-nowrap">
                عضویت
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} FunZone. تمامی حقوق محفوظ است.
          </p>
          <p className="text-foreground/40 text-xs mt-2">
            ساخته شده با ❤️ توسط تیم FunZone
          </p>
        </div>
      </div>
    </footer>
  );
}
