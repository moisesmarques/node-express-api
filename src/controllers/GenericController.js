module.exports = (app) => {

  const GenericRepository = require('../repositories/GenericRepository');

  app.get('/api/v1/', async (req, res) => {
    return await GenericRepository.get()
                        .then(result => success(result, res))
                        .catch(error => error(error, res));
  });

  app.post('/api/v1/', async (req, res) => {
    return await GenericRepository.post(req.body)
                        .then(result => success(result, res))
                        .catch(error => error(error, res));
  });

  const success = (result, res) => res.status(200).json(result);

  const error = (error, res) => {
    console.log(error);
    res.status(501).json({ message: 'Something when wrong.' });                           
  };

}