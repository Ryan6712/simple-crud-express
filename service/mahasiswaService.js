import prisma from "../config/prisma.js";

export const getAll = async () => {
    return await prisma.Mahasiswa.findMany();
}

export const getById = async (id) => {
    return await prisma.Mahasiswa.findUniquse({
        where : {
            id: id
        }
    });
};


export const create = async (res) => {
    const { name, nim, status } = res
    const statusReq = status.toLowerCase()
    return await prisma.Mahasiswa.create({
        data: {
            name : name,
            nim : nim,
            status : statusReq
        }
    });
};

export const updateById = async (id, name, status) => {
    return await prisma.Mahasiswa.update({
        where: {
            id : id
        },
        data:{
            name : name,
            status : status
        }
    });
};

export const deleteById = async (id) => {
    return await prisma.Mahasiswa.delete({
        where: {
            id : id
        },
    });
};

