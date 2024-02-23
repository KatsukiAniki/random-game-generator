export interface GameData{
    appID: number;
    name: string;
    is_free: boolean,
    price_overview: {
      final_formatted: string,
      initial_formatted: string,
      discount_percent: number,
      final: number,
      initial: number,
      currency: string
}
}

export const GamesData: GameData[] = [
    {
        appID: 531490,
        name: "Golden Swords",
        is_free: false,
        price_overview: {
          final_formatted: "$3.99",
          initial_formatted: "",
          discount_percent: 0,
          final: 399,
          initial: 399,
          currency: "USD"
        }
    },
    {
        appID: 250700,
        name: "Super Time Force Ultra",
        is_free: false,
        price_overview: {
          final_formatted: "$14.99",
          initial_formatted: "",
          discount_percent: 0,
          final: 1499,
          initial: 1499,
          currency: "USD"
        }
    },
    {
        appID: 10500,
        name: "Total War: EMPIRE – Definitive Edition",
        is_free: false,
        price_overview: {
          final_formatted: "$24.99",
          initial_formatted: "",
          discount_percent: 0,
          final: 2499,
          initial: 2499,
          currency: "USD"
        }
    }
]