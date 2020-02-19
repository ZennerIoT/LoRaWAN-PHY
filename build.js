const fs = require("fs")
const regions = require("./regions.json")

function loadRegionData(region, part) {
  try {
    return require(`./1.1/${region.slug}/${part}.json`)
  } catch(e) {
    return null
  }
}


let out = regions.map((region) => {
  return {
    ... region,
    channels: loadRegionData(region, "channels"),
    dataRate: loadRegionData(region, "data-rate"),
    maxPayloadSize: loadRegionData(region, "max-payload-size"),
    txPower: loadRegionData(region, "tx-power")
  }
})

const output = JSON.stringify(out)

fs.writeFile("bin.json", output, () => true)
console.log("bin.js built")