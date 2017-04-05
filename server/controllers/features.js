const Feature = require('../models/featureModel');
const FeatureItem = require('../models/itemModel');

const featureController = {

  // Creates instance of a project.
  createProject(req, res) {
    Feature.create({
        title: req.body.title,
        duration: req.body.duration
      }, (err, result) => {
      if (err) console.log(err);
      res.send(result);
    })
  },

  // Retrieves all current projects in a database.
  getProject(req, res) {
    console.log('GET PROJECT', req.body)
    Feature.find({}, (err, features) => {
      if (err) console.log(err);
      res.send(features.reduce((featureMap, item) => {
        featureMap[item.title] = item; 
        return featureMap;
      }, {}))
    })
  },
        // include: [{
        //   model: FeatureItem,
        //   as: 'featureItems'
        // }],

  // Delete a single feature based on ID
  deleteProject(req, res) {
    console.log('DELETE PARAMS', req.params)
    Feature.remove({title: req.params.title}, (err, result) => {
      if (err) console.log('DELETE ERROR', err);
      console.log('deleted worked');
      res.send(result);
    })
    // Feature
    //   .findById(req.params.featureId)
    //   .then(feature => {
    //     if (!feature) {
    //       return res.status(400).send({
    //         message: 'feature Not Found',
    //       });
    //     }
    //     return feature
    //       .destroy()
    //       .then(() => res.status(200).send({ message: 'Feature deleted' }))
    //       .catch(error => res.status(400).send(error));
    //   })
    //   .catch(error => res.status(400).send(error));
  },

  // Find a single feature based on its ID
  retrieveProject(req, res) {
    Feature
      .find({}, 
        // include: [{
        //   model: FeatureItem,
        //   as: 'featureItems',
        // }],
       ()=> console.log('RETRIEVE'))
      .then(feature => {
        if (!feature) {
          return res.status(404).send({
            message: 'Feature Not Found',
          });
        }
        return res.status(200).send(feature);
      })
      .catch(error => res.status(400).send(error));
  },




  // // Update a single feature
  // update(req, res) {
  //   return Feature
  //     .findById(req.params.featureId, {
  //       include: [{
  //         model: FeatureItem,
  //         as: 'featureItems',
  //       }],
  //     })
  //     .then(feature => {
  //       if (!feature) {
  //         return res.status(404).send({
  //           message: 'Feature Not Found',
  //         });
  //       }
  //       return feature
  //         .update({
  //           title: req.body.title || feature.title,
  //         })
  //         .then(() => res.status(200).send(feature))  // Send back the updated feature.
  //         .catch((error) => res.status(400).send(error));
  //     })
  //     .catch((error) => res.status(400).send(error));
  // },
};

module.exports = featureController;