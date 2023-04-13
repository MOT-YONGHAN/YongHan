-- migrate:up
ALTER TABLE users ADD social_id VARCHAR(100) NULL

-- migrate:down

