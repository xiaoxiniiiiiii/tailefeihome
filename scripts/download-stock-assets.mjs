import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const outDir = path.resolve('public/products')
const sources = {
  living: [
    '1555041469-a586c61ea9bc',
    '1503602642458-232111445657',
    '1533090481720-856c6e3c1fdc',
    '1558997519-83ea9252edf8'
  ],
  soft: [
    '1600166898405-da9535204843',
    '1513694203232-719a280e022f',
    '1494438639946-1ebd1d20bf85',
    '1579656381226-5fc0f0100c3b'
  ],
  daily: [
    '1505693416388-ac5ce068fe85',
    '1558997519-83ea9252edf8',
    '1584622650111-993a426fbf0a',
    '1549497538-303791108f95'
  ],
  light: [
    '1507473885765-e6ed057f782c',
    '1540932239986-30128078f3c5',
    '1513506003901-1e6a229e2d15',
    '1524484485831-a92ffc0de03f'
  ],
  kitchen: [
    '1556911220-bff31c812dba',
    '1495474472287-4d71bcdd2085',
    '1547592180-85f173990554',
    '1556911220-bff31c812dba'
  ]
}
const categoryByIndex = ['living','soft','daily','light','kitchen']
const positions = ['centre','top','right','bottom','left']
const tags = [
  'sofa','chair','table','cabinet','stool','wardrobe','dining-table','dining-chair','armchair','patio-furniture',
  'curtain','rug','cushion','painting','plant','curtain','blinds','tapestry','cushion','room-divider',
  'bed','storage','doormat','bedding','pillow','bed','towel','bathrobe','laundry','hanger',
  'candle','lamp','floor-lamp','lamp','clock','candle','sculpture','hooks','lampshade','lantern',
  'placemat','tablecloth','trivet','kitchen','shower','bathroom','towel','shelf','basket','stool'
]

await fs.mkdir(outDir, { recursive: true })
let downloaded = 0
for (let i = 0; i < 50; i++) {
  const category = categoryByIndex[Math.floor(i / 10)]
  const tag = tags[i]
  const url = `https://loremflickr.com/1400/1400/${tag}?lock=${i + 1}`
  const output = path.join(outDir, `product-${String(i + 1).padStart(2, '0')}.webp`)
  try {
    const candidates = [url, `https://loremflickr.com/1400/1400/${tag}?lock=${5000 + i}`]
    let buffer
    let lastError
    for (const candidate of candidates) {
      try {
        const response = await fetch(candidate, { signal: AbortSignal.timeout(12000) })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        buffer = Buffer.from(await response.arrayBuffer())
        break
      } catch (error) {
        lastError = error
      }
    }
    if (!buffer) throw lastError
    await sharp(buffer)
      .rotate()
      .resize(900, 900, { fit: 'cover', position: positions[i % positions.length] })
      .modulate({ brightness: 0.96 + i * 0.0015, saturation: 0.98 + (i % 7) * 0.012 })
      .webp({ quality: 88 })
      .toFile(output)
    downloaded++
  } catch (error) {
    console.warn(`Stock image skipped for ${output}: ${error.message}`)
  }
}
console.log(`Localized ${downloaded}/50 stock product photos as WebP in ${outDir}`)
