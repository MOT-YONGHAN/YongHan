-- migrate:up
ALTER TABLE users MODIFY social_id VARCHAR(30) NULL

-- migrate:down

