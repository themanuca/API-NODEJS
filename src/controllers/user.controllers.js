const User = require('../models/user.model');
const {v4 : uuidv4} = require( 'uuid');

module.exports = {
    async index(req, res){
        const Userdata = await User.find();
        return res.status(200).json({msg:"Hello Word", Userdata});
    },

    async create(req, res){
        const uuid = uuidv4();

        const {name, email} = req.body;

        let data = {};

        if(!name||!email){
            return res.status(500).json({msg:"Preencha todos os daados"})
        }
        
        let userVerfirfy = await User.findOne({email});

        if(!userVerfirfy){
            data = {uuid, name, email};
            userVerfirfy = await User.create(data)

            return res.status(201).json({msg:"User created !"})
        }else{
            return res.status(500).json({msg:"XXXXXX"})
        }
        


    },



    async update(req, res){

        const {_id} = req.params;
        
        const uuidUp = uuidv4();


        const {uuid, name, email} = req.body;

        const data = {uuid:uuidUp, name, email};

        const userUp = await User.findByIdAndUpdate({_id},data,{new:true});

        return res.json(userUp);

    },


    async delete(req, res){

        const {_id} = req.params;
        
        const userDelete = await User.findByIdAndDelete({_id});

        return res.status(200).json({msg:"User Deleted"});

        
    }



} 