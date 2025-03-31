export enum Signs {
  Aries = "Aries",
  Taurus = "Taurus",
  Gemini = "Gemini",
  Cancer = "Cancer",
  Leo = "Leo",
  Virgo = "Virgo",
  Libra = "Libra",
  Scorpio = "Scorpio",
  Sagittarius = "Sagittarius",
  Capricorn = "Capricorn",
  Aquarius = "Aquarius",
  Pisces = "Pisces",
}

export enum Elements {
  Fire = "Fire",
  Water = "Water",
  Earth = "Earth",
  Air = "Air",
}

export const signsElementsMap: Record<Signs, Elements> = {
  [Signs.Aries]: Elements.Fire,
  [Signs.Taurus]: Elements.Earth,
  [Signs.Gemini]: Elements.Air,
  [Signs.Cancer]: Elements.Water,
  [Signs.Leo]: Elements.Fire,
  [Signs.Virgo]: Elements.Earth,
  [Signs.Libra]: Elements.Air,
  [Signs.Scorpio]: Elements.Water,
  [Signs.Sagittarius]: Elements.Fire,
  [Signs.Capricorn]: Elements.Earth,
  [Signs.Aquarius]: Elements.Air,
  [Signs.Pisces]: Elements.Water,
};

export interface User {
  username: string,
  sign: Signs
}

export interface Post {
  user: User,
  message: string
}
