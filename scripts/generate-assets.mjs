import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const outDir = path.resolve('public/products')
const colors = ['#eadfd2','#dfe8df','#d7e1ec','#efe4c9','#e2d8e7','#d9e5e4','#f0ded7','#e0e0d7','#e7d9ce','#d8e0e6']
const accents = ['#204b4b','#7b4b37','#334e68','#7b6a3c','#694b70','#42645d','#9b5949','#56605a','#835a3f','#3e5368']

const products = [
  ['living','Loom sofa'],['living','Oak platform bed'],['living','Tall wardrobe'],['living','Harbor dining table'],['living','Plinth coffee table'],['living','Arc media console'],['living','Lowline chest'],['living','Sideboard cabinet'],['living','Open shelf bookcase'],['living','Writing desk'],
  ['soft','Linen ripple curtain'],['soft','Tactile wool rug'],['soft','Pebble cushion'],['soft','Quiet line print'],['soft','Leaf form plant'],['soft','Air voile curtain'],['soft','Wood slat blind'],['soft','Woven wallcovering'],['soft','Woven tapestry'],['soft','Screen fold divider'],
  ['daily','Washed four-piece bedding'],['daily','Stack storage box'],['daily','Threshold floor mat'],['daily','Cloud quilt'],['daily','Rest pillow'],['daily','Cotton fitted sheet'],['daily','Dry loop towel'],['daily','Soft robe'],['daily','Canvas laundry basket'],['daily','Slim clothes hanger'],
  ['light','Cedar incense'],['light','Pebble table lamp'],['light','Arc floor lamp'],['light','Line wall lamp'],['light','Quiet clock'],['light','Soft edge candleholder'],['light','Balance sculpture'],['light','Utility hook rail'],['light','Linen shade lamp'],['light','Low glow lantern'],
  ['kitchen','Grid placemat'],['kitchen','Washed tablecloth'],['kitchen','Cork trivet'],['kitchen','Rail kitchen rack'],['kitchen','Bath curtain'],['kitchen','Grip bath mat'],['kitchen','Towel rail'],['kitchen','Bath shelf'],['kitchen','Wash caddy'],['kitchen','Fold shower stool']
]

function svgFor(i, category, name) {
  const bg = colors[i % colors.length], ink = accents[i % accents.length]
  const object = (() => {
    if (category === 'living') {
      if (/sofa/.test(name)) return `<rect x="125" y="330" width="774" height="210" rx="60" fill="${ink}"/><rect x="180" y="235" width="664" height="180" rx="62" fill="${ink}"/><path d="M190 520v110M834 520v110" stroke="${ink}" stroke-width="30"/><path d="M260 345h500" stroke="${bg}" stroke-width="16" opacity=".65"/>`
      if (/bed/.test(name)) return `<rect x="220" y="300" width="580" height="300" rx="28" fill="${ink}"/><rect x="250" y="245" width="520" height="150" rx="18" fill="${ink}"/><path d="M280 395h460M280 490h460" stroke="${bg}" stroke-width="18" opacity=".7"/><path d="M260 600v45M764 600v45" stroke="${ink}" stroke-width="28"/>`
      if (/wardrobe/.test(name)) return `<rect x="270" y="190" width="480" height="450" rx="12" fill="${ink}"/><path d="M510 190v450" stroke="${bg}" stroke-width="16" opacity=".65"/><circle cx="475" cy="410" r="12" fill="${bg}"/><circle cx="545" cy="410" r="12" fill="${bg}"/><path d="M290 640h440" stroke="${ink}" stroke-width="28"/>`
      if (/chest|bookcase/.test(name)) return `<rect x="250" y="235" width="520" height="390" rx="14" fill="${ink}"/><path d="M250 365h520M250 495h520" stroke="${bg}" stroke-width="16" opacity=".7"/><circle cx="510" cy="300" r="11" fill="${bg}"/><circle cx="510" cy="430" r="11" fill="${bg}"/><circle cx="510" cy="560" r="11" fill="${bg}"/>`
      if (/desk/.test(name)) return `<rect x="200" y="300" width="620" height="90" rx="16" fill="${ink}"/><path d="M270 390v250M754 390v250" stroke="${ink}" stroke-width="30"/><rect x="565" y="390" width="170" height="175" fill="${ink}" opacity=".65"/><path d="M585 430h130M585 480h130" stroke="${bg}" stroke-width="14"/>`
      if (/coffee|side table/.test(name)) return `<ellipse cx="510" cy="340" rx="320" ry="82" fill="${ink}"/><path d="M510 410v220M380 630h260" stroke="${ink}" stroke-width="34"/><ellipse cx="510" cy="340" rx="190" ry="35" fill="${bg}" opacity=".5"/>`
      if (/dining table/.test(name)) return `<rect x="185" y="280" width="650" height="110" rx="22" fill="${ink}"/><path d="M255 390v270M769 390v270" stroke="${ink}" stroke-width="34"/>`
      if (/chair/.test(name)) return `<path d="M300 570V260h400v310" fill="none" stroke="${ink}" stroke-width="44"/><path d="M255 570h510M335 570v80M690 570v80" stroke="${ink}" stroke-width="30"/><rect x="365" y="315" width="270" height="150" rx="20" fill="${ink}" opacity=".6"/>`
      if (/console|cabinet/.test(name)) return `<rect x="180" y="300" width="660" height="260" rx="16" fill="${ink}"/><path d="M250 560v80M774 560v80" stroke="${ink}" stroke-width="30"/><path d="M510 300v260" stroke="${bg}" stroke-width="15" opacity=".65"/><circle cx="430" cy="430" r="12" fill="${bg}"/><circle cx="590" cy="430" r="12" fill="${bg}"/>`
      return `<rect x="170" y="330" width="684" height="210" rx="28" fill="${ink}"/><path d="M230 540v110M794 540v110" stroke="${ink}" stroke-width="30"/><circle cx="340" cy="435" r="58" fill="${bg}" opacity=".65"/><circle cx="684" cy="435" r="58" fill="${bg}" opacity=".65"/>`
    }
    if (category === 'soft') {
      if (/curtain|blind/.test(name)) return `<path d="M240 200v440M784 200v440" stroke="${ink}" stroke-width="24"/>${Array.from({length:7},(_,n)=>`<path d="M${260+n*78} 215v405" stroke="${ink}" stroke-width="48" opacity=".${5+n%3}"/>`).join('')}`
      if (/rug|mat|pad|cushion/.test(name)) return `<rect x="190" y="245" width="640" height="390" rx="30" fill="${ink}"/><path d="M250 330h520M250 430h520M250 530h520" stroke="${bg}" stroke-width="18" opacity=".65"/><path d="M220 210v470M804 210v470" stroke="${ink}" stroke-width="14"/>`
      if (/plant/.test(name)) return `<path d="M390 610h240" stroke="${ink}" stroke-width="34"/><path d="M430 610c0-170 15-265 80-365M590 610c0-170-15-265-80-365" stroke="${ink}" stroke-width="20"/><ellipse cx="380" cy="300" rx="88" ry="40" transform="rotate(-35 380 300)" fill="${ink}"/><ellipse cx="640" cy="340" rx="88" ry="40" transform="rotate(35 640 340)" fill="${ink}"/><ellipse cx="510" cy="230" rx="82" ry="40" fill="${ink}"/>`
      if (/print/.test(name)) return `<rect x="245" y="215" width="530" height="420" fill="${ink}"/><path d="M300 540l110-170 80 85 100-170 110 255" fill="none" stroke="${bg}" stroke-width="22"/>`
      if (/hanging|tapestry/.test(name)) return `<path d="M270 250h480v360H270z" fill="${ink}"/><path d="M310 295h400v275H310z" fill="none" stroke="${bg}" stroke-width="16"/><path d="M300 610v50M360 610v50M420 610v50M480 610v50M540 610v50M600 610v50M660 610v50M720 610v50" stroke="${ink}" stroke-width="12"/>`
      return `<path d="M310 270h400v300H310z" fill="${ink}"/><path d="M350 310h320v220H350z" fill="${bg}" opacity=".5"/><path d="M340 570v70M680 570v70" stroke="${ink}" stroke-width="26"/>`
    }
    if (category === 'daily') {
      if (/bedding|sheet|quilt/.test(name)) return `<path d="M235 300h550v330H235z" fill="${ink}"/><path d="M235 420h550M510 300v330" stroke="${bg}" stroke-width="18" opacity=".75"/><path d="M290 250h165v80H290z" fill="${bg}" opacity=".7"/>`
      if (/pillow/.test(name)) return `<rect x="230" y="300" width="560" height="300" rx="80" fill="${ink}"/><path d="M300 380h420M300 470h420" stroke="${bg}" stroke-width="18" opacity=".65"/>`
      if (/box|basket/.test(name)) return `<path d="M260 285h500l-55 345H315z" fill="${ink}"/><path d="M315 360h390M305 450h410M295 540h430" stroke="${bg}" stroke-width="18" opacity=".7"/><path d="M395 285c0-95 230-95 230 0" fill="none" stroke="${ink}" stroke-width="25"/>`
      if (/towel|robe/.test(name)) return `<path d="M330 230h360v400H330z" fill="${ink}"/><path d="M510 230v400M390 340h240M390 450h240" stroke="${bg}" stroke-width="18" opacity=".7"/>`
      if (/hanger/.test(name)) return `<path d="M510 255c0-100 150-70 100 20L260 500h500" fill="none" stroke="${ink}" stroke-width="28"/><path d="M265 500l-70 95h630l-70-95" fill="none" stroke="${ink}" stroke-width="26"/>`
      return `<rect x="270" y="255" width="480" height="360" rx="25" fill="${ink}"/><path d="M335 335h350M335 435h350M335 535h350" stroke="${bg}" stroke-width="18" opacity=".7"/>`
    }
    if (category === 'light') {
      if (/table lamp|shade lamp/.test(name)) return `<path d="M355 315h310l-70-120H425z" fill="${ink}"/><path d="M510 315v290M405 610h210" stroke="${ink}" stroke-width="28"/><path d="M390 335h240" stroke="${bg}" stroke-width="16" opacity=".6"/>`
      if (/floor lamp/.test(name)) return `<path d="M510 230v410M375 640h270" stroke="${ink}" stroke-width="30"/><path d="M420 250h180l-55 125H475z" fill="${ink}"/>`
      if (/wall light/.test(name)) return `<rect x="260" y="230" width="500" height="100" rx="50" fill="${ink}"/><path d="M335 330v190M510 330v190M685 330v190" stroke="${ink}" stroke-width="22"/><path d="M300 535h420" stroke="${ink}" stroke-width="28"/>`
      if (/clock/.test(name)) return `<circle cx="510" cy="420" r="210" fill="${ink}"/><circle cx="510" cy="420" r="170" fill="${bg}" opacity=".7"/><path d="M510 420V300M510 420h100" stroke="${ink}" stroke-width="22"/>`
      if (/incense/.test(name)) return `<rect x="260" y="520" width="500" height="70" rx="30" fill="${ink}"/><path d="M360 520l130-290M480 520l115-300M600 520l80-250" stroke="${ink}" stroke-width="14"/><path d="M490 230c-40-55 55-70 0-125M610 220c-40-55 55-70 0-125" fill="none" stroke="${ink}" stroke-width="12"/>`
      if (/lantern|candle/.test(name)) return `<path d="M330 300h360v310H330z" fill="${ink}"/><path d="M390 300v-75h240v75M390 610v50M634 610v50" stroke="${ink}" stroke-width="24"/><circle cx="510" cy="440" r="70" fill="${bg}" opacity=".65"/>`
      return `<path d="M510 210l75 180 190 20-145 120 45 190-165-100-165 100 45-190-145-120 190-20z" fill="${ink}"/><circle cx="510" cy="430" r="45" fill="${bg}" opacity=".65"/>`
    }
    if (/tablecloth|placemat/.test(name)) return `<rect x="190" y="250" width="640" height="360" rx="18" fill="${ink}"/><path d="M270 250v360M350 250v360M430 250v360M510 250v360M590 250v360M670 250v360M750 250v360M190 330h640M190 410h640M190 490h640M190 570h640" stroke="${bg}" stroke-width="12" opacity=".7"/>`
    if (/heat mat/.test(name)) return `<rect x="260" y="250" width="500" height="370" rx="24" fill="${ink}"/><path d="M320 315h380M320 400h380M320 485h380M320 570h380" stroke="${bg}" stroke-width="18" opacity=".7"/>`
    if (/rack|rail/.test(name)) return `<path d="M255 280h514M255 400h514M255 520h514" stroke="${ink}" stroke-width="28"/><path d="M300 280v300M510 280v300M720 280v300" stroke="${ink}" stroke-width="18"/><circle cx="330" cy="625" r="35" fill="${ink}"/><circle cx="690" cy="625" r="35" fill="${ink}"/>`
    if (/curtain/.test(name)) return `<path d="M270 220v430M750 220v430" stroke="${ink}" stroke-width="24"/><path d="M290 230c90 80 90 190 0 270M390 230c90 80 90 190 0 270M490 230c90 80 90 190 0 270M590 230c90 80 90 190 0 270M690 230c90 80 90 190 0 270" fill="none" stroke="${ink}" stroke-width="30"/>`
    if (/floor mat/.test(name)) return `<rect x="240" y="250" width="540" height="350" rx="90" fill="${ink}"/><path d="M320 345h380M320 450h380" stroke="${bg}" stroke-width="20" opacity=".7"/>`
    if (/shelf|caddy/.test(name)) return `<rect x="275" y="250" width="470" height="350" rx="18" fill="${ink}"/><path d="M275 365h470M275 480h470" stroke="${bg}" stroke-width="16" opacity=".7"/><circle cx="390" cy="315" r="28" fill="${bg}" opacity=".7"/><circle cx="630" cy="315" r="28" fill="${bg}" opacity=".7"/>`
    return `<path d="M360 620V310h300v310" fill="${ink}"/><path d="M300 620h420" stroke="${ink}" stroke-width="30"/><rect x="410" y="360" width="200" height="160" rx="24" fill="${bg}" opacity=".7"/>`
  })()
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><rect width="1024" height="1024" fill="${bg}"/><circle cx="160" cy="150" r="94" fill="${ink}" opacity=".08"/><circle cx="860" cy="820" r="150" fill="${ink}" opacity=".07"/><ellipse cx="510" cy="680" rx="360" ry="30" fill="${ink}" opacity=".12"/>${object}<path d="M120 760h784" stroke="${ink}" opacity=".16" stroke-width="2"/></svg>`
}

await fs.mkdir(outDir, { recursive: true })
for (let i = 0; i < products.length; i++) {
  const [category, name] = products[i]
  const svg = Buffer.from(svgFor(i, category, name))
  await sharp(svg).webp({ quality: 92 }).toFile(path.join(outDir, `product-${String(i + 1).padStart(2, '0')}.webp`))
}
console.log(`Generated ${products.length} unique local WebP product assets in ${outDir}`)
