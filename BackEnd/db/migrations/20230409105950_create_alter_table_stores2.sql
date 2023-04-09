-- migrate:up
ALTER TABLE stores MODIFY price varchar(1000) COLLATE utf8mb4_0900_ai_ci NULL;

-- migrate:down

