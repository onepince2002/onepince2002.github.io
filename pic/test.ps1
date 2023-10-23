# 把所有的 JPG 檔案重新命名為 image_編號.jpg
Get-ChildItem -Path "*" -Include '*.png','*.jpg' -Exclude '*image*' | ForEach-Object -Begin {
# Get-ChildItem '*.jpg' | ForEach-Object -Begin {
  $count = 16
} -Process {
  Rename-Item $_ -NewName "image_$count.jpg"
  $count++
}

# 將所有 *.jpeg 檔案的副檔名改為 jpg
Get-ChildItem *.jpeg | Rename-Item -NewName {
  [System.IO.Path]::ChangeExtension($_.Name, ".jpg")
}