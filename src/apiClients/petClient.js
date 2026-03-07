import { postData, getData } from '../utils/apiHelper.js'
import { petstoreordersURL } from '../../config.js'
import { generateDynamicPayloadForOrderPet } from '../utils/dataGenerator.js'
export async function storePlacePetOrder() {


    const payload = await generateDynamicPayloadForOrderPet();
    //replace('petId', (await payload).id)
    let result = await postData(petstoreordersURL.postPetOrder, payload);
    return [result, payload];

}


export async function storeGetOrder(id) {


    let result = await getData(petstoreordersURL.getPetorder.replace('orderID', id))
    return result;



}


