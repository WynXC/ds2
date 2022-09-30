const collectionInfo = {
    name: "Grannies",
    title: "{name}",
    date: "01.10.2022",
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "logo.jpg",
        favicon: "logo.jpg",
    },
    background: {
        type: "image",
        image: "bg.jpg",
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 1.5,
    totalSupply: 1000,
    toFixed: 2,
    minUnits: 1,
    maxUnits: 3,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.2,
    maxTransfer: 5,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);