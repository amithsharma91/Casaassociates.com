import { useState, useRef } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const BEFORE_VIDEO = 'https://storage.readdy-site.link/project_files/ffc4f7b6-7f29-4f49-86dc-95a7e6007e80/86229758-264e-43a5-a2a4-d72675d446bc_VID-20260330-WA0026.mp4?v=e9a6248e80342930e90827c3cbef1d8e';
const AFTER_VIDEO = 'https://storage.readdy-site.link/project_files/ffc4f7b6-7f29-4f49-86dc-95a7e6007e80/2338eecd-e463-4427-9205-70e67d8cf3cc_VID-20260330-WA0027.mp4?v=2ddc0d6d3fcb8b212be06305f215a1dd';

interface VideoPlayerProps {
  src: string;
  label: 'Before' | 'After';
}

function VideoPlayer({ src, label }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [volume, setVolume] = useState(1);

  const isAfter = label === 'After';

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const val = parseFloat(e.target.value);
    v.volume = val;
    setVolume(val);
    if (val === 0) {
      v.muted = true;
      setIsMuted(true);
    } else {
      v.muted = false;
      setIsMuted(false);
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setCurrentTime(v.currentTime);
    setProgress((v.currentTime / v.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    setDuration(v.duration);
    setIsLoaded(true);
    v.volume = volume;
    v.muted = false;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = pct * v.duration;
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${String(sec).padStart(2, '0')}`;
  };

  const volumeIcon = isMuted || volume === 0
    ? 'ri-volume-mute-line'
    : volume < 0.5
    ? 'ri-volume-down-line'
    : 'ri-volume-up-line';

  return (
    <div className="flex flex-col h-full">
      {/* Player */}
      <div
        className="relative rounded-2xl overflow-hidden bg-black aspect-video cursor-pointer group"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={src}
          muted={false}
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          className="w-full h-full object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 md:px-4 pt-3 md:pt-4 pb-2 z-10">
          <span
            className={`text-[10px] font-semibold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full backdrop-blur-sm ${
              isAfter
                ? 'bg-emerald-500/90 text-white'
                : 'bg-black/70 text-white/90 border border-white/20'
            }`}
          >
            {label}
          </span>
          <div className="flex items-center gap-1.5">
            {/* Status pill */}
            <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1.5">
              <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-neutral-400'}`}></div>
              <span className="text-white/80 text-[9px] tracking-wide">{isPlaying ? 'PLAYING' : 'PAUSED'}</span>
            </div>
          </div>
        </div>

        {/* Center play/pause */}
        <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
            <i className={`${isPlaying ? 'ri-pause-fill' : 'ri-play-fill'} text-white text-2xl md:text-3xl`}></i>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-0 left-0 right-0 px-3 md:px-4 pb-3 md:pb-4 z-10" onClick={(e) => e.stopPropagation()}>
          {/* Progress bar */}
          <div
            className="w-full h-1.5 bg-white/20 rounded-full mb-3 overflow-hidden cursor-pointer hover:h-2 transition-all"
            onClick={handleSeek}
          >
            <div
              className={`h-full rounded-full transition-none ${isAfter ? 'bg-emerald-400' : 'bg-white'}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between gap-2">
            {/* Left: time */}
            <span className="text-white/70 text-[10px] font-mono flex-shrink-0">
              {formatTime(currentTime)} / {isLoaded ? formatTime(duration) : '--:--'}
            </span>

            {/* Right: volume controls */}
            <div className="flex items-center gap-2">
              {/* Volume slider */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                onClick={(e) => e.stopPropagation()}
                className="w-16 md:w-20 h-1 accent-white cursor-pointer"
                title="Volume"
              />
              {/* Mute toggle */}
              <button
                onClick={toggleMute}
                className="flex items-center justify-center w-7 h-7 bg-black/60 backdrop-blur-sm rounded-full border border-white/25 text-white hover:text-white hover:bg-black/80 transition-colors cursor-pointer flex-shrink-0"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                <i className={`${volumeIcon} text-xs`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Label strip */}
      <div className={`mt-3 md:mt-4 px-4 md:px-5 py-3 md:py-3.5 rounded-xl flex items-center gap-3 ${isAfter ? 'bg-emerald-50 border border-emerald-100' : 'bg-neutral-100 border border-neutral-200'}`}>
        <div className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full flex-shrink-0 ${isAfter ? 'bg-emerald-500' : 'bg-neutral-700'}`}>
          <i className={`${isAfter ? 'ri-check-line' : 'ri-time-line'} text-white text-xs md:text-sm`}></i>
        </div>
        <div>
          <div className={`text-xs font-semibold tracking-[0.12em] uppercase ${isAfter ? 'text-emerald-700' : 'text-neutral-700'}`}>
            {isAfter ? 'After Renovation' : 'Before Renovation'}
          </div>
          <div className="text-neutral-500 text-[11px] mt-0.5">
            {isAfter ? 'Completed transformation — 2024' : 'Raw space — Pre-construction'}
          </div>
        </div>
        <div className="ml-auto">
          <i className={`ri-video-line text-sm ${isAfter ? 'text-emerald-400' : 'text-neutral-400'}`}></i>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} mb-10 md:mb-14`}>
          <div className="flex items-center gap-3 mb-4 md:mb-5">
            <span className="w-8 h-px bg-neutral-600"></span>
            <span className="text-neutral-400 text-xs tracking-[0.22em] uppercase">Transformation Showcase</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-5">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-[-0.01em]">
                Before &amp; After
              </h2>
              <p className="text-neutral-400 text-sm mt-2 md:mt-3 leading-relaxed max-w-md">
                Watch the complete transformation of RVKS - CA Office — from raw construction to a refined, professional workspace.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:gap-3 flex-shrink-0">
              <div className="flex items-center gap-2 bg-neutral-800 border border-neutral-700 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-building-line text-neutral-400 text-xs"></i>
                </div>
                <span className="text-neutral-300 text-xs">RVKS - CA Office</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-800 border border-neutral-700 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-map-pin-line text-neutral-400 text-xs"></i>
                </div>
                <span className="text-neutral-300 text-xs">Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Audio notice */}
          <div className="mt-4 flex items-center gap-2 bg-neutral-800/60 border border-neutral-700 rounded-full px-4 py-2 w-fit">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-volume-up-line text-emerald-400 text-xs"></i>
            </div>
            <span className="text-neutral-300 text-xs">Audio enabled — use the volume slider on each video to adjust sound</span>
          </div>
        </div>

        {/* Video grid */}
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-1 relative`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 items-start">

            {/* Before video */}
            <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-1`}>
              <VideoPlayer src={BEFORE_VIDEO} label="Before" />
            </div>

            {/* VS badge */}
            <div className="hidden lg:flex absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center bg-neutral-950 border-2 border-neutral-700 rounded-full">
              <span className="text-neutral-300 text-[10px] font-bold tracking-wider">VS</span>
            </div>

            {/* After video */}
            <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-2`}>
              <VideoPlayer src={AFTER_VIDEO} label="After" />
            </div>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-3 mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4`}>
          {[
            { icon: 'ri-video-line', value: '2', label: 'Videos' },
            { icon: 'ri-time-line', value: '2024', label: 'Year Completed' },
            { icon: 'ri-building-2-line', value: 'Commercial', label: 'Project Type' },
            { icon: 'ri-map-pin-line', value: 'Hyderabad', label: 'Location' },
          ].map((stat) => (
            <div key={stat.label} className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 md:px-5 py-3 md:py-4 flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-neutral-800 rounded-lg flex-shrink-0">
                <i className={`${stat.icon} text-neutral-400 text-sm`}></i>
              </div>
              <div>
                <div className="text-white text-xs md:text-sm font-semibold">{stat.value}</div>
                <div className="text-neutral-500 text-[9px] md:text-[10px] tracking-[0.12em] uppercase mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
