import prisma from "../config/prisma.js";

export const getAll = async () => {
    return await prisma.kelas.findMany({
        where: {
            deletedAt : null
        }
    });
}

export const getById = async (id) => {
    return await prisma.kelas.findFirst({
        where : {
            id,
            deletedAt : null
        }
    });
};


export const create = async (data) => {
    const { name } = data
    return await prisma.kelas.create({
        data: {
            name
        }
    });
};

export const updateById = async (id, name) => {
    return await prisma.kelas.update({
        where: {
            id,
            deletedAt : null
        },
        data:{
            name : name,
        }
    });
};

export const deleteById = async (id) => {
    const now = new Date()
    const result = await prisma.kelas.updateMany({
        where: {
            id
        },
        data: {
            deletedAt : now
        }
    });

    if(result.count === 0) throw new Error("Kelas tidak ditemukan atau sudah dihapus")

    return result
};

