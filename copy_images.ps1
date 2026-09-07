$dest = "C:\Users\Piyush Junghare\.gemini\antigravity-ide\scratch\vr-multiventures\src\assets"
Copy-Item "C:\Users\Piyush Junghare\.gemini\antigravity-ide\brain\f2926769-63fc-4e18-a4ff-357c97ced245\telecom_tower_transport_*.jpg" "$dest\tower-transport.jpg"
Copy-Item "C:\Users\Piyush Junghare\.gemini\antigravity-ide\brain\f2926769-63fc-4e18-a4ff-357c97ced245\industrial_logistics_hub_*.jpg" "$dest\logistics-hub.jpg"
Copy-Item "C:\Users\Piyush Junghare\.gemini\antigravity-ide\brain\f2926769-63fc-4e18-a4ff-357c97ced245\secure_handling_inspection_*.jpg" "$dest\handling-inspection.jpg"
Copy-Item "C:\Users\Piyush Junghare\.gemini\antigravity-ide\brain\f2926769-63fc-4e18-a4ff-357c97ced245\telecom_ridge_infrastructure_*.jpg" "$dest\ridge-infrastructure.jpg"
Get-ChildItem $dest
Write-Host "All assets successfully transferred"
