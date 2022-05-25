import { Router,Request,Response } from "express";
import * as pageController from '../controllers/pageController'
import * as searchControlle from '../controllers/searchController';

//-------------------------------------------//Rotas
const router = Router();

router.get('/',pageController.home);
router.get('/dogs',pageController.dogs);
router.get('/cats',pageController.cats);
router.get('/fishes',pageController.fishes);


router.get('/search',searchControlle.search);






export default router;
