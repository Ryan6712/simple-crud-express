import {
    getAll,
    getByUserId,
    getDetail,
    generateAbsensi,
    updateStatusAbsen,
    deleteById
} from "../service/absenService.js"



export const getAllAbsens = async (req, res) => {
    try {
        const responses = await getAll();
        res.status(200).json(responses);
    } catch (error) {
        res.status(500).json({ msg : error.message});
    }
};


export const getUserAbsen = async (req, res) => {
    const id = Number(req.params.mahasiswaId)
    try {   
        const responses = await getByUserId(id);
        res.status(200).json(responses);
    } catch (error) {
        res.status(404).json({ msg : error.message});
    }
}

export const getDetailAbsens = async (req, res) => {
    const { kelasId, date } = req.params;

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        throw new Error("Format tanggal harus YYYY-MM-DD");
    }

    try {   
        const responses = await getDetail(kelasId, date);
        res.status(200).json(responses);
    } catch (error) {
        res.status(404).json({ msg : error.message});
    }
}


export const createAbsen = async (req, res) => {
    const { kelasId, date } = req.body
    try {   
        const responses = await generateAbsensi(kelasId, date);
        res.status(200).json(responses);
    } catch (error) {
        res.status(400).json({ msg : error.message});
    }
}


export const updateAbsen = async (req, res) => {
    const { kelasId, date } = req.params
    const { data } = req.body;
    try {   
        const responses = await updateStatusAbsen(kelasId, date, data);
        res.status(200).json(responses);
    } catch (error) {
        res.status(404).json({ msg : error.message});
    }
}


export const deleteAbsen = async (req, res) => {
    const id = Number(req.params.id)
    try {
        const responses = await deleteById(id);
        res.status(200).json({msg: "absen data deleted", responses});
    } catch (error) {
        res.status(404).json({ msg : error.message});
    }
}