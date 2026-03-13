import { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '5547997708291';
const WHATSAPP_MSG = encodeURIComponent(
  '🔥 Quero testar 4 HORAS GRÁTIS do IPTV Premium!'
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

/* ─── tiny countdown hook ─── */
function useCountdown() {
  const getTarget = () => {
    const t = new Date();
    t.setHours(t.getHours() + 2, 0, 0, 0);
    return t.getTime();
  };
  const [target] = useState(getTarget);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  return { h, m, s };
}

export default function App() {
  const { h, m, s } = useCountdown();

  const features = [
    { icon: '📡', text: '+15.000 canais ao vivo' },
    { icon: '🎬', text: 'Netflix, Disney+, HBO, Prime...' },
    { icon: '👁️', text: 'BBB 25 — todas as câmeras 24h' },
    { icon: '🍿', text: 'Filmes lançamentos do cinema' },
    { icon: '⚽', text: 'Futebol, UFC, F1 e todos esportes' },
    { icon: '📱', text: 'Funciona em qualquer aparelho' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-6 relative">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,136,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,180,255,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-6">

        {/* ── LOGO / BADGE ── */}
        <div className="flex flex-col items-center gap-2 pt-2">
          <div className="text-5xl animate-float">📺</div>
          <h1 className="text-3xl font-black tracking-tight text-center gradient-text leading-tight">
            IPTV PREMIUM
          </h1>
          <p className="text-sm text-gray-400 tracking-widest uppercase">
            O melhor do Brasil
          </p>
        </div>

        {/* ── FREE TEST BADGE ── */}
        <div className="animate-badge-pop">
          <div className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 text-black font-black text-lg px-8 py-3 rounded-2xl shadow-lg shadow-green-500/30 flex items-center gap-2">
            <span className="text-2xl">🎁</span>
            <span>TESTE 4 HORAS GRÁTIS!</span>
          </div>
        </div>

        {/* ── CARD PRINCIPAL ── */}
        <div className="w-full rounded-3xl bg-glass p-6 flex flex-col gap-5 animate-border-glow border-2 border-green-500/40">
          {/* Preço */}
          <div className="text-center">
            <p className="text-gray-400 text-sm line-through">De R$ 59,90/mês</p>
            <div className="flex items-baseline justify-center gap-1 mt-1">
              <span className="text-green-400 text-xl font-bold">R$</span>
              <span className="text-6xl font-black text-white leading-none">30</span>
              <span className="text-gray-400 text-base font-medium">/mês</span>
            </div>
            <p className="text-emerald-400 text-xs font-semibold mt-1 tracking-wide">
              💰 MENOR PREÇO DO MERCADO
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

          {/* Features */}
          <ul className="flex flex-col gap-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-2xl w-8 text-center flex-shrink-0">{f.icon}</span>
                <span className="text-[15px] text-gray-200 font-medium">{f.text}</span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

          {/* Extras */}
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {['Sem travamento', 'Qualidade 4K', 'Suporte Seg-Sex', 'Sem fidelidade'].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300"
                >
                  ✅ {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* ── URGÊNCIA / COUNTDOWN ── */}
        <div className="w-full bg-glass rounded-2xl p-4 text-center">
          <p className="text-yellow-400 text-xs font-bold tracking-wide mb-2 uppercase">
            ⚡ Oferta por tempo limitado
          </p>
          <div className="flex justify-center gap-3">
            {[
              { val: h, label: 'hrs' },
              { val: m, label: 'min' },
              { val: s, label: 'seg' },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center">
                <span className="bg-black/60 border border-yellow-500/30 text-white text-2xl font-black px-4 py-2 rounded-xl min-w-[60px]">
                  {t.val}
                </span>
                <span className="text-[10px] text-gray-500 mt-1 uppercase">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA WHATSAPP ── */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full animate-pulse-glow"
        >
          <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 hover:from-green-500 hover:via-green-400 hover:to-emerald-400 transition-all duration-300 text-white font-extrabold text-lg py-5 rounded-2xl flex items-center justify-center gap-3 cursor-pointer active:scale-95">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            QUERO TESTAR GRÁTIS!
          </div>
        </a>

        {/* ── SOCIAL PROOF ── */}
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <div className="flex -space-x-2">
            {['😎', '🤩', '😍', '🥳'].map((e, i) => (
              <span
                key={i}
                className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-base"
              >
                {e}
              </span>
            ))}
          </div>
          <span>
            <strong className="text-white">+2.500</strong> clientes ativos
          </span>
        </div>

        {/* ── FEEDBACKS ── */}
        <div className="w-full flex flex-col gap-3">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold text-center">
            ⭐ O que nossos clientes dizem
          </p>
          {[
            {
              name: 'Lucas M.',
              avatar: '👨‍💻',
              stars: 5,
              text: 'Testei as 4 horas grátis e já assinei na hora! Qualidade absurda, sem travamento nenhum. Melhor IPTV que já usei!',
              time: 'há 2 dias',
            },
            {
              name: 'Ana Paula S.',
              avatar: '👩‍🦰',
              stars: 5,
              text: 'Assisto BBB 25 em todas as câmeras e ainda tenho Netflix, Disney+ tudo junto. Por R$30 é uma pechincha!',
              time: 'há 5 dias',
            },
            {
              name: 'Roberto C.',
              avatar: '👨‍🔧',
              stars: 5,
              text: 'Instalei na Smart TV e no celular, funciona perfeito nos dois. O suporte me ajudou rapidinho na configuração.',
              time: 'há 1 semana',
            },
            {
              name: 'Fernanda L.',
              avatar: '👩‍💼',
              stars: 5,
              text: 'Já faz 3 meses que uso e nunca tive problema. Filmes de lançamento sempre atualizados, recomendo demais!',
              time: 'há 1 semana',
            },
            {
              name: 'Diego R.',
              avatar: '🧔',
              stars: 5,
              text: 'Cancelei todas as assinaturas de streaming e fiquei só com esse IPTV. Economizei mais de R$150 por mês!',
              time: 'há 2 semanas',
            },
          ].map((review, i) => (
            <div
              key={i}
              className="w-full bg-glass rounded-2xl p-4 flex flex-col gap-2 border border-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gray-800 border-2 border-green-500/30 flex items-center justify-center text-xl">
                  {review.avatar}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">{review.name}</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.stars }).map((_, j) => (
                      <span key={j} className="text-yellow-400 text-xs">★</span>
                    ))}
                    <span className="text-[10px] text-gray-500 ml-1">{review.time}</span>
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-gray-300 leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* ── SUPORTE INFO ── */}
        <div className="w-full bg-glass rounded-2xl p-4 text-center border border-white/5">
          <span className="text-2xl">🎧</span>
          <p className="text-sm font-bold text-white mt-1">Suporte Humanizado</p>
          <p className="text-xs text-gray-400 mt-1">
            Segunda a Sexta • 9h às 18h
          </p>
          <p className="text-[11px] text-gray-500 mt-0.5">
            Atendimento rápido pelo WhatsApp — te ajudamos na instalação e configuração!
          </p>
        </div>

        {/* ── GARANTIA ── */}
        <div className="text-center text-xs text-gray-500 flex flex-col items-center gap-1 pb-4">
          <span className="text-lg">🔒</span>
          <p>
            Pagamento 100% seguro via <strong className="text-gray-400">Pix</strong>
          </p>
          <p>Cancele quando quiser • Sem burocracia</p>
        </div>

        {/* ── COMPATIBILIDADE ── */}
        <div className="w-full bg-glass rounded-2xl p-4 text-center mb-2">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">
            Compatível com
          </p>
          <div className="flex justify-center gap-4 flex-wrap text-2xl">
            {[
              { icon: '📱', label: 'Celular' },
              { icon: '💻', label: 'PC' },
              { icon: '📺', label: 'Smart TV' },
              { icon: '🔥', label: 'Fire Stick' },
              { icon: '🎮', label: 'TV Box' },
            ].map((d) => (
              <div key={d.label} className="flex flex-col items-center gap-1">
                <span>{d.icon}</span>
                <span className="text-[10px] text-gray-500">{d.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── MINI FOOTER ── */}
        <p className="text-[11px] text-gray-600 text-center pb-6">
          © {new Date().getFullYear()} IPTV Premium • Todos os direitos reservados
        </p>
      </div>

      {/* ── FLOATING WHATSAPP (bottom-right) ── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-400 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 animate-pulse-glow transition-transform hover:scale-110 active:scale-95"
      >
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
