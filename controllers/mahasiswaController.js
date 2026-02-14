import {
    getAll,
    getById,
    create,
    updateById,
    deleteById
} from "../service/mahasiswaService.js"

export const getAllMahasiswa = async (req, res) => {
    try {
        const responses = await getAll();
        res.status(200).json(responses);
    } catch (error) {
        res.status(500).json({ msg : error.message});
    }
};


export const getMahasiswaById = async (req, res) => {
    const id = Number(req.params.id)
    try {   
        const responses = await getById(id);
        res.status(200).json(responses);
    } catch (error) {
        res.status(404).json({ msg : error.message});
    }
}


export const createMahasiswa = async (req, res) => {
    // const {name, nim, status} = req.body
    try {   
        const responses = await create(req.body);
        res.status(200).json(responses);
    } catch (error) {
        if(error.code == "P2002") res.status(400).json({ msg : "Bad request User already exist", err : error.message})
        res.status(400).json({ msg : error.message});
    }
}


export const updateMahasiswa = async (req, res) => {
    const id = Number(req.params.id)
    const { name, status } = req.body;
    try {   
        const responses = await updateById(id, name, status);
        res.status(200).json(responses);
    } catch (error) {
        res.status(404).json({ msg : error.message});
    }
}


export const deleteMahasiswa = async (req, res) => {
    const id = Number(req.params.id)
    try {   
        const responses = await deleteById(id);
        res.status(200).json({msg: "users deleted", responses});
    } catch (error) {
        res.status(404).json({ msg : error.message});
    }
}