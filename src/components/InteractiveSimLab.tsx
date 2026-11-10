import React, { useState, useMemo } from 'react';
import { RotateCcw, AlertTriangle, ShieldCheck, Activity, Layers, Bell, CheckCircle2 } from 'lucide-react';

export const InteractiveSimLab: React.FC = () => {
  const [activeSim, setActiveSim] = useState<'ojasews' | 'geochange'>('ojasews');

  // --- OJASEWS Simulator State ---
  const [rainfall, setRainfall] = useState<number>(45); // mm/hr
  const [soilMoisture, setSoilMoisture] = useState<number>(68); // %
  const [slopeAngle, setSlopeAngle] = useState<number>(38); // degrees
  const [geologyType, setGeologyType] = useState<'colluvium' | 'clay' | 'sandstone'>('colluvium');
  const [simulatedAlert, setSimulatedAlert] = useState<string | null>(null);

  const geologyParams = {
    colluvium: { name: 'Himalayan Colluvium / Debris', c: 12, phi: 33, gamma: 19 },
    clay: { name: 'Silty Overburden Clay', c: 20, phi: 24, gamma: 18 },
    sandstone: { name: 'Fractured Sandstone Block', c: 8, phi: 40, gamma: 22 }
  };

  const ojasewsMetrics = useMemo(() => {
    const geo = geologyParams[geologyType];
    const thetaRad = (slopeAngle * Math.PI) / 180;
    const phiRad = (geo.phi * Math.PI) / 180;
    const depth = 2.5;

    const porePressure = Math.max(0, (soilMoisture / 100) * (rainfall / 10) * 4.2);
    const normalStress = geo.gamma * depth * Math.pow(Math.cos(thetaRad), 2);
    const effectiveStress = Math.max(1, normalStress - porePressure);
    const resistingForce = geo.c + effectiveStress * Math.tan(phiRad);
    const drivingForce = Math.max(0.5, geo.gamma * depth * Math.sin(thetaRad) * Math.cos(thetaRad));

    const fos = Math.max(0.2, Math.min(3.5, resistingForce / drivingForce));
    const failProb = Math.min(100, Math.max(0, Math.round((1 - Math.min(1.5, fos) / 1.5) * 100)));

    let statusTier: 'NORMAL' | 'ADVISORY' | 'WATCH' | 'WARNING' | 'CRITICAL';
    let statusColor: string;
    let badgeBg: string;

    if (fos >= 1.5) {
      statusTier = 'NORMAL';
      statusColor = 'text-emerald-400';
      badgeBg = 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400';
    } else if (fos >= 1.25) {
      statusTier = 'ADVISORY';
      statusColor = 'text-cyan-400';
      badgeBg = 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400';
    } else if (fos >= 1.05) {
      statusTier = 'WATCH';
      statusColor = 'text-amber-400';
      badgeBg = 'bg-amber-500/10 border-amber-500/20 text-amber-400';
    } else if (fos >= 0.85) {
      statusTier = 'WARNING';
      statusColor = 'text-orange-400';
      badgeBg = 'bg-orange-500/10 border-orange-500/20 text-orange-400';
    } else {
      statusTier = 'CRITICAL';
      statusColor = 'text-rose-400';
      badgeBg = 'bg-rose-500/10 border-rose-500/20 text-rose-400 animate-pulse';
    }

    return {
      fos: Number(fos.toFixed(2)),
      failProb,
      porePressure: Number(porePressure.toFixed(1)),
      resistingForce: Number(resistingForce.toFixed(1)),
      drivingForce: Number(drivingForce.toFixed(1)),
      statusTier,
      statusColor,
      badgeBg
    };
  }, [rainfall, soilMoisture, slopeAngle, geologyType]);

  const triggerNtfySimulation = () => {
    const text = `🚨 [OJASEWS LIVE ALERT] Tier: ${ojasewsMetrics.statusTier} | FoS: ${ojasewsMetrics.fos} | Slope: ${slopeAngle}° | Rain: ${rainfall} mm/h | Pore Pressure: ${ojasewsMetrics.porePressure} kPa. High debris flow probability on Jammu–Srinagar NH-44 Samroli Sector.`;
    setSimulatedAlert(text);
  };

  // --- GeoChange AI Simulator State ---
  const [preNDVI, setPreNDVI] = useState<number>(0.74);
  const [postNDVI, setPostNDVI] = useState<number>(0.28);
  const [areaHectares, setAreaHectares] = useState<number>(145);
  const [biome, setBiome] = useState<'temperate' | 'broadleaf' | 'scrub'>('temperate');

  const biomeFactors = {
    temperate: { name: 'Himalayan Temperate Conifer (Pinus roxburghii)', carbonFactor: 160 },
    broadleaf: { name: 'Western Himalayan Mixed Broadleaf', carbonFactor: 210 },
    scrub: { name: 'Subtropical Riparian / Scrub Forest', carbonFactor: 85 }
  };

  const geoChangeMetrics = useMemo(() => {
    const deltaNDVI = Math.max(0, Number((preNDVI - postNDVI).toFixed(3)));
    const selectedBiome = biomeFactors[biome];
    const biomassLossPerHa = Number((deltaNDVI * selectedBiome.carbonFactor * 1.8).toFixed(1));
    const totalCarbonLost = Math.round(biomassLossPerHa * areaHectares * 0.47 * (44 / 12));
    const percentLoss = Math.round((deltaNDVI / preNDVI) * 100);

    let transitionLabel = 'Stable Vegetated Canopy';
    let transitionBadge = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';

    if (deltaNDVI > 0.45) {
      transitionLabel = 'Severe Deforestation / Mudslide Scarp';
      transitionBadge = 'bg-rose-500/10 text-rose-400 border-rose-500/20';
    } else if (deltaNDVI > 0.25) {
      transitionLabel = 'Moderate Canopy Thinning & Loss';
      transitionBadge = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    } else if (deltaNDVI > 0.1) {
      transitionLabel = 'Minor Vegetation Stress / Disturbance';
      transitionBadge = 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
    }

    return {
      deltaNDVI,
      biomassLossPerHa,
      totalCarbonLost,
      percentLoss,
      transitionLabel,
      transitionBadge,
      confidence: 96.4
    };
  }, [preNDVI, postNDVI, areaHectares, biome]);

  return (
    <section id="lab" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="bento-badge text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
            [03 // INTERACTIVE SIMULATION LAB]
          </span>
          <span className="text-xs text-zinc-400 font-mono">
            PHYSICS-INFORMED AI & REMOTE SENSING
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Live Physics & Remote Sensing Sandbox
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          Interact live with the mathematical heuristics and satellite models powering my flagship systems. Adjust geotechnical stress parameters or calculate NASA ORNL biomass carbon release.
        </p>
      </div>

      {/* Simulator Switcher Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveSim('ojasews')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeSim === 'ojasews'
              ? 'bg-white text-zinc-950 shadow-lg shadow-white/10'
              : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>OJASEWS Slope Stability Physics</span>
        </button>

        <button
          onClick={() => setActiveSim('geochange')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeSim === 'geochange'
              ? 'bg-white text-zinc-950 shadow-lg shadow-white/10'
              : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>GeoChange AI Spectral & Carbon Model</span>
        </button>
      </div>

      {/* SIMULATOR 1: OJASEWS */}
      {activeSim === 'ojasews' && (
        <div className="bento-card p-6 sm:p-10 bento-glow-cyan">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <span className="text-[11px] font-mono text-cyan-400 block mb-1">
                Mohr-Coulomb Failure Criterion · Samroli NH-44 Sector
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Geotechnical Factor of Safety (FoS) Stress Simulator
              </h3>
            </div>
            <button
              onClick={() => {
                setRainfall(45);
                setSoilMoisture(68);
                setSlopeAngle(38);
                setGeologyType('colluvium');
                setSimulatedAlert(null);
              }}
              className="bento-btn-secondary py-1.5 px-3 text-xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls: Sliders (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Geological Stratum */}
              <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl">
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2.5">
                  Geological Formation / Soil Stratum:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['colluvium', 'clay', 'sandstone'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setGeologyType(type)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                        geologyType === type
                          ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300 shadow-sm'
                          : 'bg-white/5 border-white/5 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {geologyParams[type].name.split(' ')[0]} ({geologyParams[type].phi}°)
                    </button>
                  ))}
                </div>
                <div className="text-[11px] text-zinc-500 font-mono mt-2">
                  Selected: {geologyParams[geologyType].name} (c'={geologyParams[geologyType].c} kPa, φ'={geologyParams[geologyType].phi}°)
                </div>
              </div>

              {/* Slider 1: Rainfall */}
              <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-xs font-medium text-zinc-300">Monsoon Rainfall Intensity</span>
                  <span className="text-xs font-mono font-semibold text-cyan-400">{rainfall} mm/h</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="1"
                  value={rainfall}
                  onChange={(e) => setRainfall(Number(e.target.value))}
                  className="bento-slider"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1.5">
                  <span>0 mm/h (Dry)</span>
                  <span>40 mm/h (Heavy)</span>
                  <span>120 mm/h (Cloudburst)</span>
                </div>
              </div>

              {/* Slider 2: Soil Moisture */}
              <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-xs font-medium text-zinc-300">Soil Moisture Saturation (Sr)</span>
                  <span className="text-xs font-mono font-semibold text-amber-400">{soilMoisture}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="1"
                  value={soilMoisture}
                  onChange={(e) => setSoilMoisture(Number(e.target.value))}
                  className="bento-slider"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1.5">
                  <span>10% (Desiccated)</span>
                  <span>50% (Field Capacity)</span>
                  <span>100% (Saturated)</span>
                </div>
              </div>

              {/* Slider 3: Slope Angle */}
              <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-xs font-medium text-zinc-300">Hillside Incline Angle</span>
                  <span className="text-xs font-mono font-semibold text-rose-400">{slopeAngle}°</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="60"
                  step="1"
                  value={slopeAngle}
                  onChange={(e) => setSlopeAngle(Number(e.target.value))}
                  className="bento-slider"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1.5">
                  <span>15° (Mild Terrace)</span>
                  <span>35° (Critical Cut-Slope)</span>
                  <span>60° (Near Vertical)</span>
                </div>
              </div>

              {/* Broadcast Trigger */}
              <button
                onClick={triggerNtfySimulation}
                className="bento-btn-primary w-full py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Bell className="w-4 h-4 text-zinc-900" />
                <span>Simulate ntfy.sh Mobile Alert Broadcast</span>
              </button>

              {simulatedAlert && (
                <div className="bg-rose-500/10 border border-rose-500/30 p-4 rounded-2xl text-xs text-rose-200 animate-fadeIn">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-rose-400 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" /> ntfy.sh / savera_emergency_stream
                    </span>
                    <button onClick={() => setSimulatedAlert(null)} className="text-zinc-400 hover:text-white">✕</button>
                  </div>
                  <p className="font-mono text-[11px] leading-relaxed">{simulatedAlert}</p>
                </div>
              )}
            </div>

            {/* Right Display: Gauges & Cross Section (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* FoS Status Card */}
              <div className="bg-zinc-950/60 border border-white/10 p-6 rounded-2xl text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-2">
                  CALCULATED FACTOR OF SAFETY
                </span>
                <div className={`text-5xl sm:text-6xl font-bold tracking-tight mb-2 ${ojasewsMetrics.statusColor}`}>
                  {ojasewsMetrics.fos} <span className="text-xl font-normal text-zinc-400">FoS</span>
                </div>
                <div className="inline-block">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${ojasewsMetrics.badgeBg}`}>
                    TIER: {ojasewsMetrics.statusTier}
                  </span>
                </div>
                <div className="mt-3 text-xs text-zinc-400">
                  Calculated Slope Failure Risk: <strong className="text-white">{ojasewsMetrics.failProb}%</strong>
                </div>
              </div>

              {/* Dynamic SVG Slope Cross-Section */}
              <div className="bg-zinc-950/60 border border-white/10 p-4 rounded-2xl">
                <div className="flex justify-between items-center text-xs text-zinc-400 font-mono mb-2">
                  <span>Dynamic Cross-Section</span>
                  <span>Angle: {slopeAngle}°</span>
                </div>
                <div className="h-36 rounded-xl overflow-hidden border border-white/5 bg-zinc-950 relative flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 300 140" preserveAspectRatio="none">
                    {/* Rain particles */}
                    {rainfall > 5 &&
                      Array.from({ length: Math.min(25, Math.floor(rainfall / 4)) }).map((_, i) => (
                        <line
                          key={i}
                          x1={20 + i * 11}
                          y1={10 + (i % 3) * 6}
                          x2={15 + i * 11}
                          y2={35 + (i % 3) * 6}
                          stroke="#22d3ee"
                          strokeWidth="1.5"
                          opacity="0.6"
                        />
                      ))}
                    {(() => {
                      const rad = (slopeAngle * Math.PI) / 180;
                      const rise = Math.min(110, Math.max(30, Math.tan(rad) * 120));
                      const topY = 140 - rise;
                      return (
                        <>
                          <polygon
                            points={`0,140 300,140 300,${topY} 50,135`}
                            fill="#27272a"
                            stroke="#3f3f46"
                            strokeWidth="2"
                          />
                          <polygon
                            points={`0,140 300,140 300,${topY + (1 - soilMoisture / 100) * (rise - 10)} 50,138`}
                            fill="#0284c7"
                            opacity={soilMoisture / 130}
                          />
                          {ojasewsMetrics.fos < 1.15 && (
                            <path
                              d={`M 80,135 Q 180,${topY + 30} 280,${topY + 10}`}
                              fill="none"
                              stroke="#f43f5e"
                              strokeWidth="2.5"
                              strokeDasharray="4 3"
                            />
                          )}
                        </>
                      );
                    })()}
                  </svg>
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-cyan-400 bg-zinc-900/80 px-2 py-0.5 rounded border border-white/10">
                    u = {ojasewsMetrics.porePressure} kPa
                  </div>
                </div>
              </div>

              {/* Balance Equations */}
              <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl text-xs space-y-1.5 font-mono">
                <div className="flex justify-between text-zinc-400">
                  <span>Resisting Shear Capacity (τf):</span>
                  <span className="text-white font-semibold">{ojasewsMetrics.resistingForce} kPa</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Driving Shear Force (τ):</span>
                  <span className="text-white font-semibold">{ojasewsMetrics.drivingForce} kPa</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-white/5">
                  <span className="text-zinc-300">Safety Margin:</span>
                  <span className={ojasewsMetrics.resistingForce >= ojasewsMetrics.drivingForce ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                    {(ojasewsMetrics.resistingForce - ojasewsMetrics.drivingForce).toFixed(1)} kPa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SIMULATOR 2: GEOCHANGE AI */}
      {activeSim === 'geochange' && (
        <div className="bento-card p-6 sm:p-10 bento-glow-emerald">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <span className="text-[11px] font-mono text-emerald-400 block mb-1">
                Sentinel-2 (10m) & NASA ORNL Aboveground Biomass Scaling
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Multispectral Vegetation & Carbon Emission Simulator
              </h3>
            </div>
            <button
              onClick={() => {
                setPreNDVI(0.74);
                setPostNDVI(0.28);
                setAreaHectares(145);
                setBiome('temperate');
              }}
              className="bento-btn-secondary py-1.5 px-3 text-xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Biome */}
              <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl">
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2.5">
                  Himalayan Biome / Ecosystem:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['temperate', 'broadleaf', 'scrub'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setBiome(type)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                        biome === type
                          ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-sm'
                          : 'bg-white/5 border-white/5 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {type === 'temperate' ? 'Temperate Pine' : type === 'broadleaf' ? 'Mixed Broadleaf' : 'Subtropical Scrub'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Pre-NDVI */}
              <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-xs font-medium text-zinc-300">Baseline Pre-Event NDVI (Sentinel-2)</span>
                  <span className="text-xs font-mono font-semibold text-emerald-400">{preNDVI.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.30"
                  max="0.95"
                  step="0.01"
                  value={preNDVI}
                  onChange={(e) => setPreNDVI(Number(e.target.value))}
                  className="bento-slider"
                />
              </div>

              {/* Slider 2: Post-NDVI */}
              <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-xs font-medium text-zinc-300">Post-Disturbance Disturbed NDVI</span>
                  <span className="text-xs font-mono font-semibold text-rose-400">{postNDVI.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max={preNDVI - 0.05}
                  step="0.01"
                  value={postNDVI}
                  onChange={(e) => setPostNDVI(Number(e.target.value))}
                  className="bento-slider"
                />
              </div>

              {/* Slider 3: Area */}
              <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-xs font-medium text-zinc-300">Affected Terrestrial Area</span>
                  <span className="text-xs font-mono font-semibold text-amber-400">{areaHectares} Hectares</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={areaHectares}
                  onChange={(e) => setAreaHectares(Number(e.target.value))}
                  className="bento-slider"
                />
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-5 space-y-6">
              {/* Carbon Stock Loss Card */}
              <div className="bg-zinc-950/60 border border-white/10 p-6 rounded-2xl text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-2">
                  ESTIMATED LOST CARBON STOCK
                </span>
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                  {geoChangeMetrics.totalCarbonLost.toLocaleString()}{' '}
                  <span className="text-xl font-normal text-zinc-400">t CO2e</span>
                </div>
                <div className="text-xs text-zinc-400">
                  Equivalent to ~{Math.round(geoChangeMetrics.totalCarbonLost / 4.6).toLocaleString()} gasoline cars driven for 1 year
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl text-center">
                  <div className="text-[11px] text-zinc-400">Spectral Shift (ΔNDVI)</div>
                  <div className="text-2xl font-bold text-rose-400 mt-1">
                    -{geoChangeMetrics.deltaNDVI}
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-0.5 font-mono">
                    {geoChangeMetrics.percentLoss}% Canopy Loss
                  </div>
                </div>

                <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl text-center">
                  <div className="text-[11px] text-zinc-400">Biomass Loss</div>
                  <div className="text-2xl font-bold text-white mt-1">
                    {geoChangeMetrics.biomassLossPerHa}
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-0.5 font-mono">
                    Tonnes / Hectare
                  </div>
                </div>
              </div>

              {/* STAC Classification Badge */}
              <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl space-y-2">
                <div className="text-xs text-zinc-400 font-mono">STAC Land Cover Classification:</div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold inline-block border ${geoChangeMetrics.transitionBadge}`}>
                  {geoChangeMetrics.transitionLabel}
                </div>
                <div className="text-[11px] text-zinc-400 leading-relaxed pt-2 border-t border-white/5">
                  Sub-pixel registered Sentinel-2 10m L2A with QA60 cloud mask evaluated on AWS Earth Search.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
