const FeatureItem = require('../models').FeatureItem;

module.exports = {
  // Creates each item on the list each project list
  create(req, res) {
    return FeatureItem
      .create({
        content: req.body.content,
        featureId: req.params.featureId,
      })
      .then(featureItem => res.status(201).send(featureItem))
      .catch(error => res.status(400).send(error));
  },

  // Finds all items in each project, returns the Feature along with its list
  list(req, res) {
    return Feature
      .findAll({
        include: [{
          model: FeatureItem,
          as: 'featureItems',
        }],
      })
      .then(features => res.status(200).send(features))
      .catch(error => res.status(400).send(error));
  },

  // Update a single feature list item and return the (number completed/total (which is array length))
  update(req, res) {
    return FeatureItem
      .findAll({
        where: {
          id: req.params.featureItemId,
          featureId: req.params.featureId,
        },
      })
      .then(featureItems => {
        console.log(Array.isArray(featureItems)); // grabs an array of items



        if (!featureItems) {
          return res.status(404).send({
            message: 'Feature Item Not Found',
          });
        }

        return featureItems
          .update(req.body, { fields: Object.keys(req.body) })
          .then(updatedFeatureItem => res.status(200).send(updatedFeatureItem))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  // Remove a single feature list item
  destroy(req, res) {
    return FeatureItem
      .find({
        where: {
          id: req.params.featureItemId,
          featureId: req.params.featureId,
        },
      })
      .then(featureItem => {
        if (!featureItem) {
          return res.status(404).send({
            message: 'FeatureItem Not Found',
          });
        }

        return featureItem
          .destroy()
          .then(() => res.status(204).send({ message: 'Feature Item Removed Successfully' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};