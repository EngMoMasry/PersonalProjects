//object to save the buffers
const buffer={};
//Function to insert values into buffers
function setBuffer(key,value){
    buffer[key]=value;
}
//Function to get values out of buffers
function getBuffer(key){
    return buffer[key];
}

module.export ={
    setBuffer,
    getBuffer
};