import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Truck, MapPin, Navigation, Clock, ShieldCheck, ArrowRight, Gauge, Check } from 'lucide-react';

const origins = [
  { id: 'nagpur-central', name: 'Nagpur Central Hub (Sakkardara / Bidipeth)', baseKm: 0 },
  { id: 'butibori', name: 'Butibori Industrial Logistics Complex', baseKm: 28 },
  { id: 'mihan', name: 'MIHAN Multi-Modal Cargo SEZ', baseKm: 18 },
  { id: 'hingna', name: 'Hingna MIDC Logistics Depot', baseKm: 16 },
];

const destinations = [
  { id: 'wardha', name: 'Wardha Telecom Cluster', distanceKm: 78, avgHours: 2.2, terrain: 'National Highway' },
  { id: 'chandrapur', name: 'Chandrapur Industrial Corridor', distanceKm: 152, avgHours: 4.1, terrain: 'Heavy Freight Corridor' },
  { id: 'amravati', name: 'Amravati Expressway Pad', distanceKm: 156, avgHours: 3.8, terrain: 'Access Controlled Highway' },
  { id: 'gondia', name: 'Gondia Border Remote Site', distanceKm: 165, avgHours: 4.6, terrain: 'Semi-Urban & Rural Access' },
  { id: 'bhandara', name: 'Bhandara Cellular Link', distanceKm: 64, avgHours: 1.8, terrain: 'State Highway' },
  { id: 'yavatmal', name: 'Yavatmal Rural Tower Zone', distanceKm: 150, avgHours: 4.2, terrain: 'Hill Approach / Rural Road' },
  { id: 'raipur', name: 'Raipur Interstate Transit Point', distanceKm: 285, avgHours: 6.5, terrain: 'Interstate Freight Arterial' },
];

const cargoTypes = [
  {
    id: 'lattice',
    name: 'Lattice Tower Steel Segments (30m–60m)',
    weightClass: 'Heavy Structural',
    recommendedFleet: '32ft Multi-Axle Open Flatbed',
    pilotRequired: false,
    dunnage: 'Heavy Oak Dunnage & Ratchet Tie-Downs',
  },
  {
    id: 'monopole',
    name: 'Tubular Monopole Columns & Flanges',
    weightClass: 'Oversized Cylindrical',
    recommendedFleet: 'Low-Bed Trailer with Saddle Cradles',
    pilotRequired: true,
    dunnage: 'Contoured Rubber Saddles & Locking Chocks',
  },
  {
    id: 'bts-cabinets',
    name: 'BTS Power Cabinets & Battery Banks',
    weightClass: 'Sensitive Electronics',
    recommendedFleet: 'Air-Ride Suspension Closed Container',
    pilotRequired: false,
    dunnage: 'Vibration Dampening & Waterproof Shrouds',
  },
  {
    id: 'microwave',
    name: 'Microwave Dishes & Antenna Mount Assemblies',
    weightClass: 'Precision Telecom Payloads',
    recommendedFleet: 'Custom Rack-Equipped Covered Truck',
    pilotRequired: false,
    dunnage: 'Foam Dunnage & Anti-Static Straps',
  },
  {
    id: 'dg-sets',
    name: 'Emergency Diesel Generator Sets (DG)',
    weightClass: 'Heavy Machinery (3–7 Tonnes)',
    recommendedFleet: 'Hydraulic Tail-Lift Flatbed',
    pilotRequired: false,
    dunnage: 'Steel Floor Chocks & Multi-Point Chains',
  },
];

const urgencies = [
  { id: 'critical', name: 'Critical Site Outage (Immediate Hot-Shot Dispatch)', factor: 0.85, tag: 'HIGH PRIORITY' },
  { id: 'scheduled', name: 'Scheduled Project Window (48h Staging)', factor: 1.0, tag: 'STANDARD DISPATCH' },
  { id: 'batch', name: 'Routine Batch Haulage (Consolidated)', factor: 1.15, tag: 'COST-OPTIMIZED' },
];

export default function DynamicHaulageEstimator({ onSelectSpec }) {
  const navigate = useNavigate();
  const [selectedOrigin, setSelectedOrigin] = useState(origins[0].id);
  const [selectedDest, setSelectedDest] = useState(destinations[0].id);
  const [selectedCargo, setSelectedCargo] = useState(cargoTypes[0].id);
  const [selectedUrgency, setSelectedUrgency] = useState(urgencies[1].id);

  const originObj = useMemo(() => origins.find((o) => o.id === selectedOrigin), [selectedOrigin]);
  const destObj = useMemo(() => destinations.find((d) => d.id === selectedDest), [selectedDest]);
  const cargoObj = useMemo(() => cargoTypes.find((c) => c.id === selectedCargo), [selectedCargo]);
  const urgencyObj = useMemo(() => urgencies.find((u) => u.id === selectedUrgency), [selectedUrgency]);

  // Dynamic calculations
  const totalDistanceKm = useMemo(() => {
    return destObj.distanceKm + (originObj.baseKm > 0 ? originObj.baseKm : 0);
  }, [destObj, originObj]);

  const estimatedHours = useMemo(() => {
    const rawHours = (totalDistanceKm / 42) * urgencyObj.factor;
    return rawHours.toFixed(1);
  }, [totalDistanceKm, urgencyObj]);

  const handleApplyToDispatch = () => {
    const specSummary = `Route: ${originObj.name} to ${destObj.name} (~${totalDistanceKm} km). Cargo: ${cargoObj.name} (${cargoObj.recommendedFleet}). Urgency: ${urgencyObj.name}. Estimated transit: ~${estimatedHours} hrs.`;

    if (onSelectSpec) {
      onSelectSpec(specSummary, cargoObj.name);
    } else {
      navigate('/contact', { state: { prefilledMessage: specSummary, service: 'Mobile Tower Parts Transportation' } });
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(18, 20, 26, 0.75)',
        border: '1px solid rgba(255, 85, 0, 0.3)',
        borderRadius: '4px',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        backdropFilter: 'blur(16px)',
        position: 'relative',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-orange)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            <Calculator size={14} /> DYNAMIC CORRIDOR & HAULAGE ESTIMATOR
          </div>
          <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 400, color: '#ffffff', marginTop: '0.4rem' }}>
            Configure Real-Time Dispatch Specs
          </h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.75rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '2px', color: '#10b981', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
          <Gauge size={13} /> LIVE TELEMETRY ENGINE ACTIVE
        </div>
      </div>

      {/* Grid: Selectors */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Origin */}
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            1. Origin Depot / Staging Yard
          </label>
          <select
            value={selectedOrigin}
            onChange={(e) => setSelectedOrigin(e.target.value)}
            style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: 'rgba(0,0,0,0.85)', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', outline: 'none', borderRadius: '2px', fontSize: '0.875rem' }}
          >
            {origins.map((o) => (
              <option key={o.id} value={o.id}>
                {o.name}
              </option>
            ))}
          </select>
        </div>

        {/* Destination */}
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            2. Destination Site Corridor
          </label>
          <select
            value={selectedDest}
            onChange={(e) => setSelectedDest(e.target.value)}
            style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: 'rgba(0,0,0,0.85)', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', outline: 'none', borderRadius: '2px', fontSize: '0.875rem' }}
          >
            {destinations.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} (~{d.distanceKm} km)
              </option>
            ))}
          </select>
        </div>

        {/* Cargo Type */}
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            3. Telecom Component Payload
          </label>
          <select
            value={selectedCargo}
            onChange={(e) => setSelectedCargo(e.target.value)}
            style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: 'rgba(0,0,0,0.85)', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', outline: 'none', borderRadius: '2px', fontSize: '0.875rem' }}
          >
            {cargoTypes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Urgency */}
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            4. Dispatch Window / SLA
          </label>
          <select
            value={selectedUrgency}
            onChange={(e) => setSelectedUrgency(e.target.value)}
            style={{ width: '100%', padding: '0.85rem 1rem', backgroundColor: 'rgba(0,0,0,0.85)', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', outline: 'none', borderRadius: '2px', fontSize: '0.875rem' }}
          >
            {urgencies.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Dynamic Results Card */}
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          border: '1px solid rgba(255, 85, 0, 0.25)',
          padding: '1.5rem',
          borderRadius: '2px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
          marginBottom: '1.5rem',
        }}
      >
        <div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)' }}>
            Haulage Distance
          </div>
          <div style={{ fontSize: '1.6rem', color: '#ffffff', fontWeight: 600, marginTop: '0.25rem' }}>
            {totalDistanceKm} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400 }}>KM</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
            Terrain: {destObj.terrain}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)' }}>
            Transit & Site Delivery Window
          </div>
          <div style={{ fontSize: '1.6rem', color: 'var(--accent-orange)', fontWeight: 600, marginTop: '0.25rem' }}>
            ~{estimatedHours} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400 }}>HOURS</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.2rem' }}>
            SLA: {urgencyObj.tag}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)' }}>
            Recommended Fleet Configuration
          </div>
          <div style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 500, marginTop: '0.35rem' }}>
            {cargoObj.recommendedFleet}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
            {cargoObj.weightClass} Class
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)' }}>
            Protection & Escort Protocol
          </div>
          <div style={{ fontSize: '0.875rem', color: '#d1d5db', marginTop: '0.35rem', lineHeight: 1.4 }}>
            {cargoObj.dunnage}
          </div>
          <div style={{ fontSize: '0.75rem', color: cargoObj.pilotRequired ? '#fbbf24' : '#10b981', marginTop: '0.3rem', fontWeight: 500 }}>
            {cargoObj.pilotRequired ? '⚠️ Escort Pilot Vehicle Required' : '✓ Standard Escort Cleared'}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af', fontSize: '0.8125rem' }}>
          <ShieldCheck size={16} color="#10b981" /> E-Way Bill & Goods-In-Transit Insurance Pre-Configured
        </div>
        <button
          onClick={handleApplyToDispatch}
          style={{
            backgroundColor: 'var(--accent-orange)',
            color: '#ffffff',
            padding: '0.85rem 1.75rem',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'background-color 0.2s ease',
            boxShadow: '0 4px 15px rgba(255, 85, 0, 0.3)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-orange-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-orange)')}
        >
          Book This Spec With Central Dispatch <ArrowRight size={15} />
        </button>
      </div>

    </div>
  );
}
