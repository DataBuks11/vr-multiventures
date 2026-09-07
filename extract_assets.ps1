Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\Piyush Junghare\.gemini\antigravity-ide\brain\f2926769-63fc-4e18-a4ff-357c97ced245\vr_multiventures_reference.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$destDir = "C:\Users\Piyush Junghare\.gemini\antigravity-ide\scratch\vr-multiventures\src\assets"

# Adjusted Logo Crop: X=32, Y=892, Width=310, Height=68
$logoRect = New-Object System.Drawing.Rectangle(32, 892, 310, 68)
$logoBmp = $src.Clone($logoRect, $src.PixelFormat)
$logoBmp.Save("$destDir\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$logoBmp.Dispose()

# Also crop the VR symbol alone for icon / favicon
$symbolRect = New-Object System.Drawing.Rectangle(34, 894, 112, 54)
$symbolBmp = $src.Clone($symbolRect, $src.PixelFormat)
$symbolBmp.Save("$destDir\vr-symbol.png", [System.Drawing.Imaging.ImageFormat]::Png)
$symbolBmp.Dispose()

# Hero VR Visual Crop: X=0, Y=100, Width=682, Height=410
$heroRect = New-Object System.Drawing.Rectangle(0, 100, 682, 410)
$heroBmp = $src.Clone($heroRect, $src.PixelFormat)
$heroBmp.Save("$destDir\vr-hero-composition.png", [System.Drawing.Imaging.ImageFormat]::Png)
$heroBmp.Dispose()

$src.Dispose()
Write-Host "Recrop done"
