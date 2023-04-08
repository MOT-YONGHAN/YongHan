-- migrate:up
ALTER TABLE users MODIFY social_id VARCHAR(100) NULL

-- migrate:down

