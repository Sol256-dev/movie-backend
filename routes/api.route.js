const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/movies", async (req, res, next) => {
  try {
    const movies = await prisma.mediaItem.findMany({
      include: { MediaType: true, Origin: true, Genre: true },
    });
    res.json(movies);
  } catch (error) {
    next(error);
  }
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await prisma.mediaItem.findUnique({
      where: { mediaId: id },
      include: { MediaType: true, Origin: true, Genre: true },
    });
    res.json(movie);
  } catch (error) {
    next(error);
  }
});

// router.post("/movies", async (req, res, next) => {
//   try {
//     const data = req.body;
//     const movie = await prisma.mediaItem.create({
//       data: data,
//     });
//     res.json(movie);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/movies/:id", async (req, res, next) => {
//   res.send({ message: "AWESOME!!" });
// });

// router.patch("/movies/:id", async (req, res, next) => {
//   res.send({ message: "Ok api is working 🚀" });
// });

module.exports = router;
