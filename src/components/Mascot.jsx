import { motion } from 'framer-motion';

export default function Mascot({ compact = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.78, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`relative mx-auto ${compact ? 'h-48 w-64' : 'h-80 w-80 sm:h-[26rem] sm:w-[31rem]'}`}
    >
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[inset_-22px_-26px_44px_rgba(0,62,204,0.2),inset_18px_20px_30px_rgba(255,255,255,0.9),0_36px_90px_rgba(0,35,120,0.32)]" />
        <div className="absolute left-[22%] top-[27%] h-[46%] w-[48%] rounded-full bg-[#0050F8] shadow-[inset_18px_16px_34px_rgba(255,255,255,0.16),inset_-18px_-18px_28px_rgba(0,24,110,0.22)]" />
        <div className="absolute right-[2%] top-[31%] h-[34%] w-[54%] rotate-[-2deg] rounded-full bg-white shadow-[inset_-18px_-20px_34px_rgba(0,62,204,0.14),0_24px_55px_rgba(0,35,120,0.24)]" />
        <div className="absolute right-[-1%] top-[20%] h-[31%] w-[17%] rotate-[38deg] rounded-full bg-white shadow-[inset_-12px_-14px_24px_rgba(0,62,204,0.14)]" />
        <div className="absolute right-[-1%] bottom-[20%] h-[31%] w-[17%] rotate-[-38deg] rounded-full bg-white shadow-[inset_-12px_-14px_24px_rgba(0,62,204,0.14)]" />

        <div className="absolute left-[34%] top-[43%] h-5 w-14 rotate-[28deg] rounded-full bg-white shadow-[0_5px_10px_rgba(0,35,120,0.16)]" />
        <div className="absolute left-[34%] top-[51%] h-5 w-14 rotate-[-28deg] rounded-full bg-white shadow-[0_5px_10px_rgba(0,35,120,0.16)]" />
        <div className="absolute left-[57%] top-[43%] h-5 w-14 rotate-[-28deg] rounded-full bg-white shadow-[0_5px_10px_rgba(0,35,120,0.16)]" />
        <div className="absolute left-[57%] top-[51%] h-5 w-14 rotate-[28deg] rounded-full bg-white shadow-[0_5px_10px_rgba(0,35,120,0.16)]" />
        <div className="absolute left-[47%] top-[56%] h-8 w-14 rounded-b-full border-b-[10px] border-white" />
        <div className="absolute left-[27%] top-[19%] h-16 w-36 rotate-[-16deg] rounded-full bg-white/28 blur-xl" />
      </motion.div>
    </motion.div>
  );
}
