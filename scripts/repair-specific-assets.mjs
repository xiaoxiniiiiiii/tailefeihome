import path from 'node:path'
import sharp from 'sharp'

const assets = [
  ['29', 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1400&q=88'],
  ['30', 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1400&q=88'],
  ['31', 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1400&q=88'],
  ['32', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=88']
]
for (const [number, url] of assets) {
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) })
  if (!response.ok) throw new Error(`${number}: HTTP ${response.status}`)
  const buffer = Buffer.from(await response.arrayBuffer())
  await sharp(buffer).rotate().resize(900, 900, { fit: 'cover' }).webp({ quality: 88 }).toFile(path.resolve(`public/products/product-${number}.webp`))
}
console.log('Repaired products 29–32 with product-matched stock photos.')
