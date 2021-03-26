const { default: axios } = require("axios");
const delay = require("delay");

async function getFullPumpkin(start) {
  for (let i = start; i < start + 10_000; i++) {
    while (true) {
      try {
        console.log(i);
        const { data } = await axios.get(`https://cryptocorgis.co/api/token-metadata/${i.toString(16)}`)
        const { properties } = data
        if (properties.Top === "Pumpkin" && properties.Head === "Pumpkin Top") {
          return
        }
        break
      } catch {
        await delay(3000)
      }
    }
  }
}

async function get11Trait(start) {
  for (let i = start; i < start + 10_000; i++) {
    while (true) {
      try {
        console.log(i);
        const { data } = await axios.get(`https://cryptocorgis.co/api/token-metadata/${i.toString(16)}`)
        const { properties } = data
        if(Object.entries(properties).length > 10) return
        break
      } catch {
        await delay(3000)
      }
    }
  }
}

async function run() {
  await get11Trait(12104285)
  // await getFullPumpkin(12104285)
}

run()
