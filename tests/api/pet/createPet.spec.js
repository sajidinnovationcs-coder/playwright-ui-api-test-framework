import { storePlacePetOrder, storeGetOrder } from '../../../src/apiClients/petClient.js'
import { test, expect } from '@playwright/test'

let postBodyresult;
let getBody;
test.describe("Store API - place new pet", () => {

    test("should place a new pet order successfully", async () => {

        postBodyresult = await storePlacePetOrder();
        // console.log(postBodyresult);
        expect(postBodyresult[0].status).toBe(200);
        expect(postBodyresult[0].body.id).toBeDefined();
        expect(postBodyresult[0].body.petId).toBe(postBodyresult[1].petId);
        expect(postBodyresult[0].body.quantity).toBe(postBodyresult[1].quantity);
        expect(postBodyresult[0].body.status).toBe('placed');
        expect(postBodyresult[0].body.complete).toBe(true);
        expect(new Date(postBodyresult[0].body.shipDate).toString()).not.toBe('Invalid Date');
    })



    test("should retrieve a pet order by ID ", async () => {
        getBody = await storeGetOrder(postBodyresult[0].body.id);
        expect(getBody.status).toBe(200);
        expect(getBody.body.id).toBe(postBodyresult[0].body.id);
        expect(getBody.body.petId).toBe(postBodyresult[0].body.petId);
        expect(getBody.body.quantity).toBe(postBodyresult[0].body.quantity);

    })

    test("should validate the schema of the retrieved pet order", async () => {

        expect(typeof getBody.body.id).toBe("number");
        expect(typeof getBody.body.petId).toBe("number");
        expect(typeof getBody.body.quantity).toBe("number");
        expect(typeof getBody.status).toBe("number");
        expect(typeof getBody.body.complete).toBe("boolean");

    })


})