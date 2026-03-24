export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center justify-center gap-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-24 h-24 rounded-full border-4 border-primary/20 animate-ping"></div>
          <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"></div>
          <div className="absolute w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_2px_rgba(0,180,216,0.5)] dark:shadow-[0_0_10px_2px_rgba(0,229,255,0.5)]"></div>
        </div>
        <div className="text-primary font-outfit text-sm font-medium tracking-widest animate-pulse">
          Chargement...
        </div>
      </div>
    </div>
  );
}
