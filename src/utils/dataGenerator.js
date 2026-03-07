import { orderPetPayload } from '../data/store.orderPet.data.js'

export async function generateDynamicPayloadForOrderPet() {


    orderPetPayload.id = Math.floor(Math.random() * 10);
    orderPetPayload.petId = Math.floor(Math.random() * 10);
    orderPetPayload.quantity = Math.floor(Math.random() * 10) + 1
    orderPetPayload.shipDate = new Date().toISOString();

    return orderPetPayload;

}