-- migrate:up
ALTER TABLE users ADD social_id VARCHAR(30) NOT NULL

-- migrate:down

