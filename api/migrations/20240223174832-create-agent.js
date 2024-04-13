import { DataTypes } from "sequelize";

export const up = async (queryInterface) => {
  await queryInterface.createTable("Agents", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["REGULAR", "ADMIN"],
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable("Agents");
};
