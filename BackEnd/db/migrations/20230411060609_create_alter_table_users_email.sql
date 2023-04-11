-- migrate:up
ALTER TABLE users MODIFY email varchar(50) NOT NULL;


-- migrate:down

