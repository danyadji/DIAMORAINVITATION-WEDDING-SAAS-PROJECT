import { motion } from 'framer-motion';

export default function CoverSection({ guestName, groomNickname, brideNickname, onOpen }) {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -1000 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className='fixed inset-0 z-[100] bg-jawa-parchment flex flex-col items-center justify-center p-6 text-center'
    >
      <div className='absolute inset-0 opacity-[0.03] pointer-events-none' style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/batik-fractal.png')" }}></div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className='relative z-10'
      >
        <p className='font-headline text-jawa-charcoal-variant uppercase tracking-[0.2em] text-sm mb-6'>Undangan Pernikahan</p>
        
        <h1 className='font-script text-jawa-clay text-7xl md:text-9xl mb-4 drop-shadow-sm'>
          {brideNickname} & {groomNickname}
        </h1>

        <div className='w-12 h-[1px] bg-jawa-clay/30 mx-auto mb-12'></div>

        <div className='mb-12'>
          <p className='font-noto text-jawa-charcoal-variant italic text-sm mb-2'>Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <h2 className='font-headline text-jawa-charcoal text-2xl font-bold'>{guestName}</h2>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className='bg-jawa-clay text-white px-10 py-4 rounded-lg font-headline tracking-widest text-sm hover:brightness-110 transition-all shadow-xl shadow-jawa-clay/20 flex items-center gap-3 mx-auto uppercase'
        >
          <span className='material-symbols-outlined text-sm'>mail</span>
          Buka Undangan
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
