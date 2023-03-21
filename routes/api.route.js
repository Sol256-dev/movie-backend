const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/users", async (req, res, next) => {
  res.send("hello user");
});

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

router.post("/movies", async (req, res, next) => {
  try {
    const data = req.body;
    const movie = await prisma.mediaItem.create({
      data: data,
    });
    res.json(movie);
  } catch (error) {
    next(error);
  }
});

router.delete("/movies/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await prisma.mediaItem.delete({
      where: {
        mediaId: id,
      },
    });
    res.json(movie);
  } catch (error) {
    next(error);
  }
});

router.patch("/movies/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await prisma.mediaItem.update({
      where: { mediaId: id },
      data: req.body,
    });
    res.json(movie);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
