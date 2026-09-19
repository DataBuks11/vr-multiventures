export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'no-store, max-age=0');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const now = new Date();
  const timestampIST = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'medium',
  });

  const corridors = [
    { id: 'c1', name: 'Nagpur - Wardha Corridor', status: 'Optimal', transitUnits: 5, avgSpeed: '52 km/h' },
    { id: 'c2', name: 'Nagpur - Chandrapur Infra Belt', status: 'Optimal', transitUnits: 4, avgSpeed: '48 km/h' },
    { id: 'c3', name: 'Nagpur - Amravati Expressway', status: 'Clear Transit', transitUnits: 6, avgSpeed: '56 km/h' },
    { id: 'c4', name: 'Nagpur - Gondia / Bhandara Route', status: 'Optimal', transitUnits: 3, avgSpeed: '50 km/h' },
    { id: 'c5', name: 'Nagpur - Raipur Interstate Link', status: 'Clear Transit', transitUnits: 4, avgSpeed: '54 km/h' },
  ];

  return res.status(200).json({
    status: 'ONLINE',
    hubLocation: '42, Solanki Patil wadi, Bidipeth road, Near Sakkardara talao, Nagpur',
    timestamp: timestampIST,
    totalFleetUnits: 28,
    activeInTransit: 22,
    dispatchReady: 6,
    activeCorridors: corridors,
    complianceStatus: '100% Transit Insured & Geo-Tagged',
    emergencyHotline: '+91 8668406011',
    operationsEmail: 'vrmultiventures@gmail.com',
  });
}
