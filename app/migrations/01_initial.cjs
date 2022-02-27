const up = async (pgm) => {
  pgm.createTable("users", {
    id: "id",
    firstname: { type: "varchar(50)", notNull: true },
    lastname: { type: "varchar(50)", notNull: true },
    email: { type: "varchar(200)", notNull: true, unique: true },
    hashed_password: { type: "varchar(400)", notNull: true },
    role: { type: "varchar(50)", notNull: true, default: "user" },
    salt: { type: "varchar(400)", notNull: true },
  });
};

exports.up = up;
