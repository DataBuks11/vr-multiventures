Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\Piyush Junghare\.gemini\antigravity-ide\brain\f2926769-63fc-4e18-a4ff-357c97ced245\vr_multiventures_reference.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$destDir = "C:\Users\Piyush Junghare\.gemini\antigravity-ide\scratch\vr-multiventures\src\assets"

# Clean crop for VR Symbol alone: X=32, Y=892, Width=108, Height=68
$symbolRect = New-Object System.Drawing.Rectangle(32, 892, 108, 68)
$symbolBmp = $src.Clone($symbolRect, $src.PixelFormat)
$symbolBmp.Save("$destDir\vr-symbol.png", [System.Drawing.Imaging.ImageFormat]::Png)
$symbolBmp.Dispose()

$src.Dispose()
Write-Host "Clean VR symbol crop done"
