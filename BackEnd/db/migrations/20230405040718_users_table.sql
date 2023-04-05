-- migrate:up
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  social_type_id INT NOT NULL,
  name VARCHAR(10) NOT NULL,
  nickname VARCHAR(10) UNIQUE NOT NULL,
  email VARCHAR(30) UNIQUE NOT NULL,
  password VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );

-- migrate:down
DROP TABLE users;
