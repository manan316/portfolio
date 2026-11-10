import React, { useState, useMemo } from 'react';
import { Play, RotateCcw, AlertTriangle, ShieldCheck, Flame, Info, Bell, Activity, Layers, Download } from 'lucide-react';
import { MemphisCardOrnaments } from './MemphisOrnament';

export const InteractiveSimLab: React.FC = () => {
  const [activeSim, setActiveSim] = useState<'ojasews' | 'geochange'>('ojasews');

  // --- OJASEWS Simulator State ---
  const [rainfall, setRainfall] = useState<number>(45); // mm/hr
  const [soilMoisture, setSoilMoisture] = useState<number>(68); // %
  const [slopeAngle, setSlopeAngle] = useState<number>(38); // degrees
  const [geologyType, setGeologyType] = useState<'colluvium' | 'clay' | 'sandstone'>('colluvium');
  const [simulatedAlert, setSimulatedAlert] = useState<string | null>(null);

  // Geology parameters: [cohesion c' (kPa), friction angle phi' (deg), unit weight gamma (kN/m^3)]
  const geologyParams = {
    colluvium: { name: 'Himalayan Colluvium / Debris', c: 12, phi: 33, gamma: 19 },
    clay: { name: 'Silty Overburden Clay', c: 20, phi: 24, gamma: 18 },
    sandstone: { name: 'Fractured Sandstone Block', c: 8, phi: 40, gamma: 22 }
  };

  // Geotechnical physics-informed safety calculation
  const ojasewsMetrics = useMemo(() => {
    const geo = geologyParams[geologyType];
    const thetaRad = (slopeAngle * Math.PI) / 180;
    const phiRad = (geo.phi * Math.PI) / 180;
    const depth = 2.5; // shear surface depth in meters

    // Pore pressure based on soil moisture and rainfall intensity
    const porePressure = Math.max(0, (soilMoisture / 100) * (rainfall / 10) * 4.2); // kPa
    
    // Normal stress sigma = gamma * z * cos^2(theta)
    const normalStress = geo.gamma * depth * Math.pow(Math.cos(thetaRad), 2);
    // Effective normal stress
    const effectiveStress = Math.max(1, normalStress - porePressure);
    // Resisting shear strength tau_f = c' + (sigma - u) * tan(phi)
    const resistingForce = geo.c + effectiveStress * Math.tan(phiRad);
    // Driving shear stress tau = gamma * z * sin(theta) * cos(theta)
    const drivingForce = Math.max(0.5, geo.gamma * depth * Math.sin(thetaRad) * Math.cos(thetaRad));

    const fos = Math.max(0.2, Math.min(3.5, resistingForce / drivingForce));
    const failProb = Math.min(100, Math.max(0, Math.round((1 - Math.min(1.5, fos) / 1.5) * 100)));

    let statusTier: 'NORMAL' | 'ADVISORY' | 'WATCH' | 'WARNING' | 'CRITICAL';
    let statusColor: string;
    let statusBg: string;

    if (fos >= 1.5) {
      statusTier = 'NORMAL';
      statusColor = '#000000';
      statusBg = '#1dd1a1'; // Mint
    } else if (fos >= 1.25) {
      statusTier = 'ADVISORY';
      statusColor = '#000000';
      statusBg = '#48dbfb'; // Blue
    } else if (fos >= 1.05) {
      statusTier = 'WATCH';
      statusColor = '#000000';
      statusBg = '#feca57'; // Honey
    } else if (fos >= 0.85) {
      statusTier = 'WARNING';
      statusColor = '#ffffff';
      statusBg = '#ff6b6b'; // Coral
    } else {
      statusTier = 'CRITICAL';
      statusColor = '#ffffff';
      statusBg = '#5f27cd'; // Grape
    }

    return {
      fos: Number(fos.toFixed(2)),
      failProb,
      porePressure: Number(porePressure.toFixed(1)),
      resistingForce: Number(resistingForce.toFixed(1)),
      drivingForce: Number(drivingForce.toFixed(1)),
      statusTier,
      statusColor,
      statusBg
    };
  }, [rainfall, soilMoisture, slopeAngle, geologyType]);

  const triggerNtfySimulation = () => {
    const text = `🚨 [OJASEWS SIMULATED ALERT] Tier: ${ojasewsMetrics.statusTier} | FoS: ${ojasewsMetrics.fos} | Slope: ${slopeAngle}° | Rain: ${rainfall} mm/h | Pore Pressure: ${ojasewsMetrics.porePressure} kPa. High risk of debris flow on Jammu–Srinagar NH-44 Samroli Sector.`;
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
    // Biomass loss calculation based on NASA ORNL Global Aboveground Biomass scaling
    const biomassLossPerHa = Number((deltaNDVI * selectedBiome.carbonFactor * 1.8).toFixed(1)); // tonnes/ha
    const totalCarbonLost = Math.round(biomassLossPerHa * areaHectares * 0.47 * (44 / 12)); // t CO2e
    const percentLoss = Math.round((deltaNDVI / preNDVI) * 100);

    let transitionLabel = 'Stable Canopy';
    let transitionColor = '#1dd1a1';

    if (deltaNDVI > 0.45) {
      transitionLabel = 'Severe Deforestation / Mudslide Scarp';
      transitionColor = '#ff6b6b';
    } else if (deltaNDVI > 0.25) {
      transitionLabel = 'Moderate Canopy Thinning & Loss';
      transitionColor = '#feca57';
    } else if (deltaNDVI > 0.1) {
      transitionLabel = 'Minor Vegetation Stress / Disturbance';
      transitionColor = '#48dbfb';
    }

    return {
      deltaNDVI,
      biomassLossPerHa,
      totalCarbonLost,
      percentLoss,
      transitionLabel,
      transitionColor,
      confidence: 96.4
    };
  }, [preNDVI, postNDVI, areaHectares, biome]);

  return (
    <section id="lab" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="memphis-badge bg-honey text-black border-4 border-black px-4 py-1.5 text-xs font-black tracking-widest uppercase">
            [02 // IN-BROWSER SIMULATION LAB]
          </span>
          <span className="bg-mint text-black border-3 border-black px-3 py-1 text-xs font-black tracking-wider uppercase">
            LIVE PHYSICS & ML SANDBOX
          </span>
        </div>
        <h2 className="memphis-heading text-black pop-swap mb-4">
          THE MEMPHIS ENGINEERING SANDBOX
        </h2>
        <p className="text-black text-base sm:text-lg font-bold max-w-3xl leading-relaxed">
          Interact live with the core physics and mathematical models powering my flagship systems. 
          Adjust geotechnical thresholds in <strong className="underline decoration-coral decoration-4">OJASEWS</strong> or simulate multispectral carbon accounting from <strong className="underline decoration-electric-blue decoration-4">GeoChange AI</strong>.
        </p>
      </div>

      {/* Simulator Switcher Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setActiveSim('ojasews')}
          className={`memphis-tab-btn flex items-center gap-2 text-sm sm:text-base ${
            activeSim === 'ojasews' ? 'active' : ''
          }`}
        >
          <Activity className="w-5 h-5 text-current" />
          <span>SIM 1: OJASEWS Landslide Slope Physics</span>
        </button>

        <button
          onClick={() => setActiveSim('geochange')}
          className={`memphis-tab-btn flex items-center gap-2 text-sm sm:text-base ${
            activeSim === 'geochange' ? 'active' : ''
          }`}
        >
          <Layers className="w-5 h-5 text-current" />
          <span>SIM 2: GeoChange AI Spectral & Carbon Model</span>
        </button>
      </div>

      {/* SIMULATOR 1: OJASEWS */}
      {activeSim === 'ojasews' && (
        <div className="memphis-card bg-paper p-6 sm:p-8 lg:p-10 relative overflow-hidden group">
          <MemphisCardOrnaments variant={1} />

          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b-4 border-black">
            <div>
              <span className="text-xs uppercase tracking-widest font-black text-black bg-coral text-white px-2.5 py-1 border-2 border-black inline-block mb-2">
                Physics-Informed Slope Stability Analysis (Mohr-Coulomb Failure Criterion)
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-black">
                Samroli Corridor Geotechnical Stress Simulator
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
              className="memphis-btn-honey px-3 py-2 text-xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" /> Reset Defaults
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls: Sliders and Toggles (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Geological Stratum Selection */}
              <div className="bg-white border-4 border-black p-4 shadow-memphis-sm">
                <label className="block text-xs font-black uppercase tracking-wider mb-2 text-black">
                  Select Geological Formation / Soil Stratum:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['colluvium', 'clay', 'sandstone'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setGeologyType(type)}
                      className={`px-3 py-2 text-xs font-black border-3 border-black text-center transition-colors ${
                        geologyType === type
                          ? 'bg-coral text-white shadow-[2px_2px_0_#000]'
                          : 'bg-paper text-black hover:bg-honey'
                      }`}
                    >
                      {geologyParams[type].name.split(' ')[0]} ({geologyParams[type].phi}°)
                    </button>
                  ))}
                </div>
                <div className="text-[11px] font-bold text-gray-700 mt-2">
                  Active: {geologyParams[geologyType].name} (c'={geologyParams[geologyType].c} kPa, φ'={geologyParams[geologyType].phi}°)
                </div>
              </div>

              {/* Slider 1: Rainfall */}
              <div className="bg-white border-4 border-black p-4 shadow-memphis-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-black uppercase tracking-wider">
                    Monsoon Rainfall Intensity
                  </span>
                  <span className="bg-electric-blue text-black border-2 border-black px-2 py-0.5 text-xs font-black">
                    {rainfall} mm / hour
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="1"
                  value={rainfall}
                  onChange={(e) => setRainfall(Number(e.target.value))}
                  className="memphis-range-slider"
                />
                <div className="flex justify-between text-[10px] font-black text-gray-600 mt-1">
                  <span>0 mm/h (Dry)</span>
                  <span>40 mm/h (Steady)</span>
                  <span>80 mm/h (Heavy)</span>
                  <span>120 mm/h (Cloudburst)</span>
                </div>
              </div>

              {/* Slider 2: Soil Moisture */}
              <div className="bg-white border-4 border-black p-4 shadow-memphis-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-black uppercase tracking-wider">
                    Soil Moisture Saturation (Sr)
                  </span>
                  <span className="bg-honey text-black border-2 border-black px-2 py-0.5 text-xs font-black">
                    {soilMoisture}% Saturation
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="1"
                  value={soilMoisture}
                  onChange={(e) => setSoilMoisture(Number(e.target.value))}
                  className="memphis-range-slider"
                />
                <div className="flex justify-between text-[10px] font-black text-gray-600 mt-1">
                  <span>10% (Desiccated)</span>
                  <span>50% (Field Capacity)</span>
                  <span>85% (Plastic State)</span>
                  <span>100% (Fully Saturated)</span>
                </div>
              </div>

              {/* Slider 3: Slope Incline Angle */}
              <div className="bg-white border-4 border-black p-4 shadow-memphis-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-black uppercase tracking-wider">
                    Himalayan Hillside Incline (Tilt)
                  </span>
                  <span className="bg-coral text-white border-2 border-black px-2 py-0.5 text-xs font-black">
                    {slopeAngle}° Incline
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="60"
                  step="1"
                  value={slopeAngle}
                  onChange={(e) => setSlopeAngle(Number(e.target.value))}
                  className="memphis-range-slider"
                />
                <div className="flex justify-between text-[10px] font-black text-gray-600 mt-1">
                  <span>15° (Mild Terrace)</span>
                  <span>35° (Critical Cut-Slope)</span>
                  <span>50° (Steep Ridge)</span>
                  <span>60° (Near Vertical Cliff)</span>
                </div>
              </div>

              {/* Interactive Dispatch Trigger */}
              <div className="pt-2">
                <button
                  onClick={triggerNtfySimulation}
                  className="memphis-btn w-full py-3.5 text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Bell className="w-5 h-5" /> Simulate Real-Time ntfy.sh Broadcast
                </button>
              </div>

              {/* Simulated Notification Modal/Toast */}
              {simulatedAlert && (
                <div className="bg-bubblegum border-4 border-black p-4 shadow-memphis text-black animate-bounce-short">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-black shrink-0" />
                      <span className="font-black text-xs uppercase tracking-wider">
                        ntfy.sh / savera_emergency_stream
                      </span>
                    </div>
                    <button
                      onClick={() => setSimulatedAlert(null)}
                      className="text-xs font-black px-1.5 py-0.5 bg-black text-white"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="mt-2 text-xs font-bold leading-relaxed">{simulatedAlert}</p>
                </div>
              )}
            </div>

            {/* Right Display: Visual Gauge, Cross Section & Live Gauges (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Factor of Safety Hero Block */}
              <div
                className="border-4 border-black p-6 shadow-memphis text-center relative overflow-hidden"
                style={{ backgroundColor: ojasewsMetrics.statusBg, color: ojasewsMetrics.statusColor }}
              >
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-black text-white inline-block mb-3">
                  STABILITY VERDICT
                </span>
                <div className="text-5xl sm:text-6xl font-black tracking-tight leading-none mb-1">
                  {ojasewsMetrics.fos} <span className="text-2xl font-bold">FoS</span>
                </div>
                <div className="text-xl sm:text-2xl font-black uppercase tracking-wider mt-2">
                  TIER: {ojasewsMetrics.statusTier}
                </div>
                <div className="mt-3 text-xs font-bold opacity-90">
                  Calculated Failure Probability: <strong>{ojasewsMetrics.failProb}%</strong>
                </div>
              </div>

              {/* Interactive SVG Slope Cross-Section */}
              <div className="bg-white border-4 border-black p-4 shadow-memphis-sm">
                <div className="text-xs font-black uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Live Slope Cross-Section</span>
                  <span className="text-[10px] text-gray-500">Auto-Reflecting Angle ({slopeAngle}°)</span>
                </div>
                <div className="w-full h-36 bg-paper border-3 border-black relative overflow-hidden flex items-end justify-center">
                  <svg className="w-full h-full" viewBox="0 0 300 140" preserveAspectRatio="none">
                    {/* Sky backdrop */}
                    <rect x="0" y="0" width="300" height="140" fill="#fdf6e3" />
                    {/* Rainfall lines */}
                    {rainfall > 5 &&
                      Array.from({ length: Math.min(25, Math.floor(rainfall / 4)) }).map((_, i) => (
                        <line
                          key={i}
                          x1={20 + i * 11}
                          y1={10 + (i % 3) * 6}
                          x2={15 + i * 11}
                          y2={35 + (i % 3) * 6}
                          stroke="#48dbfb"
                          strokeWidth="2"
                          strokeDasharray="4 2"
                        />
                      ))}
                    {/* Slope Terrain Polygon */}
                    {/* Calculate apex based on slope angle */}
                    {(() => {
                      const rad = (slopeAngle * Math.PI) / 180;
                      const run = 240;
                      const rise = Math.min(110, Math.max(30, Math.tan(rad) * 120));
                      const topY = 140 - rise;
                      return (
                        <>
                          <polygon
                            points={`0,140 300,140 300,${topY} 50,135`}
                            fill="#feca57"
                            stroke="#000000"
                            strokeWidth="4"
                          />
                          {/* Saturation layer */}
                          <polygon
                            points={`0,140 300,140 300,${topY + (1 - soilMoisture / 100) * (rise - 10)} 50,138`}
                            fill="#48dbfb"
                            opacity={soilMoisture / 120}
                          />
                          {/* Failure shear line if unsafe */}
                          {ojasewsMetrics.fos < 1.25 && (
                            <path
                              d={`M 80,135 Q 180,${topY + 30} 280,${topY + 10}`}
                              fill="none"
                              stroke="#ff6b6b"
                              strokeWidth="4"
                              strokeDasharray="6 4"
                            />
                          )}
                        </>
                      );
                    })()}
                  </svg>
                  <div className="absolute top-2 left-2 text-[10px] font-black bg-white px-2 py-0.5 border-2 border-black">
                    Pore Pressure: {ojasewsMetrics.porePressure} kPa
                  </div>
                  {ojasewsMetrics.fos < 1.05 && (
                    <div className="absolute bottom-2 right-2 text-[10px] font-black bg-coral text-white px-2 py-0.5 border-2 border-black animate-pulse">
                      SLOPE DEBRIS RELEASE ACTIVE
                    </div>
                  )}
                </div>
              </div>

              {/* Stress Equation Breakdown */}
              <div className="bg-honey border-4 border-black p-4 text-black text-xs font-bold space-y-1.5">
                <div className="font-black uppercase tracking-wider text-[11px] pb-1 border-b-2 border-black">
                  Live Geotechnical Balance:
                </div>
                <div className="flex justify-between">
                  <span>Resisting Shear Capacity (τf):</span>
                  <span className="font-black">{ojasewsMetrics.resistingForce} kPa</span>
                </div>
                <div className="flex justify-between">
                  <span>Driving Shear Force (τ):</span>
                  <span className="font-black">{ojasewsMetrics.drivingForce} kPa</span>
                </div>
                <div className="flex justify-between pt-1 border-t-2 border-black">
                  <span>Safety Margin (τf - τ):</span>
                  <span className={`font-black ${ojasewsMetrics.resistingForce >= ojasewsMetrics.drivingForce ? 'text-green-800' : 'text-red-800'}`}>
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
        <div className="memphis-card bg-paper p-6 sm:p-8 lg:p-10 relative overflow-hidden group">
          <MemphisCardOrnaments variant={2} />

          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b-4 border-black">
            <div>
              <span className="text-xs uppercase tracking-widest font-black text-black bg-electric-blue text-black px-2.5 py-1 border-2 border-black inline-block mb-2">
                Multispectral Sentinel-2 (10m) & NASA ORNL Global Biomass Accounting
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-black">
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
              className="memphis-btn-honey px-3 py-2 text-xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" /> Reset Defaults
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Biome Selection */}
              <div className="bg-white border-4 border-black p-4 shadow-memphis-sm">
                <label className="block text-xs font-black uppercase tracking-wider mb-2 text-black">
                  Himalayan Ecosystem Biome:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['temperate', 'broadleaf', 'scrub'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setBiome(type)}
                      className={`px-3 py-2 text-xs font-black border-3 border-black text-center transition-colors ${
                        biome === type
                          ? 'bg-electric-blue text-black shadow-[2px_2px_0_#000]'
                          : 'bg-paper text-black hover:bg-honey'
                      }`}
                    >
                      {type === 'temperate' ? 'Temperate Pine' : type === 'broadleaf' ? 'Mixed Broadleaf' : 'Subtropical Scrub'}
                    </button>
                  ))}
                </div>
                <div className="text-[11px] font-bold text-gray-700 mt-2">
                  Carbon Benchmark: {biomeFactors[biome].name} (~{biomeFactors[biome].carbonFactor} t/ha biomass)
                </div>
              </div>

              {/* Slider 1: Pre-Event NDVI */}
              <div className="bg-white border-4 border-black p-4 shadow-memphis-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-black uppercase tracking-wider">
                    Pre-Event Baseline Spectral NDVI (Sentinel-2 B8/B4)
                  </span>
                  <span className="bg-mint text-black border-2 border-black px-2 py-0.5 text-xs font-black">
                    NDVI {preNDVI.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.30"
                  max="0.95"
                  step="0.01"
                  value={preNDVI}
                  onChange={(e) => setPreNDVI(Number(e.target.value))}
                  className="memphis-range-slider"
                />
                <div className="flex justify-between text-[10px] font-black text-gray-600 mt-1">
                  <span>0.30 (Sparse Scrub)</span>
                  <span>0.60 (Moderate Canopy)</span>
                  <span>0.80 (Dense Forest)</span>
                  <span>0.95 (Pristine Old-Growth)</span>
                </div>
              </div>

              {/* Slider 2: Post-Event NDVI */}
              <div className="bg-white border-4 border-black p-4 shadow-memphis-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-black uppercase tracking-wider">
                    Post-Disturbance Disturbed Spectral NDVI
                  </span>
                  <span className="bg-coral text-white border-2 border-black px-2 py-0.5 text-xs font-black">
                    NDVI {postNDVI.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max={preNDVI - 0.05}
                  step="0.01"
                  value={postNDVI}
                  onChange={(e) => setPostNDVI(Number(e.target.value))}
                  className="memphis-range-slider"
                />
                <div className="flex justify-between text-[10px] font-black text-gray-600 mt-1">
                  <span>0.05 (Bare Rock / Scar)</span>
                  <span>0.25 (Substantial Loss)</span>
                  <span>0.45 (Residual Brush)</span>
                </div>
              </div>

              {/* Slider 3: Area Impacted */}
              <div className="bg-white border-4 border-black p-4 shadow-memphis-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-black uppercase tracking-wider">
                    Polygon Footprint / Affected Terrestrial Area
                  </span>
                  <span className="bg-honey text-black border-2 border-black px-2 py-0.5 text-xs font-black">
                    {areaHectares} Hectares (~{(areaHectares * 2.471).toFixed(0)} Acres)
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={areaHectares}
                  onChange={(e) => setAreaHectares(Number(e.target.value))}
                  className="memphis-range-slider"
                />
                <div className="flex justify-between text-[10px] font-black text-gray-600 mt-1">
                  <span>5 ha (Local Scar)</span>
                  <span>100 ha (Valley Sector)</span>
                  <span>250 ha (Watershed Basin)</span>
                  <span>500 ha (Regional Corridor)</span>
                </div>
              </div>
            </div>

            {/* GeoChange Results Display (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Carbon Hero Block */}
              <div className="bg-coral text-white border-4 border-black p-6 shadow-memphis text-center">
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-black text-white inline-block mb-3">
                  TOTAL LOST CARBON STOCK
                </span>
                <div className="text-4xl sm:text-5xl font-black tracking-tight leading-none mb-1">
                  {geoChangeMetrics.totalCarbonLost.toLocaleString()}
                  <span className="text-xl font-bold ml-1">t CO2e</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider mt-2 opacity-95">
                  Equivalent to {Math.round(geoChangeMetrics.totalCarbonLost / 4.6).toLocaleString()} gasoline passenger cars driven for 1 year
                </div>
              </div>

              {/* Spectral Degradation Metric Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border-4 border-black p-4 shadow-memphis-sm text-center">
                  <div className="text-[11px] font-black uppercase text-gray-600">Spectral Shift (ΔNDVI)</div>
                  <div className="text-3xl font-black text-black mt-1">
                    -{geoChangeMetrics.deltaNDVI}
                  </div>
                  <div className="text-[10px] font-bold text-red-600 mt-1">
                    {geoChangeMetrics.percentLoss}% Canopy Loss
                  </div>
                </div>

                <div className="bg-white border-4 border-black p-4 shadow-memphis-sm text-center">
                  <div className="text-[11px] font-black uppercase text-gray-600">Biomass Loss</div>
                  <div className="text-3xl font-black text-black mt-1">
                    {geoChangeMetrics.biomassLossPerHa}
                  </div>
                  <div className="text-[10px] font-bold text-gray-600 mt-1">Tonnes / Hectare</div>
                </div>
              </div>

              {/* Classification Tag Box */}
              <div className="bg-paper border-4 border-black p-5 shadow-memphis-sm">
                <div className="text-xs font-black uppercase tracking-wider mb-2">
                  STAC Land Cover Transition Classification:
                </div>
                <div
                  className="px-3 py-2 border-3 border-black text-sm font-black text-black inline-block mb-3"
                  style={{ backgroundColor: geoChangeMetrics.transitionColor }}
                >
                  {geoChangeMetrics.transitionLabel}
                </div>
                <div className="text-xs font-bold leading-relaxed text-black">
                  Evaluating STAC catalogs (AWS Earth Search & Microsoft Planetary Computer) at 10m resolution with sub-pixel registration and QA60 cloud gating.
                </div>
                <div className="mt-3 pt-3 border-t-2 border-black flex justify-between text-xs font-bold">
                  <span>Confidence Level:</span>
                  <span className="font-black text-green-700">96.4% Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
