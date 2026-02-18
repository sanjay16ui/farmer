import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { 
  Sprout, 
  Scale, 
  ShieldCheck, 
  X,
  Activity,
  MapPin,
  CheckCircle,
  Droplets,
  Thermometer,
  Wind,
  Scan,
  AlertTriangle,
  Camera,
  Loader2,
  FileCheck,
  Link as LinkIcon,
  Sparkles,
  Cpu,
  RefreshCw,
  Zap,
  BarChart,
  Lock,
  Users,
  Vote,
  TrendingUp,
  DollarSign,
  Package,
  Navigation,
  Calendar,
  Phone,
  User,
  ArrowRight,
  Truck,
  QrCode,
  History,
  AlertOctagon,
  Route,
  Share2,
  CheckSquare,
  Coins,
  Star,
  ThumbsUp,
  Search,
  Upload,
  AlertCircle,
  Info,
  BarChart2,
  Bell,
  PieChart,
  Leaf
} from 'lucide-react';
import { 
  BarChart3,
  Store,
  CheckCircle2,
} from 'lucide-react';

type HubType = 'farmer' | 'mandi' | 'customer' | null;

export const FeatureHubs: React.FC = () => {
  const [activeHub, setActiveHub] = useState<HubType>(null);

  const handleHubSelect = (hub: HubType) => {
    setActiveHub(hub);
  };

  const getActiveHubStyles = () => {
    switch (activeHub) {
      case 'farmer': return 'border-t-agri-green bg-gradient-to-b from-agri-greenLight/30 to-white';
      case 'mandi': return 'border-t-agri-brown bg-gradient-to-b from-agri-brownLight/30 to-white';
      case 'customer': return 'border-t-agri-teal bg-gradient-to-b from-agri-tealLight/30 to-white';
      default: return 'border-t-transparent bg-white';
    }
  };

  const getActiveIconColor = () => {
    switch (activeHub) {
      case 'farmer': return 'text-agri-green';
      case 'mandi': return 'text-agri-brown';
      case 'customer': return 'text-agri-teal';
      default: return 'text-agri-text';
    }
  };

  return (
    <section className="relative min-h-[800px] bg-transparent overflow-hidden" id="hubs">
      
      {/* Background Creative Element: Faint Radial Grid */}
      <div className="absolute inset-0 bg-orbit-grid opacity-50 pointer-events-none mix-blend-multiply" />

      <div className="max-w-[1400px] mx-auto px-8 h-full relative z-10">
        
        {/* VIEW: ORBIT (Default) */}
        <div className={`transition-all duration-700 cubic-bezier(0.3, 0, 0.2, 1) ${activeHub ? 'opacity-0 scale-95 pointer-events-none absolute inset-0 blur-sm' : 'opacity-100 scale-100'}`}>
          <OrbitSystem onSelect={handleHubSelect} />
        </div>

        {/* VIEW: ACTIVE HUB (Expanded) */}
        <div className={`transition-all duration-700 cubic-bezier(0.3, 0, 0.2, 1) ${activeHub ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none absolute inset-0'}`}>
          {activeHub && (
            <div className={`
              w-full min-h-[600px] rounded-3xl border border-white/60 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col ring-1 ring-black/5
              border-t-[3px] transition-colors duration-500
              ${getActiveHubStyles()} 
              backdrop-blur-xl
            `}>
              {/* Dashboard Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100/50 bg-white/40">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setActiveHub(null)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-agri-text transition-colors group"
                  >
                    <span className="text-lg group-hover:-translate-x-1 transition-transform duration-300">←</span> Back to Orbit
                  </button>
                  <div className="h-4 w-px bg-gray-300 mx-2" />
                  <span className={`font-bold capitalize flex items-center gap-2 ${getActiveIconColor()}`}>
                    {activeHub === 'farmer' && <Sprout className="w-5 h-5" />}
                    {activeHub === 'mandi' && <Scale className="w-5 h-5" />}
                    {activeHub === 'customer' && <ShieldCheck className="w-5 h-5" />}
                    {activeHub} Dashboard
                  </span>
                </div>
                <button onClick={() => setActiveHub(null)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 overflow-auto">
                {activeHub === 'farmer' && <FarmerDashboard />}
                {activeHub === 'mandi' && <MandiDashboard />}
                {activeHub === 'customer' && <CustomerDashboard />}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

/* --- ORBIT SYSTEM SUB-COMPONENT --- */
const OrbitSystem: React.FC<{ onSelect: (hub: HubType) => void }> = ({ onSelect }) => {
  const [hoveredNode, setHoveredNode] = useState<HubType>(null);
  const isDimmed = (node: HubType) => hoveredNode !== null && hoveredNode !== node;

  return (
    <div className="relative h-[600px] w-full flex items-center justify-center">
      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
        <defs>
          <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <line x1="25%" y1="50%" x2="50%" y2="50%" stroke={hoveredNode === 'farmer' ? '#145A32' : '#1C1C1C'} strokeWidth={hoveredNode === 'farmer' ? 2 : 1} strokeDasharray="4 4" className="animate-flow-toward" style={{ transition: 'all 0.4s ease' }} />
        <line x1="50%" y1="20%" x2="50%" y2="50%" stroke={hoveredNode === 'mandi' ? '#8B5E3C' : '#1C1C1C'} strokeWidth={hoveredNode === 'mandi' ? 2 : 1} strokeDasharray="4 4" className="animate-flow-toward" style={{ transition: 'all 0.4s ease' }} />
        <line x1="75%" y1="50%" x2="50%" y2="50%" stroke={hoveredNode === 'customer' ? '#0E7490' : '#1C1C1C'} strokeWidth={hoveredNode === 'customer' ? 2 : 1} strokeDasharray="4 4" className="animate-flow-toward" style={{ transition: 'all 0.4s ease' }} />
      </svg>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md p-6 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.08)] border border-white ring-1 ring-gray-100">
        <Logo className="w-12 h-12" />
      </div>

      <OrbitNode position="left" id="farmer" onClick={() => onSelect('farmer')} onHover={setHoveredNode} isDimmed={isDimmed('farmer')} icon={<Sprout className="w-8 h-8" />} label="Farmer Hub" accent="green" delay="delay-100" />
      <OrbitNode position="top" id="mandi" onClick={() => onSelect('mandi')} onHover={setHoveredNode} isDimmed={isDimmed('mandi')} icon={<Scale className="w-8 h-8" />} label="Mandi Hub" accent="brown" delay="delay-200" />
      <OrbitNode position="right" id="customer" onClick={() => onSelect('customer')} onHover={setHoveredNode} isDimmed={isDimmed('customer')} icon={<ShieldCheck className="w-8 h-8" />} label="Customer Hub" accent="teal" delay="delay-300" />
    </div>
  );
};

interface OrbitNodeProps {
  position: 'left' | 'top' | 'right';
  id: HubType;
  onClick: () => void;
  onHover: (id: HubType) => void;
  isDimmed: boolean;
  icon: React.ReactNode;
  label: string;
  accent: 'green' | 'brown' | 'teal';
  delay: string;
}

const OrbitNode: React.FC<OrbitNodeProps> = ({ position, id, onClick, onHover, isDimmed, icon, label, accent, delay }) => {
  const positionClasses = {
    left: 'top-1/2 left-[10%] md:left-[20%] -translate-y-1/2',
    top: 'top-[10%] md:top-[15%] left-1/2 -translate-x-1/2',
    right: 'top-1/2 right-[10%] md:right-[20%] -translate-y-1/2'
  };
  const colors = {
    green: { text: 'group-hover:text-agri-green', glow: 'bg-agri-greenGlow', border: 'group-hover:border-agri-green', shadow: 'group-hover:shadow-[0_20px_40px_-10px_rgba(20,90,50,0.3)]' },
    brown: { text: 'group-hover:text-agri-brown', glow: 'bg-agri-brownGlow', border: 'group-hover:border-agri-brown', shadow: 'group-hover:shadow-[0_20px_40px_-10px_rgba(139,94,60,0.3)]' },
    teal: { text: 'group-hover:text-agri-teal', glow: 'bg-agri-tealGlow', border: 'group-hover:border-agri-teal', shadow: 'group-hover:shadow-[0_20px_40px_-10px_rgba(14,116,144,0.3)]' }
  };
  const theme = colors[accent];

  return (
    <button onClick={onClick} onMouseEnter={() => onHover(id)} onMouseLeave={() => onHover(null)} className={`absolute ${positionClasses[position]} group z-20 outline-none animate-fade-in ${delay} transition-all duration-500 ease-[cubic-bezier(0.25,0.4,0.25,1)] ${isDimmed ? 'opacity-40 blur-[1px] scale-95 grayscale' : 'opacity-100 scale-100'}`}>
      <div className="flex flex-col items-center gap-5 animate-float-subtle">
        <div className="relative">
          <div className={`absolute -inset-10 rounded-full blur-[50px] opacity-20 animate-breathe ${theme.glow}`} />
          <div className={`absolute -inset-1 rounded-full blur-md transition-all duration-500 ease-out opacity-0 group-hover:opacity-60 scale-90 group-hover:scale-105 ${theme.glow}`} />
          <div className={`w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-white/50 ring-1 ring-gray-100 transition-all duration-300 ease-out group-hover:scale-105 ${theme.shadow} relative overflow-hidden ${theme.border}`}>
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/80" />
            <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-white/80 to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-full h-full -translate-x-full animate-sweep" />
            <div className={`text-gray-400 transition-colors duration-300 ${theme.text} relative z-10 p-4 rounded-full group-hover:bg-gray-50/50`}>{icon}</div>
          </div>
        </div>
        <span className={`font-bold text-agri-text transition-colors duration-300 ${theme.text} tracking-wide text-sm bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-transparent ${theme.border}`}>{label}</span>
      </div>
    </button>
  );
};

/* --- SENSOR CARD COMPONENT --- */
interface SensorCardProps {
  title: string;
  value: string;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  trendVal: string;
  icon: React.ReactNode;
  color: 'blue' | 'orange' | 'red' | 'green';
  insight: string;
  expert: boolean;
}

const SensorCard: React.FC<SensorCardProps> = ({ 
  title, 
  value, 
  unit, 
  trend, 
  trendVal, 
  icon, 
  color,
  insight,
  expert
}) => {
  const styles = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-100', glow: 'bg-blue-50' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-100', glow: 'bg-orange-50' },
    red: { bg: 'bg-red-50', border: 'border-red-100', glow: 'bg-red-50' },
    green: { bg: 'bg-green-50', border: 'border-green-100', glow: 'bg-green-50' },
  };

  const theme = styles[color] || styles.blue;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative overflow-hidden group h-32">
       {/* Glow Effect */}
       <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity ${theme.glow}`} />

       <div className="flex justify-between items-start relative z-10">
          <div className="flex items-center gap-2">
             <div className={`p-1.5 rounded-lg ${theme.bg} ${theme.border} border`}>
               {icon}
             </div>
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{title}</span>
          </div>
          {expert && (
             <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
             </div>
          )}
       </div>

       <div className="relative z-10 mt-2">
          <div className="flex items-baseline gap-1">
             <span className="text-2xl font-bold text-gray-800">{value}</span>
             <span className="text-xs text-gray-500 font-bold">{unit}</span>
          </div>
          
          <div className="flex items-center justify-between mt-2">
             <div className="flex items-center gap-1">
                <span className={`text-xs font-bold ${trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-500' : 'text-gray-400'}`}>
                   {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendVal}
                </span>
             </div>
             {expert && (
               <span className="text-[9px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100 max-w-[80px] truncate">
                 {insight}
               </span>
             )}
          </div>
       </div>
    </div>
  );
};

/* --- 1. FARMER DASHBOARD: COMMAND CENTER --- */
const FarmerDashboard: React.FC = () => {
  const [authStep, setAuthStep] = useState<'login' | 'dashboard'>('login');
  const [pmKisanId, setPmKisanId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');
  const [expertMode, setExpertMode] = useState(false);
  
  // Drone State
  const [droneMode, setDroneMode] = useState<'scan' | 'service'>('scan');
  const [droneState, setDroneState] = useState<'idle' | 'flying' | 'analyzing' | 'complete'>('idle');
  const [droneServiceStatus, setDroneServiceStatus] = useState(0); // 0: Idle, 1: Requested, 2: Confirmed, 3: In Transit, 4: Complete
  
  // Plant Doctor State
  const [diagnosisState, setDiagnosisState] = useState<'upload' | 'analyzing' | 'result'>('upload');

  // Map Layer State
  const [activeMapLayer, setActiveMapLayer] = useState<'ndvi' | 'moisture' | 'pest'>('ndvi');

  // Harvest State
  const [harvestState, setHarvestState] = useState<'estimating' | 'ready' | 'hashed'>('estimating');

  // Community Vote State
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState({ 55: 40, 60: 80, 65: 25 });

  useEffect(() => {
    if (authStep === 'dashboard') {
      setTimeout(() => setHarvestState('ready'), 3000); // Simulating load
    }
  }, [authStep]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pmKisanId.includes('KISAN')) {
      setError('Invalid PM-KISAN ID format. Use "KISAN-XXXX".');
      return;
    }
    setError('');
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setAuthStep('dashboard');
    }, 1500);
  };

  const handleDroneScan = () => {
    setDroneState('flying');
    setTimeout(() => setDroneState('analyzing'), 3000);
    setTimeout(() => setDroneState('complete'), 6000);
  };

  const handleRequestDroneService = () => {
    setDroneServiceStatus(1); // Requested
    setTimeout(() => setDroneServiceStatus(2), 2000); // Confirmed
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files?.[0]) {
      setDiagnosisState('analyzing');
      setTimeout(() => setDiagnosisState('result'), 2500);
    }
  };

  const handleHarvestConfirm = () => {
    setHarvestState('hashed');
  };

  const handleVote = (price: 55 | 60 | 65) => {
    if (hasVoted) return;
    setVotes(prev => ({ ...prev, [price]: prev[price] + 1 }));
    setHasVoted(true);
  };

  /* --- LOGIN VIEW --- */
  if (authStep === 'login') {
    return (
      <div className="h-full flex flex-col items-center justify-center p-12 animate-fade-in">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-gray-100 shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-agri-green" />
          <div className="w-16 h-16 bg-agri-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-agri-green" />
          </div>
          <h2 className="text-2xl font-bold text-agri-text mb-2">Secure Farmer Access</h2>
          <p className="text-gray-500 mb-8 text-sm">Enter your PM-KISAN verification ID to access the command center.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="text" 
                value={pmKisanId}
                onChange={(e) => setPmKisanId(e.target.value.toUpperCase())}
                placeholder="PM-KISAN ID (e.g. KISAN-8842)"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-agri-green/50 outline-none font-mono text-center uppercase tracking-widest"
              />
              {error && <p className="text-red-500 text-xs mt-2 font-medium">{error}</p>}
            </div>
            <button 
              type="submit" 
              disabled={!pmKisanId || isVerifying}
              className="w-full bg-agri-text text-white font-bold py-3 rounded-lg shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2"
            >
              {isVerifying ? <Loader2 className="animate-spin w-4 h-4" /> : 'Verify & Access'}
            </button>
          </form>
          <p className="mt-6 text-xs text-gray-400">Secured by Government API Gateway • 256-bit Encrypted</p>
        </div>
      </div>
    );
  }

  /* --- DASHBOARD VIEW --- */
  return (
    <div className="p-6 space-y-6 animate-fade-in pb-20 bg-gray-50/50">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-agri-text flex items-center gap-2">
            AgriCommand Center <span className="text-xs bg-agri-green text-white px-2 py-0.5 rounded-full">Live</span>
          </h2>
          <p className="text-gray-500 text-sm">Farm ID: <span className="font-mono text-agri-text font-bold">AG-PJB-4421</span> • Last Sync: 2s ago</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
             <span className="text-xs font-bold text-gray-500">View Mode:</span>
             <button 
                onClick={() => setExpertMode(!expertMode)}
                className={`relative w-10 h-5 rounded-full transition-colors ${expertMode ? 'bg-agri-green' : 'bg-gray-300'}`}
             >
                <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${expertMode ? 'translate-x-5' : ''}`} />
             </button>
             <span className={`text-xs font-bold ${expertMode ? 'text-agri-green' : 'text-gray-400'}`}>
               {expertMode ? 'Expert' : 'Basic'}
             </span>
           </div>
           <button className="bg-white p-2 rounded-lg border border-gray-200 hover:border-agri-green text-gray-500 hover:text-agri-green transition-colors">
             <RefreshCw className="w-5 h-5" />
           </button>
        </div>
      </div>

      {/* TOP ROW: MAP & IDENTITY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 2️⃣ ADVANCED FARM MAP */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-[400px]">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
             <h3 className="font-bold text-agri-text flex items-center gap-2">
               <MapPin className="w-4 h-4 text-agri-green" /> Live Farm Intelligence
             </h3>
             <div className="flex gap-2">
                {(['ndvi', 'moisture', 'pest'] as const).map(layer => (
                  <button 
                    key={layer}
                    onClick={() => setActiveMapLayer(layer)}
                    className={`text-[10px] uppercase font-bold px-3 py-1 rounded-md border transition-all ${
                      activeMapLayer === layer 
                      ? 'bg-agri-text text-white border-agri-text' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {layer}
                  </button>
                ))}
             </div>
          </div>
          
          <div className="flex-1 relative bg-slate-900 group overflow-hidden">
             {/* SIMULATED PROFESSIONAL GRID MAP */}
             <div className="absolute inset-0 opacity-20" 
                  style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
             </div>
             
             {/* FARM BOUNDARY POLYGON */}
             <svg className="absolute inset-0 w-full h-full p-8" viewBox="0 0 400 200">
                <path 
                  d="M50,150 L120,180 L350,140 L320,40 L100,20 Z" 
                  fill="none" 
                  stroke={activeMapLayer === 'pest' ? '#ef4444' : '#22c55e'} 
                  strokeWidth="2"
                  className="drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                />
                
                {/* ZONES & DATA OVERLAY */}
                {activeMapLayer === 'ndvi' && (
                  <g opacity="0.6">
                    <path d="M50,150 L120,180 L200,160 L200,80 L100,20 Z" fill="#22c55e" /> {/* Zone A Good */}
                    <path d="M200,160 L350,140 L320,40 L200,80 Z" fill="#eab308" /> {/* Zone B Stress */}
                  </g>
                )}

                {activeMapLayer === 'moisture' && (
                   <g opacity="0.6">
                    <path d="M50,150 L120,180 L350,140 L320,40 L100,20 Z" fill="url(#moistureGradient)" />
                    <defs>
                      <linearGradient id="moistureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                   </g>
                )}

                {activeMapLayer === 'pest' && (
                  <g>
                    <circle cx="280" cy="90" r="15" fill="#ef4444" fillOpacity="0.3" className="animate-ping" />
                    <circle cx="280" cy="90" r="4" fill="#ef4444" />
                  </g>
                )}
             </svg>

             {/* SIDE ANALYTICS OVERLAY */}
             <div className="absolute top-4 left-4 bg-slate-800/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl text-white w-48 shadow-2xl">
                <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Zone Analysis</h4>
                <div className="space-y-3">
                   <div>
                     <div className="flex justify-between text-xs mb-1">
                       <span>Moisture</span>
                       <span className="text-blue-400 font-mono">38%</span>
                     </div>
                     <div className="w-full bg-slate-700 h-1 rounded-full"><div className="w-[38%] bg-blue-500 h-1 rounded-full"></div></div>
                   </div>
                   <div>
                     <div className="flex justify-between text-xs mb-1">
                       <span>Growth</span>
                       <span className="text-green-400 font-mono">+4%</span>
                     </div>
                     <div className="w-full bg-slate-700 h-1 rounded-full"><div className="w-[70%] bg-green-500 h-1 rounded-full"></div></div>
                   </div>
                   {activeMapLayer === 'pest' && (
                     <div className="bg-red-500/20 border border-red-500/50 p-2 rounded text-[10px] text-red-200 mt-2 flex items-center gap-2">
                       <AlertTriangle className="w-3 h-3" /> Pest Risk High
                     </div>
                   )}
                </div>
             </div>
          </div>
        </div>

        {/* IDENTITY QR PANEL */}
        <div className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-24 h-24 bg-agri-green/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
           <div className="w-20 h-20 bg-white border-2 border-dashed border-gray-300 rounded-xl mb-4 flex items-center justify-center relative group cursor-pointer hover:border-agri-green transition-colors">
              {/* Simulated QR Grid */}
              <div className="grid grid-cols-5 gap-0.5 p-2">
                 {Array.from({length: 25}).map((_,i) => (
                   <div key={i} className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'}`}></div>
                 ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/90 transition-opacity">
                <Scan className="w-6 h-6 text-agri-green" />
              </div>
           </div>
           <h3 className="font-bold text-lg text-agri-text">Ram Kishan</h3>
           <p className="text-xs text-gray-500 mb-4">ID: AG-IND-8842</p>
           <div className="w-full bg-gray-50 rounded-lg p-3 text-left space-y-2 border border-gray-100">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Registered</span>
                <span className="font-mono text-gray-800">2024-10-12</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Location</span>
                <span className="font-mono text-gray-800">30.73°N, 76.77°E</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Status</span>
                <span className="text-green-600 font-bold flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Verified</span>
              </div>
           </div>
        </div>
      </div>

      {/* 3️⃣ FULL SENSOR ANALYTICS DASHBOARD */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <SensorCard 
            title="Soil Moisture" 
            value="38%" 
            unit="Vol" 
            trend="down" 
            trendVal="2%" 
            icon={<Droplets className="w-4 h-4 text-blue-500" />} 
            color="blue"
            insight="Irrigation required in 24h"
            expert={expertMode}
         />
         <SensorCard 
            title="Soil Temp" 
            value="24.2" 
            unit="°C" 
            trend="stable" 
            trendVal="0.1" 
            icon={<Thermometer className="w-4 h-4 text-orange-500" />} 
            color="orange"
            insight="Optimal for root growth"
            expert={expertMode}
         />
         <SensorCard 
            title="NPK: Nitrogen" 
            value="Low" 
            unit="Level" 
            trend="down" 
            trendVal="Critical" 
            icon={<Activity className="w-4 h-4 text-red-500" />} 
            color="red"
            insight="Apply Urea boost"
            expert={expertMode}
         />
         <SensorCard 
            title="Growth Rate" 
            value="+2.4" 
            unit="cm/day" 
            trend="up" 
            trendVal="12%" 
            icon={<Sprout className="w-4 h-4 text-green-500" />} 
            color="green"
            insight="Exceeding weekly target"
            expert={expertMode}
         />
      </div>

      {/* MID ROW: DRONE, DOCTOR, HARVEST */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         {/* 4️⃣ DRONE COMMAND CENTER (EXTENDED) */}
         <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col h-[380px] relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <h3 className="font-bold text-agri-text flex items-center gap-2">
                <Cpu className="w-5 h-5 text-agri-text" /> Drone Command
              </h3>
              <div className="flex gap-2">
                 <button 
                   onClick={() => setDroneMode('scan')} 
                   className={`px-2 py-1 text-[10px] font-bold rounded-md transition-colors ${droneMode === 'scan' ? 'bg-agri-text text-white' : 'bg-gray-100 text-gray-500'}`}
                 >
                   Scan
                 </button>
                 <button 
                   onClick={() => setDroneMode('service')} 
                   className={`px-2 py-1 text-[10px] font-bold rounded-md transition-colors ${droneMode === 'service' ? 'bg-agri-text text-white' : 'bg-gray-100 text-gray-500'}`}
                 >
                   Service
                 </button>
              </div>
            </div>

            <div className="flex-1 bg-slate-50 rounded-xl border border-dashed border-gray-300 relative overflow-hidden flex flex-col items-center justify-center">
               
               {/* MODE 1: SCAN */}
               {droneMode === 'scan' && (
                 <>
                   {droneState === 'idle' && (
                     <div className="text-center">
                        <button 
                          onClick={handleDroneScan}
                          className="bg-agri-text text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
                        >
                          <Scan className="w-4 h-4" /> Start Aerial Scan
                        </button>
                        <p className="text-xs text-gray-400 mt-3">Est. Time: 4 mins • Battery: 82%</p>
                     </div>
                   )}

                   {droneState === 'flying' && (
                     <div className="w-full h-full bg-slate-900 relative">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover opacity-50 animate-pulse"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                           <Scan className="w-16 h-16 text-white animate-spin-slow" />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex justify-between text-white text-xs mb-1">
                            <span>Scanning Sector B...</span>
                            <span>42%</span>
                          </div>
                          <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                            <div className="h-full bg-agri-green w-[42%] animate-pulse"></div>
                          </div>
                        </div>
                     </div>
                   )}

                   {(droneState === 'analyzing' || droneState === 'complete') && (
                     <div className="w-full h-full p-4 flex flex-col animate-fade-in">
                        <div className="flex justify-between items-center mb-4">
                           <span className="text-xs font-bold text-gray-500 uppercase">Weekly Growth Comparison</span>
                           {droneState === 'analyzing' ? <Loader2 className="w-4 h-4 animate-spin text-agri-green"/> : <CheckCircle className="w-4 h-4 text-agri-green"/>}
                        </div>
                        <div className="flex-1 flex gap-2">
                           <div className="flex-1 bg-slate-200 rounded-lg relative overflow-hidden group">
                              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50" />
                              <span className="absolute bottom-2 left-2 text-[10px] bg-black/50 text-white px-1 rounded">Week 1</span>
                           </div>
                           <div className="flex-1 bg-green-100 rounded-lg relative overflow-hidden border-2 border-agri-green">
                              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" className="absolute inset-0 w-full h-full object-cover" />
                              <span className="absolute bottom-2 left-2 text-[10px] bg-agri-green text-white px-1 rounded">Current</span>
                           </div>
                        </div>
                     </div>
                   )}
                 </>
               )}

               {/* MODE 2: SERVICE (NEW SUB-HUB) */}
               {droneMode === 'service' && (
                  <div className="w-full h-full p-4 flex flex-col animate-fade-in">
                     {droneServiceStatus === 0 && (
                       <div className="text-center h-full flex flex-col items-center justify-center">
                          <p className="text-sm font-bold text-gray-700 mb-2">Need Professional Spraying?</p>
                          <p className="text-xs text-gray-500 mb-6 max-w-[200px]">Book a licensed drone pilot for pesticide or fertilizer application.</p>
                          <button 
                            onClick={handleRequestDroneService}
                            className="bg-agri-green text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-xs flex items-center gap-2"
                          >
                            <Calendar className="w-4 h-4" /> Request Service
                          </button>
                       </div>
                     )}

                     {droneServiceStatus >= 1 && (
                       <div className="flex flex-col h-full justify-between">
                          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                             <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"><User className="w-4 h-4 text-blue-600"/></div>
                                <div>
                                   <p className="text-xs font-bold text-gray-800">Ramesh Kumar</p>
                                   <p className="text-[10px] text-gray-500">Pilot • AgriScan X4</p>
                                </div>
                             </div>
                             <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                <Phone className="w-3 h-3" /> +91-98765-XXXX
                                <span className="mx-1">•</span>
                                <Calendar className="w-3 h-3" /> 22 Feb 2026
                             </div>
                          </div>

                          <div className="mt-4">
                             <p className="text-[10px] font-bold text-gray-500 mb-2 uppercase">Service Status</p>
                             <div className="relative pt-2">
                                <div className="absolute top-2.5 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
                                <div className={`absolute top-2.5 left-0 h-0.5 bg-agri-green -z-10 transition-all duration-1000 ${droneServiceStatus >= 2 ? 'w-1/2' : 'w-0'}`}></div>
                                <div className="flex justify-between">
                                   <div className="flex flex-col items-center gap-1">
                                      <div className="w-2 h-2 rounded-full bg-agri-green ring-2 ring-white"></div>
                                      <span className="text-[8px] font-bold text-agri-green">Req</span>
                                   </div>
                                   <div className="flex flex-col items-center gap-1">
                                      <div className={`w-2 h-2 rounded-full ring-2 ring-white transition-colors delay-500 ${droneServiceStatus >= 2 ? 'bg-agri-green' : 'bg-gray-300'}`}></div>
                                      <span className={`text-[8px] font-bold ${droneServiceStatus >= 2 ? 'text-agri-green' : 'text-gray-400'}`}>Conf</span>
                                   </div>
                                   <div className="flex flex-col items-center gap-1">
                                      <div className="w-2 h-2 rounded-full bg-gray-300 ring-2 ring-white"></div>
                                      <span className="text-[8px] font-bold text-gray-400">Done</span>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                     )}
                  </div>
               )}
            </div>
         </div>

         {/* 5️⃣ AI PLANT DOCTOR */}
         <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-6 shadow-sm flex flex-col h-[380px]">
            <h3 className="font-bold text-teal-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-600" /> AI Plant Doctor
            </h3>
            
            <div className="flex-1 flex flex-col">
              {diagnosisState === 'upload' && (
                <label className="flex-1 border-2 border-dashed border-teal-200 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-white hover:border-teal-400 transition-all group">
                   <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                   <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Camera className="w-6 h-6 text-teal-600" />
                   </div>
                   <span className="text-sm font-bold text-teal-800">Upload Leaf Image</span>
                   <span className="text-xs text-teal-600/60 mt-1">AI Diagnosis Analysis</span>
                </label>
              )}

              {diagnosisState === 'analyzing' && (
                 <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <Loader2 className="w-8 h-8 text-teal-600 animate-spin mb-4" />
                    <p className="font-bold text-teal-800">Analyzing Tissue Structure...</p>
                 </div>
              )}

              {diagnosisState === 'result' && (
                 <div className="flex-1 flex flex-col animate-fade-in">
                    <div className="bg-white p-3 rounded-lg border border-teal-100 shadow-sm mb-4">
                       <div className="flex justify-between items-center mb-1">
                          <h4 className="font-bold text-red-500 flex items-center gap-2"><AlertTriangle className="w-3 h-3"/> Leaf Blight</h4>
                          <span className="text-xs font-bold text-gray-400">89% Match</span>
                       </div>
                       <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                          <div className="w-[89%] bg-red-500 h-full rounded-full"></div>
                       </div>
                    </div>

                    {/* Logic Flowchart Simulation */}
                    <div className="flex-1 relative border-l-2 border-teal-200 ml-4 pl-6 space-y-6 py-2">
                        <div className="relative">
                           <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 bg-teal-200 rounded-full"></div>
                           <p className="text-[10px] text-gray-400 uppercase font-bold">Root Cause</p>
                           <p className="text-xs text-gray-700">Excess Humidity (92%)</p>
                        </div>
                        <div className="relative">
                           <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 bg-teal-400 rounded-full"></div>
                           <p className="text-[10px] text-gray-400 uppercase font-bold">Impact</p>
                           <p className="text-xs text-gray-700">Fungal Spore Growth</p>
                        </div>
                        <div className="relative">
                           <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 bg-teal-600 rounded-full"></div>
                           <p className="text-[10px] text-gray-400 uppercase font-bold">Action</p>
                           <p className="text-xs text-teal-700 font-bold">Apply Copper Fungicide</p>
                        </div>
                    </div>

                    <button 
                      onClick={() => setDiagnosisState('upload')}
                      className="text-xs text-center text-teal-600 hover:text-teal-800 font-bold mt-2"
                    >
                      Scan New Sample
                    </button>
                 </div>
              )}
            </div>
         </div>

         {/* 6️⃣ & 7️⃣ AUTOMATED HARVEST & BLOCKCHAIN */}
         <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col h-[380px]">
             <h3 className="font-bold text-agri-text mb-4 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-agri-text" /> Harvest Estimator
            </h3>
            
            <div className="flex-1 flex flex-col justify-center">
               {harvestState === 'estimating' && (
                 <div className="text-center space-y-3">
                   <Loader2 className="w-8 h-8 animate-spin text-gray-300 mx-auto" />
                   <p className="text-sm text-gray-500">Aggregating Sensor & Drone Data...</p>
                 </div>
               )}

               {harvestState === 'ready' && (
                 <div className="animate-fade-in">
                    <div className="relative w-40 h-20 mx-auto mb-6 overflow-hidden">
                       <div className="absolute top-0 left-0 w-40 h-40 rounded-full border-[12px] border-gray-100"></div>
                       <div className="absolute top-0 left-0 w-40 h-40 rounded-full border-[12px] border-agri-green border-b-transparent border-l-transparent -rotate-45"></div>
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xl font-bold text-agri-text">Ready</div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-4">
                       <div className="flex justify-between items-end mb-1">
                         <span className="text-xs text-gray-500 uppercase font-bold">Est. Yield</span>
                         <span className="text-2xl font-bold text-agri-green">1.8 Tons</span>
                       </div>
                       <p className="text-[10px] text-gray-400 flex items-center gap-1">
                         <Lock className="w-3 h-3" /> Auto-calculated (±5%)
                       </p>
                    </div>

                    <button 
                      onClick={handleHarvestConfirm}
                      className="w-full bg-agri-green text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                      Confirm & Hash to Chain
                    </button>
                 </div>
               )}

               {harvestState === 'hashed' && (
                 <div className="animate-scale-in text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                       <LinkIcon className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-lg text-agri-text">Harvest Secured</h4>
                    <div className="bg-slate-900 text-slate-400 p-3 rounded-lg font-mono text-[10px] break-all mt-4 border border-slate-700 text-left">
                       <span className="text-slate-500 block mb-1">HASH:</span>
                       0x7f9a2b3c4d5e6f...8a9b0c
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Timestamp: {new Date().toLocaleTimeString()}</p>
                 </div>
               )}
            </div>
         </div>

      </div>

      {/* NEW ROW: MARKET TRANSPARENCY & COMMUNITY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

         {/* 8️⃣ MARKET TRANSPARENCY HUB (Live Market Rates & Flow Map) */}
         <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
               <h3 className="font-bold text-agri-text flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-agri-green" /> Live Market Transparency
               </h3>
               <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span> Live Sync
               </span>
            </div>

            <div className="p-6">
               {/* A. Real-Time Rates */}
               <div className="grid grid-cols-4 gap-4 mb-8">
                  {[
                     { label: 'Farm Gate', price: '₹60', role: 'You Sold', color: 'text-gray-500' },
                     { label: 'Mandi', price: '₹75', role: 'Traded', color: 'text-orange-500' },
                     { label: 'Retailer', price: '₹85', role: 'Shelved', color: 'text-blue-500' },
                     { label: 'Customer', price: '₹90', role: 'Final', color: 'text-green-600' }
                  ].map((item, i) => (
                     <div key={i} className="text-center relative">
                        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">{item.label}</p>
                        <p className={`text-2xl font-bold ${item.color}`}>{item.price}</p>
                        <p className="text-[10px] text-gray-400">{item.role}</p>
                        {i < 3 && <ArrowRight className="absolute top-1/2 -right-3 -translate-y-1/2 w-4 h-4 text-gray-300" />}
                     </div>
                  ))}
               </div>

               {/* B. Visual Flow Map */}
               <div className="relative h-40 bg-slate-50 rounded-xl border border-dashed border-gray-200 flex items-center justify-between px-12">
                  {/* Nodes */}
                  <div className="flex flex-col items-center z-10">
                     <div className="w-10 h-10 rounded-full bg-white border-2 border-agri-green flex items-center justify-center shadow-sm">
                        <Sprout className="w-5 h-5 text-agri-green" />
                     </div>
                     <span className="text-[10px] font-bold mt-2 text-agri-text">Farm</span>
                  </div>

                  <div className="flex-1 h-0.5 bg-gray-300 relative mx-4">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200 shadow-sm">
                        +₹15 Margin
                     </div>
                  </div>

                  <div className="flex flex-col items-center z-10">
                     <div className="w-10 h-10 rounded-lg bg-white border-2 border-orange-400 flex items-center justify-center shadow-sm rotate-45">
                        <Scale className="w-5 h-5 text-orange-500 -rotate-45" />
                     </div>
                     <span className="text-[10px] font-bold mt-2 text-gray-600">Mandi</span>
                  </div>

                  <div className="flex-1 h-0.5 bg-gray-300 relative mx-4">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-gray-200">
                        +₹10 Margin
                     </div>
                  </div>

                  <div className="flex flex-col items-center z-10">
                     <div className="w-10 h-10 rounded-lg bg-white border-2 border-blue-400 flex items-center justify-center shadow-sm">
                        <Store className="w-5 h-5 text-blue-500" />
                     </div>
                     <span className="text-[10px] font-bold mt-2 text-gray-600">Retail</span>
                  </div>

                   <div className="flex-1 h-0.5 bg-gray-300 relative mx-4">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-gray-200">
                        +₹5 Margin
                     </div>
                  </div>

                  <div className="flex flex-col items-center z-10">
                     <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-800 flex items-center justify-center shadow-sm">
                        <User className="w-5 h-5 text-gray-800" />
                     </div>
                     <span className="text-[10px] font-bold mt-2 text-gray-600">Customer</span>
                  </div>
               </div>

               {/* C. Mini Route Vis */}
               <div className="mt-6 flex items-center gap-4">
                   <div className="w-16 h-16 bg-blue-50 rounded-lg flex flex-col items-center justify-center border border-blue-100">
                      <Navigation className="w-6 h-6 text-blue-500 mb-1" />
                      <span className="text-[8px] font-bold text-blue-700">Route Map</span>
                   </div>
                   <div className="flex-1">
                      <p className="text-xs font-bold text-gray-700">Logistics Verified Route</p>
                      <p className="text-[10px] text-gray-500">Punjab Farm → Haryana Mandi → Delhi Distribution → Local Retail</p>
                   </div>
               </div>
            </div>
         </div>

         {/* 9️⃣ COMMUNITY INTELLIGENCE (Voting & Sentiment) */}
         <div className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
               <h3 className="font-bold text-agri-text flex items-center gap-2">
                  <Users className="w-4 h-4 text-agri-green" /> Community Voice
               </h3>
               <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500">
                  <Users className="w-3 h-3" /> 1.2k Online
               </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
               {/* A. Live Poll */}
               <div className="mb-6">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-3 flex items-center gap-2">
                     <Vote className="w-3 h-3" /> Live Price Poll: Tomato
                  </p>
                  <div className="space-y-3">
                     {[55, 60, 65].map((price) => {
                        // Calculate percentage for bar width
                        const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
                        const count = votes[price as 55 | 60 | 65];
                        const percentage = (count / totalVotes) * 100;
                        const isWinner = price === 60; // Hardcoded winner logic for demo

                        return (
                           <button 
                             key={price}
                             onClick={() => handleVote(price as 55 | 60 | 65)}
                             disabled={hasVoted}
                             className={`w-full relative h-10 rounded-lg overflow-hidden border transition-all ${
                                hasVoted && isWinner ? 'border-agri-green ring-1 ring-agri-green' : 'border-gray-100 hover:border-gray-300'
                             }`}
                           >
                              {/* Background Bar */}
                              <div 
                                className={`absolute top-0 left-0 h-full transition-all duration-1000 ${isWinner ? 'bg-green-100' : 'bg-gray-100'}`} 
                                style={{ width: hasVoted ? `${percentage}%` : '0%' }}
                              ></div>
                              
                              {/* Content */}
                              <div className="absolute inset-0 flex items-center justify-between px-3 z-10">
                                 <span className="text-sm font-bold text-gray-700">₹{price}/kg</span>
                                 {hasVoted ? (
                                    <span className="text-xs font-bold text-gray-500">{count} votes</span>
                                 ) : (
                                    <span className="text-[10px] text-gray-400">Vote</span>
                                 )}
                              </div>
                           </button>
                        );
                     })}
                  </div>
                  {hasVoted && (
                     <p className="text-[10px] text-center text-green-600 font-bold mt-2">
                        Most Demanded Price: ₹60
                     </p>
                  )}
               </div>

               {/* B. Regional Snapshot */}
               <div className="bg-slate-50 rounded-xl p-4 border border-gray-200 mt-auto">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Regional Sentiment</p>
                  <div className="flex items-center justify-between">
                     <div>
                        <p className="text-xs text-gray-500">Trending Crop</p>
                        <p className="font-bold text-agri-text">Wheat (HD-2967)</p>
                     </div>
                     <div className="text-right">
                        <p className="text-xs text-gray-500">Market Mood</p>
                        <p className="font-bold text-green-600 flex items-center gap-1 justify-end">
                           <TrendingUp className="w-3 h-3" /> Bullish
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
};

/* --- 2. MANDI DASHBOARD: TRADE & VERIFICATION ENGINE --- */
const MandiDashboard: React.FC = () => {
   const [logisticsView, setLogisticsView] = useState<'request' | 'booked'>('request');

   return (
    <div className="p-8 bg-gray-50/50 h-full animate-fade-in space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
         <div>
            <h2 className="text-2xl font-bold text-agri-text flex items-center gap-2">
               <Scale className="w-6 h-6 text-agri-brown" /> Trade & Verification Console
            </h2>
            <p className="text-sm text-gray-500">Real-time eNAM integration • Smart Contracts Active</p>
         </div>
         <div className="flex gap-2">
             <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-bold text-gray-600">Network Live</span>
             </div>
         </div>
      </div>

      {/* TOP ROW: PRICE DISCOVERY & CONTRACT AUDITOR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

         {/* 1️⃣ PRICE DISCOVERY ENGINE (eNAM SIMULATION) */}
         <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
               <h3 className="font-bold text-agri-text flex items-center gap-2">
                  <Coins className="w-4 h-4 text-agri-brown" /> Price Discovery Engine
               </h3>
               <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100 font-bold">
                  Target Band: ₹62–₹68
               </span>
            </div>
            
            <div className="p-0 overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="text-[10px] text-gray-400 uppercase border-b border-gray-100">
                        <th className="px-6 py-3 font-bold">Mandi Name</th>
                        <th className="px-6 py-3 font-bold">Distance</th>
                        <th className="px-6 py-3 font-bold">Price Range</th>
                        <th className="px-6 py-3 font-bold">Demand</th>
                        <th className="px-6 py-3 font-bold">Action</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm">
                     <tr className="group hover:bg-gray-50 transition-colors border-b border-gray-50">
                        <td className="px-6 py-4 font-bold text-gray-800">Khanna Mandi (A)</td>
                        <td className="px-6 py-4 text-gray-500">12 km</td>
                        <td className="px-6 py-4 font-mono font-medium text-gray-700">₹58 – ₹65</td>
                        <td className="px-6 py-4"><span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded">High</span></td>
                        <td className="px-6 py-4"><button className="text-xs font-bold text-blue-600 hover:underline">Connect</button></td>
                     </tr>
                     <tr className="group hover:bg-blue-50/30 transition-colors border-b border-gray-50 bg-blue-50/10">
                        <td className="px-6 py-4 font-bold text-blue-800 flex items-center gap-2">
                           Sirhind Mandi (B) <Sparkles className="w-3 h-3 text-blue-500"/>
                        </td>
                        <td className="px-6 py-4 text-gray-500">28 km</td>
                        <td className="px-6 py-4 font-mono font-bold text-blue-700">₹60 – ₹70</td>
                        <td className="px-6 py-4"><span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Very High</span></td>
                        <td className="px-6 py-4"><button className="text-xs font-bold text-blue-600 hover:underline">Best Match</button></td>
                     </tr>
                     <tr className="group hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-800">Rajpura Mandi (C)</td>
                        <td className="px-6 py-4 text-gray-500">45 km</td>
                        <td className="px-6 py-4 font-mono font-medium text-gray-700">₹55 – ₹63</td>
                        <td className="px-6 py-4"><span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Moderate</span></td>
                        <td className="px-6 py-4"><button className="text-xs font-bold text-blue-600 hover:underline">Connect</button></td>
                     </tr>
                  </tbody>
               </table>
            </div>
            
            {/* AI Insight Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center gap-3">
               <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
               <p className="text-xs text-gray-600">
                  <span className="font-bold">AI Insight:</span> Mandi B offers +6% margin potential despite extra distance.
               </p>
            </div>
         </div>

         {/* 2️⃣ SMART CONTRACT AUDITOR */}
         <div className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full -mr-10 -mt-10 blur-xl"></div>
            
            <h3 className="font-bold text-agri-text flex items-center gap-2 mb-6 relative z-10">
               <FileCheck className="w-4 h-4 text-agri-brown" /> Contract Auditor
            </h3>

            <div className="flex-1 flex flex-col gap-4 relative z-10">
               {/* Discrepancy Card */}
               <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-xs font-bold text-red-700 uppercase flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Mismatch Flagged
                     </span>
                     <span className="text-[10px] font-bold bg-white text-red-500 px-2 py-0.5 rounded shadow-sm border border-red-100">Risk Score: High</span>
                  </div>
                  
                  <div className="space-y-2 mt-3">
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Declared Yield:</span>
                        <span className="font-bold text-gray-800">2.5 Tons</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-600">IoT Predicted:</span>
                        <span className="font-bold text-blue-600">1.9 Tons</span>
                     </div>
                     <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-red-500 w-[24%] ml-auto"></div> {/* Visualizing deviation */}
                     </div>
                     <p className="text-[10px] text-red-500 text-right mt-1 font-bold">+24% Deviation</p>
                  </div>
               </div>

               {/* Reason Flow */}
               <div className="border-l-2 border-gray-200 pl-4 py-1 space-y-4">
                  <div className="relative">
                     <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-gray-300"></div>
                     <p className="text-[10px] font-bold text-gray-400">Analysis Path</p>
                     <p className="text-xs text-gray-600">Low Soil Moisture (Week 4-6)</p>
                  </div>
                  <div className="relative">
                     <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-gray-300"></div>
                     <p className="text-xs text-gray-600">Reduced Biomass Index (Drone)</p>
                  </div>
                  <div className="relative">
                     <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-red-500"></div>
                     <p className="text-xs font-bold text-red-600">Yield Prediction Lowered</p>
                  </div>
               </div>
            </div>
         </div>

      </div>

      {/* BOTTOM ROW: TRACEABILITY & LOGISTICS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

         {/* 3️⃣ BATCH TRACEABILITY SYSTEM */}
         <div className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col">
            <h3 className="font-bold text-agri-text flex items-center gap-2 mb-6">
               <QrCode className="w-4 h-4 text-agri-brown" /> Batch Digital Twin
            </h3>

            <div className="flex flex-col items-center text-center mb-6">
               <div className="w-32 h-32 bg-gray-900 rounded-xl flex items-center justify-center mb-3 shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 border-4 border-white/10 rounded-xl"></div>
                  <QrCode className="w-16 h-16 text-white" />
                  <div className="absolute bottom-2 text-[8px] text-gray-400 font-mono">BATCH #992A</div>
               </div>
               <p className="text-xs font-bold text-agri-green flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Blockchain Registered
               </p>
            </div>

            {/* Interactive Timeline */}
            <div className="flex-1 space-y-0">
               <div className="flex gap-4 pb-6 border-l border-gray-200 ml-2 pl-6 relative">
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-agri-brown"></div>
                  <div>
                     <p className="text-[10px] font-bold text-gray-400 uppercase">Day 1</p>
                     <p className="text-xs font-bold text-gray-800">Sowing (Wheat HD-2967)</p>
                  </div>
               </div>
               <div className="flex gap-4 pb-6 border-l border-gray-200 ml-2 pl-6 relative">
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                  <div>
                     <p className="text-[10px] font-bold text-gray-400 uppercase">Day 20</p>
                     <p className="text-xs font-bold text-gray-800">Irrigation Applied</p>
                     <p className="text-[10px] text-blue-500">Moisture restored to 60%</p>
                  </div>
               </div>
               <div className="flex gap-4 pb-0 border-l-0 ml-2 pl-6 relative">
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                  <div>
                     <p className="text-[10px] font-bold text-gray-400 uppercase">Day 60</p>
                     <p className="text-xs font-bold text-gray-800">Harvest Verified</p>
                  </div>
               </div>
            </div>
         </div>

         {/* 4️⃣ LOGISTICS POOLER (UBER FOR TRUCKS) */}
         <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
               <h3 className="font-bold text-agri-text flex items-center gap-2">
                  <Truck className="w-4 h-4 text-agri-brown" /> Smart Logistics Aggregator
               </h3>
               <div className="flex gap-2">
                  <span className="text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded border border-green-100 font-bold">
                     Pooling Active: 3 Farmers
                  </span>
               </div>
            </div>

            <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* A. Map Visualization */}
               <div className="bg-slate-100 rounded-xl relative overflow-hidden border border-gray-200 min-h-[200px]">
                  {/* Simulated Map */}
                  <div className="absolute inset-0 opacity-10" 
                        style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                  </div>
                  
                  {/* Route Lines */}
                  <svg className="absolute inset-0 w-full h-full p-4 pointer-events-none">
                     <path d="M50,50 L150,100 L250,60" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
                     <path d="M150,100 L250,150" fill="none" stroke="#22c55e" strokeWidth="3" /> {/* Main route */}
                  </svg>

                  {/* Pins */}
                  <div className="absolute top-[40px] left-[40px] flex flex-col items-center">
                     <div className="w-2 h-2 bg-gray-500 rounded-full mb-1"></div>
                     <span className="text-[8px] bg-white px-1 rounded shadow">Farmer A (1.2T)</span>
                  </div>
                  <div className="absolute top-[90px] left-[140px] flex flex-col items-center">
                     <div className="w-3 h-3 bg-agri-green rounded-full mb-1 border-2 border-white shadow-lg"></div>
                     <span className="text-[8px] bg-white px-1 rounded shadow font-bold">You (0.8T)</span>
                  </div>
                  <div className="absolute top-[50px] right-[40px] flex flex-col items-center">
                     <div className="w-2 h-2 bg-gray-500 rounded-full mb-1"></div>
                     <span className="text-[8px] bg-white px-1 rounded shadow">Farmer C (1.5T)</span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-sm border border-gray-200">
                     <div className="flex items-center gap-2 mb-1">
                        <Route className="w-3 h-3 text-green-600" />
                        <span className="text-[10px] font-bold text-gray-700">Optimal Route</span>
                     </div>
                     <p className="text-[10px] text-gray-500">Pickup ETA: 14:30 Today</p>
                  </div>
               </div>

               {/* B. Cost & Action */}
               <div className="flex flex-col justify-center space-y-5">
                  <div className="space-y-3">
                     <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Total Pooled Load</span>
                        <span className="text-sm font-bold text-gray-800">3.5 Tons</span>
                     </div>
                     
                     <div className="bg-gray-100 rounded-full h-2 w-full overflow-hidden">
                        <div className="bg-agri-brown w-[85%] h-full"></div> {/* 85% full truck */}
                     </div>
                     <div className="flex justify-between text-[10px] text-gray-400">
                        <span>Truck Cap: 4T</span>
                        <span>85% Full</span>
                     </div>
                  </div>

                  <div className="bg-green-50 border border-green-100 rounded-xl p-4 space-y-2">
                     <div className="flex justify-between items-center text-xs text-gray-500 line-through">
                        <span>Individual Cost:</span>
                        <span>₹8,000</span>
                     </div>
                     <div className="flex justify-between items-center text-sm font-bold text-gray-800">
                        <span>Shared Cost:</span>
                        <span>₹5,200</span>
                     </div>
                     <div className="border-t border-green-200 pt-2 mt-2 flex items-center justify-between">
                        <span className="text-xs font-bold text-green-700">Your Savings:</span>
                        <span className="text-sm font-bold text-green-700">₹2,800 (35%)</span>
                     </div>
                  </div>

                  {logisticsView === 'request' ? (
                     <button 
                        onClick={() => setLogisticsView('booked')}
                        className="w-full bg-agri-brown text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-agri-text transition-all flex items-center justify-center gap-2"
                     >
                        <Share2 className="w-4 h-4" /> Book Shared Truck
                     </button>
                  ) : (
                     <div className="bg-gray-800 text-white rounded-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <Loader2 className="w-4 h-4 animate-spin text-green-400" />
                           <span className="text-xs font-bold">Matching Driver...</span>
                        </div>
                        <button onClick={() => setLogisticsView('request')} className="text-[10px] underline text-gray-400">Cancel</button>
                     </div>
                  )}
               </div>
            </div>
         </div>

      </div>

    </div>
  );
};

/* 3. Customer Dashboard: TRANSPARENCY & TRUST ENGINE */
const CustomerDashboard: React.FC = () => {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'verified'>('idle');
  const [consumerPrice, setConsumerPrice] = useState('');
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [advancedMode, setAdvancedMode] = useState(false);
  const [priceAnalysis, setPriceAnalysis] = useState<'fair' | 'high' | 'overpriced' | null>(null);
  const [rating, setRating] = useState(0);

  const handleScan = () => {
    setScanState('scanning');
    setTimeout(() => {
        setScanState('verified');
        setTimeout(() => setShowPriceModal(true), 800); // Auto-open modal after verification
    }, 2000);
  };

  const handlePriceSubmit = () => {
    const p = parseFloat(consumerPrice);
    if (!p) return;
    // Analysis Logic: Fair range 75-85
    if (p <= 85) setPriceAnalysis('fair');
    else if (p <= 95) setPriceAnalysis('high');
    else setPriceAnalysis('overpriced');
    setShowPriceModal(false);
  };

  return (
    <div className="p-8 bg-gray-50/50 h-full animate-fade-in space-y-6 relative">
      
      {/* 1️⃣ ENTRY POPUP - "PRICE YOU PAID" ANALYZER */}
      {showPriceModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-3xl">
           <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full animate-scale-in border border-gray-100">
              <div className="text-center mb-6">
                 <div className="w-14 h-14 bg-agri-tealLight rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-7 h-7 text-agri-teal" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900">How much did you pay?</h3>
                 <p className="text-sm text-gray-500 mt-2">Help our AI analyze price fairness by entering your purchase price.</p>
              </div>
              <div className="relative mb-6">
                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                 <input 
                   type="number" 
                   value={consumerPrice}
                   onChange={(e) => setConsumerPrice(e.target.value)}
                   className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-bold text-lg focus:ring-2 focus:ring-agri-teal focus:outline-none text-center"
                   placeholder="0.00"
                   autoFocus
                 />
              </div>
              <div className="flex flex-col gap-3">
                 <button 
                   onClick={handlePriceSubmit}
                   disabled={!consumerPrice}
                   className="w-full bg-agri-teal text-white py-3 rounded-xl font-bold hover:bg-agri-text transition-colors disabled:opacity-50"
                 >
                   Analyze Fairness
                 </button>
                 <button onClick={() => setShowPriceModal(false)} className="text-xs text-gray-400 hover:text-gray-600 font-medium">Skip Analysis</button>
              </div>
           </div>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-2">
         <div>
            <h2 className="text-2xl font-bold text-agri-text flex items-center gap-2">
               <ShieldCheck className="w-6 h-6 text-agri-teal" /> Transparency & Trust Engine
            </h2>
            <p className="text-sm text-gray-500">Blockchain Verified • Farm-to-Table Tracking</p>
         </div>
         <div className="flex items-center gap-3">
             <button 
               onClick={() => setAdvancedMode(!advancedMode)}
               className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${advancedMode ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-500 border-gray-200'}`}
             >
                {advancedMode ? <BarChart2 className="w-4 h-4" /> : <PieChart className="w-4 h-4" />}
                {advancedMode ? 'Expert Mode' : 'Basic View'}
             </button>
             <div className="relative p-2 bg-white rounded-full shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50">
                <Bell className="w-5 h-5 text-gray-500" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
             </div>
         </div>
      </div>

      {/* TOP ROW: QR SCANNER & FARMER PROFILE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

         {/* 1️⃣ SCAN & VERIFY PRODUCE */}
         <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col md:flex-row gap-6">
            {/* Scanner UI */}
            <div className="w-full md:w-1/3 bg-gray-900 rounded-xl relative overflow-hidden flex flex-col items-center justify-center p-6 min-h-[200px]">
               {scanState === 'idle' && (
                  <button 
                     onClick={handleScan}
                     className="flex flex-col items-center gap-2 group"
                  >
                     <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10">
                        <Scan className="w-8 h-8 text-white" />
                     </div>
                     <span className="text-white font-bold text-sm mt-2">Tap to Scan QR</span>
                  </button>
               )}
               {scanState === 'scanning' && (
                  <>
                    <div className="absolute inset-0 bg-agri-green/20 animate-pulse"></div>
                    <Scan className="w-12 h-12 text-agri-green animate-spin-slow relative z-10" />
                    <p className="text-white text-xs mt-4 relative z-10">Verifying on Blockchain...</p>
                  </>
               )}
               {scanState === 'verified' && (
                  <div className="flex flex-col items-center animate-scale-in">
                     <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2 shadow-lg shadow-green-500/30">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                     </div>
                     <p className="text-white font-bold">Verified Authentic</p>
                  </div>
               )}
               
               {/* Decorative Scanner Frame */}
               <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/50 rounded-tl-lg"></div>
               <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/50 rounded-tr-lg"></div>
               <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/50 rounded-bl-lg"></div>
               <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/50 rounded-br-lg"></div>
            </div>

            {/* Verification Details */}
            <div className="flex-1 space-y-4">
               {scanState === 'verified' ? (
                  <div className="animate-fade-in space-y-4">
                     <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Product Details</p>
                        <h3 className="text-xl font-bold text-agri-text">Organic Wheat (HD-2967)</h3>
                        <p className="text-sm text-gray-500">Batch #992A • Harvested 2 Days Ago</p>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                           <p className="text-[10px] font-bold text-green-700 uppercase">Origin Farm</p>
                           <p className="text-sm font-bold text-gray-800">GreenValley Farms</p>
                           <p className="text-[10px] text-gray-500">Punjab, India</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                           <p className="text-[10px] font-bold text-blue-700 uppercase">Blockchain Hash</p>
                           <p className="text-sm font-mono text-gray-800 truncate">0x71C...9A23</p>
                           <p className="text-[10px] text-gray-500">Immutable Record</p>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col justify-center items-center text-center p-4 border-2 border-dashed border-gray-200 rounded-xl">
                     <Search className="w-8 h-8 text-gray-300 mb-2" />
                     <p className="text-sm text-gray-400 font-medium">Scan a product to reveal its complete journey and safety record.</p>
                  </div>
               )}
            </div>
         </div>

         {/* 2️⃣ FARMER TRUST PROFILE */}
         <div className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col">
            <h3 className="font-bold text-agri-text flex items-center gap-2 mb-4">
               <User className="w-4 h-4 text-agri-teal" /> Farmer Profile
            </h3>
            
            <div className="flex items-center gap-4 mb-6">
               <div className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden border-2 border-white shadow-md">
                   <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-bold text-xl">RK</div>
               </div>
               <div>
                  <h4 className="font-bold text-lg text-agri-text">Ram Kishan</h4>
                  <p className="text-xs text-gray-500">Farming since 2012 • Punjab</p>
                  <div className="flex items-center gap-1 mt-1">
                     <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                     <span className="text-sm font-bold text-gray-800">4.8</span>
                     <span className="text-xs text-gray-400">(1,240 verified batches)</span>
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               <div>
                  <div className="flex justify-between text-xs mb-1">
                     <span className="text-gray-500">Trust Score</span>
                     <span className="font-bold text-agri-teal">98/100</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-agri-teal w-[98%]"></div>
                  </div>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl text-center">
                   <p className="text-xs font-bold text-gray-400 uppercase mb-2">Rate Your Experience</p>
                   <div className="flex justify-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                         <button 
                           key={star}
                           onClick={() => setRating(star)}
                           className={`transition-colors ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                         >
                            <Star className="w-6 h-6" />
                         </button>
                      ))}
                   </div>
               </div>
            </div>
         </div>
      </div>

      {/* MIDDLE ROW: 2️⃣ PRICE FAIRNESS & 3️⃣ SAFETY DASHBOARD */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

         {/* 2️⃣ LIVE PRICE FAIRNESS ANALYSIS PANEL */}
         <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-agri-text flex items-center gap-2">
                  <Coins className="w-4 h-4 text-agri-teal" /> Price Fairness Analysis
               </h3>
               {priceAnalysis && (
                  <span className={`text-[10px] font-bold px-2 py-1 rounded capitalize ${
                     priceAnalysis === 'fair' ? 'bg-green-100 text-green-700' : 
                     priceAnalysis === 'high' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                  }`}>
                     Status: {priceAnalysis}
                  </span>
               )}
            </div>

            {priceAnalysis ? (
               <div className="space-y-4 animate-fade-in">
                  <div className="space-y-3">
                     {[
                        { label: 'Farmer Sold', val: 50, color: 'bg-gray-300', width: '55%' },
                        { label: 'Mandi Trade', val: 60, color: 'bg-gray-400', width: '65%' },
                        { label: 'Fair Retail', val: 85, color: 'bg-green-400', width: '85%' },
                        { label: 'You Paid', val: parseFloat(consumerPrice), color: priceAnalysis === 'fair' ? 'bg-green-600' : 'bg-red-500', width: `${Math.min(parseFloat(consumerPrice), 100)}%` }
                     ].map((item, i) => (
                        <div key={i}>
                           <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-500 font-medium">{item.label}</span>
                              <span className="font-bold text-gray-800">₹{item.val}</span>
                           </div>
                           <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                              <div className={`h-full rounded-full transition-all duration-1000 ${item.color}`} style={{ width: item.width }}></div>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600 border border-gray-100 flex gap-2 items-start">
                     <Info className="w-4 h-4 text-agri-teal shrink-0 mt-0.5" />
                     <p>
                        You paid <span className={`font-bold ${priceAnalysis === 'fair' ? 'text-green-600' : 'text-red-500'}`}>
                           {consumerPrice && Math.round(((parseFloat(consumerPrice) - 85)/85)*100)}% {parseFloat(consumerPrice) > 85 ? 'more' : 'less'}
                        </span> than the predicted fair market range (₹72-₹85).
                     </p>
                  </div>
               </div>
            ) : (
               <div className="flex-1 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-gray-100 rounded-xl bg-gray-50/50">
                  <DollarSign className="w-8 h-8 text-gray-300 mb-2" />
                  <p className="text-sm text-gray-400">Enter your purchase price to unlock full breakdown.</p>
                  <button onClick={() => setShowPriceModal(true)} className="mt-3 text-xs font-bold text-agri-teal hover:underline">Open Input</button>
               </div>
            )}
         </div>

         {/* 3️⃣ PESTICIDE & INPUT TRANSPARENCY REPORT */}
         <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col">
            <h3 className="font-bold text-agri-text flex items-center gap-2 mb-6">
               <AlertOctagon className="w-4 h-4 text-agri-teal" /> Crop Input Transparency
            </h3>

            <div className="space-y-5">
               {/* Pesticide */}
               <div className="group">
                  <div className="flex justify-between text-xs mb-1">
                     <span className="text-gray-500">Pesticide Usage</span>
                     <span className="font-bold text-green-600">0.02 mg/kg <span className="text-[10px] text-gray-400 font-normal">(Safe)</span></span>
                  </div>
                  <div className="relative w-full h-4 bg-gray-100 rounded-full overflow-hidden flex items-center">
                     {/* Regional Avg Marker */}
                     <div className="absolute left-[40%] top-0 bottom-0 w-0.5 bg-gray-400 z-10"></div> 
                     <div className="absolute left-[40%] -top-4 text-[8px] text-gray-400">Avg</div>
                     
                     <div className="h-2 bg-green-500 w-[15%] rounded-full ml-1"></div>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">85% less than regional average.</p>
               </div>

               {/* Fertilizer */}
               <div>
                  <div className="flex justify-between text-xs mb-1">
                     <span className="text-gray-500">Nitrogen Input</span>
                     <span className="font-bold text-orange-500">Moderate</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-green-400 via-orange-400 to-red-500 w-[45%]"></div>
                  </div>
               </div>

               {/* 4️⃣ AI RISK METRICS */}
               <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-col items-center text-center">
                     <div className="relative w-12 h-12 flex items-center justify-center mb-1">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                           <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                           <path className="text-green-500" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                        </svg>
                        <span className="absolute text-[10px] font-bold text-green-600">98%</span>
                     </div>
                     <span className="text-[9px] text-gray-500 uppercase font-bold">Safety</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                     <div className="relative w-12 h-12 flex items-center justify-center mb-1">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                           <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                           <path className="text-teal-500" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                        </svg>
                        <span className="absolute text-[10px] font-bold text-teal-600">A+</span>
                     </div>
                     <span className="text-[9px] text-gray-500 uppercase font-bold">Eco Score</span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                     <div className="relative w-12 h-12 flex items-center justify-center mb-1">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                           <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                           <path className="text-blue-500" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                        </svg>
                        <ShieldCheck className="w-4 h-4 text-blue-500 absolute" />
                     </div>
                     <span className="text-[9px] text-gray-500 uppercase font-bold">Verified</span>
                  </div>
               </div>
            </div>
         </div>

      </div>

      {/* 5️⃣ ADVANCED MODE TOGGLE CONTENT */}
      {advancedMode && (
         <div className="bg-slate-900 rounded-2xl p-6 shadow-lg text-white animate-slide-up">
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 flex items-center gap-2">
               <Activity className="w-4 h-4" /> Advanced Supply Chain Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-xs text-gray-400 mb-2">Nutrient Application Timeline</p>
                  <div className="h-20 flex items-end gap-1">
                     {[20, 35, 60, 40, 30, 20, 10].map((h, i) => (
                        <div key={i} className="flex-1 bg-agri-teal/50 hover:bg-agri-teal transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                     ))}
                  </div>
               </div>
               <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-xs text-gray-400 mb-2">Water Efficiency Index</p>
                  <div className="flex items-center justify-center h-20">
                     <div className="text-3xl font-bold text-blue-400">94<span className="text-sm text-gray-500">%</span></div>
                  </div>
               </div>
               <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-xs text-gray-400 mb-2">Carbon Footprint</p>
                  <div className="flex items-center justify-center h-20">
                     <div className="text-3xl font-bold text-green-400">0.4<span className="text-sm text-gray-500">kg/unit</span></div>
                  </div>
               </div>
            </div>
         </div>
      )}

      {/* 6️⃣ FULL TRANSPARENCY FLOWCHART */}
      <div className="border-t border-gray-200 pt-8 mt-4">
         <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 text-center">Verified Supply Chain Journey</p>
         
         <div className="relative flex justify-between items-center px-4 md:px-12">
            {/* Background Line */}
            <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-gray-200 -z-10"></div>

            {[
               { label: 'Farmer', icon: <Sprout className="w-4 h-4"/>, time: 'Sept 01', status: 'verified' },
               { label: 'IoT Check', icon: <Activity className="w-4 h-4"/>, time: 'Sept 15', status: 'verified' },
               { label: 'Drone Scan', icon: <Cpu className="w-4 h-4"/>, time: 'Oct 10', status: 'verified' },
               { label: 'Harvest', icon: <Leaf className="w-4 h-4"/>, time: 'Oct 24', status: 'verified' },
               { label: 'Mandi', icon: <Scale className="w-4 h-4"/>, time: 'Oct 25', status: 'verified' },
               { label: 'Retail', icon: <Store className="w-4 h-4"/>, time: 'Oct 26', status: 'verified' },
               { label: 'You', icon: <User className="w-4 h-4"/>, time: 'Today', status: 'active' },
            ].map((step, i) => (
               <div key={i} className="flex flex-col items-center gap-3 group relative bg-gray-50/50 p-2 rounded-xl">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 bg-white ${
                     step.status === 'verified' ? 'border-agri-teal text-agri-teal shadow-md' : 'border-gray-300 text-gray-400'
                  }`}>
                     {step.status === 'verified' ? <CheckCircle2 className="w-4 h-4" /> : step.icon}
                  </div>
                  <div className="text-center absolute -bottom-10 w-20">
                     <p className="text-[10px] font-bold text-gray-700">{step.label}</p>
                     <p className="text-[8px] text-gray-400">{step.time}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};