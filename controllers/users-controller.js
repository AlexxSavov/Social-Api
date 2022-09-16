const {Users} = require('../models');


const usersController = {
    
    ///////Create a new User

    createUsers({body}, res) {
        Users.create(body)

        .then(dbUsersData => res.json(dbUsersData))

        .catch(err => res.status(400).json(err));
    },

    //////// Get All Users

    getAllUsers(req, res) {
        Users.find({})
.select ('-__v'    )   
        .then(dbUsersData => res.json(dbUsersData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },


    //////// Get single user by ID

    getUsersById({params}, res) {
        Users.findOne({_id: params.id })

        .populate({
            path: 'thoughts', 
            select: '-__v'})

        .populate({
            path: 'friends',
             select: '-__v'})

        .select('-__v')



        /////// return when no user is found 

        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json
                ({message: '😝 No User by this ID!'});
                return; 
            }
            res.json(dbUsersData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },

    ////////Update User by ID

    updateUsers({params, body}, res) {
        Users.findOneAndUpdate({_id: params.id}, body,

             {new: true, runValidators: true})

        .then(dbUsersData => {

            if(!dbUsersData) {
                res.status(404).json
                ({message: '😝 No User by this ID'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err))
    },

    deleteUsers({params}, res) {
        Users.findOneAndDelete({_id: params.id})

        .then(dbUsersData => {

            if(!dbUsersData) {
                res.status(404).json
                ({message: '😝 No User by this ID'});
                return;
            }
            res.json(dbUsersData);
        })
        .catch(err => res.status(400).json(err));
    },

    // Delete user by ID
    addFriend({params}, res) {
        Users.findOneAndUpdate({_id: params.id},
             {$push: { friends: params.friendId}},
             
             {new: true})

        .populate({path: 'friends', select: ('-__v')})

        .select('-__v')

        .then(dbUsersData => {

            if (!dbUsersData) {
                res.status(404).json
                ({message: '😝 No User by this ID'});
                return;
            }
        res.json(dbUsersData);
        })
        .catch(err => res.json(err));
    },

    // Delete Friend
    deleteFriend({ params }, res) {
        Users.findOneAndUpdate({_id: params.id},

             {$pull: { friends: params.friendId}}, 

             {new: true})

        .populate({path: 'friends', select: '-__v'})

        .select('-__v')

        .then(dbUsersData => {

            if(!dbUsersData) {
                res.status(404).json
                ({message: '😝 No User by this ID'});
                return;
            }
            res.json(dbUsersData);
        })
        .catch(err => res.status(400).json(err));
    }

};


module.exports = usersController; 