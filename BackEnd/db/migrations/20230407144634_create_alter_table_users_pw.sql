-- migrate:up
ALTER TABLE users MODIFY password VARCHAR(300) NOT NULL

-- migrate:down

