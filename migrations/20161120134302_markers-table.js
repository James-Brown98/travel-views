
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('markers', function(table){
    table.increments('id')
    table.float('lat', 10, 6).notNullable()
    table.float('lng', 10, 6).notNullable()
    table.string('img-url')
    table.string('comment')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfNotExists('markers')
};


// CREATE TABLE `markers` (
//   `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
//   `name` VARCHAR( 60 ) NOT NULL ,
//   `address` VARCHAR( 80 ) NOT NULL ,
//   `lat` FLOAT( 10, 6 ) NOT NULL ,
//   `lng` FLOAT( 10, 6 ) NOT NULL ,
//   `type` VARCHAR( 30 ) NOT NULL
// ) ENGINE = MYISAM ;
