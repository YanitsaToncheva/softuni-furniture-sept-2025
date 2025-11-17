
import querystring from 'querystring';
import  { Router } from 'express';
import furnitureService from '../services/furnitureService.js';


const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
    //const filter = querystring.parse(req.query?.where.replaceAll('"', ''));
    const query = req.query.where?.replaceAll('"', '');
    let filter = {};

    if (query) {
        filter = querystring.parse(query);
    }

  
    

    const furnitures = await furnitureService.getAll(filter);

    res.json(furnitures ?? []);

});
furnitureController.get('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    
    const furniture = await furnitureService.getOne(furnitureId);

    res.json(furniture);
})

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;
    const ownerId = req.user.id;

    const furniture = await furnitureService.create(furnitureData, ownerId);
    res.status(201).json(furniture);
});

furnitureController.put('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const furnitureData = req.body;

    
    try {
        const furniture = await furnitureService.update(furnitureId, furnitureData);
        res.json(furniture);

    } catch (err) {
        
    }
});

furnitureController.delete('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;

    const userId = req.user.id;
    try {
        const furniture = await furnitureService.delete(furnitureId, userId);
        res.json(furniture);
    } catch (err) {
        
    }

})

export default furnitureController;