import {
    getAll,
    getById,
    updateById,
    create,
    deleteById
} from "../service/kelasService.js"



export const getAllKelas = async (req, res) => {
    try {
        const responses = await getAll();
        res.status(200).json(responses);
    } catch (error) {
        res.status(500).json({ msg : error.message});
    }
};


export const getKelasById = async (req, res) => {
    const id = Number(req.params.id)
    try {   
        const responses = await getById(id);
        res.status(200).json(responses);
    } catch (error) {
        res.status(404).json({ msg : error.message});
    }
}


export const createKelas = async (req, res) => {
    try {   
        const responses = await create(req.body);
        res.status(200).json(responses);
    } catch (error) {
        res.status(400).json({ msg : error.message});
    }
}


export const updateKelas = async (req, res) => {
    const id = Number(req.params.id)
    const { name, status } = req.body;
    try {   
        const responses = await updateById(id, name, status);
        res.status(200).json(responses);
    } catch (error) {
        res.status(404).json({ msg : error.message});
    }
}


export const deleteKelas = async (req, res) => {
    const id = Number(req.params.id)
    try {   
        const responses = await deleteById(id);
        res.status(200).json({msg: "kelas deleted", deletedId : responses.id});
    } catch (error) {
        res.status(404).json({ msg : error.message});
    }
}