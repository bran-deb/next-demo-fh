// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

//creamos un tipo especifico (Data)
type Data = {
  name:string;
  //otras propiedades
}

export default function handler(req:NextApiRequest, res:NextApiResponse<Data>) {

  res.status(200).json({ name: 'John Doe'})
}
