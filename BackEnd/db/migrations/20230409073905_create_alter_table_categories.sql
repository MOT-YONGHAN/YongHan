-- migrate:up
ALTER TABLE categories MODIFY category VARCHAR(100) NOT NULL

-- migrate:down

