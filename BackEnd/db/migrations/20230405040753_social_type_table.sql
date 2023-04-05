-- migrate:up
CREATE TABLE social_type (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  social_type VARCHAR(20) NOT NULL
  );

-- migrate:down
DROP TABLE social_type;