const collectionInfo = {
    name: "Mad Bears",
    title: "{name}",
    date: "17.07.2022",
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "1.gif",
        favicon: "logo.jpg",
    },
    background: {
        type: "video",
        image: "",
        video: "1.mp4",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 1,
    totalSupply: 1000,
    toFixed: 1,
    minUnits: 1,
    maxUnits: 1,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.3,
    maxTransfer: 5,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);