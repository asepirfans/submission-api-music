const mapDBToModel = (result) => {
  const albumData = result.rows[0];
  const album = {
    id: albumData.id,
    name: albumData.name,
    year: parseInt(albumData.year, 10),
    songs: [],
  };

  if (albumData.song_id) {
    album.songs = result.rows.map((row) => ({
      id: row.id,
      title: row.title,
      performer: row.performer,
    }));
  }

  return album;
};

module.exports = { mapDBToModel };
