import Header from "./components/header/Header";
import StickerGrid from "./components/sticker-grid/StickerGrid";
import { StickerModel } from "./models/StickerModel";

function App() {
  const stickers: StickerModel[] = [
    {
      uuid: "3d2bcfc5-442b-812e-3c08-9180d6b36077",
      displayName: "Spray Captado por la Cámara",
      category: null,
      themeUuid: null,
      isNullSpray: false,
      hideIfNotOwned: false,
      displayIcon:
        "https://media.valorant-api.com/sprays/3d2bcfc5-442b-812e-3c08-9180d6b36077/displayicon.png",
      fullIcon:
        "https://media.valorant-api.com/sprays/3d2bcfc5-442b-812e-3c08-9180d6b36077/fullicon.png",
      fullTransparentIcon:
        "https://media.valorant-api.com/sprays/3d2bcfc5-442b-812e-3c08-9180d6b36077/fulltransparenticon.png",
      animationPng: null,
      animationGif: null,
      assetPath:
        "ShooterGame/Content/Personalization/Sprays/Act1_2_BP/CaughtOnCamera/CaughtOnCamera_PrimaryAsset",
      levels: [
        {
          uuid: "20d547a4-4ec8-c9ef-dd9d-1c8b74d0e6f7",
          sprayLevel: 1,
          displayName: "Spray Captado por la Cámara",
          displayIcon:
            "https://media.valorant-api.com/spraylevels/20d547a4-4ec8-c9ef-dd9d-1c8b74d0e6f7/displayicon.png",
          assetPath:
            "ShooterGame/Content/Personalization/Sprays/Act1_2_BP/CaughtOnCamera/CaughtOnCamera_Level1_PrimaryAsset",
        },
      ],
    },
    {
      uuid: "81c68821-46d3-9176-294c-abba0bc64e0b",
      displayName: "Spray ¿Eres Gallina?",
      category: null,
      themeUuid: null,
      isNullSpray: false,
      hideIfNotOwned: false,
      displayIcon:
        "https://media.valorant-api.com/sprays/81c68821-46d3-9176-294c-abba0bc64e0b/displayicon.png",
      fullIcon:
        "https://media.valorant-api.com/sprays/81c68821-46d3-9176-294c-abba0bc64e0b/fullicon.png",
      fullTransparentIcon:
        "https://media.valorant-api.com/sprays/81c68821-46d3-9176-294c-abba0bc64e0b/fulltransparenticon.png",
      animationPng: null,
      animationGif: null,
      assetPath:
        "ShooterGame/Content/Personalization/Sprays/Act1_2_BP/ChickenReborn/ChickenReborn_PrimaryAsset",
      levels: [
        {
          uuid: "47484536-4406-cc35-4792-1485accb9862",
          sprayLevel: 1,
          displayName: "Spray ¿Eres Gallina?",
          displayIcon:
            "https://media.valorant-api.com/spraylevels/47484536-4406-cc35-4792-1485accb9862/displayicon.png",
          assetPath:
            "ShooterGame/Content/Personalization/Sprays/Act1_2_BP/ChickenReborn/ChickenReborn_Level1_PrimaryAsset",
        },
      ],
    },
    {
      uuid: "06351c4a-4a93-793e-f5c9-2fa675359a93",
      displayName: "Spray Desafía los Límites",
      category: null,
      themeUuid: null,
      isNullSpray: false,
      hideIfNotOwned: false,
      displayIcon:
        "https://media.valorant-api.com/sprays/06351c4a-4a93-793e-f5c9-2fa675359a93/displayicon.png",
      fullIcon: null,
      fullTransparentIcon: null,
      animationPng: null,
      animationGif: null,
      assetPath:
        "ShooterGame/Content/Personalization/Sprays/Act1_2_BP/DefyTheLimits/DefyTheLimits_PrimaryAsset",
      levels: [
        {
          uuid: "6720fabe-4cfd-087c-b439-6ea3e96797ff",
          sprayLevel: 1,
          displayName: "Spray Desafía los Límites",
          displayIcon:
            "https://media.valorant-api.com/spraylevels/6720fabe-4cfd-087c-b439-6ea3e96797ff/displayicon.png",
          assetPath:
            "ShooterGame/Content/Personalization/Sprays/Act1_2_BP/DefyTheLimits/DefyTheLimits_Level1_PrimaryAsset",
        },
      ],
    },
  ].map((e) => ({
    id: e.uuid,
    imageUrl: e.fullTransparentIcon ?? e.fullIcon ?? e.displayIcon,
    title: e.displayName,
    tags: [],
  }));
  return (
    <>
      <Header favoritesCount={1}></Header>
      <StickerGrid stickers={stickers}></StickerGrid>
    </>
  );
}

export default App;
