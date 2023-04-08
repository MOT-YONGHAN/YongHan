-- migrate:up
ALTER TABLE users MODIFY password VARCHAR(300) NULL

-- migrate:down

