const test = [{
    name: "John",
    age: 30
},
{
    name: "Matheus",
    age: 32
},
{
    name: "Stephen",
    age: 35
}];

module.exports.get = _ => {
    return new Promise((resolve, reject) => {
        try {
            //do some stuff
            resolve(test);
        } catch (ex) {
            repository.disconnect();
            reject(ex);
        }
    });
};

module.exports.post = (model) => {
    return new Promise((resolve, reject) => {
        try {
            //do some stuff
            resolve(model)
        } catch (ex) {
            reject(ex);
        }
    });
};
