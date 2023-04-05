-- migrate:up
ALTER TABLE users ADD FOREIGN KEY (social_type_id) REFERENCES social_type (id) ON UPDATE CASCADE;
ALTER TABLE likes ADD FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE CASCADE;
ALTER TABLE likes ADD FOREIGN KEY (store_id) REFERENCES stores (id) ON UPDATE CASCADE;
ALTER TABLE stores ADD FOREIGN KEY (category_id) REFERENCES categories (id) ON UPDATE CASCADE;
ALTER TABLE reviews ADD FOREIGN KEY (store_id) REFERENCES stores (id) ON UPDATE CASCADE;
-- migrate:down

