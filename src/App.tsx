import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, Music, Star, Ticket, ExternalLink, Sparkles, PartyPopper, ChevronDown, ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-deep-bg text-slate-200 selection:bg-gold-500/30 selection:text-gold-200">
      {/* Elegant Background - Image & Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2574&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-bg/70 via-deep-bg/90 to-deep-bg"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-10 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="mb-6 flex justify-center">
            <div className="h-[1px] w-20 bg-gold-400/50 self-center"></div>
            <span className="mx-4 text-gold-300 tracking-[0.3em] text-sm uppercase font-serif">Invitation</span>
            <div className="h-[1px] w-20 bg-gold-400/50 self-center"></div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-6 text-white">
            Mambo Club
            <span className="block text-3xl md:text-5xl mt-4 italic text-gold-300 font-light">2nd Anniversary</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light mt-8">
            살사 & 바차타로 물드는 특별한 밤.
            <span className="block mt-4">맘보클럽의 2주년 파티에 귀하를 초대합니다.</span>
          </p>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-gold-200 font-serif text-lg md:text-xl">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 opacity-70" />
              <span className="tracking-wide">2026. 04. 11 (SAT)</span>
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-gold-500/30"></div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 opacity-70" />
              <span className="tracking-wide">PM 9:00 - AM 3:00</span>
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-gold-500/30"></div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 opacity-70" />
              <span className="tracking-wide">맘보 클럽 (부산진구)</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gold-500/50 animate-bounce" />
        </motion.div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-32 pb-12">
        
        {/* Intro Text */}
        <section className="text-center space-y-8">
          <SectionHeader title="The Celebration" subtitle="Special Moments" />
          <p className="text-lg md:text-xl text-slate-300 leading-loose font-light max-w-3xl mx-auto">
            함께 춤추고 웃으며 만들어온 지난 2년.<br/>
            그 소중한 시간들을 기념하며, <br className="md:hidden" />최고의 댄서들과 함께하는<br/>
            화려한 퍼포먼스와 워크샵을 준비했습니다.
          </p>
        </section>

        {/* Program Section */}
        <section className="grid md:grid-cols-2 gap-16 items-start">
          {/* Lineup List */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <PartyPopper className="w-6 h-6 text-gold-400" />
                <h3 className="text-3xl font-serif text-gold-100 italic">Performances</h3>
              </div>
              <div className="space-y-6">
                <ProgramRow team="그라시아스 팀" type="Special Performance" />
                <ProgramRow team="헤마스" type="Salsa Performance" />
                <ProgramRow team="필댄스" type="Bachata Performance" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <Music className="w-6 h-6 text-gold-400" />
                <h3 className="text-3xl font-serif text-gold-100 italic">DJ & Staff</h3>
              </div>
              <div className="space-y-6">
                <ProgramRow team="DJ 난다 & 도베르만" type="Music" />
                <ProgramRow team="MC 유니" type="Host" />
                <ProgramRow team="GS" type="Photography" />
              </div>
            </div>
          </div>

          {/* Workshop Card */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-deep-surface border border-white/5 p-8 rounded-xl overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Star className="w-32 h-32" />
              </div>
              
              <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-400 text-xs tracking-widest uppercase font-bold mb-6 rounded-full border border-gold-500/20 self-start">
                Special Workshop
              </span>
              
              <h3 className="text-3xl font-serif text-white mb-2">꿀루이 & 달라</h3>
              <p className="text-gold-300 italic mb-6">Bachata Master Class</p>
              
              <p className="text-slate-400 mb-8 font-light leading-relaxed">
                강남 스타일의 최신 트렌드 바차타 패턴을<br/>
                배울 수 있는 특별한 기회
              </p>

              <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-4 h-4 text-gold-500" />
                    PM 8:00 - 9:00
                  </div>
                  <div className="flex items-center gap-2 text-gold-300 font-medium">
                    <Ticket className="w-4 h-4" />
                    10,000 KRW (단독)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Info */}
        <section className="max-w-3xl mx-auto">
          <SectionHeader title="Tickets" subtitle="Join the Party" />
          
          <div className="mt-12 bg-deep-surface border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
            {/* Early Bird Header - Closed State */}
            <div className="bg-red-900/20 p-4 text-center border-b border-red-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-red-500/5 animate-pulse"></div>
              <span className="relative z-10 text-red-400 font-bold tracking-[0.2em] text-sm flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                EARLY BIRD 마감 (SOLD OUT)
              </span>
            </div>

            <div className="p-8 md:p-12 space-y-8 opacity-60 grayscale-[0.5]">
              <TicketRow label="파티 예매" price="15,000" sub="얼리버드 특가 (종료)" highlight={false} strike />
              <TicketRow label="파티 + 워크샵" price="20,000" sub="얼리버드 특가 (종료)" highlight={false} strike />
              
              <div className="h-px bg-white/5 my-8"></div>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h4 className="text-slate-500 text-xs uppercase tracking-widest mb-6">General / Door</h4>
                  <div className="space-y-6">
                    <TicketRow label="파티 예매" price="20,000" sub="일반 예매" />
                    <TicketRow label="현장 구매" price="25,000" sub="파티 현매" />
                  </div>
                </div>
                <div>
                  <h4 className="text-slate-500 text-xs uppercase tracking-widest mb-6">Package</h4>
                  <div className="space-y-6">
                    <TicketRow label="파티 + 워크샵" price="25,000" sub="일반 예매" />
                    <TicketRow label="워크샵 단독" price="10,000" sub="현장/예매 동일" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="max-w-3xl mx-auto bg-gradient-to-b from-deep-surface to-black border border-white/10 rounded-3xl p-10 md:p-12 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Reservation</h2>
            
            <div className="space-y-8 mb-10 text-slate-300">
              <div className="flex flex-col items-center gap-2">
                <span className="text-gold-400 text-xs tracking-widest uppercase font-bold">Bank Account</span>
                <p className="text-xl md:text-2xl font-medium text-white">토스뱅크 1001-5356-0974 <span className="text-base text-slate-500 font-normal ml-2">(윤주훈)</span></p>
              </div>
              
              <div className="w-12 h-px bg-white/10 mx-auto"></div>

              <div className="flex flex-col items-center gap-2">
                <span className="text-gold-400 text-xs tracking-widest uppercase font-bold">Contact</span>
                <p className="text-lg">문의: 젬스 (010-2566-2444)</p>
              </div>
            </div>

            <a
              href="https://band.us/band/61527284/post/11491"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-gold-500 text-deep-bg font-bold text-lg tracking-wide rounded-full overflow-hidden transition-all hover:bg-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                예매하러 가기 <ExternalLink className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <div className="mt-8">
              <p className="text-gold-200 text-lg font-medium bg-gold-500/10 border border-gold-500/20 px-8 py-3 rounded-full inline-block shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                ✨ 맘보밴드 신청방 댓글 신청 후 입금 부탁드립니다 ✨
              </p>
            </div>
          </motion.div>
        </section>

        {/* Sponsorship Section */}
        <section className="text-center pb-12">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-purple-900/20 to-deep-surface border border-purple-500/20 rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <div className="flex flex-col items-center gap-4">
              <Star className="w-8 h-8 text-gold-400 mb-2" />
              <h3 className="text-2xl font-serif text-white mb-2">Sponsorship</h3>
              <p className="text-slate-300 font-light leading-relaxed mb-6">
                맘보 클럽 2주년을 맞이하여<br className="md:hidden" />
                공연 환경 개선을 위한 협찬금을 모금합니다.
              </p>
              <a
                href="https://band.us/band/61527284/post/11499"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg tracking-wide rounded-full overflow-hidden transition-all hover:from-purple-500 hover:to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  협찬하기 <ExternalLink className="w-5 h-5" />
                </span>
              </a>
            </div>
          </motion.div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center bg-black/50 backdrop-blur-sm">
        <h4 className="font-serif text-xl text-gold-500/80 mb-2">MAMBO CLUB</h4>
        <p className="text-slate-400 text-sm font-light tracking-wider">
          © 2026 2nd Anniversary. All rights reserved.
        </p>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-gold-500 text-deep-bg rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-gold-400 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="text-center mb-12">
      <span className="text-gold-500/60 text-sm font-bold tracking-[0.2em] uppercase mb-2 block">{subtitle}</span>
      <h2 className="text-4xl md:text-5xl font-serif text-white">{title}</h2>
      <div className="w-12 h-1 bg-gold-500/30 mx-auto mt-6"></div>
    </div>
  );
}

function LuxuryCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group p-8 bg-deep-surface border border-white/5 rounded-xl hover:border-gold-500/30 transition-colors duration-500 text-center">
      <div className="inline-flex p-4 rounded-full bg-white/5 mb-6 group-hover:bg-gold-500/10 transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-white mb-3">{title}</h3>
      <p className="text-slate-400 font-light text-sm">{desc}</p>
    </div>
  );
}

function ProgramRow({ team, type }: { team: string, type: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-4 group hover:border-gold-500/30 transition-colors">
      <span className="text-xl text-slate-200 font-light group-hover:text-gold-200 transition-colors">{team}</span>
      <span className="text-sm text-slate-500 font-serif italic">{type}</span>
    </div>
  );
}

function TicketRow({ label, price, sub, highlight = false, strike = false }: { label: string, price: string, sub: string, highlight?: boolean, strike?: boolean }) {
  return (
    <div className={`flex items-center justify-between ${strike ? 'opacity-50' : ''}`}>
      <div>
        <h4 className={`text-lg ${highlight ? 'text-gold-200 font-medium' : 'text-slate-300'} ${strike ? 'line-through' : ''}`}>{label}</h4>
        <p className="text-xs text-slate-500 mt-1">{sub}</p>
      </div>
      <div className="text-right">
        <span className={`text-xl font-serif ${highlight ? 'text-gold-400' : 'text-slate-400'} ${strike ? 'line-through' : ''}`}>{price}</span>
        <span className="text-xs text-slate-600 ml-1">KRW</span>
      </div>
    </div>
  );
}
