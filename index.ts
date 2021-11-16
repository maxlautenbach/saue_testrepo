import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.presentation.create({
        data: {
            movieId: 1,
            date: "2020-03-21T16:45:01.246Z"
        }
    })
    await prisma.movie.create({
        data: {
            title: 'Test',
            description: 'Desc',
            fsk: 18,
            trailer: 'URL',
        }
    })

    const allMovies = await prisma.movie.findMany()
    const allPresentation = await prisma.presentation.findMany({
        include: {
            movie: true
        }
    })
    console.log(allMovies)
    console.log(allPresentation)
    // ... you will write your Prisma Client queries here
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })