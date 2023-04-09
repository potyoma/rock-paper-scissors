const random = (limit: number) =>
  (Math.floor(Math.pow(10, 14) * Math.random() * Math.random()) %
    (limit - 0 + 1)) +
  0

const getComputerGesture = () => {
  const gestures = ["rock", "paper", "scissors", "lizard", "spock"]
  const gestureIndex = random(gestures.length - 1)
  return gestures[gestureIndex]
}

const beats = [
  "scissors|paper",
  "scissors|lizard",
  "paper|rock",
  "paper|spock",
  "rock|lizard",
  "rock|scissors",
  "lizard|paper",
  "lizard|spock",
  "spock|scissors",
  "spock|rock",
]

export enum GameResult {
  None,
  Win,
  Loose,
  Draw,
}

const hasWon = (user: string, computer: string) =>
  user === computer
    ? GameResult.Draw
    : beats.some(b => b === `${user}|${computer}`)
    ? GameResult.Win
    : GameResult.Loose

export { getComputerGesture, hasWon }
