exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'VARCHAR(50)',
      notNull: false,
    },
    year: {
      type: 'NUMERIC(10)',
      notNull: false,
    },
    performer: {
      type: 'VARCHAR(50)',
      notNull: false,
    },
    genre: {
      type: 'VARCHAR(50)',
      notNull: false,
    },
    duration: {
      type: 'NUMERIC(10)',
      notNull: false,
    },
    albumid: {
      type: 'VARCHAR(50)',
      references: 'albums(id)',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('songs');
};
