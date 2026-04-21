import { motion } from "motion/react";
import { 
  Music, 
  Mic2, 
  Speaker, 
  Lightbulb, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Instagram,
  Facebook,
  Award,
  Zap
} from "lucide-react";

const NAV_LINKS = [
  { name: "Trang chủ", href: "#home" },
  { name: "Dịch vụ", href: "#services" },
  { name: "Dự án", href: "#gallery" },
  { name: "Giới thiệu", href: "#about" },
  { name: "Liên hệ", href: "#contact" },
];

const SERVICES = [
  {
    title: "Âm Thanh Chuyên Nghiệp",
    description: "Hệ thống loa công suất lớn, xử lý âm thanh kỹ thuật cao cho đám cưới, hội nghị.",
    icon: Speaker,
    color: "bg-blue-500",
  },
  {
    title: "Ánh Sáng Sân Khấu",
    description: "Đèn Moving Head, Par LED, Laser tạo hiệu ứng thị giác bùng nổ và chuyên nghiệp.",
    icon: Lightbulb,
    color: "bg-orange-500",
  },
  {
    title: "Cho Thuê Sân Khấu",
    description: "Lắp đặt khung sân khấu mọi kích thước, thảm đỏ, màn hình LED P3, P4 chất lượng cao.",
    icon: Zap,
    color: "bg-purple-500",
  },
  {
    title: "Nhân Sự Sự Kiện",
    description: "Cung cấp MC dẫn chương trình, ca sĩ, ban nhạc và nhạc công tài năng.",
    icon: Users,
    color: "bg-pink-500",
  },
];

const GALLERY = [
  "https://picsum.photos/seed/stage1/800/600",
  "https://picsum.photos/seed/concert1/800/600",
  "https://picsum.photos/seed/wedding1/800/600",
  "https://picsum.photos/seed/lights1/800/600",
  "https://picsum.photos/seed/event1/800/600",
  "https://picsum.photos/seed/mc1/800/600",
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] stage-gradient">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-glow">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.4)]">
              <Speaker className="text-black w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter uppercase">
              Hiếu Thảo <span className="text-yellow-500 block text-[10px] tracking-[4px] -mt-1 font-sans opacity-80">Events</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-white/50 hover:text-yellow-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a 
            href="tel:0985353055"
            className="hidden sm:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
          >
            <Phone size={18} />
            0985 353 055
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/20/8c/d6/208cd64a5f0796b7ba7e31d9ff4ee59b.jpg" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-white/5 rounded-full text-xs font-bold tracking-[6px] uppercase mb-8 border border-white/10 text-yellow-500/80">
              Chuyên nghiệp • Uy tín • Tận tâm
            </span>
            <h1 className="font-display text-6xl md:text-9xl font-black leading-none tracking-tighter mb-8 text-glow">
              ÂM THANH <br />
              <span className="text-yellow-500 italic font-light">ÁNH SÁNG</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 font-light leading-relaxed px-4">
              Giải pháp toàn diện cho sân khấu, sự kiện và tiệc cưới tại khu vực của bạn. 
              Mang đến trải nghiệm nghe nhìn đỉnh cao.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(234,179,8,0.2)]"
              >
                Khám phá dịch vụ <ChevronRight size={20} />
              </button>
              <a 
                href="tel:0985353055"
                className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                Gọi ngay: 0985.353.055
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-t from-yellow-500 to-transparent rounded-full opacity-30" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                CHÚNG TÔI <span className="text-white/20 italic">CUNG CẤP</span>
              </h2>
              <p className="text-xl text-white/40 leading-relaxed font-light">
                Với hơn 10 năm kinh nghiệm trong ngành sự kiện, Hiếu Thảo cam kết mang lại 
                chất lượng thiết bị tốt nhất cùng đội ngũ kỹ thuật viên tay nghề cao.
              </p>
            </div>
            <div className="flex justify-end gap-12">
              <div className="text-center">
                <span className="block text-4xl font-black text-yellow-500 mb-1">500+</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Sự kiện</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-black text-yellow-500 mb-1">100%</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Hài lòng</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-black text-yellow-500 mb-1">24/7</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Hỗ trợ</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl group transition-all hover:bg-white/[0.06] accent-border border"
              >
                <div className={`w-14 h-14 ${service.color.replace('orange-500', 'yellow-500')} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                  <service.icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-yellow-500 font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Chi tiết <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project / Gallery */}
      <section id="gallery" className="py-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-yellow-500 font-bold tracking-[8px] uppercase text-xs mb-4 block">Album ảnh</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase whitespace-pre-wrap">
                Dự án <span className="text-white/20">Tiêu biểu</span>
              </h2>
            </div>
            <button className="text-sm border-b border-white/10 pb-2 hover:border-yellow-500 transition-colors uppercase tracking-widest">
              Xem tất cả
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {GALLERY.map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-sm aspect-[4/3] group ${idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto' : ''}`}
              >
                <img 
                  src={src} 
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="mt-auto">
                    <p className="font-bold text-lg mb-1 text-yellow-500">Sự kiện Âm Nhạc & Ánh Sáng</p>
                    <p className="text-xs uppercase tracking-widest text-white/40">Tổ chức bởi Hiếu Thảo</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto glass rounded-[3rem] p-12 md:p-24 overflow-hidden relative border border-white/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 blur-[100px] -mr-48 -mt-48" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display text-6xl font-black leading-none tracking-tighter mb-8 text-white">
                CHUYÊN NGHIỆP <br /> 
                <span className="text-yellow-500 italic">TRONG TỪNG</span> <br /> 
                CHI TIẾT
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Thiết bị cao cấp", text: "Sử dụng các thương hiệu hàng đầu thế giới." },
                  { title: "Kỹ thuật chuyên sâu", text: "Đội ngũ giàu kinh nghiệm điều khiển bàn mixer và ánh sáng." },
                  { title: "Giá cả cạnh tranh", text: "Nhiều gói dịch vụ linh hoạt cho mọi nhu cầu ngân sách." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 accent-border border flex items-center justify-center shrink-0">
                      <Award size={20} className="text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-white/40 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/setup/800/800" 
                alt="Setup"
                className="rounded-3xl shadow-2xl transform rotate-3 grayscale border-white/5 border"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#050505] p-8 rounded-3xl hidden md:block border border-white/5 shadow-2xl">
                <p className="text-3xl font-black mb-1 italic text-yellow-500 text-glow">0985 353 055</p>
                <p className="text-[10px] uppercase tracking-widest text-white/30">Liên hệ trực tiếp để có giá tốt nhất</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Talents */}
      <section className="py-32 px-6 text-center border-t border-white/5">
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-16 uppercase">
          Cung Cấp <span className="text-yellow-500 italic">Nhân Sự</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto text-left">
          {[
            { role: "MC Dẫn Chương Trình", desc: "Mc nam/nữ hoạt ngôn, đĩnh đạc, khuấy động không khí.", icon: Mic2 },
            { role: "Ca Sĩ Chuyên Nghiệp", desc: "Nhiều dòng nhạc: Trữ tình, Remix, Bolero, Nhạc trẻ.", icon: Music },
            { role: "Ban Nhạc & Nhạc Công", desc: "Organ, Guitar, Trống sẵn sàng phục vụ.", icon: Music },
            { role: "Vũ Đoàn & Nhóm Nhảy", desc: "Tăng sự sôi động cho các tiết mục sân khấu.", icon: Users },
          ].map((item, i) => (
            <div key={i} className="group cursor-default">
              <div className="w-16 h-1 bg-white/5 mb-8 group-hover:bg-yellow-500 transition-all group-hover:w-full" />
              <item.icon className="text-yellow-500/60 group-hover:text-yellow-500 transition-colors mb-6" size={32} />
              <h4 className="text-xl font-bold mb-3 tracking-tight">{item.role}</h4>
              <p className="text-white/30 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-transparent pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
            <div>
              <h2 className="font-display text-5xl font-bold tracking-tighter mb-8 italic">
                GIỮ LIÊN LẠC <br /> 
                <span className="not-italic text-white/20 uppercase">Với chúng tôi</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="p-4 bg-white/5 rounded-2xl accent-border border">
                    <Phone className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Hotline</h4>
                    <p className="text-2xl font-bold text-glow">0985.353.055</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="p-4 bg-white/5 rounded-2xl accent-border border">
                    <MapPin className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Địa chỉ</h4>
                    <p className="text-lg text-white/60">Khu vực phục vụ: TP. Hồ Chí Minh & Các tỉnh lân cận</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="p-4 bg-white/5 rounded-full hover:bg-yellow-500 hover:text-black transition-all border border-white/5">
                    <Facebook size={20} />
                  </button>
                  <button className="p-4 bg-white/5 rounded-full hover:bg-yellow-500 hover:text-black transition-all border border-white/5">
                    <Instagram size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5">
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tighter text-yellow-500">Gửi yêu cầu báo giá</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="Họ và tên" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all placeholder:text-white/20" />
                  <input type="text" placeholder="Số điện thoại" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all placeholder:text-white/20" />
                </div>
                <input type="text" placeholder="Loại sự kiện (Tiệc cưới, Khai trương...)" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all placeholder:text-white/20" />
                <textarea rows={4} placeholder="Thông tin chi tiết về nhu cầu của bạn..." className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-yellow-500 outline-none transition-all resize-none placeholder:text-white/20"></textarea>
                <button type="button" className="w-full bg-yellow-500 text-black py-5 rounded-xl font-bold uppercase tracking-[4px] hover:bg-white transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                  Gửi yêu cầu ngay
                </button>
              </form>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] uppercase tracking-[0.2em]">
            <p>© 2024 HIẾU THẢO EVENT SERVICE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <span className="hover:text-yellow-500 cursor-pointer transition-colors">Chuyên nghiệp</span>
              <span className="hover:text-yellow-500 cursor-pointer transition-colors">Tận tâm</span>
              <span className="hover:text-yellow-500 cursor-pointer transition-colors">Đẳng cấp</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
