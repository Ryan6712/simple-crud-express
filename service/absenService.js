import prisma from "../config/prisma.js";

export const getAll = async () => {
    return await prisma.absen.findMany({
        where: {
            deletedAt : null
        },
        distinct : ["kelasId", "date"],
        select: {
            id : true,
            kelas : {
                select : {
                    name : true
                }
            },
            date: true
        }
    });
}

export const getDetail = async (kelasId, date) => {
    const parsedDate = new Date(date)
    parsedDate.setHours(0,0,0,0)
    
    const kelasNumId = Number(kelasId);

    return await prisma.absen.findMany({
        where : {
            date : parsedDate,
            kelasId : kelasNumId,
            deletedAt : null
        },
        select : {
            status :true,
            date: true,
            
            kelas : {
                select : {
                    name : true
                }
            },

            mahasiswa : {
                select : {
                    name : true,
                }
            }
        }
    });
};


export const getByUserId = async (mahasiswaId) => {
    return await prisma.absen.findMany({
        where : {
            mahasiswaId,
            deletedAt : null
        },
        select : {
            kelasId : true, 
            date: true
        }
    });
};


export const generateAbsensi = async (kelasId, date) => {
    const parsedDate = new Date(date)
    parsedDate.setHours(0,0,0,0)
    const kelasNumId = Number(kelasId)

    return await prisma.$transaction(async (tx) => {
        const existing = await tx.absen.count({
            where: {
                kelasId : kelasNumId,
                date : parsedDate
            }, 
        })

        if(existing > 0) throw new Error("absensi sudah ada")

        const mahasiswa = await tx.mahasiswa.findMany({
            where: {
                deletedAt : null
            },
            select: {
                id: true
            }
        });

        if(mahasiswa.length === 0) throw new Error("tidak ada mahasiswa");

        const dataAbsen = mahasiswa.map((mhs) => ({
            mahasiswaId: mhs.id,
            kelasId : kelasNumId,
            date : parsedDate,
        }))

        await tx.absen.createMany({
            data: dataAbsen,
            skipDuplicates: true
        })

        return {
            msg : "absen berhasil generate",
            total : dataAbsen.length
        }
    })
}


export const updateStatusAbsen = async (kelasId, date, data) => {
    const parsedDate = new Date(date)
    parsedDate.setHours(0,0,0,0)
    const kelasNumId = Number(kelasId)

    const result = await prisma.$transaction(
        data.map( item => 
            prisma.absen.update({
                where : {
                    mahasiswaId_kelasId_date : {
                        mahasiswaId : item.mahasiswaId,
                        kelasId : kelasNumId,
                        date : parsedDate
                    }
                },
                data : {
                    status : item.status
                }
        })
        )
    )
    return {
        msg : "data Updated",
        update_length : result
    }
};

export const deleteById = async (id) => {
    const now = new Date()
    const result = await prisma.absen.updateMany({
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

