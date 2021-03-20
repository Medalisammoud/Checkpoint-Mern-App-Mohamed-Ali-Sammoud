//Add New Contact
const addContact = async ( req, res)=>{
    try{
        const { name, email, phone }= req.body;
        if(!name || !email){
            res.status(400).send({msg : 'Name And Email Are Required !!!'})
            return;
        }
        const newContact = new Contact ({ 
            name,
            email, 
            phone
        })
        await newContact.save()
        res.status(200).send({msg : 'Contact added succefully...', newContact})
    }
    catch(error){
        res.status(400).send({msg : "Can Not Add New Contact ", error})
    }
}

//Find All Contacts
const getAllContacts = async (req, res) =>{
    try {
        const listContacts = await Contact.find();
        res.status(200).send({msg : "this Is List Of Contacts ...", listContacts});
    } catch (error) {
        res.status(400).send({msg: 'Can Not Get List Of Contacts!!!', error});
    }
}

//Find Contact
const getOneContact = async(req, res)=>{
    try {
        const contact = await Contact.findOne({ _id : req.params.id })
        res.status(200).send({ msg: 'I get the contact ...', contact})
    } catch (error) {
        res.status(400).send({ mesg : "Can Not Get Contact with this id !!!", error})
    }
}

//Delete Contact
const deleteContact = async(req, res)=>{
    try {
        const contactToDelete = await Contact.findByIdAndDelete({_id : req.params.id})
        if(!contactToDelete){
            res.status(400).send({ msg: 'Contact Already deleted !!!'})
            return;
        }
        res.status(200).send({msg : 'Contact Delete Succesfully ...'})
        
    } catch (error) {
        res.status(400).send({msg : 'Can Not Delete This Contact With This Id!!! ',error})
    }
}

//Update Contact
const updateContact = async (req, res)=>{
    try {
        const result = await Contact.updateOne({_id : req.params.id}, {$set : req.body})
        if(!result.nModified){
            res.status(400).send({msg : "Contact Already Updated !!!", error})
            return;
        }
        res.status(200).send({msg : 'Contact is Updated ...'})
    } catch (error) {
        res.status(400).send({msg : "Can Not Updated Contact with this id !!!", error})
    }
}

module.exports = controllers = { addContact, getAllContacts, getOneContact, deleteContact, updateContact}