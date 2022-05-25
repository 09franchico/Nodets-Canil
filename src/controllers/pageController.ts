import { Request,Response } from "express";


export const home = (req:Request , res:Response)=>{
    //res.render('pages/page')
    res.send('Home no controles');

}
export const dogs = (req:Request , res:Response)=>{
    //res.render('pages/dogs')

}
export const cats = (req:Request , res:Response)=>{
    //res.render('pages/cats')

}
export const fishes = (req:Request , res:Response)=>{
    //res.render('pages/fishes')

}


