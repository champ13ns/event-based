import { kafkaInstance } from "./kafka";

const producer = kafkaInstance.producer();

const produceUserAddEvent = async (user : any) => {
    await producer.connect();
    await producer.send({
        topic : 'user-added',
        messages : [
            { value : JSON.stringify(user) }
        ]
    })
}

const produceUserDeleteEvent = async(user : any ) => {
    await producer.connect();
    await producer.send({
        topic : 'user-deleted',
        messages : [
            { value : JSON.stringify(user) }
        ]
    })
}


export { produceUserAddEvent, produceUserDeleteEvent }