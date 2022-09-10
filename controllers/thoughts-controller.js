const {Thoughts, Users} = require('../models');

const thoughtsController = {

    /////add new thought


    createThoughts({params, body}, res) {

        Thoughts.create(body)

        .then(({_id}) => {

            return Users.findOneAndUpdate
            ({ _id: params.userId}, 

                {$push: {thoughts: _id}}, 

                {new: true});
        })
        .then(dbThoughtsData => {

            if(!dbThoughtsData) {
                res.status(404).json
                ({message: '😝  No thoughts by this ID'});
                return;
            }
            res.json(dbThoughtsData)
        })
        .catch(err => res.json(err)); 
    },

    ///// Get all thoughts


    getAllThoughts(req,res) {
        Thoughts.find({})

        .populate({path: 'reactions', select: '-__v'})

        .select('-__v')

      
        .then(dbThoughtsData => res.json(dbThoughtsData))

        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    ////// Get thought by ID


    getThoughtsById({params}, res) {

        Thoughts.findOne({ _id: params.id })

        .populate({path: 'reactions',select: '-__v'})

        .select('-__v')

        .then(dbThoughtsData => {

            if(!dbThoughtsData) {
            res.status(404).json
            ({message: '😝 No thoughts by this ID'});
            return;
        }
        res.json(dbThoughtsData)
        })

        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    ////// Update thought by ID


    updateThoughts({params, body}, res) {
        Thoughts.findOneAndUpdate({_id: params.id},

             body, {new: true, runValidators: true})

        .populate({path: 'reactions', select: '-__v'})

        .select('-___v')

        .then(dbThoughtsData => {

            if (!dbThoughtsData) {
                res.status(404).json
                ({message: '😝  No thoughts by this ID'});
                return;
            }
                res.json(dbThoughtsData);
        })
        .catch(err => res.json(err));
    },

    //////Delete thought by ID


    deleteThoughts({params}, res) {
        Thoughts.findOneAndDelete({_id: params.id})

        .then(dbThoughtsData => {

            if (!dbThoughtsData) {
                res.status(404).json
                ({message: '😝  No thoughts by this ID'});
                return;
            }
            res.json(dbThoughtsData);
            })
            .catch(err => res.status(400).json(err));
    },

};


module.exports = thoughtsController;
