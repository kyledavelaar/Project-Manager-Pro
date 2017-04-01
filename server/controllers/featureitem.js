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

  // Update a single feature list item
  update(req, res) {
    return FeatureItem
      .findAll({
        where: {
          featureId: req.params.featureId,
        },
      })
      .then(featureItems => {

        // loop and find where featureItems id is equal to parameter id
        for (let i = 0; i < featureItems.length; i += 1) {
          if (!featureItems[i]) {
            return res.status(404).send({
              message: 'FeatureItem Not Found',
            });
          }
          if (featureItems[i].id == req.params.featureItemId) {
            return featureItems[i]
              .update(req.body, { fields: Object.keys(req.body) })
              .then(updatedFeatureItem => {
                // find how many tasks have been completed
                let completed = 0;
                featureItems.forEach(item => {
                  if (item.complete) completed += 1;
                })
                // return percentage of compeleted tasks
                res.status(200).json(completed/featureItems.length * 100)
              })
              .catch(error => res.status(400).send(error));
          }
        }
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