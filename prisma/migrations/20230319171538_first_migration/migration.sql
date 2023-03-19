-- CreateTable
CREATE TABLE "MediaItem" (
    "mediaId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "posterPath" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" INTEGER NOT NULL DEFAULT 5000,
    "mediaTypeTypeId" TEXT,
    "genreGenreId" TEXT,
    "originOriginId" TEXT,
    CONSTRAINT "MediaItem_mediaTypeTypeId_fkey" FOREIGN KEY ("mediaTypeTypeId") REFERENCES "MediaType" ("typeId") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "MediaItem_genreGenreId_fkey" FOREIGN KEY ("genreGenreId") REFERENCES "Genre" ("genreId") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "MediaItem_originOriginId_fkey" FOREIGN KEY ("originOriginId") REFERENCES "Origin" ("originId") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MediaType" (
    "typeId" TEXT NOT NULL PRIMARY KEY,
    "mediaCategory" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Genre" (
    "genreId" TEXT NOT NULL PRIMARY KEY,
    "genre" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Origin" (
    "originId" TEXT NOT NULL PRIMARY KEY,
    "country" TEXT NOT NULL,
    "language" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MediaItem_mediaId_key" ON "MediaItem"("mediaId");

-- CreateIndex
CREATE UNIQUE INDEX "MediaType_typeId_key" ON "MediaType"("typeId");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_genreId_key" ON "Genre"("genreId");

-- CreateIndex
CREATE UNIQUE INDEX "Origin_originId_key" ON "Origin"("originId");
