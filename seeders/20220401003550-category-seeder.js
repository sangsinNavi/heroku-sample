"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("categories", [
      {
        name: "NodeJs",
      },
      {
        name: "VueJS",
      },
      {
        name: "ReactJs",
      },
      {
        name: "ReacNative",
      },
      {
        name: "Laravel",
      },
      {
        name: "Flutter",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("categories", {}, null);
  },
};
