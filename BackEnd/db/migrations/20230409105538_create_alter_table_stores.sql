-- migrate:up
ALTER TABLE stores MODIFY price DECIMAL(10,2) COLLATE utf8mb4_unicode_ci NOT NULL;


-- migrate:down

