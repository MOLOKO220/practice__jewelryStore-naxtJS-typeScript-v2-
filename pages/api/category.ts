import type { NextApiRequest, NextApiResponse } from 'next'

const category = [
    "КОЛЬЦА",
    "СЕРГИ",
    "ПОДВЕСКИ",
    "ЗАПАНКИ",
    "БРАСЛЕТЫ",
    "ЧАСЫ",
  ];


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(category)
}
