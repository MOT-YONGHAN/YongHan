-- migrate:up
ALTER TABLE users MODIFY name VARCHAR(10) NULL

-- migrate:down

